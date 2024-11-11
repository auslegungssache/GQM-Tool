import React from "react";
import getProjectsServer from "@/actions/get/getProjects";
import ItemProject from "@/app/@sidebar/app/_item/item-project";
import CreateProject from "@/app/@sidebar/app/_create/create-project";

export default async function ListProjects() {
  const { data: projects } = await getProjectsServer();

  return (
    <>
      {projects?.map((project) => (
        <ItemProject projectId={project.id} key={project.id} />
      ))}

      <CreateProject />
    </>
  );
}
