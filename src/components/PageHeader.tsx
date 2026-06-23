import Image from "next/image";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden mesh-bg py-20 text-cream md:py-28">
      <div className="absolute inset-0 opacity-30">
        <Image src="/images/abstract-bg.jpg" alt="" fill className="object-cover" sizes="100vw" />
      </div>
      <div className="absolute inset-0 bg-navy/70" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <h1 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-cream/70 md:text-lg">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}