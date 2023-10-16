import { SelectedMonster } from "@/types";

export default function SelectedMonsters({
  monsters,
  setMonsters,
}: {
  monsters: SelectedMonster[];
  setMonsters: (monsters: SelectedMonster[]) => void;
}) {
  return (
    <>
      <h2>Selected Monsters</h2>
      {monsters.map((monster) => (
        <div
          key={monster.data.slug}
          className="flex outline outline-1	rounded-md place-content-between not-prose mb-4"
        >
          <p className="align-baseline font-semibold mt-2 ml-2">
            {monster.data.name}
          </p>

          <div className="flex flex-col">
            <button
              className="btn btn-xs"
              onClick={() =>
                setMonsters(
                  monsters.map((m) =>
                    m === monster ? { ...m, count: m.count + 1 } : m
                  )
                )
              }
            >
              +
            </button>

            <span className="text-center leading-6 align-baseline">
              {monster.count}
            </span>

            <button
              className="btn btn-xs"
              onClick={() =>
                setMonsters(
                  monsters
                    .map((m) =>
                      m === monster ? { ...m, count: m.count - 1 } : m
                    )
                    .filter((m) => m.count > 0)
                )
              }
            >
              -
            </button>
          </div>
        </div>
      ))}
    </>
  );
}
