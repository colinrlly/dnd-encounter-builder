import { getEncounter } from "@/api";

export default async function Encounter({
  params,
}: {
  params: { encounterId: string };
}) {
  const encounter = await getEncounter(params.encounterId);

  return encounter ? (
    <main>
      <h1>{encounter.name}</h1>
      {encounter.monsters.map((monsterSlug: string) => (
        <p key={monsterSlug}>{monsterSlug}</p>
      ))}
    </main>
  ) : (
    <main>
      <h1>Encounter not found</h1>
    </main>
  );
}
