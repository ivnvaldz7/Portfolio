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
        <article className="px-8 py-16 min-[375px]:px-12 min-[375px]:py-20">
          {/* Email */}
          <a
            className="text-[7vmin] font-light tracking-tight text-on-dark hover:text-accent-coral"
            href={`mailto:${personalInfo.email}`}
          >
            {personalInfo.email.split("@")[0]}@
            <br />
            {personalInfo.email.split("@")[1]}
            <span className="mt-12 mb-8 block w-40 border-b-2 border-on-dark-muted" />
          </a>
          <p className="pr-4 text-base leading-7 text-on-dark-secondary min-[375px]:pr-12 min-[375px]:text-lg min-[375px]:leading-8">
            {t.contact.openTo}
          </p>
          <p className="pr-4 pt-4 text-base leading-7 text-on-dark-secondary min-[375px]:pr-12">
            {personalInfo.fullName}
            <br />
            <span className="text-on-dark-tertiary">{personalInfo.location}</span>
          </p>

          {/* Contact form */}
          <div className="mt-16">
            <h3 className="mb-8 text-xl font-semibold tracking-tight text-on-dark">
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
