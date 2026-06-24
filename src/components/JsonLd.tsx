import { siteConfig } from "@/data/site";
import type { Locale } from "@/i18n/routing";

type Props = {
  locale: Locale;
  siteName: string;
  description: string;
};

export default function JsonLd({ locale, siteName, description }: Props) {
  const data = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: siteName,
    description,
    slogan: siteConfig.slogan,
    url: "https://law-firm-demo.huytra.dev",
    telephone: siteConfig.phoneTel,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address[locale],
      addressLocality: "Ho Chi Minh City",
      addressCountry: "VN",
    },
    areaServed: {
      "@type": "Country",
      name: "Vietnam",
    },
    availableLanguage: ["Vietnamese", "English", "Chinese"],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}