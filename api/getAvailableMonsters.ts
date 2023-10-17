import { OPEN5E_API_URL } from "@/constants";
import { Monster } from "@/types/open5e";

export default async function getAvailableMonsters(
  searchTerm: string,
  setAvailableMonsters: (monsters: Monster[]) => void
) {
  return fetch(`${OPEN5E_API_URL}/monsters/?search=${searchTerm}`)
    .then((res) => res.json())
    .then((data) => setAvailableMonsters(data.results));
}
