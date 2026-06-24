import Image from "next/image";

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
    <section className="pt-12 pb-8 sm:pt-16 sm:pb-10 md:pt-20 md:pb-12">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <p className="text-center font-sans text-xs font-semibold tracking-[0.25em] text-gold uppercase">
          Philosophy
        </p>
        <h2 className="mt-2 text-center font-display text-2xl font-semibold text-navy sm:text-3xl md:text-4xl">
          {title}
        </h2>

        <div className="mt-6 grid gap-3 sm:mt-8 md:grid-cols-2 md:gap-4 lg:grid-cols-12 lg:items-stretch">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl sm:aspect-[4/5] sm:rounded-3xl md:col-span-1 md:aspect-[3/4] lg:col-span-5 lg:aspect-auto lg:min-h-0 lg:self-stretch">
            <Image
              src="/images/abstract-bg.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-navy/50" />
            <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6">
              <p className="font-display text-3xl font-semibold text-gold-light/30 sm:text-4xl">S</p>
              <p className="mt-1 text-xs tracking-[0.3em] text-cream/60 uppercase">
                Sophys Law Firm
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:col-span-1 lg:col-span-7">
            <div className="card-hover flex flex-1 flex-col rounded-2xl bg-navy p-4 text-cream sm:rounded-3xl sm:p-5">
              <p className="font-sans text-xs font-bold tracking-[0.25em] text-gold-light uppercase">
                {beyondTitle}
              </p>
              <p className="mt-3 flex-1 font-sans text-sm leading-snug text-cream/80 md:text-[15px] md:leading-relaxed">
                {beyondDesc}
              </p>
            </div>

            <div className="card-hover flex flex-1 flex-col rounded-2xl border border-cream-dark bg-white p-4 sm:rounded-3xl sm:p-5">
              <p className="font-sans text-xs font-bold tracking-[0.25em] text-gold uppercase">
                {besideTitle}
              </p>
              <p className="mt-3 flex-1 font-sans text-sm leading-snug text-charcoal/75 md:text-[15px] md:leading-relaxed">
                {besideDesc}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}