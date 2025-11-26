"use client";

import { useState } from "react";
import type { Test } from "@/data/tests";

export function TakeTestClient({ test }: { test: Test }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(test.items.length).fill(-1)
  );
  const [finished, setFinished] = useState(false);

  const current = test.items[index];

  function selectOption(optionIndex: number) {
    const updated = [...answers];
    updated[index] = optionIndex;
    setAnswers(updated);
  }

  function next() {
    if (index < test.items.length - 1) {
      setIndex(index + 1);
    }
  }

  function prev() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }

    if (finished) {
  const answeredCount = answers.filter(a => a !== -1).length;
  const correctCount = answers.reduce((sum, answer, idx) => {
    if (answer === -1) return sum;
    return sum + (answer === test.items[idx].correct ? 1 : 0);
  }, 0);
  const total = test.items.length;
  const score = Math.round((correctCount / total) * 100);

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-6 text-right">
        <h1 className="text-xl font-semibold text-slate-900">
          סיימתם את המבחן: {test.title}
        </h1>
        <p className="text-sm text-slate-600">
          עניתם על {answeredCount} מתוך {total} שאלות.
        </p>
        <p className="text-sm text-slate-800">
          תשובות נכונות: {correctCount} ({score}%)
        </p>

        <button
          onClick={() => {
            setFinished(false);
            setIndex(0);
          }}
          className="px-6 py-2 rounded-full bg-rose-500 text-white text-sm hover:bg-rose-600"
        >
          חזרה למבחן
        </button>
      </div>
    </div>
  );
}


  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 py-10 space-y-10">
        {/* Title */}
        <div className="text-right space-y-1">
          <h1 className="text-xl font-semibold text-slate-900">
            {test.title}
          </h1>
          <p className="text-xs text-slate-500">
            שאלה {index + 1} מתוך {test.items.length}
          </p>
        </div>

        {/* Question box */}
        <div className="rounded-3xl bg-white p-6 border border-slate-100 shadow-sm space-y-6">
          <h2 className="text-right text-sm font-medium text-slate-900 leading-relaxed">
            {current.question}
          </h2>

          <div className="space-y-3">
            {current.options.map((o, idx) => {
              const selected = answers[index] === idx;
              return (
                <button
                  key={idx}
                  onClick={() => selectOption(idx)}
                  className={`w-full text-right px-4 py-3 rounded-xl border transition
                    ${
                      selected
                        ? "border-rose-400 bg-rose-50 text-rose-600"
                        : "border-slate-200 bg-white hover:bg-slate-50"
                    }
                  `}
                >
                  {o}
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between">
          <button
            onClick={prev}
            disabled={index === 0}
            className={`px-4 py-2 rounded-full text-sm border
              ${index === 0 ? "opacity-30" : "hover:bg-slate-100"}
            `}
          >
            הקודם
          </button>

          {index < test.items.length - 1 ? (
            <button
                onClick={next}
                className="px-6 py-2 rounded-full bg-rose-500 text-white text-sm hover:bg-rose-600"
            >
                הבא
            </button>
            ) : (
            <button
                onClick={() => setFinished(true)}   // 👈 instead of console.log only
                className="px-6 py-2 rounded-full bg-green-600 text-white text-sm hover:bg-green-700"
            >
                סיים מבחן
            </button>
            )}

        </div>
      </div>
    </div>
  );
}
