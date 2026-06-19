import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();

  const quickLinks = [
    { key: "about", href: "/about" },
    { key: "practiceAreas", href: "/practice-areas" },
    { key: "team", href: "/team" },
    { key: "news", href: "/news" },
    { key: "contact", href: "/contact" },
  ] as const;

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold">{t("description")}</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/70">
            {siteConfig.address[locale]}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-gold-light uppercase">
            {t("quickLinks")}
          </h3>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  {tNav(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold tracking-wider text-gold-light uppercase">
            {t("contactInfo")}
          </h3>
          <ul className="space-y-2 text-sm text-cream/70">
            <li>
              <a href={`tel:${siteConfig.phone}`} className="hover:text-cream">
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-cream">
                {siteConfig.email}
              </a>
            </li>
          </ul>
          <div className="mt-4 flex gap-4">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold-light"
              aria-label="LinkedIn"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.127 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cream/60 hover:text-gold-light"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-light">
        <div className="mx-auto max-w-6xl px-4 py-4 text-center text-xs text-cream/50 lg:px-8">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
}