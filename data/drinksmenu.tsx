// ============================================================
// DrinksMenuData.tsx
// ============================================================

export type DrinksItem = {
  id: number;
  name: string;
  price: number;
  category: DrinksCategory;
  unit?: string;
  available: boolean;
};

export type DrinksCategory = "Hard Drinks";

// ── Add new items below without modifying existing ones ──

const DrinksMenuData = (): DrinksItem[] => {
  return [
    {
      id: 1,
      name: "8848",
      price: 650,
      category: "Hard Drinks",
      unit: "quarter",
      available: true,
    },
    {
      id: 2,
      name: "8848",
      price: 1300,
      category: "Hard Drinks",
      unit: "half",
      available: true,
    },
    {
      id: 3,
      name: "Mustang Black",
      price: 400,
      category: "Hard Drinks",
      unit: "quarter",
      available: true,
    },
    {
      id: 4,
      name: "Mustang Black",
      price: 800,
      category: "Hard Drinks",
      unit: "half",
      available: true,
    },
    {
      id: 5,
      name: "Mustang",
      price: 350,
      category: "Hard Drinks",
      unit: "quarter",
      available: true,
    },
    {
      id: 6,
      name: "Mustang",
      price: 700,
      category: "Hard Drinks",
      unit: "half",
      available: true,
    },
    {
      id: 7,
      name: "Highlander",
      price: 350,
      category: "Hard Drinks",
      unit: "quarter",
      available: true,
    },
    {
      id: 8,
      name: "Highlander",
      price: 700,
      category: "Hard Drinks",
      unit: "half",
      available: true,
    },
    {
      id: 9,
      name: "Old Durbar",
      price: 750,
      category: "Hard Drinks",
      unit: "quarter",
      available: true,
    },
    {
      id: 10,
      name: "Old Durbar",
      price: 1500,
      category: "Hard Drinks",
      unit: "half",
      available: true,
    },
    {
      id: 11,
      name: "Signature",
      price: 650,
      category: "Hard Drinks",
      unit: "quarter",
      available: true,
    },
    {
      id: 12,
      name: "Signature",
      price: 1300,
      category: "Hard Drinks",
      unit: "half",
      available: true,
    },
    {
      id: 13,
      name: "Khukuri",
      price: 650,
      category: "Hard Drinks",
      unit: "quarter",
      available: true,
    },
    {
      id: 14,
      name: "Khukuri",
      price: 1300,
      category: "Hard Drinks",
      unit: "half",
      available: true,
    },
  ];
};

export default DrinksMenuData;
