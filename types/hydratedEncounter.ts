import { SelectedMonster } from "./selectedMonster";

export type HydratedEncounter = {
  id: string;
  name: string;
  monsters: SelectedMonster[];
};
