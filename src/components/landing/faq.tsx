import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./reveal";

const FAQS = [
  {
    question: "Is Splitr really free?",
    answer:
      "Yes. Splitting bills, groups, and reminders are free for friends, forever. Pro and Enterprise plans add unlimited groups, analytics, and business features.",
  },
  {
    question: "How do I settle up with friends?",
    answer:
      "Tap settle on any balance and pay directly over UPI with PhonePe, Google Pay, or Paytm. Splitr never holds your money — it moves straight between bank accounts.",
  },
  {
    question: "Do my friends need the app?",
    answer:
      "No. Share a group link and friends can view balances and add expenses from their browser. The app just makes it faster with reminders and one-tap UPI payments.",
  },
  {
    question: "How are balances calculated?",
    answer:
      "Every expense collapses into the fewest possible settlements. Instead of ten confusing transfers, Splitr tells you exactly who pays whom — like 3 payments settling a whole trip.",
  },
  {
    question: "Can I use Splitr for trips and roommates?",
    answer:
      "That's what it's built for. Create a trip or home group, split unequally by shares or exact amounts, track running balances, and settle everything at the end.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Your expenses stay in your groups, payments happen through your own UPI apps, and you can export or delete your data anytime. Business plans add SSO and advanced security.",
  },
];

export function FAQ() {
  return (
    <section
      id="faq"
      className="relative scroll-mt-20 bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-medium tracking-wide text-[#18C595] uppercase">
              FAQ
            </span>
            <h2 className="font-albra mt-4 text-4xl font-semibold leading-tight tracking-tight text-primary sm:text-5xl">
              Questions, answered
            </h2>
            <p className="mt-4 max-w-lg text-base leading-7 text-primary/60">
              Everything you need to know about splitting with Splitr.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mx-auto mt-16 max-w-3xl">
          <Accordion className="overflow-hidden rounded-[28px] border border-zinc-200 bg-white shadow-sm shadow-zinc-900/5">
            {FAQS.map((faq, i) => (
              <AccordionItem
                key={faq.question}
                value={`faq-${i}`}
                className="px-6 not-last:border-b not-last:border-zinc-200"
              >
                <AccordionTrigger className="py-5 text-left text-base font-medium text-zinc-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] leading-7 text-zinc-500">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
