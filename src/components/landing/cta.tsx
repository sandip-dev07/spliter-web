import Image from "next/image";
import { FaGooglePlay } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section
      id="download"
      className="relative scroll-mt-20 bg-background px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <div className="relative mx-auto w-full max-w-5xl overflow-hidden rounded-[32px] bg-[#f8fafc]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0"
          style={{
            backgroundImage: `repeating-linear-gradient(135deg, rgba(0,29,61,0.05) 0 1px, transparent 1px 10px)`,
          }}
        />
        <div className="relative z-10 grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="p-8 sm:p-12 lg:pr-0">
            <h2 className="font-albra text-4xl font-semibold leading-[1.1] tracking-tight text-zinc-900 sm:text-5xl">
              Split the bill. Skip the awkward chat.
            </h2>
            <p className="mt-4 max-w-md text-base leading-7 text-zinc-600">
              Create a group, add expenses as they happen, and settle up over
              UPI in one tap. Free for friends, forever.
            </p>

            <Button
              nativeButton={false}
              render={
                <a href="#download">
                  <FaGooglePlay className="size-4" />
                  Download Now
                </a>
              }
              className="mt-8 h-11 rounded-xl px-6 text-sm font-medium"
            />
          </div>

          <div className="relative flex justify-center px-8 sm:px-12 lg:px-0">
            <div className="relative w-60 sm:w-72">
              <Image
                src="/images/mobile.png"
                alt="Splitr app wallet screen"
                width={1086}
                height={1448}
                sizes="(max-width: 640px) 240px, 288px"
                className="relative -mb-24 h-auto w-full select-none mix-blend-screen"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
