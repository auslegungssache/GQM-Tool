"use client";

import deleteQuestion from "@/actions/delete/deleteQuestion";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React from "react";

interface DeleteQuestionProps {
  questionId: string;
}
export default function DeleteQuestion(props: DeleteQuestionProps) {
  const router = useRouter();

  async function onDeleteQuestion() {
    await deleteQuestion({ questionId: props.questionId });

    router.refresh();
  }

  return (
    <DropdownMenuItem onClick={onDeleteQuestion}>
      <span>Delete question</span>
    </DropdownMenuItem>
  );
}
