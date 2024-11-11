import React from "react";
import getGoalsServer from "@/actions/get/getGoals";
import ItemGoal from "@/app/@sidebar/app/_item/item-goal";
import { SidebarMenuSub } from "@/components/ui/sidebar";
import CreateGoal from "@/app/@sidebar/app/_create/create-goal";

interface ListGoalsProps {
  projectId: string;
}
export default async function ListGoals(props: ListGoalsProps) {
  const { data: goals } = await getGoalsServer({
    projectId: props.projectId,
  });

  return (
    <SidebarMenuSub>
      {goals?.map((goal) => <ItemGoal goalId={goal.id} key={goal.id} />)}

      <CreateGoal projectId={props.projectId} />
    </SidebarMenuSub>
  );
}
