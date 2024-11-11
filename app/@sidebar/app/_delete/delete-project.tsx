"use client";

import deleteProject from "@/actions/delete/deleteProject";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React from "react";

interface DeleteProjectProps {
  projectId: string;
}
export default function DeleteProject(props: DeleteProjectProps) {
  const router = useRouter();

  async function onDeleteProject() {
    await deleteProject({ projectId: props.projectId });

    router.refresh();
  }

  return (
    <DropdownMenuItem onClick={onDeleteProject}>
      <span>Delete Project</span>
    </DropdownMenuItem>
  );
}
