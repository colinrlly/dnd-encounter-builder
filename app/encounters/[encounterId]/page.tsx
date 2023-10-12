export default function Encounter({ params } : { params: { encounterId: string } }) {
    return (
        <main>
            <h1>{params.encounterId}</h1>
        </main>
    )
}
