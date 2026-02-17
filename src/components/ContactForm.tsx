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
        <p className="text-2xl font-semibold tracking-tight text-on-dark">{t.contactForm.successTitle}</p>
        <p className="mt-3 text-base text-on-dark-tertiary">
          {t.contactForm.successMessage}
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-8 text-sm font-medium text-accent-coral underline underline-offset-4 hover:text-on-dark"
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
        className="rounded-[var(--radius-md)] border border-on-dark-muted bg-white/8 px-4 py-3 text-base text-on-dark placeholder-on-dark-tertiary outline-none hover:border-on-dark-tertiary focus:border-accent-coral"
      />
      <input
        type="email"
        name="email"
        placeholder={t.contactForm.email}
        required
        className="rounded-[var(--radius-md)] border border-on-dark-muted bg-white/8 px-4 py-3 text-base text-on-dark placeholder-on-dark-tertiary outline-none hover:border-on-dark-tertiary focus:border-accent-coral"
      />
      <textarea
        name="message"
        placeholder={t.contactForm.message}
        required
        rows={4}
        className="resize-none rounded-[var(--radius-md)] border border-on-dark-muted bg-white/8 px-4 py-3 text-base text-on-dark placeholder-on-dark-tertiary outline-none hover:border-on-dark-tertiary focus:border-accent-coral"
      />
      {status === "error" && (
        <p className="text-sm font-medium text-accent-ember">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-[var(--radius-md)] bg-accent-coral px-6 py-3 text-base font-semibold text-white hover:brightness-110 active:brightness-95 disabled:opacity-50"
      >
        {status === "loading" ? t.contactForm.sending : t.contactForm.send}
      </button>
    </form>
  );
}
