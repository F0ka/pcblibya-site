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
      className="group flex flex-col gap-2 rounded-lg border border-trace-dim bg-panel p-5 transition-colors hover:border-trace"
    >
      <time className="text-xs text-muted">{formatDate(post.date)}</time>
      <h3 className="font-semibold text-silk group-hover:text-trace transition-colors">
        {post.title}
      </h3>
      <p className="flex-1 text-sm text-muted">{post.summary}</p>
      <div className="flex flex-wrap gap-2 pt-1">
        {post.tags.map((tag) => (
          <Tag key={tag} label={tag} />
        ))}
      </div>
    </Link>
  );
}
