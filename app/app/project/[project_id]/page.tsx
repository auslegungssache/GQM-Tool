import React from "react";
import getProjectServer from "@/actions/get/getProject";
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
import getGoalsServer from "@/actions/get/getGoals";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import ProjectTitle from "@/app/app/project/[project_id]/project-title";

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ project_id: string }>;
}) {
  const projectId = (await params).project_id;

  const { data: project } = await getProjectServer({ projectId });
  const { data: goals } = await getGoalsServer({ projectId });
  if (!project || !goals) throw new Error("Project not found");

  return (
    <div className="p-12 space-y-8">
      <ProjectTitle projectId={projectId} title={project.title} />

      <Card>
        <CardHeader>
          <CardTitle>Goals:</CardTitle>
          <CardDescription>Manage goals</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableCaption>
              A list of all goals belonging to this project.
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Title</TableHead>
                <TableHead className="text-right"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {goals.map((goal) => (
                <TableRow>
                  <TableCell className="font-medium">{goal.id}</TableCell>
                  <TableCell>{goal.title ?? "NO TITLE"}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="link">
                      <Link href={`/app/goal/${goal.id}`}>Visit</Link>
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
