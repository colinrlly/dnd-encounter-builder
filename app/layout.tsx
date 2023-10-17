import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ToastProvider } from "@/components";
import Link from "next/link";
import GithubMark from "@/public/github-mark.svg";
import Image from "next/image";

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
        <div className="navbar bg-base-300 flex justify-between">
          <Link href="/" className="block">
            <p className="btn btn-ghost normal-case text-xl">home</p>
          </Link>
          <div>
            <Link href="https://github.com/colinrlly/dnd-encounter-builder">
              <button className="btn btn-square btn-ghost">
                <Image src={GithubMark} alt="Github" className="w-10 h-10" />
              </button>
            </Link>
          </div>
        </div>
        <div className="p-8">
          <ToastProvider>{children}</ToastProvider>
        </div>
      </body>
    </html>
  );
}
