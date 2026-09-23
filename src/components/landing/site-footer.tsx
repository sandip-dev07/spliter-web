import { Play } from "lucide-react";
import Image from "next/image";
import { Reveal } from "./reveal";

const COLUMNS: { heading: string; links: { label: string; href: string }[] }[] =
  [
    {
      heading: "Product",
      links: [
        { label: "Split Bills", href: "#features" },
        { label: "Groups", href: "#features" },
        { label: "Settle Up", href: "#features" },
        { label: "Analytics", href: "#features" },
        { label: "Pricing", href: "#pricing" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "#company" },
        { label: "Careers", href: "#company" },
        { label: "Blog", href: "#company" },
        { label: "Contact", href: "#company" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Help Center", href: "#resources" },
        { label: "UPI Guide", href: "#resources" },
        { label: "Trip Calculator", href: "#resources" },
        { label: "Community", href: "#resources" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy", href: "#legal" },
        { label: "Terms", href: "#legal" },
        { label: "Security", href: "#legal" },
      ],
    },
  ];

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.07 0 12 0 12s0 3.93.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.93 24 12 24 12s0-3.93-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />
    </svg>
  );
}

const SOCIALS = [
  { label: "LinkedIn", href: "https://www.linkedin.com", Icon: LinkedInIcon },
  { label: "X", href: "https://x.com", Icon: XIcon },
  { label: "YouTube", href: "https://www.youtube.com", Icon: YouTubeIcon },
];

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-background">
      <Reveal className="mx-auto w-full max-w-5xl px-4 pt-12 sm:px-6 lg:px-8 lg:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.3fr]">
          {COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="text-xs font-semibold tracking-[0.18em] text-zinc-900 uppercase">
                {col.heading}
              </h3>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-zinc-600 transition-colors hover:text-zinc-950"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="flex flex-col gap-5">
            <a
              href="#demo"
              className="group flex items-center gap-4 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm shadow-zinc-900/5 transition-shadow hover:shadow-md"
            >
              <span className="relative block w-28 shrink-0 overflow-hidden rounded-xl">
                <Image
                  src="/images/hero.png"
                  alt="Splitr app demo"
                  width={224}
                  height={140}
                  className="h-[70px] w-full object-cover object-top"
                />
                <span className="absolute inset-0 flex items-center justify-center">
                  <span className="flex size-8 items-center justify-center rounded-full bg-white/90 shadow">
                    <Play className="size-3.5 fill-zinc-900 text-zinc-900" />
                  </span>
                </span>
              </span>
              <span>
                <span className="block text-[11px] font-semibold tracking-[0.18em] text-zinc-500 uppercase">
                  Demo Video
                </span>
                {/* <span className="mt-1 block text-sm font-medium text-zinc-900">
                  Splitr Demo
                </span> */}
              </span>
            </a>

            <div className="flex items-center gap-2.5">
              {SOCIALS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex size-8 items-center justify-center rounded-full bg-zinc-900 text-white transition-colors hover:bg-zinc-700"
                >
                  <social.Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-zinc-200/70 py-6 text-xs text-zinc-400">
          <span>© 2026 Splitr. All rights reserved.</span>
          <span>Made for India</span>
        </div>
      </Reveal>

      <div aria-hidden="true" className="pointer-events-none select-none">
        <p className="font-albra -mb-[0.23em] text-center text-[24vw] leading-none font-semibold tracking-tight text-zinc-900/[0.05] lg:text-[13rem]">
          splitr
        </p>
      </div>
    </footer>
  );
}
