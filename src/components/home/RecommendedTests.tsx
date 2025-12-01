"use client";

import { motion } from "framer-motion";
import { TestCard } from "@/components/tests/TestCard";
import { getRecommendedTests } from "@/data/tests";

export function RecommendedTests() {
  const tests = getRecommendedTests();

  return (
    <section id="home-tests" className="w-full py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-4 space-y-6 text-center">
        <div>
          <h2 className="text-3xl font-bold text-white drop-shadow">
            מבחנים מומלצים
          </h2>
          <p className="text-sm text-white/80 max-w-md mx-auto">
            התחילו להתאמן עם המבחנים הפופולריים ביותר באתר.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {tests.map((test, idx) => (
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
      </div>
    </section>
  );
}
