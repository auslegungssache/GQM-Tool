import { createClient } from "@/utils/supabase/client";

export default async function deleteGoal({
  goalId,
}: {
  goalId: string;
}) {
  const supabase = createClient();
  await supabase.from("goals").delete().eq("id", goalId);
}
