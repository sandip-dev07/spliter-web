import { CTA } from "@/components/landing/cta";
import { Features } from "@/components/landing/features";
import { Hero } from "@/components/landing/hero";
import { Pricing } from "@/components/landing/pricing";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-1 flex-col bg-background">
      <div className="relative">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(110% 110% at 50% 90%, #fff 38%, #18C595 100%)",
            backgroundSize: "100% 100%",
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(0,29,61,0.06) 0 1px, transparent 1px 72px)",
          }}
        />
        <div className="relative z-10 flex flex-col">
          <SiteHeader />
          <main className="flex-1">
            <Hero />
          </main>
        </div>
      </div>

      <Features />
      <Pricing />
      <CTA />
      <SiteFooter />
    </div>
  );
}
