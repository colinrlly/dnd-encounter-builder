import { OPEN5E_API_URL } from "@/constants";
import { Monster } from "@/types/open5e";

export default async function getAvailableMonsters(
  setAvailableMonsters: (monsters: Monster[]) => void
) {
  return fetch(`${OPEN5E_API_URL}/monsters`)
    .then((res) => res.json())
    .then((data) => setAvailableMonsters(data.results));
}
