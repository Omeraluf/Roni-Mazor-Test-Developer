"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <div className="grid gap-10 md:grid-cols-2 items-center text-white">
      {/* Photo side */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-center"
      >
        <div className="relative">
          <div className="absolute inset-0 rounded-3xl bg-black/20 blur-2xl" />
          <div className="relative rounded-3xl bg-[#6b526f] p-3 shadow-2xl">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/images/Roni-pic.jpeg"
                alt="רוני מזור"
                width={420}
                height={520}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-6"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs">
          <span className="h-2 w-2 rounded-full bg-rose-300" />
          מומחית בפיתוח מבחנים מקצועיים
        </div>

        <div>
          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            רוני מזור - מבחנים להצלחה
            <span className="block text-rose-200">להצלחה בטוחה</span>
          </h1>
        </div>

        <p className="text-sm md:text-base text-slate-100 leading-relaxed max-w-lg">
          רוני מזור, מפתחת מבחנים ומחנכת. מתמחה במבחני תרגול איכותיים לילדים ומבוגרים –
          מחוננים, פסיכומטרי, קוגניטיבי ועוד.
        </p>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/tests"
            className="rounded-full bg-rose-400 text-white text-sm px-5 py-2 hover:bg-rose-500 transition"
          >
            צפייה במבחנים
          </Link>
          <Link
            href="/about"
            className="rounded-full border border-rose-200 text-rose-100 text-sm px-5 py-2 hover:bg-white/10 transition"
          >
            קצת עליי
          </Link>
        </div>

        <div className="flex flex-wrap gap-8 text-sm mt-4">
          <Stat label="שביעות רצון" value="98%" />
          <Stat label="מבחנים מפותחים" value="+500" />
          <Stat label="שנות ניסיון" value="+15" />
        </div>
      </motion.div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1">
      <div className="text-lg font-semibold">{value}</div>
      <div className="text-xs text-slate-200">{label}</div>
    </div>
  );
}
