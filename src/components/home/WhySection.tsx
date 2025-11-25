"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "מבחנים מקצועיים ומדויקים",
    text: "המבחנים מבוססים על ידע פדגוגי וניסיון מהשטח, ולא על שאלות אקראיות מהאינטרנט.",
    icon: "📐",
  },
  {
    title: "התאמה אישית ללומד",
    text: "התחשבות בגיל, בקשיים, ובמטרה – מחוננים, פסיכומטרי, קוגניטיבי ועוד.",
    icon: "🧩",
  },
  {
    title: "חוויה רגועה ובטוחה",
    text: "המטרה היא להפחית לחץ סביב מבחנים, לתת היכרות מוקדמת וביטחון.",
    icon: "💜",
  },
];

export function WhySection() {
  return (
    <section className="text-right">
      <div className="space-y-3 mb-8">
        <h2 className="text-2xl font-semibold text-white">למה לבחור בי?</h2>
        <p className="text-sm text-violet-100 max-w-xl">
          כמפתחת מבחנים ומחנכת, אני משלבת ידע מקצועי, רגישות לילד ולמשפחה והיכרות
          עמוקה עם עולם המבחנים.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {items.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: idx * 0.06 }}
            className="rounded-3xl bg-white/10 border border-white/20 p-4 flex flex-col gap-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-[11px] px-3 py-1 rounded-full bg-white/15 text-violet-50">
                יתרון {idx + 1}
              </span>
            </div>
            <div className="space-y-1">
              <h3 className="text-sm font-semibold text-white">{item.title}</h3>
              <p className="text-xs text-violet-100 leading-relaxed">{item.text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
