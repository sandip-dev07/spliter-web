import { cn } from "cn";
import {
  ArrowLeftRight,
  BellRing,
  Split,
  TrendingUp,
  Wallet,
} from "lucide-react";
import Image from "next/image";

const DOTS: React.CSSProperties = {
  backgroundImage:
    "radial-gradient(circle, rgba(0,0,0,0.12) 1px, transparent 1px)",
  backgroundSize: "14px 14px",
};

const GRID: React.CSSProperties = {
  backgroundImage:
    "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
  backgroundSize: "22px 22px",
};

const STRIPES: React.CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(-45deg, rgba(0,0,0,0.06) 0 6px, transparent 6px 12px)",
};

function Tile({
  className,
  decor,
  children,
}: {
  className?: string;
  decor?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "relative flex flex-col overflow-hidden rounded-[28px] border bg-zinc-50 p-6 ",
        className,
      )}
    >
      {decor}
      <div className="relative flex flex-1 flex-col">{children}</div>
    </div>
  );
}

function TileHeader({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}) {
  return (
    <div>
      <div className="flex size-10 items-center justify-center rounded-xl bg-zinc-100 text-[#18C595]/70">
        <Icon className="size-5" strokeWidth={2.2} />
      </div>
      <h3 className="mt-4 text-lg font-medium text-zinc-900">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-zinc-500">{description}</p>
    </div>
  );
}

const BALANCES = [
  {
    name: "Priya",
    detail: "owes Aarav",
    amount: "₹1,240",
    icon: "/icons/icons8-user-female-48.png",
  },
  {
    name: "Rohan",
    detail: "owes Priya",
    amount: "₹860",
    icon: "/icons/icons8-male-user-48.png",
  },
  {
    name: "Aarav",
    detail: "owes you",
    amount: "₹2,100",
    icon: "/icons/icons8-groom-48.png",
  },
];

const BARS = [
  { month: "Jan", value: 38 },
  { month: "Feb", value: 62 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 78 },
  { month: "May", value: 55 },
  { month: "Jun", value: 92 },
  { month: "Jul", value: 70 },
];

