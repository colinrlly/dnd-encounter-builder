"use client";

import Link from "next/link";
import { getEncounters } from "@/api";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Encounter } from "@/types";

export default function Home() {
  const [encounters, setEncounters] = useState([] as Encounter[]);

  useEffect(() => {
    getEncounters().then((encounters) => {
      setEncounters(encounters || ([] as Encounter[]));
    });
  }, []);

  return (
    <main className="prose max-w-none">
      <h1>Encounters</h1>
      <Link href="/encounter-builder">
        <button className="btn btn-primary no-underline">new encounter</button>
      </Link>
      <div className="not-prose grid [grid-template-columns:repeat(auto-fill,minmax(w-full,1fr))] sm:[grid-template-columns:repeat(auto-fill,minmax(400px,1fr))] justify-items-center gap-5 mt-10 lg:gap-12">
        {encounters?.map((e) => (
          <div key={e.id} className="card sm:w-96 shadow-xl justify-self-auto">
            <figure>
              <Image
                src={`https://picsum.photos/seed/${Math.random()}/600/300`}
                alt="Shoes"
                width={600}
                height={300}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{e.name}</h2>
              <p>You get a sense there is danger afoot</p>
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
