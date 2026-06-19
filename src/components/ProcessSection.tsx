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
    <section className="border-y border-cream-dark bg-white py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4 lg:px-8">
        <div className="text-center">
          <h2 className="font-display text-2xl font-semibold text-navy md:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-charcoal/60">
            {subtitle}
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={step.number} className="relative text-center">
              {index < steps.length - 1 && (
                <div className="absolute top-6 left-[calc(50%+2rem)] hidden h-px w-[calc(100%-4rem)] bg-cream-dark md:block" />
              )}
              <div className="mx-auto flex h-12 w-12 items-center justify-center border border-gold bg-cream font-display text-lg font-semibold text-navy">
                {step.number}
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal/70">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}