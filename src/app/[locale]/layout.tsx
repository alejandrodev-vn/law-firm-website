import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import {
  Cormorant_Garamond,
  Inter,
  Noto_Sans_SC,
  Plus_Jakarta_Sans,
} from "next/font/google";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import JsonLd from "@/components/JsonLd";
import type { Locale } from "@/i18n/routing";
import "../globals.css";

const siteUrl = "https://law-firm-demo.huytra.dev";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-cjk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-editorial",
  subsets: ["latin", "vietnamese"],
  weight: ["600"],
  style: ["italic"],
  display: "swap",
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = (await import(`@/messages/${locale}.json`)).default;

  return {
    title: {
      default: `${messages.meta.siteName} — ${messages.meta.tagline}`,
      template: `%s | ${messages.meta.siteName}`,
    },
    description: messages.home.heroSubtitle,
    metadataBase: new URL(siteUrl),
    manifest: "/site.webmanifest",
    icons: {
      icon: [{ url: "/favicon.ico" }, { url: "/images/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" }],
      apple: [{ url: "/images/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      title: messages.meta.siteName,
      description: messages.meta.tagline,
      locale,
      type: "website",
      siteName: messages.meta.siteName,
      images: [{ url: "/images/hero-hcm-poster.jpg", width: 1280, height: 720, alt: messages.meta.siteName }],
    },
    twitter: {
      card: "summary_large_image",
      title: messages.meta.siteName,
      description: messages.meta.tagline,
      images: ["/images/hero-hcm-poster.jpg"],
    },
  };
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const localeMessages = (await import(`@/messages/${locale}.json`)).default;

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${plusJakarta.variable} ${notoSansSC.variable} ${cormorantGaramond.variable} h-full antialiased ${locale === "zh" ? "locale-zh" : ""}`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-charcoal">
        <JsonLd
          locale={locale as Locale}
          siteName={localeMessages.meta.siteName}
          description={localeMessages.home.heroSubtitle}
        />
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingActions />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}