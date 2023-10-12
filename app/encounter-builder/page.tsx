import { Monster } from "@/types/open5e";

async function getMonsters() {
  const res = await fetch("https://api.open5e.com/monsters/?limit=10");
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
