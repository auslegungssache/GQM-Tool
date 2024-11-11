import { Project } from "@/schema";
import { createClient as createClientS } from "@/utils/supabase/server";
import ListQuestions from "@/app/app/_list/list-questions";
import CreateQuestion from "@/app/app/_create/create-question";
import DeleteGoal from "@/app/app/_delete/delete-goal";

interface ProjectProps {
  goalId: string;
}

export default async function ItemGoal(props: ProjectProps) {
  const supabase = await createClientS();
  const { data: goal, error } = await supabase
    .from("goals")
    .select()
    .eq("id", props.goalId)
    .returns<Project | null>();

  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  if (!goal) {
    return <div>Doesn't exist</div>;
  }

  return (
    <div>
      <details>
        <summary>
          Goal: {goal.title ?? "NO_TITLE"} ({props.goalId})
        </summary>

        <CreateQuestion goalId={props.goalId} />
        <DeleteGoal goalId={props.goalId} />

        <ListQuestions goalId={props.goalId} />
      </details>
    </div>
  );
}
