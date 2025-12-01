"use client";

import { motion } from "framer-motion";

const specialties = [
  {
    title: "מבחני מחוננים",
    description:
      "הכנה מקיפה למבחני מחוננים לכל הגילאים – כיתה ב׳, ג׳, חשיבה כמותית, מילולית וזיכרון.",
    tag: "ילדים – כיתות א׳-ו׳",
    emoji: "✨",
  },
  {
    title: "פרה-פסיכומטרי",
    description:
      "תרגול והכנה לקראת הפסיכומטרי – חשיבה כמותית, מילולית, אנגלית וניהול זמנים.",
    tag: "נוער ומבוגרים",
    emoji: "🎓",
  },
  {
    title: "מבחנים קוגניטיביים",
    description:
      "הערכת יכולות קוגניטיביות – זיכרון, קשב, חשיבה לוגית ופתרון בעיות.",
    tag: "כל הגילאים",
    emoji: "🧠",
  },
  {
    title: "מבחנים אקדמיים",
    description:
      "הכנה למבחני קבלה אקדמיים ומבחני מיון שונים – מבחני ידע, חשיבה ומיומנויות.",
    tag: "סטודנטים",
    emoji: "📚",
  },
  {
    title: "מבחני אישיות ומוטיבציה",
    description:
      "היכרות עם סגנון הלמידה, תחומי עניין ומוטיבציה לפני מבחנים ותהליכי מיון.",
    tag: "ליווי אישי",
    emoji: "👤",
  },
];

export function Specialties() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-10 text-right">
        {/* Title */}
        <div className="space-y-2 text-center">
          <h2 className="text-3xl font-bold text-white drop-shadow">
            תחומי ההתמחויות שלי
          </h2>
          <p className="text-sm text-white/80 max-w-md mx-auto">
            מגוון רחב של מבחנים מקצועיים שפותחו בקפידה לאורך שנים – לכל גיל, מטרה
            ורמה.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {specialties.map((s, idx) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.05 }}
              className="flex flex-col justify-between rounded-[32px] bg-white/90 border border-brand-100/80 shadow-soft p-6 backdrop-blur-sm"
            >
              {/* Icon + tag */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-600 text-xl">
                  <span>{s.emoji}</span>
                </div>
                <span className="text-[11px] rounded-full bg-rose-100 text-rose-500 px-3 py-1">
                  {s.tag}
                </span>
              </div>

              {/* Title + description */}
              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-foreground">
                  {s.title}
                </h3>
                <p className="text-xs leading-relaxed text-foreground/70">
                  {s.description}
                </p>
              </div>

              {/* Link row */}
              <div className="mt-4 pt-3 border-t border-brand-100/70">
                <button
                  type="button"
                  className="inline-flex items-center gap-1 text-[11px] font-medium text-rose-400 hover:text-rose-500 transition"
                >
                  ← לכל המבחנים
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
