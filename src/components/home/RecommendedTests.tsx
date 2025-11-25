"use client";

import { motion } from "framer-motion";
import { TestCard } from "@/components/tests/TestCard";
import { recommendedTests } from "@/data/tests";

export function RecommendedTests() {
  return (
    <section id="recommended-tests" className="space-y-6 text-right">
      <div>
        <h2 className="text-2xl font-semibold text-slate-900">מבחנים מומלצים</h2>
        <p className="text-sm text-slate-600">
          התחילו להתאמן עם המבחנים הפופולריים באתר.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {recommendedTests.map((test, idx) => (
          <motion.div
            key={test.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.25, delay: idx * 0.08 }}
          >
            <TestCard test={test} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
