import { createClient as createClientS } from "@/utils/supabase/server";
import { Project } from "@/schema";
import ProjectItem from "@/app/app/_item/item-project";
import React from "react";

export default async function ListProjects() {
  const supabase = await createClientS();
  const { data: projects } = await supabase
    .from("projects")
    .select()
    .returns<Project[]>();

  return (
    <div>
      <h2>Projects:</h2>
      <div>
        {projects?.map((project) => (
          <ProjectItem projectId={project.id} key={project.id} />
        ))}
      </div>

      <br />
      <pre>{JSON.stringify(projects, null, 2)}</pre>
    </div>
  );
}
