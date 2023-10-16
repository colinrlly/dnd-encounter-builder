import { getEncounter } from "@/api";
import { UnhydratedSelectedMonster } from "@/types";

export default async function Encounter({
  params,
}: {
  params: { encounterId: string };
}) {
  const encounter = await getEncounter(params.encounterId);

  return encounter ? (
    <main>
      <h1>{encounter.name}</h1>
      {encounter.monsters.map((monster: UnhydratedSelectedMonster) => (
        <div key={monster.slug}>
          <p>{monster.slug}</p>
          <p>{monster.count}</p>
        </div>
      ))}
    </main>
  ) : (
    <main>
      <h1>Encounter not found</h1>
    </main>
  );
}
