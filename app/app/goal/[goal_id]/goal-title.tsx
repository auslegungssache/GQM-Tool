"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";
import updateGoalServer from "@/actions/update/updateGoal";

interface TitleProps {
  title?: string;
  goalId: string;
}
export default function GoalTitle({ title: defaultTitle, goalId }: TitleProps) {
  const [title, setTitle] = React.useState(defaultTitle ?? "");
  const router = useRouter();

  const dirty = title !== (defaultTitle ?? "");

  async function updateTitle() {
    await updateGoalServer(goalId, { title });

    router.refresh();
  }

  return (
    <h2 className="text-3xl flex gap-4 items-center">
      <span>Title:</span>
      <input
        placeholder="Goal title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className={cn(
          "p-2 rounded-xl bg-inherit focus:bg-input hover:border-gray-500 border-transparent border",
          dirty && "italic",
        )}
      />

      {dirty && (
        <Button
          variant="ghost"
          asChild
          className="text-2xl"
          onClick={updateTitle}
        >
          <PenIcon height={128} width={64} />
        </Button>
      )}
    </h2>
  );
}
