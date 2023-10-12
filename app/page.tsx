import { db } from "@/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";

async function getEncounters() {
  const encountersRef = collection(db, "encounters");
  const q = query(encountersRef);
  const querySnapshot = await getDocs(q);
  return querySnapshot;
}

export default async function Home() {

  const encounters = await getEncounters();

  return (
    <main>
      <h1>Encounters</h1>
      {encounters.docs.map((doc) => (
        <div key={doc.id}>
          <p>{doc.data().name}</p>
        </div>
      ))}
    </main>
  )
}
