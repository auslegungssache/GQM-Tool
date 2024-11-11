import ProjectItem from "@/app/app/_item/item-project";
import React from "react";
import getProjectsServer from "@/actions/get/getProjects";

export default async function ListProjects() {
  const { data: projects } = await getProjectsServer();

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
