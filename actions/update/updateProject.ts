"use server";

import { createClient } from "@/utils/supabase/server";

export default async function updateProject(
  projectId: string,
  updateProject: { title: string },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("projects")
    .update({ title: updateProject.title })
    .eq("id", projectId);

  if (error) throw error;
}
