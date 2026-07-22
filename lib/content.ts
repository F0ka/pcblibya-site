import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface DownloadEntry {
  label: string;
  file: string;
}

export interface ProjectFrontmatter {
  title: string;
  date: string;
  summary: string;
  cover: string;
  tags: string[];
  status: string;
  downloads?: DownloadEntry[];
}

export interface PostFrontmatter {
  title: string;
  date: string;
  summary: string;
  tags: string[];
}

export interface Project extends ProjectFrontmatter {
  slug: string;
  body: string;
}

export interface Post extends PostFrontmatter {
  slug: string;
  body: string;
}

function readMdxFiles<T extends object>(
  subdir: string
): Array<T & { slug: string; body: string }> {
  const dir = path.join(contentDir, subdir);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(dir, file), "utf8");
      const { data, content } = matter(raw);
      return { ...(data as T), slug, body: content };
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
