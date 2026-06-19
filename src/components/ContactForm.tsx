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

  if (submitted) {
    return (
      <div className="border border-gold/30 bg-cream p-8 text-center">
        <p className="text-navy">{t("formSuccess")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-navy">
            {t("formName")}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full border border-cream-dark bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-navy">
            {t("formEmail")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full border border-cream-dark bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
          />
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-navy">
            {t("formPhone")}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full border border-cream-dark bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
          />
        </div>
        <div>
          <label htmlFor="subject" className="mb-1.5 block text-sm font-medium text-navy">
            {t("formSubject")}
          </label>
          <input
            id="subject"
            name="subject"
            type="text"
            className="w-full border border-cream-dark bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-navy">
          {t("formMessage")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full resize-none border border-cream-dark bg-white px-4 py-2.5 text-sm outline-none transition-colors focus:border-gold"
        />
      </div>
      <button
        type="submit"
        className="bg-navy px-8 py-3 text-sm font-medium tracking-wide text-cream transition-colors hover:bg-navy-light"
      >
        {t("formSubmit")}
      </button>
    </form>
  );
}