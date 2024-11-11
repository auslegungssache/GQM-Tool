"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { PenIcon } from "lucide-react";
import { cn } from "@/utils/cn";
import updateProject from "@/actions/update/updateProject";
import { useRouter } from "next/navigation";

interface TitleProps {
  title?: string;
  projectId: string;
}
export default function ProjectTitle({
  title: defaultTitle,
  projectId,
}: TitleProps) {
  const [title, setTitle] = React.useState(defaultTitle ?? "");
  const router = useRouter();

  const dirty = title !== (defaultTitle ?? "");

  async function updateTitle() {
    await updateProject(projectId, { title });

    router.refresh();
  }

  return (
    <h2 className="text-3xl flex gap-4 items-center">
      <span>Title:</span>
      <input
        placeholder="Project title..."
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
