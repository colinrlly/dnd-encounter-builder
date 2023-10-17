import { UnhydratedSelectedMonster, SelectedMonster } from "@/types";
import { Monster } from "@/types/open5e";
import { OPEN5E_API_URL } from "@/constants";

export default async function hydrateSelectedMonsters(
  selectedMonsters: UnhydratedSelectedMonster[]
): Promise<SelectedMonster[]> {
  const slugs = selectedMonsters
    .map((m: UnhydratedSelectedMonster) => m.slug)
    .join("%2C");

  const open5eUrl = `${OPEN5E_API_URL}/monsters/?slug__in=${slugs}&slug__iexact=&slug=&name__iexact=&name=&desc__iexact=&desc=&desc__in=&desc__icontains=&cr=&cr__range=&cr__gt=&cr__gte=&cr__lt=&cr__lte=&armor_class=&armor_class__range=&armor_class__gt=&armor_class__gte=&armor_class__lt=&armor_class__lte=&type__iexact=&type=&type__in=&type__icontains=&page_no=&page_no__range=&page_no__gt=&page_no__gte=&page_no__lt=&page_no__lte=&document__slug__iexact=&document__slug=&document__slug__in=&document__slug__not_in=`;

  const res = await fetch(open5eUrl);
  const monsters = await res.json();

  const hydratedSelectedMonsters = selectedMonsters.map(
    (selectedMonster: UnhydratedSelectedMonster) => {
      const monster = monsters.results.find(
        (m: Monster) => m.slug === selectedMonster.slug
      );

      return {
        count: selectedMonster.count,
        data: monster,
      };
    }
  );

  return new Promise((resolve) => {
    resolve(hydratedSelectedMonsters);
  });
}
