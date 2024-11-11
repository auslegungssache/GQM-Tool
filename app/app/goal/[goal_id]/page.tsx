import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import getGoalServer from "@/actions/get/getGoal";
import getQuestionsServer from "@/actions/get/getQuestions";
import GoalTitle from "@/app/app/goal/[goal_id]/goal-title";

export default async function GoalPage({
  params,
}: {
  params: Promise<{ goal_id: string }>;
}) {
  const goalId = (await params).goal_id;

  const { data: goal } = await getGoalServer({ goalId });
  const { data: questions } = await getQuestionsServer({ goalId });
  if (!goal || !questions) throw new Error("Goal not found");

  return (
    <div className="p-12 space-y-8">
      <GoalTitle goalId={goalId} title={goal.title} />

      <Card>
        <CardHeader>
          <CardTitle>Questions:</CardTitle>
          <CardDescription>Manage questions</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              A list of all questions belonging to this goal.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map((question) => (
                <TableRow>
                  <TableCell className="font-medium">{question.id}</TableCell>
                  <TableCell>{question.title ?? "NO TITLE"}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="link">
                      <Link href={`/app/question/${question.id}`}>Visit</Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
