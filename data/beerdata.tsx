// ============================================================
// BeerMenuData.tsx
// ============================================================

export type BeerItem = {
  id: number;
  name: string;
  price: number;
  category: BeerCategory;
  unit?: string;
  available: boolean;
};

export type BeerCategory = "Beer";

// ── Add new items below without modifying existing ones ──

const BeerMenuData = (): BeerItem[] => {
  return [
    {
      id: 1,
      name: "Gorkha",
      price: 250,
      category: "Beer",
      unit: "small",
      available: true,
    },
    {
      id: 2,
      name: "Gorkha",
      price: 450,
      category: "Beer",
      unit: "normal",
      available: true,
    },
    {
      id: 3,
      name: "Tuborg",
      price: 350,
      category: "Beer",
      unit: "small",
      available: true,
    },
    {
      id: 4,
      name: "Tuborg",
      price: 500,
      category: "Beer",
      unit: "normal",
      available: true,
    },
  ];
};

export default BeerMenuData;
