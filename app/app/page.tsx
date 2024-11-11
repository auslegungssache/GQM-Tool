import { createClient as createClientS } from "@/utils/supabase/server";
import React from "react";
import CreateProject from "@/app/app/_create/create-project";
import { Project } from "@/schema";
import ProjectItem from "./_item/item-project";
import { Sidebar } from "lucide-react";
import {
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar";

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
      </div>

      <CreateProject />
    </>
  );
}
