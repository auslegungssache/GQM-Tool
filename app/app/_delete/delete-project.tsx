"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createClient as createClientC } from "@/utils/supabase/client";

interface DeleteProjectProps {
  projectId: string;
}

export default function DeleteProject(props: DeleteProjectProps) {
  const router = useRouter();

  const supabase = createClientC();
  async function onClick() {
    await supabase.from("projects").delete().eq("id", props.projectId);

    router.refresh();
  }

  return <Button onClick={onClick}>Delete project</Button>;
}
