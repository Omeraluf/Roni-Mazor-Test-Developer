import { notFound } from "next/navigation";
import { getTestBySlug } from "@/data/tests";
import Link from "next/link";

interface TestPageProps {
  params: Promise<{ slug: string }>;
}

// 👇 note the `async` and `await params`
export default async function TestPage({ params }: TestPageProps) {
  const { slug } = await params; // unwrap the Promise
  console.log("Resolved slug:", slug);

  const test = getTestBySlug(slug);
  console.log("Fetched test:", test);

  if (!test) {
    notFound();
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 py-16 space-y-8">
        <Link
          href="/tests"
          className="text-xs text-slate-500 hover:text-slate-700"
        >
          ← חזרה לכל המבחנים
        </Link>

        <div className="space-y-3 text-right">
          <h1 className="text-2xl font-semibold text-slate-900">
            {test.title}
          </h1>
          <p className="text-sm text-slate-500">{test.subtitle}</p>
        </div>

        <div className="rounded-3xl bg-white shadow-sm border border-slate-100 p-6 text-right space-y-4">
          <div className="flex justify-between text-sm">
            <span>⏱ משך המבחן</span>
            <strong>{test.duration} דקות</strong>
          </div>
          <div className="flex justify-between text-sm">
            <span>❓ מספר שאלות</span>
            <strong>{test.questions}</strong>
          </div>
          <div className="flex justify-between text-sm">
            <span>🎓 שכבת גיל</span>
            <strong>{test.grade}</strong>
          </div>

          <Link
            href={`/take/${test.slug}`}
            className="block w-full mt-4 rounded-full bg-rose-500 text-white text-center py-2 text-sm font-semibold hover:bg-rose-600 transition"
          >
            התחל את המבחן
          </Link>
        </div>
      </div>
    </div>
  );
}
