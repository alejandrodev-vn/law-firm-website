"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "practiceAreas", href: "/practice-areas" },
  { key: "team", href: "/team" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const tMeta = useTranslations("meta");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-cream-dark bg-navy text-cream">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="group">
          <span className="font-display text-xl font-semibold tracking-tight text-cream lg:text-2xl">
            {tMeta("siteName")}
          </span>
          <span className="mt-0.5 block text-xs tracking-widest text-gold-light uppercase">
            Law Firm
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className={`px-3 py-2 text-sm transition-colors ${
                isActive(item.href)
                  ? "text-gold-light"
                  : "text-cream/80 hover:text-cream"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
          <LanguageSwitcher />
        </nav>

        <div className="flex items-center gap-3 lg:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 text-cream"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-navy-light bg-navy px-4 py-4 lg:hidden">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`block py-3 text-sm ${
                isActive(item.href) ? "text-gold-light" : "text-cream/80"
              }`}
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}