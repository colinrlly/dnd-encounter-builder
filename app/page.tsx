import Link from "next/link";
import { getEncounters } from "@/api";

export default async function Home() {
  const encounters = await getEncounters();

  return (
    <main>
      <h1>Encounters</h1>
      <Link href="/encounter-builder">
        <button className="btn btn-primary">New</button>
      </Link>
      <ul role="list">
        {encounters?.map((e) => (
          <Link href={`/encounters/${e.id}`} key={e.id}>
            <li key={e.id}>
              <button className="btn">{e.name}</button>
            </li>
          </Link>
        ))}
      </ul>
    </main>
  );
}
