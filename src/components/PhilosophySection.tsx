type Props = {
  title: string;
  beyondTitle: string;
  beyondDesc: string;
  besideTitle: string;
  besideDesc: string;
};

export default function PhilosophySection({
  title,
  beyondTitle,
  beyondDesc,
  besideTitle,
  besideDesc,
}: Props) {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <h2 className="text-center font-display text-2xl font-semibold text-navy md:text-3xl">
          {title}
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          <div className="border-t-2 border-gold bg-white p-8">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">
              {beyondTitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-charcoal/80">
              {beyondDesc}
            </p>
          </div>
          <div className="border-t-2 border-navy bg-navy p-8 text-cream">
            <p className="text-xs font-semibold tracking-[0.2em] text-gold-light uppercase">
              {besideTitle}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cream/80">
              {besideDesc}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}