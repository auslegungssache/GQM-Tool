import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import getQuestionServer from "@/actions/get/getQuestion";
import QuestionTitle from "@/app/app/question/[question_id]/question-title";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <CardContent>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="metric" className="text-right">
                Metric
              </Label>
              <Input
                id="metric"
                placeholder="Metric..."
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="answer" className="text-right">
                Answer
              </Label>
              <Input
                id="answer"
                placeholder="Answer..."
                className="col-span-3"
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
