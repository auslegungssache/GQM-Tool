"use server";

import { createClient } from "@/utils/supabase/server";

export default async function updateQuestionServer(
  questionId: string,
  updateQuestion: { title: string },
) {
  const supabase = await createClient();

  const { error } = await supabase
    .from("questions")
    .update({ title: updateQuestion.title })
    .eq("id", questionId);

  if (error) throw error;
}
