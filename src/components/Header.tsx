"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import LanguageSwitcher from "./LanguageSwitcher";

const navItems = [
  { key: "home", href: "/" },
  { key: "about", href: "/about" },
  { key: "practiceAreas", href: "/practice-areas" },
  { key: "news", href: "/news" },
  { key: "contact", href: "/contact" },
] as const;

export default function Header() {
  const t = useTranslations("nav");
  const tMeta = useTranslations("meta");
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 backdrop-blur-xl ${
        scrolled
          ? "border-b border-white/10 bg-navy/[0.97] shadow-lg shadow-black/25"
          : "border-b border-white/[0.07] bg-navy-mid/[0.92]"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:py-3 md:px-6 lg:px-8">
        <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3 md:gap-4">
          <Image
            src={siteConfig.logoTransparent}
            alt={tMeta("siteName")}
            width={160}
            height={116}
            className="h-11 w-auto shrink-0 object-contain transition-opacity group-hover:opacity-90 sm:h-14 md:h-16 lg:h-[4.5rem]"
            priority
          />
          <span className="hidden border-l border-gold/20 pl-3 text-[10px] leading-relaxed tracking-[0.18em] text-gold-light uppercase sm:pl-4 sm:text-[11px] sm:tracking-[0.2em] md:block lg:max-w-[12rem]">
            {tMeta("tagline")}
          </span>
        </Link>

        <nav className="hidden items-center gap-0.5 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                className={`relative rounded-lg px-2.5 py-2 text-xs font-medium transition-all md:px-3 md:py-2 md:text-sm lg:px-4 lg:py-2.5 ${
                  active
                    ? "text-gold-light"
                    : "text-cream/55 hover:bg-white/5 hover:text-cream"
                }`}
              >
                {t(item.key)}
                <span
                  className={`absolute right-3 bottom-1.5 left-3 h-px rounded-full transition-all ${
                    active
                      ? "bg-gradient-to-r from-transparent via-gold to-transparent opacity-100"
                      : "opacity-0"
                  }`}
                />
                {active && (
                  <span className="absolute top-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-gold-light" />
                )}
              </Link>
            );
          })}
          <LanguageSwitcher />
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:hidden">
          <LanguageSwitcher compact />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="rounded-lg p-2 text-cream/80 hover:bg-white/10"
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
        <nav className="border-t border-white/10 bg-navy/95 px-4 py-4 backdrop-blur-xl md:hidden">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors ${
                  active
                    ? "border-l-2 border-gold bg-gold/10 pl-[14px] font-medium text-gold-light"
                    : "text-cream/75 hover:bg-white/5"
                }`}
              >
                {t(item.key)}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}