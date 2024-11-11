"use client";

import { useRouter } from "next/navigation";
import { createClient as createClientC } from "@/utils/supabase/client";
import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar";
import React from "react";

interface CreateQuestionProps {
  goalId: string;
}

export default function CreateQuestion(props: CreateQuestionProps) {
  const router = useRouter();

  const supabase = createClientC();
  async function onClick() {
    await supabase.from("questions").upsert({
      title: "test",
      goal_id: props.goalId,
    });

    router.refresh();
  }

  return (
    <SidebarMenuItem onClick={onClick}>
      <SidebarMenuButton>New Question</SidebarMenuButton>
    </SidebarMenuItem>
  );
}
