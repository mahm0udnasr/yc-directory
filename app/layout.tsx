import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import "easymde/dist/easymde.min.css";
import { Toaster } from "@/components/ui/toaster";

const workSans = localFont({
  src: [
    {
      path: "./fonts/WorkSans-Black.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-Thin.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/WorkSans-ExtraLight.ttf",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-work-sans",
});

export const metadata: Metadata = {
  title: "YC Directory | Discover Top Y Combinator Startups",
  description:
    "Explore and search the most promising Y Combinator startups. Find company profiles, funding info, and rankings in the YC Directory.",
  keywords: [
    "Y Combinator",
    "YC Directory",
    "startup rankings",
    "top startups",
    "startup directory",
    "YC companies",
    "startup profiles",
    "startup funding",
    "startup search",
  ],
  openGraph: {
    title: "YC Directory | Discover Top Y Combinator Startups",
    description:
      "Explore and search the most promising Y Combinator startups. Find company profiles, funding info, and rankings in the YC Directory.",
    url: "*",
    siteName: "YC Directory",
    type: "website",
    images: [
      {
        url: "*",
        width: 1200,
        height: 630,
        alt: "YC Directory - Top Y Combinator Startups",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={workSans.variable}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
