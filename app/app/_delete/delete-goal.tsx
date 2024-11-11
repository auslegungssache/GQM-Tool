"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createClient as createClientC } from "@/utils/supabase/client";

interface DeleteGoalProps {
  goalId: string;
}

export default function DeleteGoal(props: DeleteGoalProps) {
  const router = useRouter();

  const supabase = createClientC();
  async function onClick() {
    await supabase.from("goals").delete().eq("id", props.goalId);

    router.refresh();
  }

  return <Button onClick={onClick}>Delete goal</Button>;
}
