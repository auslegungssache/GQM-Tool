"use client";

import { createClient as createClientC } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import React from "react";

export default function CreateProject() {
  const router = useRouter();

  const supabase = createClientC();
  async function createProject() {
    await supabase.from("projects").upsert({
      title: "... Project",
    });

    router.refresh();
  }

  return (
    <SidebarMenuItem onClick={createProject}>
      <SidebarMenuButton>New Project</SidebarMenuButton>
    </SidebarMenuItem>
  );
}
