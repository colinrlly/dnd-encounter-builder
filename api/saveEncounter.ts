import { supabase } from "@/supabase/config";
import { SelectedMonster } from "@/types";
import { toast } from "react-toastify";

export default async function saveEncounter(
  name: string,
  monsters: SelectedMonster[],
  onSuccess: () => void,
  id?: string
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

  if (id) {
    const { error } = await supabase
      .from("encounters")
      .update(encounter)
      .eq("id", id)
      .select();

    if (error) {
      console.error(error);
      return;
    }
  } else {
    const { error } = await supabase
      .from("encounters")
      .insert(encounter)
      .select();

    if (error) {
      console.error(error);
      return;
    }
  }

  onSuccess();
}
