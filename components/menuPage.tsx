"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  Coffee,
  CupSoda,
  Soup,
  Utensils,
  Beef,
  Drumstick,
  Sandwich,
  Wheat,
  Egg,
} from "lucide-react";

import MenuData, { MenuCategory, MenuItem } from "@/data/menudata";

// ── Category display order
const CATEGORY_ORDER: MenuCategory[] = [
  "Hot Beverages",
  "Cold Drinks",
  "Momo",
  "Chowmein",
  "Fried Rice",
  "Chicken",
  "Buff",
  "Sausages",
  "Thukpa",
  "Roti & Sides",
  "Egg",
  "Chowchow",
];

// ── Category icons
const CATEGORY_ICONS: Record<MenuCategory, LucideIcon> = {
  "Hot Beverages": Coffee,
  "Cold Drinks": CupSoda,
  Momo: Soup,
  Chowmein: Utensils,
  "Fried Rice": Utensils,
  Chicken: Drumstick,
  Buff: Beef,
  Sausages: Sandwich,
  Thukpa: Soup,
  "Roti & Sides": Wheat,
  Egg: Egg,
  Chowchow: Utensils,
};

// ── Group available items by category
function groupByCategory(items: MenuItem[]): Record<string, MenuItem[]> {
  const grouped = items
    .filter((item) => item.available)
    .reduce(
      (acc, item) => {
        if (!acc[item.category]) acc[item.category] = [];
        acc[item.category].push(item);
        return acc;
      },
      {} as Record<string, MenuItem[]>,
    );

  // Sort each category by price (ascending)
  Object.keys(grouped).forEach((category) => {
    grouped[category].sort((a, b) => a.price - b.price);
  });

  return grouped;
}

// ── Single menu item row
function MenuItemRow({ item, isLast }: { item: MenuItem; isLast: boolean }) {
  return (
    <div
      className={`flex items-center justify-between gap-3 py-2.5 ${
        !isLast ? "border-b border-border" : ""
      }`}
    >
      {/* Left: name */}
      <span className="text-[0.95rem] text-foreground font-normal">
        {item.name}
      </span>

      {/* Right: price */}
      <span className="text-[0.95rem] font-semibold text-foreground whitespace-nowrap">
        Rs. {item.price}
        {item.unit && (
          <span className="text-[0.72rem] font-normal text-muted-foreground ml-1">
            /{item.unit}
          </span>
        )}
      </span>
    </div>
  );
}

// ── Animation variants
const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// ── Category card
function CategoryCard({
  category,
  items,
  index,
}: {
  category: MenuCategory;
  items: MenuItem[];
  index: number;
}) {
  const Icon = CATEGORY_ICONS[category];

  return (
    <motion.div
      className="bg-card text-card-foreground border border-border rounded-(--radius) px-6 py-5 break-inside-avoid mb-5"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delay: index * 0.05 }}
    >
      {/* Category header */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b-2 border-border">
        <Icon className="h-5 w-5 text-muted-foreground" strokeWidth={2} />

        <h2 className="text-[1.05rem] font-bold text-foreground m-0">
          {category}
        </h2>

        <span className="ml-auto text-xs text-muted-foreground">
          {items.length} items
        </span>
      </div>

      {/* Items */}
      <div>
        {items.map((item, i) => (
          <MenuItemRow
            key={item.id}
            item={item}
            isLast={i === items.length - 1}
          />
        ))}
      </div>
    </motion.div>
  );
}

// ── Main Menu Page
export default function MenuPage() {
  const allItems = MenuData();
  const grouped = groupByCategory(allItems);

  const orderedCategories = CATEGORY_ORDER.filter(
    (cat) => grouped[cat] && grouped[cat].length > 0,
  );

  return (
    <main className="max-w-225 mx-auto px-4 py-8 bg-background min-h-screen">
      {/* Page header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-extrabold text-foreground">
          Lemonade Cafe
        </h1>

        <p className="text-sm text-muted-foreground mt-1">
          Swoyambhu, Kathmandu
        </p>
      </div>

      <div className="m-1">
        {orderedCategories.map((category, index) => (
          <CategoryCard
            key={category}
            category={category}
            items={grouped[category]}
            index={index}
          />
        ))}
      </div>
    </main>
  );
}
