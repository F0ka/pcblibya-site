import Link from "next/link";
import Tag from "@/components/Tag";
import type { Post } from "@/lib/content";

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function PostCard({ post }: { post: Post }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="panel-glow group relative flex flex-col gap-3 rounded-sm border border-trace-dim bg-panel p-5"
    >
      {/* fiducial */}
      <span aria-hidden className="fiducial end-2 top-2" />
      <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted">
        <time>{post.date}</time>
        <span className="h-px flex-1 bg-trace-dim" aria-hidden />
        {post.dir === "rtl" && <span className="text-copper">AR</span>}
      </div>
      <h3 className="font-display text-lg font-bold text-silk transition-colors group-hover:text-trace">
        {post.title}
      </h3>
      <p className="flex-1 text-sm leading-relaxed text-muted">
        {post.summary}
      </p>
      <div className="flex flex-wrap gap-2 border-t border-trace-dim pt-3">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Link>
  );
}
