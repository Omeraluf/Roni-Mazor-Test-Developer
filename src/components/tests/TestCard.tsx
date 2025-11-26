import Link from "next/link";
import Image from "next/image";
import type { Test } from "@/data/tests";

export function TestCard({ test }: { test: Test }) {
  return (
    <Link
      href={`/tests/${test.slug}`}
      className="group block overflow-hidden rounded-3xl bg-white shadow-sm border border-slate-100 hover:shadow-xl transition-all"
    >
      <div className="relative h-36 overflow-hidden">
        <Image
          src={test.image}
          alt={test.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-3 left-3 text-[11px] rounded-full bg-white/90 px-3 py-1">
          {test.grade}
        </div>
      </div>

      <div className="p-4 space-y-2 text-right">
        <h3 className="font-semibold text-sm">{test.title}</h3>
        <p className="text-xs text-slate-500 line-clamp-2">{test.subtitle}</p>

        <div className="flex items-center justify-between text-[11px] text-slate-500 mt-2">
          <span>⏱ {test.duration} דקות</span>
          <span>❓ {test.questions} שאלות</span>
        </div>
      </div>
    </Link>
  );
}
