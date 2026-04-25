// ============================================================
// MenuData.tsx — Lemonade Cafe, Swoyambhu, Kathmandu
// Open/Closed Principle: Add new items freely without touching
// existing entries or any consuming component logic.
// ============================================================

export type MenuItem = {
  id: number;
  name: string;
  price: number;
  category: MenuCategory;
  unit?: string; // optional: "per piece", etc.
  available: boolean;
};

export type MenuCategory =
  | "Hot Beverages"
  | "Cold Drinks"
  | "Momo"
  | "Chowmein"
  | "Fried Rice"
  | "Chicken"
  | "Buff"
  | "Sausages"
  | "Thukpa"
  | "Roti & Sides"
  | "Egg"
  | "Chowchow";

// ── To add a new item: append an object below. Never edit existing entries.
// ── To remove an item: set available: false (soft delete) or delete the entry.
// ── To add a new category: add it to MenuCategory type above, then add items.

const MenuData = (): MenuItem[] => {
  return [
    // ─── Hot Beverages ───────────────────────────────────────
    {
      id: 1,
      name: "Milk Tea",
      price: 30,
      category: "Hot Beverages",
      available: true,
    },
    {
      id: 2,
      name: "Black Tea",
      price: 20,
      category: "Hot Beverages",
      available: true,
    },
    {
      id: 3,
      name: "Lemon Tea",
      price: 30,
      category: "Hot Beverages",
      available: true,
    },
    {
      id: 4,
      name: "Hot Lemon",
      price: 30,
      category: "Hot Beverages",
      available: true,
    },
    {
      id: 5,
      name: "Black Coffee",
      price: 70,
      category: "Hot Beverages",
      available: true,
    },

    // ─── Cold Drinks ─────────────────────────────────────────
    {
      id: 6,
      name: "Cold Lemonade",
      price: 40,
      category: "Cold Drinks",
      available: true,
    },
    {
      id: 7,
      name: "Coke",
      price: 70,
      category: "Cold Drinks",
      available: true,
    },
    {
      id: 8,
      name: "Sprite",
      price: 70,
      category: "Cold Drinks",
      available: true,
    },
    {
      id: 9,
      name: "Fanta",
      price: 70,
      category: "Cold Drinks",
      available: true,
    },
    {
      id: 10,
      name: "Red Bull",
      price: 120,
      category: "Cold Drinks",
      available: true,
    },
    {
      id: 11,
      name: "Max Tiger",
      price: 130,
      category: "Cold Drinks",
      available: true,
    },

    // ─── Momo ────────────────────────────────────────────────
    {
      id: 12,
      name: "Buff Momo Steam",
      price: 130,
      category: "Momo",
      available: true,
    },
    {
      id: 13,
      name: "Buff Momo Jhol",
      price: 170,
      category: "Momo",
      available: true,
    },
    {
      id: 14,
      name: "Buff Momo Fried",
      price: 170,
      category: "Momo",
      available: true,
    },
    {
      id: 15,
      name: "Buff Chilly Momo Steam",
      price: 180,
      category: "Momo",
      available: true,
    },
    {
      id: 16,
      name: "Buff Chilly Momo Fried",
      price: 180,
      category: "Momo",
      available: true,
    },
    {
      id: 17,
      name: "Chicken Momo Steam",
      price: 140,
      category: "Momo",
      available: true,
    },
    {
      id: 18,
      name: "Chicken Momo Jhol",
      price: 180,
      category: "Momo",
      available: true,
    },
    {
      id: 19,
      name: "Chicken Momo Fried",
      price: 180,
      category: "Momo",
      available: true,
    },
    {
      id: 20,
      name: "Chicken Chilly Momo Steam",
      price: 190,
      category: "Momo",
      available: true,
    },
    {
      id: 21,
      name: "Chicken Chilly Momo Fried",
      price: 190,
      category: "Momo",
      available: true,
    },

    // ─── Chowmein ────────────────────────────────────────────
    {
      id: 22,
      name: "Veg Chowmein",
      price: 120,
      category: "Chowmein",
      available: true,
    },
    {
      id: 23,
      name: "Buff Chowmein",
      price: 130,
      category: "Chowmein",
      available: true,
    },
    {
      id: 24,
      name: "Chicken Chowmein",
      price: 140,
      category: "Chowmein",
      available: true,
    },
    {
      id: 25,
      name: "Egg Chowmein",
      price: 150,
      category: "Chowmein",
      available: true,
    },
    {
      id: 26,
      name: "Mix Chowmein",
      price: 200,
      category: "Chowmein",
      available: true,
    },

    // ─── Fried Rice ──────────────────────────────────────────
    {
      id: 27,
      name: "Veg Fried Rice",
      price: 120, //120
      category: "Fried Rice",
      available: true,
    },
    {
      id: 28,
      name: "Buff Fried Rice",
      price: 130, //130
      category: "Fried Rice",
      available: true,
    },
    {
      id: 29,
      name: "Chicken Fried Rice",
      price: 140, //140
      category: "Fried Rice",
      available: true,
    },
    {
      id: 30,
      name: "Egg Fried Rice",
      price: 150, //150
      category: "Fried Rice",
      available: true,
    },
    {
      id: 31,
      name: "Mixed Fried Rice",
      price: 200, //200
      category: "Fried Rice",
      available: true,
    },

    // ─── Chicken ─────────────────────────────────────────────
    {
      id: 32,
      name: "Chicken Fry",
      price: 300,
      category: "Chicken",
      available: true,
    },
    {
      id: 33,
      name: "Chicken Chilly (Bone)",
      price: 350,
      category: "Chicken",
      available: true,
    },
    {
      id: 34,
      name: "Chicken Chilly (Boneless)",
      price: 400,
      category: "Chicken",
      available: true,
    },
    {
      id: 35,
      name: "Chicken Curry",
      price: 300,
      category: "Chicken",
      available: true,
    },

    // ─── Buff ────────────────────────────────────────────────
    {
      id: 36,
      name: "Buff Sukuti",
      price: 300,
      category: "Buff",
      available: true,
    },
    {
      id: 37,
      name: "Buff Choila",
      price: 300,
      category: "Buff",
      available: true,
    },
    {
      id: 38,
      name: "Buff Chilly",
      price: 300,
      category: "Buff",
      available: true,
    },
    {
      id: 39,
      name: "Buff Curry",
      price: 300,
      category: "Buff",
      available: true,
    },

    // ─── Sausages ────────────────────────────────────────────
    {
      id: 40,
      name: "Buff Sausage Fry",
      price: 35,
      category: "Sausages",
      available: true,
      unit: "per piece",
    },
    {
      id: 41,
      name: "Chicken Sausage Fry",
      price: 40,
      category: "Sausages",
      available: true,
      unit: "per piece",
    },

    // ─── Thukpa ──────────────────────────────────────────────
    {
      id: 42,
      name: "Veg Thukpa",
      price: 120, //120
      category: "Thukpa",
      available: true,
    },
    {
      id: 43,
      name: "Buff Thukpa",
      price: 150, //150
      category: "Thukpa",
      available: true,
    },
    {
      id: 44,
      name: "Chicken Thukpa",
      price: 160, //160
      category: "Thukpa",
      available: true,
    },

    // ─── Roti & Sides ────────────────────────────────────────
    {
      id: 45,
      name: "Roti",
      price: 20, //20
      category: "Roti & Sides",
      unit: "per piece",
      available: true,
    },
    {
      id: 46,
      name: "Jhol Tarkari",
      price: 30, //30
      category: "Roti & Sides",
      available: true,
    },
    {
      id: 47,
      name: "Alu",
      price: 40, //40
      category: "Roti & Sides",
      available: true,
    },
    {
      id: 48,
      name: "Chana",
      price: 30, //30
      category: "Roti & Sides",
      available: true,
    },

    // ─── Egg ─────────────────────────────────────────────────
    {
      id: 49,
      name: "Boiled Egg",
      price: 30,
      category: "Egg",
      unit: "per piece",
      available: true,
    },
    {
      id: 50,
      name: "Omelette",
      price: 30,
      category: "Egg",
      unit: "per piece",
      available: true,
    },
    {
      id: 51,
      name: "Poached Egg",
      price: 30,
      category: "Egg",
      unit: "per piece",
      available: true,
    },

    // ─── Chowchow ────────────────────────────────────────────
    {
      id: 52,
      name: "Chowchow Sadeko",
      price: 60,
      category: "Chowchow",
      available: true,
    },
    {
      id: 53,
      name: "Chowchow Pakako",
      price: 60,
      category: "Chowchow",
      available: true,
    },
    {
      id: 54,
      name: "Chowchow Pakako with Egg",
      price: 90,
      category: "Chowchow",
      available: true,
    },
    {
      id: 55,
      name: "Egg Roll",
      price: 50,
      category: "Roti & Sides",
      available: true,
    },
    {
      id: 56,
      name: "Milk Coffee",
      price: 150,
      category: "Hot Beverages",
      available: true,
    },
    {
      id: 57,
      name: "Masala Omelette",
      price: 40,
      category: "Egg",
      available: true,
      unit: "per piece",
    },
    {
      id: 58,
      name: "Red Bull Large",
      price: 140,
      category: "Cold Drinks",
      available: true,
    },
    {
      id: 59,
      name: "Chowchow Fried",
      price: 70,
      category: "Chowchow",
      available: true,
    },
    {
      id: 60,
      name: "Chowchow Fried with Egg",
      price: 100,
      category: "Chowchow",
      available: true,
    },
    {
      id: 61,
      name: "Milkshake (flavors available)",
      price: 90,
      category: "Cold Drinks",
      available: true,
    },
    {
      id: 62,
      name: "Xtreme",
      price: 140,
      category: "Cold Drinks",
      available: true,
    },
  ];
};

export default MenuData;
