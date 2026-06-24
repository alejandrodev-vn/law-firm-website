type Step = {
  number: string;
  title: string;
  desc: string;
};

type Props = {
  title: string;
  subtitle: string;
  steps: Step[];
};

export default function ProcessSection({ title, subtitle, steps }: Props) {
  return (
    <section className="mesh-bg py-16 text-cream sm:py-20 md:py-28 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="font-sans text-xs font-semibold tracking-[0.25em] text-gold-light uppercase">
            Process
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold md:text-4xl">{title}</h2>
          <p className="mt-4 font-sans text-base leading-relaxed text-cream/60 md:text-[17px] md:leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-5 md:mt-16 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative rounded-2xl glass p-5 transition-all hover:bg-white/10 sm:rounded-3xl sm:p-6"
            >
              {index < steps.length - 1 && (
                <div className="absolute top-1/2 -right-3 hidden h-px w-6 bg-gold/30 lg:block" />
              )}
              <span className="font-display text-4xl font-semibold text-gold-light/40">
                {step.number}
              </span>
              <h3 className="mt-4 font-display text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-cream/60">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}