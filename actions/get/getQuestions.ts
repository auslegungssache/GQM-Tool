import { createClient as createClient } from "@/utils/supabase/server";
import { Goal } from "@/schema";

export default async function getQuestionsServer({
  goalId,
}: {
  goalId: string;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("questions")
    .select()
    .eq("goal_id", goalId)
    .returns<Goal[]>();

  return { data, error };
}
