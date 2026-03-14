"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import MenuData, { MenuCategory, MenuItem } from "@/data/menudata";

// ── Category icons (shared with menuPage)
const CATEGORY_ICONS: Record<MenuCategory, string> = {
  "Hot Beverages": "☕",
  "Cold Drinks": "🥤",
  Momo: "🥟",
  Chowmein: "🍜",
  "Fried Rice": "🍚",
  Chicken: "🍗",
  Buff: "🥩",
  Sausages: "🌭",
  Thukpa: "🍲",
  "Roti & Sides": "🫓",
  Egg: "🥚",
  Chowchow: "🍜",
};

// ── Curated popular / featured items (by id)
const FEATURED_IDS = [1, 6, 12, 17, 22, 32];

// ── Animation variants
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const, delay: i * 0.08 },
  }),
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

// ─────────────────────────────────────────────
// Hero Section
// ─────────────────────────────────────────────
function HeroSection() {
  return (
    <section className="relative w-full min-h-[92vh] flex flex-col items-center justify-center overflow-hidden px-4">
      {/* Decorative blobs */}
      <div
        aria-hidden
        className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-30"
        style={{ background: "var(--accent)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-24 -right-16 w-96 h-96 rounded-full blur-3xl opacity-20"
        style={{ background: "var(--primary)" }}
      />

      <motion.div
        className="relative z-10 max-w-4xl mx-auto text-center space-y-6"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        {/* Badge */}
        <motion.span
          variants={fadeUp}
          custom={0}
          initial="hidden"
          animate="visible"
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card text-sm font-medium text-muted-foreground shadow-sm"
        >
          🍋 Swoyambhu, Kathmandu
        </motion.span>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          custom={1}
          initial="hidden"
          animate="visible"
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight text-foreground"
        >
          Fresh. <span style={{ color: "var(--primary)" }}>Homemade.</span>
          <br />
          Full of Flavor.
        </motion.h1>

        {/* Subheading */}
        <motion.p
          variants={fadeUp}
          custom={2}
          initial="hidden"
          animate="visible"
          className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
        >
          Your go-to spot for lemon tea, fresh lemonades, strong coffee &amp;
          hearty Nepali bites — all made with love.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeUp}
          custom={3}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap gap-4 justify-center pt-4"
        >
          <Link href="/menu">
            <button
              className="px-7 py-3 rounded-full font-semibold text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              View Full Menu →
            </button>
          </Link>
          <a href="#categories">
            <button className="px-7 py-3 rounded-full font-semibold text-sm border border-border bg-card text-foreground transition-all duration-200 hover:bg-muted hover:-translate-y-0.5 active:translate-y-0">
              Explore Categories
            </button>
          </a>
        </motion.div>
      </motion.div>

      {/* Floating emoji decorations */}
      <motion.span
        className="absolute top-1/4 left-8 text-4xl select-none hidden lg:block"
        animate={{ y: [0, -12, 0] }}
        transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
        aria-hidden
      >
        🍋
      </motion.span>
      <motion.span
        className="absolute top-1/3 right-8 text-4xl select-none hidden lg:block"
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "easeInOut",
          delay: 1,
        }}
        aria-hidden
      >
        ☕
      </motion.span>
      <motion.span
        className="absolute bottom-1/4 left-16 text-3xl select-none hidden lg:block"
        animate={{ y: [0, -8, 0] }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
          delay: 0.5,
        }}
        aria-hidden
      >
        🍜
      </motion.span>
    </section>
  );
}

