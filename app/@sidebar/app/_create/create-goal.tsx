"use client";

import { useRouter } from "next/navigation";
import { createClient as createClientC } from "@/utils/supabase/client";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import React from "react";

interface CreateGoalProps {
  projectId: string;
}

export default function CreateGoal(props: CreateGoalProps) {
  const router = useRouter();

  const supabase = createClientC();
  async function onClick() {
    await supabase.from("goals").upsert({
      title: "... Goal",
      project_id: props.projectId,
    });

    router.refresh();
  }

  return (
    <SidebarMenuItem onClick={onClick}>
      <SidebarMenuButton>New Goal</SidebarMenuButton>
    </SidebarMenuItem>
  );
}
