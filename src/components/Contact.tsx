"use client";

import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { useTranslation } from "@/context/LanguageContext";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      className="relative w-[90%] bg-surface-ocean"
      id="contact"
      style={{ marginTop: "var(--spacing-section)" }}
    >
      <h2 className="absolute bottom-full left-0 translate-y-[21%] text-[18vmin] font-light leading-none tracking-tight text-text-primary dark:text-on-dark-muted">
        {t.contact.sectionTitle}
      </h2>

      <div className="min-[870px]:grid min-[870px]:grid-cols-2">
        {/* Left: info + form */}
        <article className="flex flex-col justify-between px-8 py-16 min-[375px]:px-12 min-[375px]:py-20">
          {/* Email */}
          <div>
            <a
              className="text-[7vmin] font-light tracking-tight text-on-dark hover:text-accent-coral transition-colors duration-300"
              href={`mailto:${personalInfo.email}`}
            >
              {personalInfo.email.split("@")[0]}@
              <br />
              {personalInfo.email.split("@")[1]}
            </a>
            <span className="mt-10 mb-6 block w-32 border-b border-on-dark-muted" />
            <p className="pr-4 text-base leading-7 text-on-dark-secondary min-[375px]:pr-12 min-[375px]:text-lg min-[375px]:leading-8">
              {t.contact.openTo}
            </p>
            <p className="pr-4 pt-4 text-base leading-7 text-on-dark-secondary min-[375px]:pr-12">
              {personalInfo.fullName}
              <br />
              <span className="text-on-dark-tertiary">{personalInfo.location}</span>
            </p>

            {/* CV Download */}
            <a
              href="/assets/enzo-ivan-valdez-cv.pdf"
              download
              className="mt-8 inline-flex items-center gap-3 rounded-full border border-on-dark-muted px-5 py-2.5 text-sm font-medium tracking-wide text-on-dark-secondary transition-all duration-300 hover:border-accent-coral hover:text-accent-coral"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                <path d="M8 2v9M8 11L4.5 7.5M8 11l3.5-3.5M2 13h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {t.contact.downloadCV}
            </a>
          </div>

          {/* Contact form */}
          <div className="mt-16">
            <h3 className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-on-dark-tertiary">
              {t.contactForm.title}
            </h3>
            <ContactForm />
          </div>
        </article>

        {/* Right: profile photo */}
        <figure className="hidden grayscale transition-[filter] duration-500 hover:grayscale-0 min-[870px]:block min-[870px]:w-full">
          <Image
            src="/images/Perfil.jpg"
            alt="Ivan Valdez profile photo"
            width={600}
            height={800}
            sizes="(max-width: 869px) 0px, (max-width: 1280px) 50vw, 640px"
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
