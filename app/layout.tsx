import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DND Encounter Builder",
  description: "Plan encounters for your DND campaign.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="lemonade">
      <body className={`${inter.className} p-8`}>
        <ToastProvider>{children}</ToastProvider>
      </body>
    </html>
  );
}
