export type Encounter = {
  id: string;
  name: string;
  monsters: {
    slug: string;
    count: number;
  }[];
};
