import { createClient as createClientS } from "@/utils/supabase/server";
import React from "react";
import CreateProject from "@/app/app/create-project";
import { Project } from "@/schema";
import ProjectItem from "./project";

export default async function Notes() {
  const supabase = await createClientS();
  const { data: projects } = await supabase
    .from("projects")
    .select()
    .returns<Project[]>();

  return (
    <>
      <div>
        <h2>Projects:</h2>
        <div>
          {projects?.map((project) => (
            <ProjectItem projectId={project.id} key={project.id} />
          ))}
        </div>

        <pre>{JSON.stringify(projects, null, 2)}</pre>
      </div>

      <CreateProject />
    </>
  );
}
