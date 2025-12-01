"use client";

import { motion } from "framer-motion";
import { CheckCheck, UserCog, Heart } from "lucide-react";


const items = [
  {
    title: "מבחנים מקצועיים ומדויקים",
    text: "המבחנים מבוססים על ידע פדגוגי וניסיון מהשטח, ולא על שאלות אקראיות מהאינטרנט.",
    icon: <CheckCheck className="w-7 h-7 text-brand-600" />,
  },
  {
    title: "התאמה אישית ללומד",
    text: "התחשבות בגיל, בקשיים, ובמטרה – מחוננים, פסיכומטרי, קוגניטיבי ועוד.",
    icon: <UserCog className="w-7 h-7 text-brand-600" />,
  },
  {
    title: "חוויה רגועה ובטוחה",
    text: "המטרה היא להפחית לחץ סביב מבחנים, לתת היכרות מוקדמת וביטחון.",
    icon: <Heart className="w-7 h-7 text-brand-600" />,
  },
];

export function WhySection() {
  return (
    <section className="w-full py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="space-y-3 mb-10">
          <h2 className="text-3xl font-bold text-brand-700">
            למה לבחור בי?
          </h2>
          <p className="text-sm text-slate-600 max-w-md mx-auto">
            כמפתחת מבחנים ומחנכת, אני משלבת ידע מקצועי, רגישות לילד ולמשפחה
            והיכרות עמוקה עם עולם המבחנים.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.25, delay: idx * 0.06 }}
              className="rounded-[30px] bg-white border border-brand-100/70 shadow-lg shadow-slate-900/5 p-6 flex flex-col gap-4 text-right"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{item.icon}</span>
                {/* <span className="text-[11px] px-3 py-1 rounded-full bg-brand-50 text-brand-600">
                  יתרון {idx + 1}
                </span> */}
              </div>

              <div className="space-y-1">
                <h3 className="text-sm font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-xs leading-relaxed text-slate-600">
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
