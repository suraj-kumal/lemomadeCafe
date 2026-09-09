"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MenuData, { MenuCategory, MenuItem } from "@/data/menudata";

// ─────────────────────────────────────────────
// Shared placeholder image slot for content
// we don't have real photography for yet.
// Sharp corners throughout — grid cells, not cards.
// ─────────────────────────────────────────────
function ImageSlot({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: "var(--muted)" }}
    >
      <span
        className="text-[10px] tracking-wide text-center px-2"
        style={{ color: "var(--muted-foreground)", opacity: 0.55 }}
      >
        {label}
      </span>
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, var(--foreground) 0, var(--foreground) 1px, transparent 1px, transparent 14px)",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// Animation — one orchestrated hero entrance,
// everything else is a single restrained
// fade-slide the first time it enters view.
// ─────────────────────────────────────────────
const reveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

const clipReveal: Variants = {
  hidden: { clipPath: "inset(0 0 100% 0)" },
  visible: {
    clipPath: "inset(0 0 0% 0)",
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
  },
};

const row: Variants = {
  hidden: { opacity: 0, x: -12 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.04 },
  }),
};

function pad(n: number) {
  return n.toString().padStart(2, "0");
}

// ─────────────────────────────────────────────
// Masthead
// ─────────────────────────────────────────────
function Masthead() {
  return (
    <header
      className="w-full border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-5 flex items-baseline justify-between">
        <span
          className="text-xl md:text-2xl leading-none"
          style={{ color: "var(--foreground)" }}
        >
          Lemonade Cafe
        </span>
        <span
          className="text-sm md:text-base leading-none"
          style={{ color: "var(--muted-foreground)" }}
        >
          Swoyambhu, Kathmandu
        </span>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────────
// Hero — asymmetric split, real photo, one
// choreographed entrance on load.
// ─────────────────────────────────────────────
function HeroSection() {
  return (
    <section
      className="w-full grid grid-cols-1 md:grid-cols-12 border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="md:col-span-7 px-6 md:px-10 py-16 md:py-24 flex flex-col justify-center">
        <motion.h1
          className="text-[13vw] leading-[0.95] md:text-[5.5vw] md:leading-[0.95]"
          style={{ color: "var(--foreground)" }}
          initial="hidden"
          animate="visible"
        >
          <motion.span className="block" variants={reveal} custom={0}>
            Fresh.
          </motion.span>
          <motion.span
            className="block"
            variants={reveal}
            custom={1}
            style={{ color: "var(--secondary)" }}
          >
            Homemade.
          </motion.span>
          <motion.span className="block" variants={reveal} custom={2}>
            Full of flavor.
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-8 max-w-md text-base md:text-lg"
          style={{ color: "var(--muted-foreground)" }}
          variants={reveal}
          custom={3}
          initial="hidden"
          animate="visible"
        >
          Lemon tea, fresh lemonades, strong coffee &amp; hearty Nepali bites —
          made the way we&apos;d make it for our own family.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4"
          variants={reveal}
          custom={4}
          initial="hidden"
          animate="visible"
        >
          <Link href="/menu">
            <button
              className="px-6 py-3 text-sm md:text-base transition-opacity hover:opacity-85"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              View full menu
            </button>
          </Link>
          <a
            href="#categories"
            className="text-sm md:text-base underline underline-offset-4"
            style={{
              color: "var(--foreground)",
              textDecorationColor: "var(--secondary)",
            }}
          >
            Browse categories
          </a>
        </motion.div>
      </div>

      {/* Real photo — portrait 5152×7724, cropped to fill the column */}
      <motion.div
        className="relative md:col-span-5 min-h-[22rem] md:min-h-0 border-t md:border-t-0 md:border-l"
        style={{ borderColor: "var(--border)" }}
        variants={clipReveal}
        initial="hidden"
        animate="visible"
      >
        <Image
          src="/lemonade.jpg"
          alt="Lemonade Cafe"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 42vw"
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Highlights — plain hairline-divided row,
// no icons, no pills.
// ─────────────────────────────────────────────
const HIGHLIGHTS = [
  "Fresh ingredients",
  "Homemade recipes",
  "Quick service",
  "Relax environment",
];

// function HighlightsBar() {
//   return (
//     <section
//       className="w-full border-b"
//       style={{ borderColor: "var(--border)" }}
//     >
//       <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-wrap gap-x-10 gap-y-3">
//         {HIGHLIGHTS.map((h, i) => (
//           <motion.span
//             key={h}
//             custom={i}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             variants={reveal}
//             className="text-sm md:text-base"
//             style={{ color: "var(--foreground)" }}
//           >
//             {h}
//           </motion.span>
//         ))}
//       </div>
//     </section>
//   );
// }
function HighlightsBar() {
  return (
    <section
      className="w-full border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-5 md:py-6">
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-10 sm:gap-y-3">
          {HIGHLIGHTS.map((h, i) => (
            <motion.span
              key={h}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={reveal}
              className="text-sm md:text-base leading-snug"
              style={{ color: "var(--foreground)" }}
            >
              {h}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Featured items — grid of cells divided by
// hairlines, no rounded cards, no emoji.
// ─────────────────────────────────────────────
// function FeaturedSection({ items }: { items: MenuItem[] }) {
//   return (
//     <section
//       className="w-full border-b"
//       style={{ borderColor: "var(--border)" }}
//     >
//       <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
//         <div className="flex items-baseline justify-between mb-10 md:mb-14">
//           <h2
//             className="text-3xl md:text-4xl"
//             style={{ color: "var(--foreground)" }}
//           >
//             Our favourites
//           </h2>
//           <Link
//             href="/menu"
//             className="text-sm md:text-base underline underline-offset-4 hidden sm:block"
//             style={{
//               color: "var(--muted-foreground)",
//               textDecorationColor: "var(--secondary)",
//             }}
//           >
//             See all items
//           </Link>
//         </div>

//         <div
//           className="grid grid-cols-2 md:grid-cols-3 border-t border-l"
//           style={{ borderColor: "var(--border)" }}
//         >
//           {items.map((item, i) => (
//             <motion.div
//               key={item.id}
//               custom={i}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, margin: "-40px" }}
//               variants={reveal}
//               className="border-b border-r flex flex-col"
//               style={{ borderColor: "var(--border)" }}
//             >
//               <ImageSlot label={item.name} className="aspect-square w-full" />
//               <div className="p-4 md:p-5 flex items-baseline justify-between gap-2">
//                 <div>
//                   <p
//                     className="text-base md:text-lg leading-tight"
//                     style={{ color: "var(--foreground)" }}
//                   >
//                     {item.name}
//                   </p>
//                   <p
//                     className="text-xs md:text-sm mt-0.5"
//                     style={{ color: "var(--muted-foreground)" }}
//                   >
//                     {item.category}
//                   </p>
//                 </div>
//                 <span
//                   className="shrink-0 text-sm md:text-base tabular-nums"
//                   style={{ color: "var(--secondary)" }}
//                 >
//                   Rs. {item.price}
//                   {item.unit && (
//                     <span className="opacity-70"> /{item.unit}</span>
//                   )}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <Link
//           href="/menu"
//           className="mt-8 inline-block text-sm md:text-base underline underline-offset-4 sm:hidden"
//           style={{
//             color: "var(--muted-foreground)",
//             textDecorationColor: "var(--secondary)",
//           }}
//         >
//           See all items
//         </Link>
//       </div>
//     </section>
//   );
// }
//
function FeaturedSection({ items }: { items: MenuItem[] }) {
  return (
    <section
      className="w-full border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <div className="flex items-baseline justify-between mb-10 md:mb-14">
          <h2
            className="text-3xl md:text-4xl"
            style={{ color: "var(--foreground)" }}
          >
            Our favourites
          </h2>

          <Link
            href="/menu"
            className="text-sm md:text-base underline underline-offset-4 hidden sm:block"
            style={{
              color: "var(--muted-foreground)",
              textDecorationColor: "var(--secondary)",
            }}
          >
            See all items
          </Link>
        </div>

        <div
          className="grid grid-cols-2 md:grid-cols-3 border-t border-l"
          style={{ borderColor: "var(--border)" }}
        >
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={reveal}
              className="border-b border-r flex flex-col"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Real image */}
              <div className="relative aspect-square w-full">
                <Image
                  src={`/images/${item.name}.jpg`}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-4 md:p-5 flex items-baseline justify-between gap-2">
                <div>
                  <p
                    className="text-base md:text-lg leading-tight"
                    style={{ color: "var(--foreground)" }}
                  >
                    {item.name}
                  </p>

                  <p
                    className="text-xs md:text-sm mt-0.5"
                    style={{ color: "var(--muted-foreground)" }}
                  >
                    {item.category}
                  </p>
                </div>

                <span
                  className="shrink-0 text-sm md:text-base tabular-nums"
                  style={{ color: "var(--secondary)" }}
                >
                  Rs. {item.price}
                  {item.unit && (
                    <span className="opacity-70"> /{item.unit}</span>
                  )}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href="/menu"
          className="mt-8 inline-block text-sm md:text-base underline underline-offset-4 sm:hidden"
          style={{
            color: "var(--muted-foreground)",
            textDecorationColor: "var(--secondary)",
          }}
        >
          See all items
        </Link>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Categories — numbered Swiss list.
// ─────────────────────────────────────────────
const ORDERED_CATEGORIES: MenuCategory[] = [
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
    <section
      id="categories"
      className="w-full border-b"
      style={{ borderColor: "var(--border)" }}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
        <h2
          className="text-3xl md:text-4xl mb-10 md:mb-14"
          style={{ color: "var(--foreground)" }}
        >
          What we serve
        </h2>

        <div>
          {ORDERED_CATEGORIES.map((cat, i) => (
            <motion.a
              key={cat}
              href={"/menu#" + cat}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              variants={row}
              className="group flex items-center gap-4 md:gap-8 py-4 md:py-5 border-t"
              style={{ borderColor: "var(--border)" }}
            >
              <span
                className="w-8 md:w-12 shrink-0 text-sm md:text-base tabular-nums"
                style={{ color: "var(--muted-foreground)" }}
              >
                {pad(i + 1)}
              </span>

              <span
                className="relative flex-1 inline-block w-fit text-xl md:text-3xl leading-none"
                style={{ color: "var(--foreground)" }}
              >
                {cat}
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-1 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"
                  style={{ background: "var(--secondary)" }}
                />
              </span>

              <span
                className="shrink-0 text-xs md:text-sm hidden sm:block"
                style={{ color: "var(--muted-foreground)" }}
              >
                {counts[cat] ?? 0} items
              </span>

              {/*<ImageSlot
                label=""
                className="w-14 h-14 md:w-20 md:h-20 shrink-0"
              />*/}
            </motion.a>
          ))}
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Final CTA — the one place the page spends
// its boldness: full-width inverted color band.
// ─────────────────────────────────────────────
function CTASection({ totalItems }: { totalItems: number }) {
  return (
    <section className="w-full" style={{ background: "var(--foreground)" }}>
      <motion.div
        className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={reveal}
      >
        <h2
          className="text-4xl md:text-6xl leading-[0.95] max-w-lg"
          style={{ color: "var(--background)" }}
        >
          {totalItems}+ items on the menu.
        </h2>
        <div className="flex flex-col gap-4 md:items-end">
          <p
            className="text-sm md:text-base max-w-xs md:text-right"
            style={{ color: "var(--background)", opacity: 0.75 }}
          >
            Momo, chowmein, fried rice, freshly brewed teas &amp; much more —
            ready for you at Lemonade Cafe.
          </p>
          <Link href="/menu">
            <button
              className="px-6 py-3 text-sm md:text-base transition-opacity hover:opacity-85"
              style={{
                background: "var(--primary)",
                color: "var(--primary-foreground)",
              }}
            >
              View full menu
            </button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

// ─────────────────────────────────────────────
// Root Landing Page
// ─────────────────────────────────────────────
export default function LandingPage() {
  const allItems = MenuData();
  const availableItems = allItems.filter((i) => i.available);

  const FEATURED_IDS = [1, 6, 12, 17, 22, 32];
  const featured = FEATURED_IDS.map((id) =>
    availableItems.find((i) => i.id === id),
  ).filter(Boolean) as MenuItem[];

  const counts = availableItems.reduce(
    (acc, item) => {
      acc[item.category] = (acc[item.category] ?? 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );

  return (
    <div style={{ background: "var(--background)" }}>
      {/*<Masthead />*/}
      <HeroSection />
      <HighlightsBar />
      <FeaturedSection items={featured} />
      <CategoriesSection counts={counts} />
      <CTASection totalItems={availableItems.length} />
    </div>
  );
}
