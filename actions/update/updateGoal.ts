"use server";

import { createClient } from "@/utils/supabase/server";

export default async function updateGoalServer(
  goalId: string,
  updateGoal: { title: string },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("goals")
    .update({ title: updateGoal.title })
    .eq("id", goalId);

  if (error) throw error;
}
