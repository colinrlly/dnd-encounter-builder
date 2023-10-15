import { supabase } from "@/supabase/config";

export default async function getEncounters() {
  const { data, error } = await supabase.from("encounters").select("*");

  if (error) {
    console.error(error);
    return;
  }

  return data;
}
