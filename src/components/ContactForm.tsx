"use client";

import { useState, FormEvent } from "react";
import { useTranslation } from "@/context/LanguageContext";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const { t } = useTranslation();

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Something went wrong");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Failed to send");
    }
  }

  if (status === "success") {
    return (
      <div className="py-12 text-center">
        <p className="text-2xl font-bold text-white">{t.contactForm.successTitle}</p>
        <p className="mt-2 text-base text-white/70">
          {t.contactForm.successMessage}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm text-brand-logo underline transition-colors hover:text-white"
        >
          {t.contactForm.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="name"
        placeholder={t.contactForm.name}
        required
        className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/50 outline-none transition-colors focus:border-brand-logo"
      />
      <input
        type="email"
        name="email"
        placeholder={t.contactForm.email}
        required
        className="rounded-md border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/50 outline-none transition-colors focus:border-brand-logo"
      />
      <textarea
        name="message"
        placeholder={t.contactForm.message}
        required
        rows={4}
        className="resize-none rounded-md border border-white/20 bg-white/10 px-4 py-3 text-base text-white placeholder-white/50 outline-none transition-colors focus:border-brand-logo"
      />
      {status === "error" && (
        <p className="text-sm text-brand-salmon">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-md bg-brand-logo px-6 py-3 text-base font-bold text-white transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? t.contactForm.sending : t.contactForm.send}
      </button>
    </form>
  );
}
