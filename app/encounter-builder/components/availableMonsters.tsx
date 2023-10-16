"use client";

import { Monster } from "@/types/open5e";
import { getAvailableMonsters } from "@/api";
import { useEffect, useState } from "react";

export default function AvailableMonsters({
  addCallback,
}: {
  addCallback: (monster: Monster) => void;
}) {
  const [availableMonsters, setAvailableMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    getAvailableMonsters(setAvailableMonsters);
  }, []);

  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>CR</th>
          <th>Hit Points</th>
          <th>Size</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {availableMonsters.map((m: Monster) => (
          <tr key={m.slug}>
            <td className="font-bold">{m.name}</td>
            <td>{m.cr}</td>
            <td>{m.hit_points}</td>
            <td>{m.size}</td>
            <td>
              <button className="btn" onClick={() => addCallback(m)}>
                ADD
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
