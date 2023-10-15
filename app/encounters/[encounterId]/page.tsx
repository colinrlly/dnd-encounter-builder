import { supabase } from "@/supabase/config";

async function getEncounter(encounterId: string) {
  const { data, error } = await supabase
    .from("encounters")
    .select("*")
    .eq("id", encounterId);

  if (error) {
    console.error(error);
    return;
  }

  return data[0];
}

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
