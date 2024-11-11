import { createClient } from "@/utils/supabase/client";

export default async function deleteQuestion({
  questionId,
}: {
  questionId: string;
}) {
  const supabase = createClient();
  await supabase.from("questions").delete().eq("id", questionId);
}