// ─────────────────────────────────────────────
// Featured Items Section
// ─────────────────────────────────────────────
function FeaturedSection({ items }: { items: MenuItem[] }) {
  return (
    <section className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            ⭐ Our Favourites
          </h2>
          <p className="mt-2 text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            A handpicked selection of dishes &amp; drinks our guests love most.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="relative rounded-2xl border border-border bg-card shadow-sm overflow-hidden flex flex-col items-center justify-between p-5 gap-3 transition-shadow hover:shadow-md cursor-default"
            >
              {/* Icon */}
              <span className="text-4xl">{CATEGORY_ICONS[item.category]}</span>

              {/* Name + category */}
              <div className="text-center">
                <p className="font-semibold text-foreground text-sm md:text-base leading-snug">
                  {item.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {item.category}
                </p>
              </div>

              {/* Price badge */}
              <span
                className="px-3 py-1 rounded-full text-xs font-bold"
                style={{
                  background: "var(--primary)",
                  color: "var(--primary-foreground)",
                }}
              >
                Rs. {item.price}
                {item.unit && (
                  <span className="font-normal opacity-80"> /{item.unit}</span>
                )}
              </span>
            </motion.div>
          ))}
        </div>

        {/* See all CTA */}
        <motion.div
          className="mt-8 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <Link href="/menu">
            <button className="px-6 py-2.5 rounded-full border border-border bg-background text-foreground text-sm font-semibold transition-all hover:bg-muted hover:-translate-y-0.5">
              See All Items →
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Category Showcase
// ─────────────────────────────────────────────
const ALL_CATEGORIES: MenuCategory[] = [
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

function CategoriesSection({ counts }: { counts: Record<string, number> }) {
  return (
    <section id="categories" className="w-full py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
            🗂️ Browse by Category
          </h2>
          <p className="mt-2 text-muted-foreground text-sm md:text-base max-w-md mx-auto">
            From hot sips to hearty plates — we have something for everyone.
          </p>
        </motion.div>

        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {ALL_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={fadeUp}
              whileHover={{ scale: 1.06 }}
              className="flex flex-col items-center gap-2 p-3 rounded-2xl border border-border bg-card shadow-sm hover:shadow-md transition-all cursor-default"
            >
              <span className="text-3xl">{CATEGORY_ICONS[cat]}</span>
              <span className="text-[0.72rem] font-semibold text-foreground text-center leading-tight">
                {cat}
              </span>
              <span className="text-[0.65rem] text-muted-foreground">
                {counts[cat] ?? 0} items
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Info Highlights Bar
// ─────────────────────────────────────────────
const HIGHLIGHTS = [
  { icon: "🌿", label: "Fresh Ingredients" },
  { icon: "🏡", label: "Homemade Recipes" },
  { icon: "⚡", label: "Quick Service" },
  { icon: "📍", label: "Swoyambhu, KTM" },
];

function HighlightsBar() {
  return (
    <section className="w-full py-8 px-4 border-y border-border bg-card/60">
      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-6 md:gap-12">
        {HIGHLIGHTS.map((h, i) => (
          <motion.div
            key={h.label}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="flex items-center gap-3"
          >
            <span className="text-2xl">{h.icon}</span>
            <span className="text-sm font-semibold text-foreground">
              {h.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Final CTA Section
// ─────────────────────────────────────────────
function CTASection({ totalItems }: { totalItems: number }) {
  return (
    <section className="w-full py-20 px-4">
      <motion.div
        className="max-w-2xl mx-auto text-center space-y-6 rounded-3xl border border-border bg-card shadow-lg p-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
      >
        <span className="text-5xl">🍋</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-foreground">
          {totalItems}+ Items on the Menu
        </h2>
        <p className="text-muted-foreground text-sm md:text-base">
          Momo, chowmein, fried rice, freshly brewed teas &amp; much more —
          ready for you at Lemonade Cafe.
        </p>
        <Link href="/menu">
          <button
            className="mt-2 px-8 py-3 rounded-full font-bold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
            }}
          >
            View Full Menu →
          </button>
        </Link>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Root Landing Page export
// ─────────────────────────────────────────────
export default function LandingPage() {
  const allItems = MenuData();
  const availableItems = allItems.filter((i) => i.available);

  // Featured items
  const featured = FEATURED_IDS.map((id) =>
    availableItems.find((i) => i.id === id),
  ).filter(Boolean) as MenuItem[];

  // Category counts
  const counts = availableItems.reduce(
    (acc, item) => {
      acc[item.category] = (acc[item.category] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HighlightsBar />
      <FeaturedSection items={featured} />
      <CategoriesSection counts={counts} />
      <CTASection totalItems={availableItems.length} />
    </div>
  );
}
