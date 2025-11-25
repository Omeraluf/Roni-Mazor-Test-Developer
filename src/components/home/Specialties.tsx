"use client";

import { motion } from "framer-motion";

const specialties = [
  {
    title: "מבחני מחוננים",
    description: "מבחני תרגול מדויקים המדמים את מבחני המחוננים הארציים.",
    tag: "ילדים – כיתות א׳-ו׳",
    emoji: "🧠",
  },
  {
    title: "פרה-פסיכומטרי",
    description: "היכרות עם סוגי שאלות, זמנים וניהול מבחן לקראת פסיכומטרי.",
    tag: "נוער ומבוגרים",
    emoji: "📚",
  },
  {
    title: "מבחנים קוגניטיביים",
    description: "תרגול זיכרון עבודה, קשב, חשיבה מהירה ופתרון בעיות.",
    tag: "כל הגילאים",
    emoji: "🧩",
  },
  {
    title: "מבחני אישיות ומוטיבציה",
    description: "שאלוני עומק להבנת סגנון למידה, מוטיבציה ורגשות לפני מבחן.",
    tag: "ליווי אישי",
    emoji: "💬",
  },
  {
    title: "מבחני ידע ואקדמיה",
    description: "מבחני ידע מותאמים לסטודנטים ולמועמדים למסגרות אקדמיות.",
    tag: "סטודנטים",
    emoji: "🎓",
  },
];

export function Specialties() {
  return (
    <section className="space-y-6 text-right">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">תחומי ההתמחויות שלי</h2>
        <p className="text-sm text-slate-600">
          התאמה אישית של מבחני תרגול לילדים, מתבגרים ומבוגרים – לפי הצורך והיעד.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {specialties.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: idx * 0.05 }}
            className="rounded-3xl bg-white shadow-sm border border-slate-100 p-4 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{s.emoji}</span>
              <span className="text-[11px] rounded-full bg-rose-50 text-rose-600 px-3 py-1">
                {s.tag}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{s.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
