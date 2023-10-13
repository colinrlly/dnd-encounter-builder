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
      <ul role="list" className="divide-y flex flex-col space-y-4">
        {encounters.docs.map((doc) => (
          <Link href={`/encounters/${doc.id}`}>
            <li key={doc.id} className="flex justify-between gap-x-6 bg-slate-300 rounded-lg p-4">
              <p className="text-sm font-semibold leading-6 text-gray-900 m-4">{doc.data().name}</p>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  )
}
