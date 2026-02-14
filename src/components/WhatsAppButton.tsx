"use client";

import { personalInfo } from "@/data/personal";
import { useTranslation } from "@/context/LanguageContext";

export default function WhatsAppButton() {
  const { t } = useTranslation();

  if (!personalInfo.whatsapp) return null;

  const message = encodeURIComponent(t.whatsapp.message);
  const url = `https://wa.me/${personalInfo.whatsapp}?text=${message}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.whatsapp.label}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-lg transition-transform duration-300 hover:scale-110"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.132 6.744 3.052 9.38L1.056 31.2l6.04-1.94A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0Zm9.312 22.594c-.39 1.1-1.932 2.014-3.17 2.28-.846.18-1.95.324-5.67-1.218-4.762-1.972-7.826-6.81-8.064-7.124-.23-.314-1.928-2.568-1.928-4.898 0-2.33 1.222-3.476 1.654-3.952.392-.432 1.036-.624 1.65-.624.198 0 .376.01.536.018.432.018.648.042.932.72.356.846 1.222 2.982 1.33 3.198.108.218.218.514.068.81-.14.302-.264.436-.482.684-.218.248-.424.44-.642.708-.198.234-.42.484-.176.916.244.432 1.084 1.786 2.328 2.894 1.6 1.424 2.948 1.866 3.366 2.072.326.16.716.132.972-.144.326-.352.728-.936 1.138-1.512.29-.41.658-.462 1.018-.314.364.144 2.31 1.09 2.706 1.288.396.198.66.296.758.462.096.166.096.96-.294 2.06Z" />
      </svg>
    </a>
  );
}
