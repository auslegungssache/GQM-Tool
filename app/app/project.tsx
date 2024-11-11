import { Project } from "@/schema";
import {createClient as createClientS} from "@/utils/supabase/server";

interface ProjectProps {
    projectId: string;
}

export default async function ProjectView(props: ProjectProps) {
    const supabase = await createClientS();
    const { data: project, error } = await supabase.from("projects")
        .select()
        .eq("id", props.projectId)
        .returns<Project | null>();

    if (error) return <div>
        {JSON.stringify(error, null, 2)}
    </div>

    return <div>{props.projectId}
        <pre>
            {JSON.stringify(project, null, 2)}
        </pre>
    </div>
}