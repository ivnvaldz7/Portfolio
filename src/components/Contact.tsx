"use client";

import Image from "next/image";
import { personalInfo } from "@/data/personal";
import { useTranslation } from "@/context/LanguageContext";
import ContactForm from "./ContactForm";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      className="relative mt-[350px] w-[90%] bg-brand-strong-blue"
      id="contact"
    >
      <h2 className="absolute bottom-full left-0 translate-y-[21%] text-[18vmin] leading-none text-brand-text dark:text-white/20">
        {t.contact.sectionTitle}
      </h2>

      <div className="min-[870px]:grid min-[870px]:grid-cols-2">
        {/* Left: info + form */}
        <article className="px-6 py-12 min-[375px]:px-12 min-[375px]:py-20">
          {/* Email */}
          <a
            className="text-[7vmin] text-white transition-colors duration-200 hover:text-brand-logo"
            href={`mailto:${personalInfo.email}`}
          >
            ivnvaldz@
            <br />
            gmail.com
            <span className="mt-16 mb-8 block w-40 border-b-[3px] border-current" />
          </a>
          <p className="pr-4 text-left text-base leading-[30px] text-white min-[375px]:pr-12">
            {t.contact.openTo}
          </p>
          <p className="pr-4 pt-4 text-left text-base leading-[30px] text-white min-[375px]:pr-12">
            {personalInfo.fullName}
            <br />
            {personalInfo.location}
          </p>

          {/* Contact form */}
          <div className="mt-12">
            <h3 className="mb-6 text-xl font-bold text-white">
              {t.contactForm.title}
            </h3>
            <ContactForm />
          </div>
        </article>

        {/* Right: profile photo */}
        <figure className="hidden grayscale transition-[filter] duration-300 hover:grayscale-0 min-[870px]:block min-[870px]:w-full">
          <Image
            src="/images/Perfil.jpg"
            alt="Ivan Valdez profile photo"
            width={600}
            height={800}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </figure>
      </div>
    </section>
  );
}
