import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getQuestionServer from "@/actions/get/getQuestion";
import QuestionTitle from "@/app/app/question/[question_id]/question-title";

export default async function QuestionPage({
  params,
}: {
  params: Promise<{ question_id: string }>;
}) {
  const questionId = (await params).question_id;

  const { data: question } = await getQuestionServer({ questionId });
  if (!question) throw new Error("Goal not found");

  return (
    <div className="p-12 space-y-8">
      <QuestionTitle questionId={questionId} title={question.title} />

      <Card>
        <CardHeader>
          <CardTitle>Question</CardTitle>
        </CardHeader>
        <CardContent></CardContent>
      </Card>
    </div>
  );
}
