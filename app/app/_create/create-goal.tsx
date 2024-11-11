"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createClient as createClientC } from "@/utils/supabase/client";

interface CreateGoalProps {
  projectId: string;
}

export default function CreateGoal(props: CreateGoalProps) {
  const router = useRouter();

  const supabase = createClientC();
  async function onClick() {
    await supabase.from("goals").upsert({
      title: "test",
      project_id: props.projectId,
    });

    router.refresh();
  }

  return <Button onClick={onClick}>Create Goal</Button>;
}
