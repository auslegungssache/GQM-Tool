"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { createClient as createClientC } from "@/utils/supabase/client";

interface DeleteQuestionProps {
  questionId: string;
}

export default function DeleteQuestion(props: DeleteQuestionProps) {
  const router = useRouter();

  const supabase = createClientC();
  async function onClick() {
    await supabase.from("questions").delete()
        .eq("id", props.questionId);

    router.refresh();
  }

  return <Button onClick={onClick}>Delete Question</Button>;
}
