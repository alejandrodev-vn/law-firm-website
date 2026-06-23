import type { Metadata } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Inter, Noto_Sans_SC, Plus_Jakarta_Sans } from "next/font/google";
import { routing } from "@/i18n/routing";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../globals.css";

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
    openGraph: {
      title: messages.meta.siteName,
      description: messages.meta.tagline,
      locale,
      type: "website",
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

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${plusJakarta.variable} ${notoSansSC.variable} h-full antialiased ${locale === "zh" ? "locale-zh" : ""}`}
    >
      <body className="flex min-h-full flex-col bg-paper font-sans text-charcoal">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}