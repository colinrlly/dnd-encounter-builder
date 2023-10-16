import { getEncounter, hydrateSelectedMonsters } from "@/api";
import { SelectedMonster } from "@/types";
import { SelectedMonsters } from "./components";
import Link from "next/link";

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
      <Link href={`/encounter-builder/${encounter.id}`}>
        <button className="btn btn-primary">edit encounter</button>
      </Link>
      <SelectedMonsters monsters={hydratedSelectedMonsters} />
    </main>
  ) : (
    <main>
      <h1>Encounter not found</h1>
    </main>
  );
}
