import z from "zod";

export const ProjectId = z.string()
export type ProjectId = z.infer<typeof ProjectId>

export const GoalId = z.string()
export type GoalId = z.infer<typeof GoalId>

export const QuestionId = z.string()
export type QuestionId = z.infer<typeof QuestionId>