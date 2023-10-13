import { Monster } from "@/types/open5e";
import { OPEN5E_API_URL } from "@/constants";

async function getMonsters() {
  const res = await fetch(`${OPEN5E_API_URL}/monsters/?limit=10`);
  const data = await res.json();
  return data.results;
}

export default async function EncounterBuilder() {
  const monsters = await getMonsters();

  return (
    <main>
      <h1>Monsters</h1>
      {monsters.map((monster: Monster) => (
        <div key={monster.slug}>
          <p>{monster.name}</p>
        </div>
      ))}
    </main>
  )
}
