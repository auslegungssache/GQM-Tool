import { createClient } from "@/utils/supabase/server";

export default async function getRoleServer({ userId }: { userId: string }) {
  const supabase = await createClient();

  const { data: userRole } = await supabase
    .from("user-roles")
    .select()
    .eq("user", userId)
    .single<{ user: string; role: string }>();

  if (!userRole?.role)
    throw new Error(
      `no role found for user ${userId}, ${JSON.stringify(userRole)}`,
    );

  const { data, error } = await supabase
    .from("roles")
    .select()
    .eq("id", userRole.role)
    .single<{ id: string; title: string }>();

  return { data, error };
}
