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
          className="mt-8 text-sm font-medium text-accent-coral underline underline-offset-4 hover:text-on-dark transition-colors duration-300"
        >
          {t.contactForm.sendAnother}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-2 gap-3">
        <input
          type="text"
          name="name"
          placeholder={t.contactForm.name}
          required
          className="border-b border-on-dark-muted bg-transparent px-1 py-3 text-sm text-on-dark placeholder-on-dark-tertiary outline-none transition-colors duration-300 focus:border-accent-coral"
        />
        <input
          type="email"
          name="email"
          placeholder={t.contactForm.email}
          required
          className="border-b border-on-dark-muted bg-transparent px-1 py-3 text-sm text-on-dark placeholder-on-dark-tertiary outline-none transition-colors duration-300 focus:border-accent-coral"
        />
      </div>
      <textarea
        name="message"
        placeholder={t.contactForm.message}
        required
        rows={3}
        className="resize-none border-b border-on-dark-muted bg-transparent px-1 py-3 text-sm text-on-dark placeholder-on-dark-tertiary outline-none transition-colors duration-300 focus:border-accent-coral"
      />
      {status === "error" && (
        <p className="text-sm font-medium text-accent-ember">{errorMsg}</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 self-start rounded-full border border-on-dark-muted bg-transparent px-6 py-2.5 text-sm font-medium tracking-wide text-on-dark transition-all duration-300 hover:border-accent-coral hover:text-accent-coral disabled:opacity-50"
      >
        {status === "loading" ? t.contactForm.sending : t.contactForm.send}
      </button>
    </form>
  );
}
