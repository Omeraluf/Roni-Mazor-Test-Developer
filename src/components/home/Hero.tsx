"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 grid items-center gap-12 md:grid-cols-2 text-text-title">
        {/* Photo side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center md:justify-start"
        >
          <div className="relative w-[320px] sm:w-[360px] md:w-[430px]">
            {/* back card */}
            <div className="absolute inset-0 rotate-3 rounded-[38px] bg-surface-1" />
            {/* glow */}
            <div className="absolute inset-0 rounded-[38px] bg-black/30 blur-3xl" />

            {/* front card */}
            <div className="relative -rotate-3 rounded-[38px] bg-brand-700 p-4 shadow-soft">
              <div className="overflow-hidden rounded-[30px]">
                <Image
                  src="/images/Roni-pic.jpeg"
                  alt="רוני מזור"
                  width={430}
                  height={520}
                  className="h-[380px] sm:h-[420px] w-full object-cover"
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
          className="space-y-6 text-right"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-surface-2 px-4 py-1 text-xs font-medium shadow-soft">
            <span className="h-2 w-2 rounded-full bg-rose-300" />
            רוני מומחית בפיתוח מבחנים מקצועיים
          </div>

          <div className="space-y-1">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
              רוני מזור - מבחנים להצלחה
              <span className="block text-rose-300 md:text-[2.6rem]">
                להצלחה בטוחה
              </span>
            </h1>
          </div>

          <p className="text-sm md:text-base text-text-subtitle leading-relaxed max-w-lg ml-auto">
            רוני מזור, מפתחת מבחנים ומחנכת, סטודנטית לתואר בחינוך באוניברסיטת בן
            גוריון. מבחני תרגול איכותיים לילדים ומבוגרים – מחוננים, פסיכומטרי,
            טיס, צו ראשון, חב״ל ועוד.
          </p>

          <div className="flex flex-wrap justify-end gap-3">
            <Link
              href="/tests"
              className="rounded-full bg-rose-300 text-foreground text-sm font-medium px-6 py-2.5 shadow-soft hover:bg-rose-400 transition"
            >
              צפייה במבחנים →
            </Link>
            <Link
              href="/about"
              className="rounded-full bg-surface-1 border border-white/20 text-text-title text-sm px-6 py-2.5 hover:bg-surface-2 transition"
            >
              קצת עליי
            </Link>
          </div>

          <div className="flex flex-wrap justify-end gap-8 text-sm mt-4">
            <Stat label="שנות ניסיון" value="+15" />
            <Stat label="מבחנים מפותחים" value="+500" />
            <Stat label="שביעות רצון" value="98%" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="space-y-1 text-right">
      <div className="text-lg md:text-xl font-semibold text-text-title">
        {value}
      </div>
      <div className="text-xs text-text-subtitle">{label}</div>
    </div>
  );
}
