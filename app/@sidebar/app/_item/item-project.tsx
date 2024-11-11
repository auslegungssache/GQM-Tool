import { Project } from "@/schema";
import { createClient as createClientS } from "@/utils/supabase/server";
import CreateGoal from "@/app/app/_create/create-goal";
import DeleteProject from "@/app/@sidebar/app/_delete/delete-project";
import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";
import ListGoals from "@/app/@sidebar/app/_list/list-goals";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface ProjectProps {
  projectId: string;
}

export default async function ItemProject(props: ProjectProps) {
  const supabase = await createClientS();
  const { data: project, error } = await supabase
    .from("projects")
    .select()
    .eq("id", props.projectId)
    .returns<Project | null>();

  if (!project) {
    throw new Error("Project not found");
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton>{project.title ?? "NO TITLE"}</SidebarMenuButton>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction>
            <MoreHorizontal />
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start">
          <DeleteProject projectId={props.projectId} />
        </DropdownMenuContent>
      </DropdownMenu>

      <ListGoals projectId={props.projectId} />
    </SidebarMenuItem>
  );
}
