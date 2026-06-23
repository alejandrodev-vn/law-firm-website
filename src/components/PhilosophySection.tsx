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
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <p className="text-center text-xs font-semibold tracking-[0.25em] text-gold uppercase">
          Philosophy
        </p>
        <h2 className="mt-3 text-center font-display text-3xl font-semibold text-navy md:text-4xl">
          {title}
        </h2>

        <div className="mt-16 grid gap-6 lg:grid-cols-12 lg:grid-rows-2">
          <div className="relative overflow-hidden rounded-3xl lg:col-span-5 lg:row-span-2">
            <Image
              src="/images/abstract-bg.jpg"
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-navy/50" />
            <div className="absolute inset-0 flex flex-col justify-end p-8">
              <p className="font-display text-5xl font-semibold text-gold-light/30">S</p>
              <p className="mt-2 text-sm tracking-[0.3em] text-cream/60 uppercase">
                Sophys Law Firm
              </p>
            </div>
          </div>

          <div className="card-hover rounded-3xl bg-navy p-8 text-cream lg:col-span-7">
            <p className="text-xs font-bold tracking-[0.25em] text-gold-light uppercase">
              {beyondTitle}
            </p>
            <p className="mt-5 text-base leading-relaxed text-cream/80">{beyondDesc}</p>
          </div>

          <div className="card-hover rounded-3xl border border-cream-dark bg-white p-8 lg:col-span-7">
            <p className="text-xs font-bold tracking-[0.25em] text-gold uppercase">
              {besideTitle}
            </p>
            <p className="mt-5 text-base leading-relaxed text-charcoal/75">{besideDesc}</p>
          </div>
        </div>
      </div>
    </section>
  );
}