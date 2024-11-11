import React from "react";
import ItemGoal from "@/app/app/_item/item-goal";
import getGoalsServer from "@/actions/get/getGoals";

interface ListGoalsProps {
  projectId: string;
}

export default async function ListGoals(props: ListGoalsProps) {
  const { data: goals, error } = await getGoalsServer({
    projectId: props.projectId,
  });

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
