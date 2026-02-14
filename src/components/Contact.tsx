import Image from "next/image";
import { personalInfo } from "@/data/personal";

export default function Contact() {
  return (
    <section
      className="relative mt-[350px] w-[90%] bg-brand-strong-blue min-[870px]:grid min-[870px]:grid-cols-2"
      id="contact"
    >
      <h2 className="absolute bottom-full left-0 translate-y-[21%] text-[18vmin] leading-none">
        Say hi.
      </h2>
      <article className="px-6 py-12 text-[7vmin] text-white min-[375px]:px-12 min-[375px]:py-20 min-[630px]:w-[70%] min-[870px]:col-start-1 min-[870px]:w-full">
        <a
          className="text-white transition-colors duration-200 hover:text-brand-logo"
          href={`mailto:${personalInfo.email}`}
        >
          ivnvaldz@
          <br />
          gmail.com
          <span className="mt-16 mb-8 block w-40 border-b-[3px] border-current" />
        </a>
        <p className="pr-4 text-left text-base leading-[30px] min-[375px]:pr-12">
          I’m open to opportunities where I can contribute to real-world
          systems, automation and business-driven applications
        </p>
        <p className="pr-4 pt-4 text-left text-base leading-[30px] min-[375px]:pr-12">
          {personalInfo.fullName}
          <br />
          {personalInfo.location}
        </p>
      </article>
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
    </section>
  );
}
