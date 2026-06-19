type PageHeaderProps = {
  title: string;
  subtitle?: string;
};

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-cream-dark bg-navy py-16 text-cream">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-cream/70">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}