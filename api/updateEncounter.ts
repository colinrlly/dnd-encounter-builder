import { supabase } from "@/supabase/config";
import { SelectedMonster } from "@/types";
import { toast } from "react-toastify";

export default async function updateEncounter(
  id: string,
  name: string,
  monsters: SelectedMonster[],
  onSuccess: () => void
) {
  if (name === "") {
    toast.error("Please enter a name for the encounter");
    return;
  }

  const encounter = {
    name,
    monsters: monsters.map((monster) => ({
      slug: monster.data.slug,
      count: monster.count,
    })),
  };

  const { error } = await supabase
    .from("encounters")
    .update(encounter)
    .eq("id", id);

  if (error) {
    console.error(error);
    return;
  }

  onSuccess();
}
