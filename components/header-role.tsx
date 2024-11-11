import getRoleServer from "@/actions/get/getRole";

interface HeaderRoleProps {
  userId: string;
}
export default async function HeaderRole({ userId }: HeaderRoleProps) {
  const { data } = await getRoleServer({ userId });

  return <div className="font-light">{data?.title ?? "UNSPECIFIED ROLE"}</div>;
}
