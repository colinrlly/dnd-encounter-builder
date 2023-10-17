import { supabase } from "@/supabase/config";

export default async function getEncounters() {
  const { data, error } = await supabase
    .from("encounters")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return;
  }

  return data;
}
