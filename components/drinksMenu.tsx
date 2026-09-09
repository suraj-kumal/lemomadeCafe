"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Beer, Martini } from "lucide-react";

import DrinksMenuData, { DrinksItem } from "@/data/drinksmenu";
import BeerMenuData, { BeerItem } from "@/data/beerdata";

type CombinedItem = DrinksItem | BeerItem;

function groupByName(items: CombinedItem[]) {
  const grouped: Record<string, CombinedItem[]> = {};

  items
    .filter((item) => item.available)
    .forEach((item) => {
      if (!grouped[item.name]) grouped[item.name] = [];
      grouped[item.name].push(item);
    });

  return grouped;
}

// ── Animation
const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut" as const,
    },
  },
};

// ── Drink Row
function DrinkRow({
  name,
  items,
  isLast,
}: {
  name: string;
  items: CombinedItem[];
  isLast: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between py-2.5 ${
        !isLast ? "border-b border-border" : ""
      }`}
    >
      {/* Name */}
      <span className="text-[0.95rem] text-foreground">{name}</span>

      {/* Prices */}
      <div className="flex gap-3 text-[0.9rem] font-semibold">
        {items.map((item) => (
          <span key={item.id} className="whitespace-nowrap">
            Rs. {item.price}
            {item.unit && (
              <span className="text-[0.7rem] text-muted-foreground ml-1">
                /{item.unit}
              </span>
            )}
          </span>
        ))}
      </div>
    </div>
  );
}

// ── Card Component
function DrinksCard({
  title,
  icon: Icon,
  items,
}: {
  title: string;
  icon: React.ElementType;
  items: CombinedItem[];
}) {
  const grouped = groupByName(items);
  const names = Object.keys(grouped);

  return (
    <motion.div
      className="bg-card border border-border rounded-(--radius) px-6 py-5 mb-6"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Header */}
      <div className="flex items-center gap-2 mb-3 pb-3 border-b-2 border-border">
        {/* Icon */}
        <Icon size={20} strokeWidth={2} />

        {/* Title */}
        <h2 className="text-[1.05rem] font-bold">{title}</h2>

        {/* Item Count */}
        <span className="ml-auto text-xs text-muted-foreground">
          {names.length} items
        </span>
      </div>

      {/* Items */}
      {names.map((name, i) => (
        <DrinkRow
          key={name}
          name={name}
          items={grouped[name]}
          isLast={i === names.length - 1}
        />
      ))}
    </motion.div>
  );
}

// ── Main Page
export default function DrinksPage() {
  const alcohol = DrinksMenuData();
  const beer = BeerMenuData();

  return (
    <main className="max-w-225 mx-auto px-4 py-8 bg-background min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <motion.h1
          className="text-3xl font-extrabold flex gap-2 justify-center"
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          Looking for Drinks? <Beer size={32} />
        </motion.h1>

        <motion.p
          className="text-sm text-muted-foreground mt-2"
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            delay: 0.4,
          }}
        >
          We’ve got something for every mood 😎
        </motion.p>
      </div>

      {/* Beer */}
      <DrinksCard title="Beer" icon={Beer} items={beer} />

      {/* Hard Drinks */}
      <DrinksCard title="Hard Drinks" icon={Martini} items={alcohol} />
    </main>
  );
}
