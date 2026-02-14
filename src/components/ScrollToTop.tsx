"use client";

import Image from "next/image";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const { ref, isIntersecting } = useIntersectionObserver({
    rootMargin: "-100px 0px 0px 0px",
  });

  const visible = !isIntersecting;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Invisible sentinel attached to the top of the page */}
      <div ref={ref as React.RefObject<HTMLDivElement>} className="absolute top-0 h-1 w-full" />
      <button
        className={`${styles.go} ${visible ? styles.show : ""}`}
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
      >
        <span className={styles.goButton}>
          <Image
            src="/icons/up-chevron.svg"
            alt=""
            aria-hidden="true"
            width={24}
            height={24}
            className={styles.goIcon}
          />
        </span>
      </button>
    </>
  );
}
