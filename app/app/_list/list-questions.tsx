import { createClient as createClientS } from "@/utils/supabase/server";
import { Goal } from "@/schema";
import React from "react";
import ItemGoal from "@/app/app/_item/item-goal";
import ItemQuestion from "@/app/app/_item/item-question";

interface ListQuestionsProps {
  goalId: string;
}

export default async function ListQuestions(props: ListQuestionsProps) {
  const supabase = await createClientS();
  const { data: questions, error } = await supabase
    .from("questions")
    .select()
    .eq("goal_id", props.goalId)
    .returns<Goal[]>();

  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <div>
      <h2>Questions:</h2>
      <div>
        {questions?.map((question) => (
          <ItemQuestion questionId={question.id} key={question.id} />
        ))}
      </div>
    </div>
  );
}
