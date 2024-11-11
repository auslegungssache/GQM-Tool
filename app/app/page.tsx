import React from "react";
import getProjectsServer from "@/actions/get/getProjects";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function AppPage() {
  const { data: projects } = await getProjectsServer();
  if (!projects) throw new Error("No projects found");

  return (
    <div className="h-full flex justify-center items-center flex-col gap-8">
      <h1 className="text-2xl">Please select a project</h1>

      <div>
        <ol className="list-decimal text-xl flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.id}>
              <Link href={`/app/project/${project.id}`}>{project.title}</Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
