import { Project } from "@/schema";
import { createClient as createClientS } from "@/utils/supabase/server";
import DeleteQuestion from "@/app/app/_delete/delete-question";

interface ItemQuestionProps {
  questionId: string;
}

export default async function ItemQuestion(props: ItemQuestionProps) {
  const supabase = await createClientS();
  const { data: question, error } = await supabase
    .from("questions")
    .select()
    .eq("id", props.questionId)
    .returns<Project | null>();

  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  if (!question) {
    return <div>Doesn't exist</div>;
  }

  return (
    <div>
      <details>
        <summary>
          Question: {question.title ?? "NO_TITLE"} ({props.questionId})
        </summary>

        <DeleteQuestion questionId={props.questionId} />
      </details>
    </div>
  );
}