export function Features() {
  return (
    <section
      id="features"
      className="relative scroll-mt-20 bg-background px-4 mt-16 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-medium tracking-wide text-[#18C595] uppercase">
            Features
          </span>
          <h2 className="font-albra mt-4 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
            Everything groups need
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-primary/60">
            Split bills, track who owes whom, and settle up over UPI — all in
            one place.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-6">
          <Tile
            className="lg:col-span-4"
            decor={
              <>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={{
                    backgroundImage: `
        linear-gradient(to right, rgba(209, 213, 219, 0.3) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(209, 213, 219, 0.3) 1px, transparent 1px)
      `,
                    backgroundSize: "32px 32px",
                    WebkitMaskImage:
                      "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                    maskImage:
                      "radial-gradient(ellipse 80% 80% at 100% 0%, #000 50%, transparent 90%)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-24 -right-24 size-64 rounded-full bg-[#18C595]/15 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent"
                />
              </>
            }
          >
            <TileHeader
              icon={ArrowLeftRight}
              title="Smart balances"
              description="Every expense collapses into the fewest possible settlements."
            />
            <div className="mt-6 flex flex-col gap-2 rounded-2xl bg-zinc-50/80 p-3 ring-1 ring-zinc-200/70 backdrop-blur">
              <p className="px-1 pb-1 text-xs font-medium tracking-wide text-zinc-400 uppercase">
                Goa Trip · 4 friends
              </p>
              {BALANCES.map((row) => (
                <div
                  key={row.name}
                  className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 ring-1 ring-zinc-200/70"
                >
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200">
                    <Image
                      src={row.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="size-[20px] select-none"
                    />
                  </span>
                  <span className="text-sm text-zinc-700">
                    <span className="font-medium text-zinc-900">
                      {row.name}
                    </span>{" "}
                    {row.detail}
                  </span>
                  <span className="ml-auto text-sm font-medium text-zinc-900">
                    {row.amount}
                  </span>
                </div>
              ))}
              <div className="flex items-center gap-2 rounded-xl bg-[#18C595]/10 px-3 py-2.5">
                <span className="size-1.5 rounded-full bg-[#18C595]" />
                <span className="text-sm font-medium text-zinc-900">
                  3 payments settle the whole trip
                </span>
              </div>
            </div>
          </Tile>

          <Tile
            className="lg:col-span-2"
            decor={
              <>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-10 -right-10 size-44"
                  style={{
                    ...DOTS,
                    maskImage:
                      "radial-gradient(110px 110px at 70% 30%, black, transparent)",
                    WebkitMaskImage:
                      "radial-gradient(110px 110px at 70% 30%, black, transparent)",
                  }}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -left-20 size-56 rounded-full bg-[#18C595]/15 blur-3xl"
                />
              </>
            }
          >
            <TileHeader
              icon={Wallet}
              title="UPI settle-up"
              description="Pay back in one tap with the apps you already use."
            />
            <div className="mt-6 flex items-center gap-2">
              {[
                { src: "/icons/icons8-phone-pe-48.png", alt: "PhonePe" },
                { src: "/icons/icons8-google-logo-48.png", alt: "Google Pay" },
                { src: "/icons/icons8-paytm-48.png", alt: "Paytm" },
              ].map((logo) => (
                <span
                  key={logo.alt}
                  className="flex size-11 items-center justify-center rounded-full bg-white ring-1 ring-zinc-200"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={22}
                    height={22}
                    className="size-[22px] select-none"
                  />
                </span>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between rounded-xl bg-zinc-900 px-4 py-3">
              <span className="text-sm font-medium text-white">
                Settle ₹1,240
              </span>
              <span className="rounded-md bg-[#18C595] px-2 py-0.5 text-xs font-semibold text-white">
                UPI
              </span>
            </div>
          </Tile>

          <Tile
            className="lg:col-span-2"
            decor={
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-12 -bottom-12 size-48"
                style={{
                  ...STRIPES,
                  maskImage:
                    "radial-gradient(120px 120px at 50% 50%, black, transparent)",
                  WebkitMaskImage:
                    "radial-gradient(120px 120px at 50% 50%, black, transparent)",
                }}
              />
            }
          >
            <TileHeader
              icon={Split}
              title="Flexible splits"
              description="Equal, percentage, shares, or exact amounts."
            />
            <div className="mt-6 flex gap-1.5 rounded-xl bg-zinc-100 p-1">
              {["Equal", "%", "Shares"].map((mode, i) => (
                <span
                  key={mode}
                  className={cn(
                    "flex-1 rounded-lg px-2 py-1.5 text-center text-xs font-medium",
                    i === 0
                      ? "bg-white text-zinc-900 shadow-sm"
                      : "text-zinc-500",
                  )}
                >
                  {mode}
                </span>
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between px-1 text-sm">
              <span className="text-zinc-500">4 friends</span>
              <span className="font-semibold text-zinc-900">₹310 each</span>
            </div>
          </Tile>

          <Tile
            className="lg:col-span-2"
            decor={
              <>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-28"
                  style={DOTS}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white via-white/60 to-transparent"
                />
              </>
            }
          >
            <TileHeader
              icon={BellRing}
              title="Gentle reminders"
              description="Nudge late payers without the awkward chat."
            />
            <div className="mt-6 flex items-start gap-3 rounded-xl bg-white p-3 ring-1 ring-zinc-200/70 backdrop-blur">
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#18C595]/15">
                <BellRing className="size-4 text-[#18C595]" strokeWidth={2.2} />
              </span>
              <div className="text-sm">
                <p className="font-medium text-zinc-900">Nudge sent to Rohan</p>
                <p className="mt-0.5 text-zinc-500">₹860 · due in 2 days</p>
              </div>
            </div>
          </Tile>

          <Tile
            className="lg:col-span-2"
            decor={
              <>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0"
                  style={GRID}
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-16 left-1/2 size-48 -translate-x-1/2 rounded-full bg-[#18C595]/10 blur-3xl"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent"
                />
              </>
            }
          >
            <TileHeader
              icon={TrendingUp}
              title="Spend analytics"
              description="See where the group's money actually goes."
            />
            <div className="mt-6 flex h-24 items-end gap-1.5 rounded-xl bg-white p-3 ring-1 ring-zinc-200/70 backdrop-blur">
              {BARS.map((bar) => (
                <div
                  key={bar.month}
                  style={{ height: `${bar.value}%` }}
                  className={cn(
                    "flex-1 rounded-md",
                    bar.month === "Jun" ? "bg-[#18C595]" : "bg-zinc-200",
                  )}
                />
              ))}
            </div>
            <div className="mt-2 flex items-center justify-between px-1 text-sm">
              <span className="text-zinc-500">This month</span>
              <span className="font-semibold text-zinc-900">₹12,400</span>
            </div>
          </Tile>
        </div>
      </div>
    </section>
  );
}
