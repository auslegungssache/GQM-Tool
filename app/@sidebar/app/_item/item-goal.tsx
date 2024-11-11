import { Goal, Project } from "@/schema";
import { createClient as createClientS } from "@/utils/supabase/server";
import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";
import ListQuestions from "@/app/@sidebar/app/_list/list-questions";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import DeleteGoal from "@/app/@sidebar/app/_delete/delete-goal";
import { MoreHorizontal } from "lucide-react";
import Link from "next/link";
import getGoalServer from "@/actions/get/getGoal";

interface ItemGoalProps {
  goalId: string;
}

export default async function ItemGoal(props: ItemGoalProps) {
  const { data: goal } = await getGoalServer({ goalId: props.goalId });
  if (!goal) {
    throw new Error("Goal not found");
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton>
        <Link href={`/app/goal/${props.goalId}`}>
          {goal.title ?? "NO TITLE"}
        </Link>
      </SidebarMenuButton>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction>
            <MoreHorizontal />
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start">
          <DeleteGoal goalId={props.goalId} />
        </DropdownMenuContent>
      </DropdownMenu>

      <ListQuestions goalId={props.goalId} />
    </SidebarMenuItem>
  );
}
