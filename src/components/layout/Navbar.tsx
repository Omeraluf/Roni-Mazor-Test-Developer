"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "ראשי" },
  { href: "/tests", label: "מבחנים" },
  { href: "/about", label: "אודות" },
  { href: "/contact", label: "צור קשר" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/5 backdrop-blur-xl border-b border-white/5 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Brand (RIGHT side) */}
        <Link
          href="/"
          className="font-semibold text-base text-white"
        >
          רוני מזור – מבחנים להצלחה
        </Link>

        {/* LEFT side group (Links + CTA) */}
        <div className="flex items-center gap-4">

          {/* Nav links */}
          <nav className="hidden md:flex gap-3 text-sm font-semibold">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`rounded-full px-4 py-2 transition-all ${
                  pathname === l.href
                    ? "bg-white/20 text-white font-bold shadow-sm"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* CTA button */}
          <Link
            href="/tests"
            className="rounded-full bg-rose-400 text-white text-sm font-semibold px-5 py-2 shadow-md shadow-rose-500/30 hover:bg-rose-500 transition"
          >
            התחל עכשיו
          </Link>

        </div>
      </div>
    </header>
  );
}
