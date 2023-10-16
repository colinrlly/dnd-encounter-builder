import { SelectedMonster } from "@/types";

export default function SelectedMonsters({
  monsters,
}: {
  monsters: SelectedMonster[];
}) {
  return (
    <>
      <h2>Selected Monsters</h2>
      {monsters.map((monster) => (
        <div
          key={monster.data.slug}
          className="flex outline outline-1	rounded-md place-content-between not-prose mb-4 items-center w-64"
        >
          <p className="font-semibold ml-4">{monster.data.name}</p>

          <p className="font-semibold mr-4">x {monster.count}</p>
        </div>
      ))}
    </>
  );
}
