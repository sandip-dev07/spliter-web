import {
  Check,
  ChevronsRight,
  Flag,
  Sparkle,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "cn";

type Plan = {
  name: string;
  tagline: string;
  price: string;
  users: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  features: string[];
  featured?: boolean;
};

const PLANS: Plan[] = [
  {
    name: "Basic Plan",
    tagline: "Perfect for splitting with friends.",
    price: "₹0",
    users: "Per user",
    icon: Zap,
    features: [
      "Split expenses",
      "Add friends & groups",
      "One-tap settle up",
      "Payment reminders",
    ],
  },
  {
    name: "Pro Plan",
    tagline: "Ideal for groups, trips & shared living.",
    price: "₹199",
    users: "20 users",
    icon: Flag,
    featured: true,
    features: [
      "Everything in Basic Plan +",
      "Unlimited groups",
      "Smart settlements",
      "Multi-currency support",
      "Spend analytics",
      "Custom categories",
    ],
  },
  {
    name: "Enterprise Plan",
    tagline: "Built for businesses and communities.",
    price: "₹499",
    users: "50 users",
    icon: Sparkles,
    features: [
      "Everything in Pro Plan +",
      "SAML SSO",
      "Dedicated account manager",
      "Team integrations",
      "Data analytics",
      "Security enhancements",
      "Priority support",
    ],
  },
];

function PlanCard({ plan }: { plan: Plan }) {
  const content = (
    <div className="flex flex-1 flex-col">
      {/* <Icon className="size-11 text-zinc-900" strokeWidth={1.8} /> */}

      <h3 className={cn("mt-6 text-lg font-medium", !plan.featured && "mt-10")}>{plan.name}</h3>
      <p className="mt-1 text-sm text-zinc-500">{plan.tagline}</p>

      <div className="mt-5 flex items-center gap-2">
        <span className=" text-4xl font-medium tracking-tight text-zinc-900">
          {plan.price}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md bg-zinc-900 px-2 py-1 text-xs text-white">
          <Users className="size-3.5" strokeWidth={2.4} />
          {plan.users}
        </span>
      </div>

      <div className="mt-6 border-t border-zinc-200" />

      <ul className="mt-6 flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2.5 text-sm text-zinc-700"
          >
            <span className="flex size-[18px] shrink-0 items-center justify-center rounded-[7px] bg-zinc-900">
              <Check className="size-3 text-white" strokeWidth={3.2} />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col gap-3 pt-8">
        <Button
          nativeButton={false}
          render={
            <a href="#download">
              Get Started
              <ChevronsRight className="size-4" strokeWidth={2.4} />
            </a>
          }
          variant={plan.featured ? "default" : "secondary"}
          className="h-11 w-full rounded-xl text-sm font-medium"
        />
        <p className="text-center text-xs text-zinc-400">
          Renews automatically. Cancel anytime.
        </p>
      </div>
    </div>
  );

  if (plan.featured) {
    return (
      <div className="flex flex-col rounded-[24px] border-2 border-[#18C595] bg-[#18C595] shadow-[0_30px_60px_-30px_rgba(24,197,149,0.45)] lg:-my-4">
        <div
          className="flex items-center justify-center gap-1.5 rounded-t-[22px] py-2 text-xs font-medium text-white"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, rgba(255,255,255,0.16) 0 6px, transparent 6px 12px)",
          }}
        >
          Our Recommendation
          <Sparkle className="size-3.5 fill-white" strokeWidth={1.5} />
        </div>

        <div className="flex flex-1 flex-col rounded-[22px] bg-white p-6">
          {content}
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm shadow-zinc-900/5">
      {content}
    </div>
  );
}

export function Pricing() {
  return (
    <section
      id="pricing"
      className="relative bg-white px-4 py-24 sm:px-6 lg:px-8 lg:py-32"
    >
      <div className="mx-auto w-full max-w-5xl">
        <div className="flex flex-col items-center text-center">
          <span className="text-sm font-medium tracking-wide text-[#18C595] uppercase">
            Pricing
          </span>
          <h2 className="font-albra mt-4 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
            Simple, honest pricing
          </h2>
          <p className="mt-4 max-w-lg text-base leading-7 text-primary/60">
            Start free, upgrade when your group grows. No hidden fees, cancel
            anytime.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {PLANS.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
