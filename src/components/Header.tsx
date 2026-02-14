"use client";

import Image from "next/image";
import { useTranslation } from "@/context/LanguageContext";
import ThemeToggle from "./ThemeToggle";
import LanguageSwitcher from "./LanguageSwitcher";

const navKeys = [
  { href: "#about", key: "about" as const },
  { href: "#projects", key: "projects" as const },
  { href: "#contact", key: "contact" as const },
];

export default function Header() {
  const { t } = useTranslation();

  return (
    <>
      {/* Fixed controls — always visible */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-1 rounded-full bg-white/70 px-1 shadow-sm backdrop-blur-sm dark:bg-white/10">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>

      <header className="flex w-[90%] flex-col items-center pt-4">
        <figure>
          <Image
            src="/icons/icono-portfolio.png"
            alt="Ivan Valdez logo"
            width={50}
            height={50}
            className="block pt-4"
            priority
          />
        </figure>
        <nav className="w-full max-w-[90vw] pt-8" aria-label="Main navigation">
          <ul className="flex justify-evenly text-sm min-[375px]:text-base md:text-xl">
            {navKeys.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-brand-text transition-colors duration-200 hover:text-brand-logo"
                >
                  {t.header[link.key]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
