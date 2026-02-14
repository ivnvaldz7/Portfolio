import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import WhatsAppButton from "@/components/WhatsAppButton";
import AnimatedSection from "@/components/AnimatedSection";

export default function Home() {
  return (
    <>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 place-content-center justify-items-center">
        <Header />
        <main id="main" className="grid w-full grid-cols-1 justify-items-center">
          <Banner />
          <AnimatedSection>
            <About />
          </AnimatedSection>
          <AnimatedSection>
            <ProjectGrid />
          </AnimatedSection>
          <AnimatedSection>
            <Contact />
          </AnimatedSection>
        </main>
      </div>
      <ScrollToTop />
      <WhatsAppButton />
    </>
  );
}
