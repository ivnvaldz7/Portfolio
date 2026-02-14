import Header from "@/components/Header";
import Banner from "@/components/Banner";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import Contact from "@/components/Contact";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <div className="mx-auto grid max-w-[1280px] grid-cols-1 place-content-center justify-items-center">
        <Header />
        <main className="grid w-full grid-cols-1 justify-items-center">
          <Banner />
          <About />
          <ProjectGrid />
          <Contact />
        </main>
      </div>
      <ScrollToTop />
    </>
  );
}
