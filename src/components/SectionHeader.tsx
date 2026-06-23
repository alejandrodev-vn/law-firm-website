import { Link } from "@/i18n/navigation";

type Props = {
  label?: string;
  title: string;
  subtitle?: string;
  linkHref?: string;
  linkText?: string;
  dark?: boolean;
  centered?: boolean;
};

export default function SectionHeader({
  label,
  title,
  subtitle,
  linkHref,
  linkText,
  dark = false,
  centered = false,
}: Props) {
  return (
    <div
      className={`flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between ${
        centered ? "text-center sm:flex-col sm:items-center" : ""
      }`}
    >
      <div className={centered ? "max-w-2xl" : ""}>
        {label && (
          <p
            className={`mb-3 text-xs font-semibold tracking-[0.25em] uppercase ${
              dark ? "text-gold-light" : "text-gold"
            }`}
          >
            {label}
          </p>
        )}
        <h2
          className={`font-display text-3xl font-semibold tracking-tight md:text-4xl ${
            dark ? "text-cream" : "text-navy"
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`mt-3 text-base leading-relaxed ${
              dark ? "text-cream/60" : "text-muted"
            }`}
          >
            {subtitle}
          </p>
        )}
      </div>
      {linkHref && linkText && (
        <Link
          href={linkHref}
          className={`group hidden shrink-0 items-center gap-2 text-sm font-medium sm:flex ${
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