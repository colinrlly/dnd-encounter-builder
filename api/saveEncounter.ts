import { supabase } from "@/supabase/config";

export default async function saveEncounter(name: string, monsters: Monster[]) {
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
