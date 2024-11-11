import { createClient } from "@/utils/supabase/server";
import { Goal, Project, Question } from "@/schema";

export default async function getQuestionServer({
  questionId,
}: {
  questionId: string;
}) {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("questions")
    .select()
    .eq("id", questionId)
    .single<Question>();

  return { data, error };
}
