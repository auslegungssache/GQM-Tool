import React from "react";
import { SidebarMenuSub } from "@/components/ui/sidebar";
import getQuestionsServer from "@/actions/get/getQuestions";
import ItemQuestion from "@/app/@sidebar/app/_item/item-question";
import CreateQuestion from "@/app/@sidebar/app/_create/create-question";

interface ListQuestionsProps {
  goalId: string;
}
export default async function ListQuestions(props: ListQuestionsProps) {
  const { data: questions } = await getQuestionsServer({
    goalId: props.goalId,
  });

  return (
    <SidebarMenuSub>
      {questions?.map((question) => (
        <ItemQuestion questionId={question.id} key={question.id} />
      ))}

      <CreateQuestion goalId={props.goalId} />
    </SidebarMenuSub>
  );
}
