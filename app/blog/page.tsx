import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";

export const metadata: Metadata = {
  title: "Tutorials",
  description: "PCB design tutorials for KiCad and Altium Designer.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl font-bold text-silk">Tutorials</h1>
      <p className="mt-2 text-muted">
        Hands-on PCB design tutorials — from your first schematic to
        fabrication-ready Gerbers.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
