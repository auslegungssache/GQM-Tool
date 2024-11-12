import z from "zod";
import { GoalId, QuestionId } from "@/schema/ids";

export const QuestionSchema = z.object({
  id: QuestionId,
  created_at: z.string(),

  goal_id: GoalId,

  title: z.string(),

  metric: z.string(),
  answer: z.string()
});

export type Question = z.infer<typeof QuestionSchema>;
