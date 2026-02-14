import Image from "next/image";

const navLinks = [
  { href: "#about", label: "about." },
  { href: "#projects", label: "projects." },
  { href: "#contact", label: "contact." },
];

export default function Header() {
  return (
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
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-brand-black transition-colors duration-200 hover:text-brand-logo"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
