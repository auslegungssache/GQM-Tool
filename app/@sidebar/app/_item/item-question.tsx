import {
  SidebarMenuAction,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";
import DeleteQuestion from "@/app/@sidebar/app/_delete/delete-question";
import Link from "next/link";
import getQuestionServer from "@/actions/get/getQuestion";

interface ItemQuestionProps {
  questionId: string;
}

export default async function ItemQuestion(props: ItemQuestionProps) {
  const { data: question } = await getQuestionServer({
    questionId: props.questionId,
  });

  if (!question) {
    throw new Error("Question not found");
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
