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
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "header-light-scrolled" : "header-light"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2.5 sm:py-3 md:px-6 lg:px-8">
        <Link
          href="/"
          className="group flex min-w-0 items-center gap-2 sm:gap-3 md:gap-4 focus-ring rounded-lg"
        >
          <Image
            src={siteConfig.logoTransparent}
            alt={tMeta("siteName")}
            width={160}
            height={116}
            className="h-11 w-auto shrink-0 object-contain transition-opacity duration-300 group-hover:opacity-90 sm:h-14 md:h-16 lg:h-[4.5rem]"
            priority
          />
          <span className="hidden border-l border-[#8B6A2E]/25 pl-3 text-[10px] leading-relaxed tracking-[0.18em] text-[#8B6A2E] uppercase sm:pl-4 sm:text-[11px] sm:tracking-[0.2em] md:block lg:max-w-[12rem]">
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
                data-active={active}
                className={`nav-link focus-ring rounded-lg px-2.5 py-2.5 text-xs font-medium transition-colors duration-300 md:px-3 md:text-sm lg:px-4 ${
                  active
                    ? "font-semibold text-[#8B6A2E]"
                    : "text-slate-700/80 hover:text-burgundy"
                }`}
              >
                {t(item.key)}
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
            className="focus-ring rounded-lg p-2.5 text-slate-800 transition-colors hover:bg-slate-900/5"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
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
        <nav className="max-h-[70vh] overflow-y-auto border-t border-white/12 bg-[rgba(8,13,28,0.97)] px-4 py-3 backdrop-blur-xl md:hidden">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`focus-ring flex min-h-11 items-center gap-3 rounded-xl px-4 py-3 text-sm transition-colors ${
                  active
                    ? "border-l-2 border-champagne bg-champagne/10 pl-[14px] font-medium text-champagne"
                    : "text-ivory/80 hover:bg-white/8 hover:text-ivory"
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