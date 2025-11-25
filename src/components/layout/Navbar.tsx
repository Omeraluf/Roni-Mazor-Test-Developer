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
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        
        {/* Logo / Brand */}
        <Link href="/" className="font-semibold text-sm md:text-base text-slate-800">
          רוני מזור – מבחנים להצלחה
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex gap-6 text-sm">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`transition ${
                pathname === l.href
                  ? "text-rose-500 font-bold"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* CTA button */}
        <Link
          href="/tests"
          className="rounded-full bg-rose-400 text-white text-xs px-4 py-2 hover:bg-rose-500 transition"
        >
          התחל עכשיו
        </Link>
      </div>
    </header>
  );
}
