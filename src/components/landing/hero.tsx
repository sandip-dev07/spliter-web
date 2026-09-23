"use client";

import { Bell, Plus } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { PaymentBadge } from "@/components/landing/payment-badge";
import { EASE } from "@/components/landing/reveal";
import { Button } from "@/components/ui/button";

function FloatingBadges() {
  return (
    <>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.0, ease: EASE }}
        className="absolute top-14 -right-3 z-30 sm:-right-10"
      >
        <div className="animate-float-soft flex items-center gap-2 rounded-full bg-zinc-900 py-1.5 pr-1.5 pl-4 text-white shadow-xl shadow-zinc-900/20">
          <span className="text-sm font-semibold">Split To</span>
          <span className="flex size-7 items-center justify-center rounded-full bg-white text-sm font-bold text-zinc-900">
            3
          </span>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.15, ease: EASE }}
        className="absolute top-1/2 -left-3 z-30 sm:-left-12"
      >
        <div
          className="animate-float-soft flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/95 py-1.5 pr-4 pl-1.5 shadow-xl shadow-zinc-900/10 backdrop-blur"
          style={{ animationDelay: "1.2s" }}
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-[#18C595]">
            <Plus className="size-4 text-white" strokeWidth={2.6} />
          </span>
          <span className="text-sm font-medium text-zinc-900">
            Add by category
          </span>
        </div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 1.3, ease: EASE }}
        className="absolute bottom-28 -right-3 z-30 sm:-right-8"
      >
        <div
          className="animate-float-soft flex items-center gap-2 rounded-full border border-zinc-200/70 bg-white/95 py-1.5 pr-4 pl-1.5 shadow-xl shadow-zinc-900/10 backdrop-blur"
          style={{ animationDelay: "2.4s" }}
        >
          <span className="flex size-7 items-center justify-center rounded-full bg-amber-400">
            <Bell className="size-4 text-white" strokeWidth={2.4} />
          </span>
          <span className="text-sm font-medium text-zinc-900">
            Send Pay Reminders
          </span>
        </div>
      </motion.div>
    </>
  );
}

const HEADLINE = ["Split.", "Track.", "Settle."];

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <PaymentBadge />
        </motion.div>

        <h1 className="font-albra mt-7 text-5xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-6xl">
          {HEADLINE.map((word, i) => (
            <span
              key={word}
              className="inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em]"
            >
              <motion.span
                className="inline-block"
                initial={{ y: "110%" }}
                animate={{ y: "0%" }}
                transition={{ duration: 0.75, delay: 0.12 + i * 0.11, ease: EASE }}
              >
                {word}
                {i < HEADLINE.length - 1 ? " " : ""}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.5, ease: EASE }}
          className="mt-4 max-w-lg text-base leading-7 text-primary/60 sm:text-lg"
        >
          Personal finance home — monthly spend, transactions, and goals in one
          app built for India.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.7, delay: 0.62, ease: EASE }}
        >
          <Button
            nativeButton={false}
            className="mt-8 h-12 rounded-full border-transparent px-6 text-lg  shadow-[0_20px_40px_-10px_rgba(0,0,0,0.55),0_40px_70px_-25px_rgba(0,0,0,0.4)] shadow-initial! hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.55),0_40px_70px_-25px_rgba(0,0,0,0.4)] cursor-pointer transition-all"
          >
            Download App
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.72, ease: EASE }}
          className="relative mt-12 w-full max-w-lg sm:ml-16"
        >
          <Image
            src="/images/hero.png"
            alt="Volcera mobile banking app showing cards and recent transactions"
            width={1186}
            height={1327}
            preload
            sizes="(max-width: 640px) 90vw, 480px"
            className="h-auto w-full select-none"
          />
          <FloatingBadges />
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-linear-to-t from-background via-background/70 to-transparent"
      />
    </section>
  );
}
