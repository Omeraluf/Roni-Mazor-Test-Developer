"use client";

import { useState } from "react";
import Link from "next/link";
import type { Test } from "@/data/tests";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ProgressBar } from "@/components/ui/progress-bar";
import { AnswerOption } from "@/components/ui/answer-option";

const hebrewLabels = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח"];

export function TakeTestClient({ test }: { test: Test }) {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(test.items.length).fill(-1)
  );
  const [finished, setFinished] = useState(false);

  const current = test.items[index];
  const progress = ((index + 1) / test.items.length) * 100;

  function selectOption(optionIndex: number) {
    const updated = [...answers];
    updated[index] = optionIndex;
    setAnswers(updated);
  }

  function next() {
    if (index < test.items.length - 1) {
      setIndex((prev) => prev + 1);
    }
  }

  function prev() {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  }

  // --- Finished view --------------------------------------------------------
  if (finished) {
    const answeredCount = answers.filter((a) => a !== -1).length;
    const correctCount = answers.reduce((sum, answer, idx) => {
      if (answer === -1) return sum;
      return sum + (answer === test.items[idx].correct ? 1 : 0);
    }, 0);
    const total = test.items.length;
    const score = Math.round((correctCount / total) * 100);

    return (
      <div className="min-h-screen bg-[#F4F7FB]">
        <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
          {/* Summary card */}
          <Card padding="lg" className="space-y-4 text-right">
            <h1 className="text-2xl font-semibold text-[#111827]">
              סיימתם את המבחן
            </h1>
            <p className="text-sm text-[#4B5563]">{test.title}</p>

            <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-[#374151]">
              <div>
                <p>
                  עניתם על{" "}
                  <span className="font-semibold">
                    {answeredCount} מתוך {total}
                  </span>{" "}
                  שאלות.
                </p>
                <p>
                  תשובות נכונות:{" "}
                  <span className="font-semibold">
                    {correctCount} ({score}%)
                  </span>
                </p>
              </div>

              <div className="text-left">
                <p className="text-xs text-[#6B7280] mb-1">הציון הכולל</p>
                <p className="text-3xl font-bold text-[#111827]">
                  {score}%
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                variant="primary"
                size="md"
                className="w-full sm:w-auto"
                onClick={() => {
                  setFinished(false);
                  setIndex(0);
                  setAnswers(Array(test.items.length).fill(-1));
                }}
              >
                נסה שוב
              </Button>

              <Link href="/tests" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="md"
                  className="w-full"
                >
                  חזרה לכל המבחנים
                </Button>
              </Link>
            </div>
          </Card>

          {/* Review card */}
          <Card padding="lg" className="space-y-4 text-right">
            <h2 className="text-lg font-semibold text-[#111827]">
              סיכום לפי שאלות
            </h2>
            <p className="text-xs text-[#6B7280]">
              לכל שאלה תוצג התשובה שסימנת והתשובה הנכונה.
            </p>

            <div className="space-y-6">
              {test.items.map((item, idx) => {
                const userAnswerIndex = answers[idx];
                const correctIndex = item.correct;
                const isCorrect =
                  userAnswerIndex !== -1 &&
                  userAnswerIndex === correctIndex;

                return (
                  <div
                    key={idx}
                    className="border-t border-[#E5E7EB] pt-4 first:border-t-0 first:pt-0"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-xs text-[#6B7280]">
                        שאלה {idx + 1}
                      </p>
                      <p
                        className={`text-xs font-medium ${
                          userAnswerIndex === -1
                            ? "text-[#9CA3AF]"
                            : isCorrect
                            ? "text-[#15803D]"
                            : "text-[#B91C1C]"
                        }`}
                      >
                        {userAnswerIndex === -1
                          ? "לא נענתה"
                          : isCorrect
                          ? "נכון"
                          : "לא נכון"}
                      </p>
                    </div>

                    <p className="text-sm text-[#111827] mb-3">
                      {item.question}
                    </p>

                    <div className="space-y-2">
                      {item.options.map((optionText, optionIdx) => {
                        let state: "default" | "selected" | "correct" | "incorrect" =
                          "default";

                        if (optionIdx === item.correct) {
                          state = "correct";
                        } else if (optionIdx === userAnswerIndex) {
                          state = "incorrect";
                        }

                        return (
                          <AnswerOption
                            key={optionIdx}
                            text={optionText}
                            label={hebrewLabels[optionIdx] ?? undefined}
                            state={state}
                            // review mode – no onClick
                            disabled
                          />
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </div>
      </div>
    );
  }

  // --- Active test view -----------------------------------------------------

  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-8">
        {/* Header */}
        <div className="space-y-3 text-right">
          <div className="flex items-center justify-between gap-4">
            <div className="space-y-1">
              <h1 className="text-xl font-semibold text-[#111827]">
                {test.title}
              </h1>
              <p className="text-xs text-[#6B7280]">
                שאלה {index + 1} מתוך {test.items.length}
              </p>
            </div>
          </div>

          <div className="space-y-1">
            <ProgressBar value={progress} />
            <p className="text-[11px] text-[#9CA3AF] text-left">
              {progress.toFixed(0)}% הושלמו
            </p>
          </div>
        </div>

        {/* Question + answers */}
        <Card padding="lg" className="space-y-5 text-right">
          <h2 className="text-sm font-medium text-[#111827] leading-relaxed">
            {current.question}
          </h2>

          <div className="space-y-3">
            {current.options.map((o, idx) => {
              const selected = answers[index] === idx;
              return (
                <AnswerOption
                  key={idx}
                  text={o}
                  label={hebrewLabels[idx] ?? undefined}
                  state={selected ? "selected" : "default"}
                  onClick={() => selectOption(idx)}
                />
              );
            })}
          </div>
        </Card>
            
            {/* Question navigation */}
        {/* Question navigation */}
        <div className="space-y-2">
        <div className="flex items-center justify-between">
            {/* Label on the right (RTL) */}
            <p
            className="text-[11px] text-[#6B7280]"
            dir="rtl"
            >
            ניווט בין השאלות
            </p>
            
            {/* Numbers on the left (LTR) */}
            <div
            className="flex flex-wrap gap-2 justify-start"
            dir="ltr"
            >
            {test.items.map((_, i) => {
                const isCurrent = i === index;
                const isAnswered = answers[i] !== -1;

                return (
                <Button
                    key={i}
                    size="sm"
                    variant={
                    isCurrent
                        ? "primary"
                        : isAnswered
                        ? "soft"
                        : "ghost"
                    }
                    className="min-w-9"
                    onClick={() => setIndex(i)}
                >
                    {i + 1}
                </Button>
                );
            })}
            </div>
        </div>
        </div>



        {/* Navigation */}
        <div className="flex items-center justify-between pt-2">
          <Button
            variant="secondary"
            size="sm"
            onClick={prev}
            disabled={index === 0}
          >
            הקודם
          </Button>

          {index < test.items.length - 1 ? (
            <Button variant="primary" size="md" onClick={next}>
              הבא
            </Button>
          ) : (
            <Button
              variant="success"
              size="md"
              onClick={() => setFinished(true)}
            >
              סיים מבחן
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
