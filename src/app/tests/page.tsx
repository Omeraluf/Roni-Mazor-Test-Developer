import { getAllTests } from "@/data/tests";
import { TestCard } from "@/components/tests/TestCard";

export const dynamic = "force-static"; // simple, no data fetching on server

export default function TestsPage() {
  const tests = getAllTests();

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <header className="space-y-2 text-right">
          <h1 className="text-3xl font-semibold text-slate-900">כל המבחנים</h1>
          <p className="text-sm text-slate-600">
            בחרו מבחן מהרשימה והתחילו להתאמן בקצב שלכם.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map(test => (
            <TestCard key={test.slug} test={test} />
          ))}
        </div>

      </div>
    </div>
  );
}
