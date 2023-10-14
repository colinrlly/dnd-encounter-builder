'use client'

import { Monster } from "@/types/open5e";
import { OPEN5E_API_URL } from "@/constants";
import { useState, useEffect } from "react";

export default function EncounterBuilder() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [availableMonsters, setAvailableMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    fetch(`${OPEN5E_API_URL}/monsters`)
      .then(res => res.json())
      .then(data => setAvailableMonsters(data.results));
  }, []);

  return (
    <main>
      <h1>Monsters</h1>
      <div>
        <ul>
          {availableMonsters.map((monster: Monster) => (
            <li
              key={monster.slug}
              onClick={() => setMonsters([...monsters, monster])}>

              <button>{monster.name}</button>
            </li>
          ))}
        </ul>
        <ul>
          {monsters.map((monster: Monster) => (
            <li key={monster.slug}>
              <p>{monster.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
