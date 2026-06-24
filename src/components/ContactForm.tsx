"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "w-full rounded-xl border border-cream-dark bg-white px-4 py-3 text-sm outline-none transition-all focus:border-gold focus:ring-2 focus:ring-gold/20 sm:rounded-2xl sm:px-5 sm:py-3.5 md:text-[15px]";

  if (submitted) {
    return (
      <div className="rounded-2xl border border-gold/30 bg-cream/50 p-6 text-center sm:rounded-3xl sm:p-10">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold/20 text-gold">
          ✓
        </div>
        <p className="text-navy">{t("formSuccess")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-navy">
            {t("formName")}
          </label>
          <input id="name" name="name" type="text" required className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-navy">
            {t("formEmail")}
          </label>
          <input id="email" name="email" type="email" required className={inputClass} />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-navy">
            {t("formPhone")}
          </label>
          <input id="phone" name="phone" type="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="subject" className="mb-2 block text-sm font-medium text-navy">
            {t("formSubject")}
          </label>
          <input id="subject" name="subject" type="text" className={inputClass} />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-navy">
          {t("formMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className={`${inputClass} resize-none`}
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-full bg-navy py-4 text-sm font-semibold text-cream transition-all hover:bg-navy-light hover:shadow-lg sm:w-auto sm:px-12"
      >
        {t("formSubmit")}
      </button>
    </form>
  );
}