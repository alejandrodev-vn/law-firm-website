import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/routing";

export default function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const tContact = useTranslations("contact");
  const locale = useLocale() as Locale;
  const year = new Date().getFullYear();

  const quickLinks = [
    { key: "about", href: "/about" },
    { key: "practiceAreas", href: "/practice-areas" },
    { key: "news", href: "/news" },
    { key: "contact", href: "/contact" },
  ] as const;

  return (
    <footer className="bg-navy text-cream">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 lg:grid-cols-3 lg:px-8">
        <div>
          <Image
            src={siteConfig.logo}
            alt="SOPHYS"
            width={120}
            height={87}
            className="mb-4 h-12 w-auto object-contain brightness-0 invert"
          />
          <p className="text-sm leading-relaxed text-cream/70">{t("description")}</p>
          <p className="mt-3 text-sm leading-relaxed text-cream/60">
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
              <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-cream">
                {siteConfig.phone}
              </a>
            </li>
            {siteConfig.email ? (
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-cream">
                  {siteConfig.email}
                </a>
              </li>
            ) : (
              <li className="text-cream/50">{tContact("updating")}</li>
            )}
          </ul>
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