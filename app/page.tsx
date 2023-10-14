import { db } from "@/firebase/config";
import { collection, getDocs, query } from "firebase/firestore";
import Link from 'next/link';

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
      <Link href='/encounter-builder'>
        <span>
          New
        </span>
      </Link>
      <ul role="list">
        {encounters.docs.map((doc) => (
          <Link href={`/encounters/${doc.id}`}>
            <li key={doc.id}>
              <button>{doc.data().name}</button>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  )
}
