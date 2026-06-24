import { Link } from "@/i18n/navigation";

type Props = {
  label?: string;
  title: string;
  subtitle?: string;
  linkHref?: string;
  linkText?: string;
  dark?: boolean;
  centered?: boolean;
  compact?: boolean;
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  linkHref,
  linkText,
  dark = false,
  centered = false,
  compact = false,
}: Props) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end sm:justify-between ${
        compact ? "gap-3" : "gap-4"
      } ${centered ? "text-center sm:flex-col sm:items-center" : ""}`}
    >
      <div className={centered ? "max-w-2xl" : ""}>
        {label && (
          <p
            className={`font-sans text-xs font-semibold tracking-[0.25em] uppercase ${
              compact ? "mb-2" : "mb-3"
            } ${dark ? "text-gold-light" : "text-gold"}`}
          >
            {label}
          </p>
        )}
        <h2
          className={`font-display text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl ${
            dark ? "text-cream" : "text-navy"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`font-sans text-base leading-relaxed md:text-[17px] md:leading-relaxed ${
              compact ? "mt-2" : "mt-3"
            } ${dark ? "text-cream/60" : "text-muted"}`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {linkHref && linkText && (
        <Link
          href={linkHref}
          className={`group hidden shrink-0 items-center gap-2 font-sans text-sm font-medium sm:flex ${
            dark ? "text-gold-light hover:text-cream" : "text-gold hover:text-gold-light"
          }`}
        >
          {linkText}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </Link>
      )}
    </div>
  );
}