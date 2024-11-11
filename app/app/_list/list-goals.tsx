import { createClient as createClientS } from "@/utils/supabase/server";
import { Goal } from "@/schema";
import React from "react";
import ItemGoal from "@/app/app/_item/item-goal";

interface ListGoalsProps {
  projectId: string;
}

export default async function ListGoals(props: ListGoalsProps) {
  const supabase = await createClientS();
  const { data: goals, error } = await supabase
    .from("goals")
    .select()
    .eq("project_id", props.projectId)
    .returns<Goal[]>();

  if (error) return <div>{JSON.stringify(error, null, 2)}</div>;

  return (
    <div>
      <h2>Goals:</h2>
      <div>
        {goals?.map((goal) => <ItemGoal goalId={goal.id} key={goal.id} />)}
      </div>
    </div>
  );
}
