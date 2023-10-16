import Link from "next/link";
import { getEncounters } from "@/api";
import Image from "next/image";

export const revalidate = 0;

export default async function Home() {
  const encounters = await getEncounters();

  return (
    <main className="prose max-w-none">
      <h1>Encounters</h1>
      <Link href="/encounter-builder">
        <button className="btn btn-primary">new encounter</button>
      </Link>
      <div className="not-prose grid [grid-template-columns:repeat(auto-fill,minmax(400px,1fr))] justify-items-center gap-5 mt-10 lg:gap-12">
        {encounters?.map((e) => (
          <div key={e.id} className="card w-96 shadow-xl justify-self-auto">
            <figure>
              <Image
                src={`https://picsum.photos/seed/${Math.random()}/400/200`}
                alt="Shoes"
                width={400}
                height={200}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{e.name}</h2>
              <p>This is a super cool encounter description</p>
              <div className="card-actions justify-end">
                <Link href={`/encounters/${e.id}`}>
                  <button className="btn">view encounter</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
