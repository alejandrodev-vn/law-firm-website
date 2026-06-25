type Props = {
  line1: string;
  line2: string;
};

export default function BrandMottoQuote({ line1, line2 }: Props) {
  return (
    <figure className="relative overflow-hidden rounded-2xl border border-gold/20 bg-[linear-gradient(145deg,rgba(252,250,246,0.98)_0%,rgba(243,239,230,0.55)_55%,rgba(250,248,244,0.9)_100%)] px-5 py-6 shadow-[0_12px_40px_-30px_rgba(12,18,34,0.22)] sm:rounded-[1.4rem] sm:px-7 sm:py-7">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "radial-gradient(rgba(196, 160, 82, 0.05) 1px, transparent 1px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div
        aria-hidden
        className="absolute top-5 bottom-5 left-0 w-[2px] rounded-r-sm bg-gradient-to-b from-transparent via-gold/50 to-transparent"
      />
      <div
        aria-hidden
        className="absolute top-0 left-5 h-px w-16 bg-gradient-to-r from-gold/45 to-transparent sm:left-7"
      />
      <div
        aria-hidden
        className="absolute right-5 bottom-0 h-px w-20 bg-gradient-to-l from-gold/35 to-transparent sm:right-7"
      />

      <span
        aria-hidden
        className="pointer-events-none absolute right-2 bottom-1 font-display text-[4.5rem] font-semibold leading-none text-gold/[0.055] select-none sm:right-3 sm:text-[5.5rem]"
      >
        S
      </span>

      <div className="relative pl-4 sm:pl-5">
        <div aria-hidden className="flex items-center gap-2.5">
          <span className="h-px w-8 bg-gradient-to-r from-gold/55 to-transparent" />
          <span className="h-1 w-1 rotate-45 border border-gold/55 bg-gold/15" />
          <span className="h-px w-8 bg-gradient-to-l from-gold/55 to-transparent" />
        </div>

        <blockquote className="mt-4 space-y-0.5 sm:mt-5">
          <p className="font-manifesto text-[1.4rem] leading-[1.14] font-semibold italic text-burgundy sm:text-[1.6rem]">
            {line1}
          </p>
          <p className="font-manifesto text-[1.4rem] leading-[1.14] font-semibold italic text-navy/78 sm:text-[1.6rem]">
            {line2}
          </p>
        </blockquote>

        <div aria-hidden className="mt-5 flex items-center gap-2 sm:mt-6">
          <span className="h-1 w-1 rounded-full bg-gold/55" />
          <span className="h-px w-12 bg-gradient-to-r from-gold/50 to-transparent sm:w-14" />
        </div>
      </div>
    </figure>
  );
}