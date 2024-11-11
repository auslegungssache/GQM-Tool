"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createClient as createClientC } from "@/utils/supabase/client";

interface CreateQuestionProps {
  goalId: string;
}

export default function CreateQuestion(props: CreateQuestionProps) {
  const router = useRouter();

  const supabase = createClientC();
  async function onClick() {
    await supabase.from("questions").upsert({
      title: "test",
      goal_id: props.goalId,
    });

    router.refresh();
  }

  return <Button onClick={onClick}>Create Question</Button>;
}
