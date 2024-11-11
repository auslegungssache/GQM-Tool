import React from "react";
import ItemQuestion from "@/app/app/_item/item-question";
import getQuestionsServer from "@/actions/get/getQuestions";

interface ListQuestionsProps {
  goalId: string;
}

export default async function ListQuestions(props: ListQuestionsProps) {
  const { data: questions, error } = await getQuestionsServer({
    goalId: props.goalId,
  });

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
