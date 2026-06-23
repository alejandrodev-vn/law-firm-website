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
    <footer className="mesh-bg text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 lg:grid-cols-12 lg:px-8">
        <div className="lg:col-span-5">
          <Image
            src={siteConfig.logoTransparent}
            alt="SOPHYS"
            width={140}
            height={100}
            className="h-14 w-auto object-contain"
          />
          <p className="mt-5 text-sm leading-relaxed text-cream/60">{t("description")}</p>
          <p className="mt-3 text-sm text-cream/50">{siteConfig.address[locale]}</p>
        </div>

        <div className="lg:col-span-3">
          <h3 className="mb-5 text-xs font-bold tracking-[0.2em] text-gold-light uppercase">
            {t("quickLinks")}
          </h3>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="text-sm text-cream/60 transition-colors hover:text-cream"
                >
                  {tNav(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-4">
          <h3 className="mb-5 text-xs font-bold tracking-[0.2em] text-gold-light uppercase">
            {t("contactInfo")}
          </h3>
          <ul className="space-y-3 text-sm">
            <li>
              <a
                href={`tel:${siteConfig.phoneTel}`}
                className="font-medium text-cream hover:text-gold-light"
              >
                {siteConfig.phone}
              </a>
            </li>
            {siteConfig.email ? (
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-cream/60 hover:text-cream">
                  {siteConfig.email}
                </a>
              </li>
            ) : (
              <li className="text-cream/40">{tContact("updating")}</li>
            )}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-cream/40 lg:px-8">
          {t("copyright", { year })}
        </div>
      </div>
    </footer>
  );
}