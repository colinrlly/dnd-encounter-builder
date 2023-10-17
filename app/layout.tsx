import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components";
import Link from "next/link";

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
    <html lang="en" data-theme="retro">
      <body className={`${inter.className}`}>
        <div className="navbar bg-secondary">
          <Link href="/">
            <p className="btn btn-ghost normal-case text-xl text-white">home</p>
          </Link>
        </div>
        <div className="p-8">
          <ToastProvider>{children}</ToastProvider>
        </div>
      </body>
    </html>
  );
}
