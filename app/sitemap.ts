import type { MetadataRoute } from "next";
import { getAllPosts, getAllProjects } from "@/lib/content";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/projects", "/blog", "/library", "/downloads", "/about"];

  const routes: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
  }));

  for (const project of getAllProjects()) {
    routes.push({
      url: `${site.url}/projects/${project.slug}`,
      lastModified: new Date(project.date),
    });
  }

  for (const post of getAllPosts()) {
    routes.push({
      url: `${site.url}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    });
  }

  return routes;
}
