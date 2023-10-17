import { supabase } from "@/supabase/config";
import { hydrateSelectedMonsters } from ".";
import { HydratedEncounter } from "@/types";

export default async function getEncounter(
  encounterId: string
): Promise<HydratedEncounter> {
  const { data, error } = await supabase
    .from("encounters")
    .select("*")
    .eq("id", encounterId);

  if (error) {
    console.error(error);
    return new Promise((_resolve, reject) => {
      reject(error);
    });
  }

  const encounter = data[0];

  const hydratedSelectedMonsters = await hydrateSelectedMonsters(
    encounter.monsters
  );

  return new Promise((resolve) => {
    resolve({
      ...encounter,
      monsters: hydratedSelectedMonsters,
    });
  });
}
