import Image from "next/image";

export default function About() {
  return (
    <section className="relative mt-[350px] w-[90%] bg-brand-green" id="about">
      <h2 className="absolute bottom-full left-0 translate-y-[21%] text-[18vmin] leading-none">
        About.
      </h2>
      <div className="px-6 py-24 text-center text-white min-[375px]:px-10 min-[375px]:py-40">
        <h1 className="pb-5 text-[9vmin]">Hi!, I&apos;m Frontend Developer</h1>

        <p className="mx-auto w-[90%] text-base leading-[30px] min-[375px]:w-3/4">
        I build practical systems that solve real operational problems.
        Focused on logistics, automation and scalable web applications.
        </p>
      </div>
      <article
        className="bg-brand-cyan bg-cover bg-center px-6 pt-[120px] pb-6 min-[375px]:px-10 min-[375px]:pt-[180px]"
        style={{ backgroundImage: "url('/images/cofee.jpg')" }}
      >
        <h2 className="pb-5 text-center text-[8vmin] leading-snug text-brand-blue-font">
          More about me...
        </h2>
        <p className="text-center text-base leading-[30px] text-brand-blue-font md:mx-auto md:my-8 md:w-[60%]">
        I started my journey as a self-taught developer, learning through structured online resources and hands-on projects.
        Today, I focus on building scalable web applications that solve operational and business problems.
        </p>
      </article>
    </section>
  );
}
