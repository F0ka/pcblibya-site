import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypeBidi from "@/lib/rehype-bidi";
import { getAllPosts, getPost } from "@/lib/content";
import { site } from "@/lib/site";
import ShareButtons from "@/components/ShareButtons";
import Tag from "@/components/Tag";
import { formatDate } from "@/components/PostCard";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <article
      className="mx-auto max-w-3xl"
      dir={post.dir}
      lang={post.dir === "rtl" ? "ar" : undefined}
    >
      <Link href="/blog" className="text-sm text-trace hover:underline">
        ← All tutorials
      </Link>
      <h1 className="mt-4 text-3xl font-bold text-silk sm:text-4xl">
        {post.title}
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-muted">
        <time>{formatDate(post.date)}</time>
        <span className="flex gap-2">
          {post.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </span>
      </div>
      <div className="prose prose-invert mt-8 max-w-none prose-a:text-trace prose-headings:text-silk prose-strong:text-silk prose-code:text-trace prose-pre:border prose-pre:border-trace-dim prose-pre:bg-panel">
        <MDXRemote
          source={post.body}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: post.dir === "rtl" ? [rehypeBidi] : [],
            },
          }}
        />
      </div>
      <div className="mt-10 border-t border-trace-dim pt-6">
        <ShareButtons url={`${site.url}/blog/${post.slug}`} title={post.title} />
      </div>
    </article>
  );
}
