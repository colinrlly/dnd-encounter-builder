"use client";

import { Monster } from "@/types/open5e";
import { useState, useEffect } from "react";
import { saveEncounter, getAvailableMonsters } from "@/api";
import { AvailableMonsters } from "@/components";

export default function EncounterBuilder() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [availableMonsters, setAvailableMonsters] = useState<Monster[]>([]);
  const [encounterName, setEncounterName] = useState<string>("");

  useEffect(() => {
    getAvailableMonsters(setAvailableMonsters);
  }, []);

  return (
    <div className="prose max-w-none">
      <h1>Monsters</h1>

      <button
        className="btn btn-primary"
        onClick={() => saveEncounter(encounterName, monsters)}
      >
        Save Encounter
      </button>

      <label className="label">
        <h2 className="label-text">Encounter Name</h2>
      </label>
      <input
        type="text"
        placeholder="epic tpk encounter"
        className="input input-bordered"
        value={encounterName}
        onChange={(e) => setEncounterName(e.target.value)}
      />

      <div className="flex w-full gap-10">
        <div className="basis-1/2">
          <h2>Available Monsters</h2>
          <AvailableMonsters />
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
              onClick={() =>
                setMonsters(monsters.filter((m) => m.slug !== monster.slug))
              }
              key={monster.slug}
            >
              {monster.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
