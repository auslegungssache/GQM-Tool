import z from "zod";
import { GoalId, ProjectId } from "@/schema/ids";

export const GoalSchema = z.object({
  id: GoalId,
  created_at: z.string(),

  project_id: ProjectId,

  title: z.string(),
});

export type Goal = z.infer<typeof GoalSchema>;
