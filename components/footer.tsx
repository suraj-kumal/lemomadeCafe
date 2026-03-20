import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background mt-auto">
      <div className="mx-auto max-w-7xl px-4 py-10">
        {/* Top section */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {/* Brand */}
          <div className="flex flex-col gap-3">
            <Link href="/">
              <Image
                src="/logo-c.png"
                alt="Lemonade Cafe"
                width={1000}
                height={555}
                className="h-12 w-auto"
                quality={100}
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Your cozy neighbourhood cafe in Swoyambhu, Kathmandu. Famous for
              fresh Lemon Tea, momos, thukpa and much more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Home", href: "/" },
                { label: "Menu", href: "/menu" },
              ].map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Location */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              Find Us
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>📍 Swoyambhu, Kathmandu, Nepal</li>
              <li>
                🕐 Open Daily&nbsp;
                <span className="text-foreground font-medium">7 AM – 8 PM</span>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/search/Lemonade+Cafe+Swoyambhu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors duration-200 underline underline-offset-2"
                >
                  View on Google Maps
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        {/* Divider */}
        <div className="mt-8 border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <p>© {currentYear} Lemonade Cafe. All rights reserved.</p>
          <p>Made with ☕ & 🍋 in Kathmandu</p>

          <p>
            Like this website?{" "}
            <a
              href="https://surajkumal.com.np"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 hover:text-foreground transition-colors"
            >
              Let’s build yours
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
