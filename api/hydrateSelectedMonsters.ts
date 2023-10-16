import { UnhydratedSelectedMonster, SelectedMonster } from "@/types";
import { Monster } from "@/types/open5e";
import { OPEN5E_API_URL } from "@/constants";

export default async function hydrateSelectedMonsters(
  selectedMonsters: UnhydratedSelectedMonster[]
): Promise<SelectedMonster[]> {
  console.log(selectedMonsters);

  const slugs = selectedMonsters
    .map((m: UnhydratedSelectedMonster) => m.slug)
    .join(",");

  const res = await fetch(`${OPEN5E_API_URL}/monsters/?slug_in=${slugs}`);
  const monsters = await res.json();

  const hydratedSelectedMonsters = selectedMonsters.map(
    (selectedMonster: UnhydratedSelectedMonster) => {
      const monster = monsters.results.find(
        (m: Monster) => m.slug === selectedMonster.slug
      );

      return {
        count: selectedMonster.count,
        data: monster,
      };
    }
  );

  console.log(hydratedSelectedMonsters);

  return new Promise((resolve) => {
    resolve(hydratedSelectedMonsters);
  });
}
