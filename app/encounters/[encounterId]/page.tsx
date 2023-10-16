import { getEncounter, hydrateSelectedMonsters } from "@/api";
import { SelectedMonster } from "@/types";
import { SelectedMonsters } from "./components";

export default async function Encounter({
  params,
}: {
  params: { encounterId: string };
}) {
  const encounter = await getEncounter(params.encounterId);

  let hydratedSelectedMonsters = [] as SelectedMonster[];

  if (encounter) {
    hydratedSelectedMonsters = await hydrateSelectedMonsters(
      encounter.monsters
    );
  }

  return encounter ? (
    <main className="prose">
      <h1>{encounter.name}</h1>
      <SelectedMonsters monsters={hydratedSelectedMonsters} />
    </main>
  ) : (
    <main>
      <h1>Encounter not found</h1>
    </main>
  );
}
