import "./globals.css";
import { Rubik } from "next/font/google";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowBigLeft } from "lucide-react";

const rubik = Rubik({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={rubik.className}>
      <body className="min-h-screen flex flex-col justify-center items-center bg-black/95 space-y-5 text-white">
        <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
        <p className="text-xl">
          This page you are looking for, does not exist.
        </p>

        <Link href="/">
          <Button variant="link" size="icon" className="text-white">
            <ArrowBigLeft /> Back to Home
          </Button>
        </Link>
      </body>
    </html>
  );
}
