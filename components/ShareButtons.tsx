"use client";

import { useState } from "react";

interface ShareButtonsProps {
  url: string;
  title: string;
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.45 2.89h-2.33v6.99A10 10 0 0 0 22 12Z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M12.04 2a9.9 9.9 0 0 0-8.5 14.96L2 22l5.2-1.5A9.9 9.9 0 1 0 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.96 1.35-.5.05-1.13.22-3.8-.79-3.2-1.26-5.24-4.53-5.4-4.74-.16-.21-1.3-1.73-1.3-3.3 0-1.57.82-2.34 1.11-2.66.29-.32.63-.4.84-.4h.6c.2 0 .46-.07.71.54.26.62.88 2.14.96 2.3.08.15.13.34.02.55-.1.21-.16.34-.31.52-.16.19-.33.42-.47.56-.16.16-.32.33-.14.65.18.32.8 1.32 1.72 2.14 1.18 1.05 2.17 1.38 2.48 1.54.31.15.5.13.68-.08.18-.21.78-.91.99-1.22.21-.32.42-.26.7-.16.29.11 1.84.87 2.16 1.03.32.16.53.24.6.37.08.13.08.77-.16 1.54Z" />
    </svg>
  );
}

function TelegramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M21.94 3.34 2.72 10.6c-1.32.52-1.3 1.26-.24 1.59l4.93 1.54 1.9 5.8c.23.64.4.88.82.88.53 0 .77-.24 1.24-.8l2.1-2.04 4.05 2.99c.75.41 1.28.2 1.48-.7l2.68-12.6c.27-1.1-.42-1.6-1.74-1.92ZM7.5 13.13l10.6-6.7c.5-.3.96-.14.58.2l-9.05 8.17-.36 3.82-1.77-5.5Z" />
    </svg>
  );
}

function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
  );
}

const buttonClass =
  "inline-flex items-center gap-1.5 rounded-full border border-trace-dim bg-panel px-3 py-1.5 text-xs font-medium text-muted transition-colors hover:border-trace hover:text-trace";

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FacebookIcon />,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <XIcon />,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: <WhatsAppIcon />,
    },
    {
      label: "Telegram",
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <TelegramIcon />,
    },
  ];

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard unavailable (e.g. insecure context) — no-op
    }
  }

  return (
    <div className="flex flex-wrap items-center gap-2" dir="ltr">
      <span className="text-xs text-muted">Share:</span>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
          aria-label={`Share on ${link.label}`}
        >
          {link.icon}
          {link.label}
        </a>
      ))}
      <button type="button" onClick={copyLink} className={buttonClass}>
        <LinkIcon />
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
