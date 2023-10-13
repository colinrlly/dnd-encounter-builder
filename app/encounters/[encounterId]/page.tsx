import { db } from "@/firebase/config";
import { getDoc, doc } from "firebase/firestore";

async function getEncounter(encounterId: string) {
    const docRef = doc(db, "encounters", encounterId);
    return await getDoc(docRef);
}

export default async function Encounter({ params } : { params: { encounterId: string } }) {
    const encounterSnap = await getEncounter(params.encounterId);
    const encounter = encounterSnap.exists() ? encounterSnap.data() : null;

    return encounter ? (
        <main>
            <h1>{encounter.name}</h1>
            {encounter.monsters.map((monsterSlug: string) => (
                <p key={monsterSlug}>
                    {monsterSlug}
                </p>
            ))}
        </main>
    ) : (
        <main>
            <h1>Encounter not found</h1>
        </main>
    )
}
