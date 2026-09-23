import { cn } from "cn";
import Image from "next/image";

const logos = [
  { src: "/icons/icons8-google-logo-48.png", alt: "Google Pay" },
  { src: "/icons/phonepe.png", alt: "PhonePe" },
  { src: "/icons/icons8-paytm-48.png", alt: "Paytm" },
];

export function PaymentBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-secondary/70 py-1 pr-1.5 pl-4",
        className,
      )}
    >
      <span className="text-[13px] font-medium text-primary/70">
        Split here. Pay anywhere.
      </span>

      <span className="flex items-center -space-x-2">
        {logos.map((logo) => (
          <span
            key={logo.alt}
            className="flex size-6 items-center justify-center rounded-full bg-white border"
          >
            <Image
              src={logo.src}
              alt={logo.alt}
              width={18}
              height={18}
              className="size-[19px] select-none"
            />
          </span>
        ))}
      </span>
    </div>
  );
}
