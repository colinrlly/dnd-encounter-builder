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
    <div className="prose max-w-none">
      <h1>Monsters</h1>

      <label className="label">
        <h2 className="label-text">Encounter Name</h2>
      </label>
      <input type="text" placeholder="epic tpk encounter" className="input input-bordered" />

      <div className="flex w-full gap-10">
        <div className="basis-1/2">
          <h2>Available Monsters</h2>
          {availableMonsters.map((monster: Monster) => (
            <button
              className="btn m-1"
              onClick={() => setMonsters([...monsters, monster])}
              key={monster.slug}
            >
              {monster.name}
            </button>
          ))}
        </div>

        <div className="basis-1/2">
          <h2>Selected Monsters</h2>
          {monsters.map((monster: Monster) => (
            <button
              className="btn m-1"
              onClick={() => setMonsters(monsters.filter(m => m.slug !== monster.slug))}
              key={monster.slug}
            >
              {monster.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
