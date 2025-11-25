import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";

export const metadata: Metadata = {
  title: "רוני מזור - מבחנים להצלחה",
  description: "מבחני תרגול מקצועיים לילדים ומבוגרים.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="he" dir="rtl">
      <body className="min-h-screen bg-slate-50 text-slate-900 scroll-smooth">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
