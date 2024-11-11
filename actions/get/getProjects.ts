"use server";

import { createClient as createClient } from "@/utils/supabase/server";
import { Project } from "@/schema";

export default async function getProjectsServer() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("projects")
    .select()
    .returns<Project[]>();

  return { data, error };
}
