import { createClient as createClient } from "@/utils/supabase/server";
import { Goal } from "@/schema";

export default async function getGoalsServer({
  projectId,
}: {
  projectId: string;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("goals")
    .select()
    .eq("project_id", projectId)
    .returns<Goal[]>();

  return { data, error };
}
