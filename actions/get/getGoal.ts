import { createClient } from "@/utils/supabase/server";
import { Goal, Project } from "@/schema";

export default async function getGoalServer({ goalId }: { goalId: string }) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("goals")
    .select()
    .eq("id", goalId)
    .single<Goal>();

  return { data, error };
}
