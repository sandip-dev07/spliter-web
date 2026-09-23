import type { Metadata } from "next";
import { Geist_Mono, Poppins, Roboto } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const albra = localFont({
  variable: "--font-albra-serif",
  display: "swap",
  src: [
    {
      path: "../../public/fonts/albra/Albra-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/albra/Albra-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/albra/Albra-Regular-Italic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../../public/fonts/albra/Albra-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/albra/Albra-Semi.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/albra/Albra-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const roboto = Roboto({
  variable: "--font-roboto-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Volcera — Your daily finances, simplified",
  description:
    "Quick peer-to-peer transfers to earning cashback on daily purchases, keeping up with your money has never felt this smooth.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${roboto.variable} ${albra.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
