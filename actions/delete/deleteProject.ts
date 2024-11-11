import { createClient } from "@/utils/supabase/client";

export default async function deleteProject({
  projectId,
}: {
  projectId: string;
}) {
  const supabase = createClient();
  await supabase.from("projects").delete().eq("id", projectId);
}
