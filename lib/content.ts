import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface DownloadEntry {
  label: string;
  file: string;
}

export type TextDirection = "rtl" | "ltr";

export interface ProjectFrontmatter {
  title: string;
  date: string;
  summary: string;
  cover: string;
  tags: string[];
  status: string;
  downloads?: DownloadEntry[];
  dir?: "auto" | TextDirection;
}

export interface PostFrontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
  dir?: "auto" | TextDirection;
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  body: string;
  dir: TextDirection;
}

export interface Post extends PostFrontmatter {
  slug: string;
  body: string;
  dir: TextDirection;
}

// Arabic (U+0600–U+06FF) and Arabic Supplement (U+0750–U+077F)
const arabicPattern = /[؀-ۿݐ-ݿ]/;
function resolveDir(
  frontmatterDir: "auto" | TextDirection | undefined,
  ...texts: string[]
): TextDirection {
  if (frontmatterDir === "rtl" || frontmatterDir === "ltr") {
    return frontmatterDir;
  }
  // missing or "auto" — detect from content
  return texts.some((text) => arabicPattern.test(text)) ? "rtl" : "ltr";
}

function readMdxFiles<T extends { title: string; summary: string; date: string; dir?: "auto" | TextDirection }>(
  subdir: string
): Array<T & { slug: string; body: string; dir: TextDirection }> {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      const frontmatter = data as T;
      // gray-matter parses unquoted YAML dates (date: 2026-07-25, as written by
      // the CMS) into JS Date objects — normalize to a plain string so React
      // can render it and sorting stays consistent.
      const rawDate = (frontmatter as unknown as { date?: unknown }).date;
      const date =
        rawDate instanceof Date
          ? rawDate.toISOString().slice(0, 10)
          : String(rawDate ?? "");
      return {
        ...frontmatter,
        date,
        slug,
        body: content,
        dir: resolveDir(frontmatter.dir, frontmatter.title, frontmatter.summary, content),
      };
    });
}

function byDateDesc(a: { date: string }, b: { date: string }) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}

export function getAllProjects(): Project[] {
  return readMdxFiles<ProjectFrontmatter>("projects").sort(byDateDesc);
}

export function getProject(slug: string): Project | undefined {
  return getAllProjects().find((project) => project.slug === slug);
}

export function getAllPosts(): Post[] {
  return readMdxFiles<PostFrontmatter>("blog").sort(byDateDesc);
}

export function getPost(slug: string): Post | undefined {
  return getAllPosts().find((post) => post.slug === slug);
}
