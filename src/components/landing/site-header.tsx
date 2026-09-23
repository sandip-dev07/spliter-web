"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const PRODUCT_LINKS = [
  { label: "Overview", href: "#product" },
  { label: "Payments", href: "#payments" },
  { label: "Cards", href: "#cards" },
  { label: "Analytics", href: "#analytics" },
];

const SOLUTION_LINKS = [
  { label: "For Creators", href: "#creators" },
  { label: "For Freelancers", href: "#freelancers" },
  { label: "For Teams", href: "#teams" },
];

const SIMPLE_LINKS = [
  { label: "Pricing", href: "#pricing" },
  { label: "Company", href: "#company" },
];

const LINK_CLASS =
  "h-auto rounded-full px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-transparent hover:text-zinc-950 focus:bg-transparent data-popup-open:bg-transparent data-popup-open:hover:bg-transparent";

function Logo() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="size-6 text-zinc-900"
    >
      <path d="M8 3.5v17" />
      <path d="M8 12a4.5 4.5 0 1 0 4.5 4.5" />
      <path d="M8 12a4.5 4.5 0 1 1 4.5-4.5" />
      <path d="M12.5 12h4" />
    </svg>
  );
}

function NavDropdown({
  label,
  links,
}: {
  label: string;
  links: { label: string; href: string }[];
}) {
  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger className={LINK_CLASS}>
        {label}
      </NavigationMenuTrigger>
      <NavigationMenuContent className="flex w-52 flex-col gap-0.5 rounded-2xl">
        {links.map((link) => (
          <NavigationMenuLink
            key={link.label}
            href={link.href}
            closeOnClick
            className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-600"
          >
            {link.label}
          </NavigationMenuLink>
        ))}
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-3 py-3 sm:px-4 sm:py-4">
      <div className="mx-auto flex w-full items-center gap-1 rounded-2xl border border-zinc-200/70 bg-white/85 p-1.5 shadow-sm shadow-zinc-900/5 backdrop-blur-xl md:w-fit">
        <a
          href="/"
          aria-label="Splitr home"
          onClick={() => setOpen(false)}
          className="font-albra mr-auto px-3 text-lg font-semibold tracking-tight text-zinc-900 md:mr-0 md:px-3.5"
        >
          Splitr<span className="text-[#18C595]">.</span>
        </a>

        <NavigationMenu className="hidden md:flex" align="center">
          <NavigationMenuList className={"gap-0"}>
            <NavDropdown label="Product" links={PRODUCT_LINKS} />
            <NavDropdown label="Solutions" links={SOLUTION_LINKS} />
            {SIMPLE_LINKS.map((link) => (
              <NavigationMenuItem key={link.label}>
                <NavigationMenuLink href={link.href} className={LINK_CLASS}>
                  {link.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <Button
          nativeButton={false}
          render={<a href="#login">Sign In</a>}
          className="ml-1 h-auto rounded-xl px-4 py-2 sm:px-5"
        />

        <Button
          variant="ghost"
          size="icon"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="size-9 shrink-0 rounded-full text-zinc-700 hover:bg-zinc-100 md:hidden"
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mx-auto mt-2 flex flex-col gap-1 overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/95 p-3 shadow-lg shadow-zinc-900/5 backdrop-blur-xl md:hidden"
        >
          <nav className="flex flex-col gap-1">
            {[...PRODUCT_LINKS, ...SOLUTION_LINKS, ...SIMPLE_LINKS].map(
              (link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-4 py-2.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-950"
                >
                  {link.label}
                </a>
              ),
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
