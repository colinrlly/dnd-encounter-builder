import { supabase } from "@/supabase/config";
import { SelectedMonster } from "@/types";

export default async function saveEncounter(
  name: string,
  monsters: SelectedMonster[]
) {
  const encounter = {
    name,
    monsters: monsters.map((monster) => ({
      slug: monster.data.slug,
      count: monster.count,
    })),
  };

  const { error } = await supabase.from("encounters").insert(encounter);

  if (error) {
    console.error(error);
    return;
  }
}
