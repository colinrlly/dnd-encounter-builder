export type Monster = {
  slug: string;
  desc: string;
  name: string;
  size: string;
  type: string;
  subtype: string;
  group: null | string;
  alignment: string;
  armor_class: number;
  armor_desc: string;
  hit_points: number;
  hit_dice: string;
  speed: {
    walk: number;
    swim: number;
  };
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  strength_save: null | number;
  dexterity_save: null | number;
  constitution_save: null | number;
  intelligence_save: null | number;
  wisdom_save: null | number;
  charisma_save: null | number;
  perception: number;
  skills: {
    [key: string]: number;
  };
  damage_vulnerabilities: string;
  damage_resistances: string;
  damage_immunities: string;
  condition_immunities: string;
  senses: string;
  languages: string;
  challenge_rating: string;
  cr: number;
  actions: {
    name: string;
    desc: string;
    attack_bonus?: number;
    damage_dice?: string;
    damage_bonus?: number;
  }[];
  reactions:
    | null
    | {
        name: string;
        desc: string;
      }[];
  legendary_desc: string;
  legendary_actions: {
    name: string;
    desc: string;
  }[];
  special_abilities: {
    name: string;
    desc: string;
  }[];
  spell_list: string[];
  page_no: number;
  environments: string[];
  img_main: string;
  document__slug: string;
  document__title: string;
  document__license_url: string;
  document__url: string;
};
