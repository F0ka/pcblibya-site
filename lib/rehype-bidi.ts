import { visitParents } from "unist-util-visit-parents";
import type { Element, Root, Text } from "hast";

// Runs of Latin-script text: letters/digits with internal . _ / - + #
// (e.g. "KiCad", "ESP32-S3", "GPIO", "2.0", "kicad_sym").
// Runs shorter than 2 characters are ignored to avoid noise.
const latinRun = /[A-Za-z0-9][A-Za-z0-9._/+#-]+/g;

/**
 * Rehype plugin: wraps runs of Latin-script text in <bdi dir="ltr"> so
 * inline English inside Arabic (RTL) articles isolates correctly and
 * punctuation doesn't jump around. Only apply to RTL content.
 * Text inside pre/code is never touched (code stays fully LTR already).
 */
export default function rehypeBidi() {
  return (tree: Root) => {
    visitParents(tree, "text", (node: Text, ancestors) => {
      const inCode = ancestors.some(
        (ancestor) =>
          ancestor.type === "element" &&
          (ancestor.tagName === "pre" ||
            ancestor.tagName === "code" ||
            // skip text we already isolated (avoids re-wrapping after splice)
            ancestor.tagName === "bdi")
      );
      if (inCode) return;

      const parent = ancestors[ancestors.length - 1];
      if (!parent || !("children" in parent)) return;

      const value = node.value;
      latinRun.lastIndex = 0;
      if (!latinRun.test(value)) return;
      latinRun.lastIndex = 0; // test() advances lastIndex; matchAll resumes from it

      const replacements: Array<Element | Text> = [];
      let last = 0;
      for (const match of value.matchAll(latinRun)) {
        const start = match.index;
        if (start > last) {
          replacements.push({ type: "text", value: value.slice(last, start) });
        }
        replacements.push({
          type: "element",
          tagName: "bdi",
          properties: { dir: "ltr" },
          children: [{ type: "text", value: match[0] }],
        });
        last = start + match[0].length;
      }
      if (last < value.length) {
        replacements.push({ type: "text", value: value.slice(last) });
      }

      const siblings = parent.children as Array<Element | Text>;
      const index = siblings.indexOf(node);
      if (index !== -1) siblings.splice(index, 1, ...replacements);
    });
  };
}
