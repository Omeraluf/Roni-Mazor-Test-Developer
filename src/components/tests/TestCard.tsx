import Link from "next/link";
import Image from "next/image";
import type { Test } from "@/data/tests";
import { Card } from "@/components/ui/card";
import { Tag } from "@/components/ui/tag";

export function TestCard({ test }: { test: Test }) {
  return (
    <Link
      href={`/tests/${test.slug}`}
      className="group block h-full"
    >
      <Card
        padding="none"
        hoverable
        className="overflow-hidden h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative h-36 overflow-hidden">
          <Image
            src={test.image}
            alt={test.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          <div className="absolute top-3 left-3 flex gap-2">
            <Tag variant="purple" className="text-[11px] px-2.5 py-0.5">
              {test.grade}
            </Tag>
            {test.isRecommended && (
              <Tag variant="success" className="text-[11px] px-2.5 py-0.5">
                מומלץ
              </Tag>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 space-y-2 text-right">
          <h3 className="font-semibold text-sm text-[#111827]">
            {test.title}
          </h3>
          <p className="text-xs text-[#6B7280] line-clamp-2">
            {test.subtitle}
          </p>

          <div className="flex items-center justify-between text-[11px] text-[#6B7280] mt-2">
            <span>⏱ {test.duration} דקות</span>
            <span>❓ {test.questions} שאלות</span>
          </div>
        </div>
      </Card>
    </Link>
  );
}
