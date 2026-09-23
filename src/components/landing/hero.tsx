import Image from "next/image";
import { PaymentBadge } from "@/components/landing/payment-badge";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pt-20 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
        <PaymentBadge />

        <h1 className="font-albra mt-7 text-5xl font-semibold leading-[1.05] tracking-tight text-primary sm:text-6xl">
          Split. Track. Settle.
        </h1>

        <p className="mt-4 max-w-lg text-base leading-7 text-primary/60 sm:text-lg">
          Personal finance home — monthly spend, transactions, and goals in one
          app built for India.
        </p>

        <Button
          nativeButton={false}
          className="mt-8 h-12 rounded-full border-transparent px-6 text-lg  shadow-[0_20px_40px_-10px_rgba(0,0,0,0.55),0_40px_70px_-25px_rgba(0,0,0,0.4)] shadow-initial! hover:shadow-[0_30px_50px_-10px_rgba(0,0,0,0.55),0_40px_70px_-25px_rgba(0,0,0,0.4)] cursor-pointer transition-all"
        >
          Download App
        </Button>

        <Image
          src="/images/hero.png"
          alt="Volcera mobile banking app showing cards and recent transactions"
          width={1186}
          height={1327}
          preload
          sizes="(max-width: 640px) 90vw, 480px"
          className="mt-12 ml-16 h-auto w-full max-w-lg select-none"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-32 bg-linear-to-t from-white via-white/70 to-transparent"
      />
    </section>
  );
}
