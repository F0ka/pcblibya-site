import type { Metadata } from "next";
import { getAllProjects } from "@/lib/content";
import ProjectCard from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projects",
  description: "PCB design portfolio — boards designed in Altium Designer and KiCad.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <div>
      <h1 className="text-3xl font-bold text-silk">Projects</h1>
      <p className="mt-2 text-muted">
        A selection of boards I have designed, from prototype to production.
      </p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
