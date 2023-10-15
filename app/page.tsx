import { db } from "@/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import Link from "next/link";

async function getEncounters() {
  const encountersRef = collection(db, "encounters");
  const q = query(encountersRef);
  return await getDocs(q);
}

export default async function Home() {
  const encounters = await getEncounters();

  return (
    <main>
      <h1>Encounters</h1>
      <Link href="/encounter-builder">
        <button className="btn btn-primary">New</button>
      </Link>
      <ul role="list">
        {encounters.docs.map((doc) => (
          <Link href={`/encounters/${doc.id}`}>
            <li key={doc.id}>
              <button className="btn">{doc.data().name}</button>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
