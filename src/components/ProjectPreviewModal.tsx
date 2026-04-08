"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { getLocalizedText } from "@/data/projects";
import { useTranslation } from "@/context/LanguageContext";
import type { Project } from "@/types";

interface ProjectPreviewModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectPreviewModal({
  project,
  onClose,
}: ProjectPreviewModalProps) {
  const { locale, t } = useTranslation();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    previousFocusRef.current = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }

      if (event.key === "Tab" && modalRef.current) {
        const focusable = modalRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])',
        );

        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project ? (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 px-3 py-3 backdrop-blur-sm sm:items-center sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-preview-title"
            ref={modalRef}
            className="relative max-h-[92vh] w-full max-w-3xl overflow-auto rounded-[30px] border border-white/10 bg-surface-ink p-5 text-white shadow-[0_40px_120px_-48px_rgba(0,0,0,0.75)] sm:p-7"
            initial={{ opacity: 0, y: 28, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 18, scale: 0.98 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
          >
            <div
              className="absolute inset-0 opacity-90"
              style={{
                backgroundImage: project.theme.image
                  ? `linear-gradient(150deg, ${project.theme.from}, ${project.theme.to}), url('${project.theme.image}')`
                  : `linear-gradient(150deg, ${project.theme.from}, ${project.theme.to})`,
                backgroundPosition: "center",
                backgroundSize: project.theme.image ? "cover" : undefined,
              }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_34%)]" />

            <div className="relative space-y-8">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-3">
                  <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-white/68">
                    {t.projects.previewTitle}
                  </span>
                  <div>
                    <h3
                      id="project-preview-title"
                      className="text-3xl font-semibold tracking-tight sm:text-4xl"
                    >
                      {getLocalizedText(project.title, locale)}
                    </h3>
                    <p className="mt-2 max-w-[50ch] text-sm leading-6 text-white/72 sm:text-base">
                      {getLocalizedText(project.subtitle, locale)}
                    </p>
                  </div>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={onClose}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-black/18 text-xl text-white/82 hover:bg-black/26"
                  aria-label={t.projects.closePreview}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M4 4L12 12M12 4L4 12"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>

              <div className="grid gap-6 lg:grid-cols-[220px_minmax(0,1fr)]">
                <div className="space-y-4">
                  <div className="flex h-24 w-24 items-center justify-center rounded-[28px] border border-white/12 bg-white/10 p-4 backdrop-blur-sm">
                    <Image
                      src={project.icon}
                      alt=""
                      aria-hidden="true"
                      width={120}
                      height={120}
                      className="max-h-14 w-auto object-contain brightness-0 invert"
                    />
                  </div>

                  <div className="rounded-[24px] border border-white/12 bg-black/14 p-4">
                    <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-white/52">
                      {t.projects.roleLabel}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/84">
                      {getLocalizedText(project.role, locale)}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  <p className="text-base leading-7 text-white/84">
                    {getLocalizedText(project.summary, locale)}
                  </p>

                  <ul className="grid gap-3">
                    {project.previewBullets.map((bullet) => (
                      <li
                        key={bullet.en}
                        className="rounded-[22px] border border-white/12 bg-black/16 px-4 py-3 text-sm leading-6 text-white/76"
                      >
                        {getLocalizedText(bullet, locale)}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-xs font-medium tracking-wide text-white/80"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2 sm:flex-row">
                <Link
                  href={`/projects/${project.slug}`}
                  className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-surface-ink hover:brightness-95"
                  onClick={onClose}
                >
                  {t.projects.viewCaseStudy}
                </Link>
                {project.links.live ? (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-white/18 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
                  >
                    {t.projects.visitDemo}
                  </a>
                ) : null}
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
