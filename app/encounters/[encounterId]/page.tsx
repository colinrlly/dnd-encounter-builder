import { getEncounter } from "@/api";
import { SelectedMonsters } from "./components";
import Link from "next/link";

export const revalidate = 0;

export default async function Encounter({
  params,
}: {
  params: { encounterId: string };
}) {
  const hydratedEncounter = await getEncounter(params.encounterId);

  return hydratedEncounter ? (
    <main className="prose">
      <h1>{hydratedEncounter.name}</h1>
      <Link
        href={`/encounter-builder/${hydratedEncounter.id}`}
        className="no-underline"
      >
        <button className="btn btn-primary no-underline">edit encounter</button>
      </Link>
      <SelectedMonsters monsters={hydratedEncounter.monsters} />
    </main>
  ) : (
    <main>
      <h1>Encounter not found</h1>
    </main>
  );
}
