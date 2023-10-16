"use client";

import { SelectedMonster } from "@/types";
import { Monster } from "@/types/open5e";
import { useState } from "react";
import { saveEncounter } from "@/api";
import { AvailableMonsters } from "./components";
import { SelectedMonsters } from "@/components";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export default function EncounterBuilder() {
  const [monsters, setMonsters] = useState<SelectedMonster[]>([]);
  const [encounterName, setEncounterName] = useState<string>("");

  const router = useRouter();

  function onSaveSuccess() {
    router.push("/");
    toast.success("Encounter saved!");
  }

  function addMonster(monster: Monster) {
    const existingMonster = monsters.find((m) => m.data.slug === monster.slug);

    if (existingMonster) {
      const newMonsters = monsters.filter((m) => m.data.slug !== monster.slug);

      setMonsters([
        ...newMonsters,
        { ...existingMonster, count: existingMonster.count + 1 },
      ]);
      return;
    }

    setMonsters([...monsters, { count: 1, data: monster }]);
  }

  return (
    <div className="prose max-w-none">
      <h1>Encounter Builder</h1>

      <button
        className="btn btn-primary"
        onClick={() => saveEncounter(encounterName, monsters, onSaveSuccess)}
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
        <div className="basis-3/4">
          <h2>Available Monsters</h2>
          <AvailableMonsters addCallback={addMonster} />
        </div>

        <div className="basis-1/4">
          <SelectedMonsters monsters={monsters} setMonsters={setMonsters} />
        </div>
      </div>
    </div>
  );
}
