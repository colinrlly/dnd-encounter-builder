import { supabase } from "@/supabase/config";

export default async function getEncounter(encounterId: string) {
  const { data, error } = await supabase
    .from("encounters")
    .select("*")
    .eq("id", encounterId);

  if (error) {
    console.error(error);
    return;
  }

  return data[0];
}
