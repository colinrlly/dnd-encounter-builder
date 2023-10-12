import { db } from "@/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import { Monster } from "@/types/open5e";

async function getMonsters() {
  const res = await fetch("https://api.open5e.com/monsters/?limit=10");
  const data = await res.json();
  return data.results;
}

async function getEncounters() {
  const encountersRef = collection(db, "encounters");
  const q = query(encountersRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot;
}

export default async function Home() {
  const monsters = await getMonsters();

  const encounters = await getEncounters();

  return (
    <main>
      <h1>Monsters</h1>
      {monsters.map((monster: Monster) => (
        <div key={monster.slug}>
          <p>{monster.name}</p>
        </div>
      ))}

      <h1>Encounters</h1>
      {encounters.docs.map((doc) => (
        <div key={doc.id}>
          <p>{doc.data().name}</p>
        </div>
      ))}
    </main>
  )
}
