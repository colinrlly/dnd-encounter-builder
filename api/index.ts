import { supabase } from "@/supabase/config";

export async function saveEncounter(name: string, monsters: Monster[]) {
  const encounter = {
    name,
    monsters: monsters.map((m) => m.slug),
  };

  const { error } = await supabase.from("encounters").insert(encounter);

  if (error) {
    console.error(error);
    return;
  }
}

export async function getEncounters() {
  const { data, error } = await supabase.from("encounters").select("*");

  if (error) {
    console.error(error);
    return;
  }

  return data;
}

export async function getEncounter(encounterId: string) {
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
