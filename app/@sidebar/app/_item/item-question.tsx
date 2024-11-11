import { createClient as createClientS } from "@/utils/supabase/server";
import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
} from "@/components/ui/sidebar";
import React from "react";
import { Question } from "@/schema";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import DeleteGoal from "@/app/@sidebar/app/_delete/delete-goal";
import DeleteQuestion from "@/app/@sidebar/app/_delete/delete-question";
import Link from "next/link";

interface ItemQuestionProps {
  questionId: string;
}

export default async function ItemQuestion(props: ItemQuestionProps) {
  const supabase = await createClientS();
  const { data: question, error } = await supabase
    .from("questions")
    .select()
    .eq("id", props.questionId)
    .returns<Question | null>();

  if (!question) {
    throw new Error("Goal not found");
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton>
        <Link href={`/app/question/${props.questionId}`}>
          {question.title ?? "NO TITLE"}
        </Link>
      </SidebarMenuButton>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <SidebarMenuAction>
            <MoreHorizontal />
          </SidebarMenuAction>
        </DropdownMenuTrigger>
        <DropdownMenuContent side="right" align="start">
          <DeleteQuestion questionId={props.questionId} />
        </DropdownMenuContent>
      </DropdownMenu>
    </SidebarMenuItem>
  );
}
