"use client";

import deleteGoal from "@/actions/delete/deleteGoal";
import { useRouter } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import React from "react";

interface DeleteGoalProps {
  goalId: string;
}
export default function DeleteGoal(props: DeleteGoalProps) {
  const router = useRouter();

  async function onDeleteGoal() {
    await deleteGoal({ goalId: props.goalId });

    router.push("/app");
  }

  return (
    <DropdownMenuItem onClick={onDeleteGoal}>
      <span>Delete goal</span>
    </DropdownMenuItem>
  );
}
