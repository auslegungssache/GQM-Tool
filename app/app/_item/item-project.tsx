import { Project } from "@/schema";
import { createClient as createClientS } from "@/utils/supabase/server";
import CreateGoal from "@/app/app/_create/create-goal";
import ListGoals from "@/app/app/_list/list-goals";
import DeleteProject from "@/app/app/_delete/delete-project";

interface ProjectProps {
  projectId: string;
}

export default async function ItemProject(props: ProjectProps) {
  const supabase = await createClientS();
  const { data: project, error } = await supabase
    .from("projects")
    .select()
    .eq("id", props.projectId)
    .returns<Project | null>();

  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;
  if (!project) {
    return <div>Doesn't exist</div>;
  }

  return (
    <div>
      <details>
        <summary>
          Project: {project.title ?? "NO_TITLE"} ({props.projectId})
        </summary>

        <CreateGoal projectId={props.projectId} />
        <DeleteProject projectId={props.projectId} />
        <ListGoals projectId={props.projectId} />
      </details>
    </div>
  );
}
