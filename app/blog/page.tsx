import type { Metadata } from "next";
import { getAllPosts } from "@/lib/content";
import PostCard from "@/components/PostCard";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "Tutorials",
  description: "PCB design tutorials for KiCad and Altium Designer.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <SectionHeader index="01" label="Tutorials" />
      <p className="-mt-4 mb-8 max-w-2xl text-sm leading-relaxed text-muted">
        Hands-on PCB design tutorials in Arabic and English — from your first
        schematic to fabrication-ready Gerbers.
      </p>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
