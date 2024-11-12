import { createClient } from "@/utils/supabase/server";
import { Goal, Project } from "@/schema";

export default async function getProjectServer({
  projectId,
}: {
  projectId: string;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select()
    .eq("id", projectId)
    .single<Project>();

  return { data, error };
}
