import { getAllTests } from "@/data/tests";
import { TestCard } from "@/components/tests/TestCard";

export const dynamic = "force-static"; // simple, no data fetching on server

export default function TestsPage() {
  const tests = getAllTests();

  return (
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-8">
        <header className="max-w-6xl mx-auto px-4 space-y-6 text-center">
          <h1 className="text-3xl font-bold text-white drop-shadow">כל המבחנים</h1>
          <p className="text-sm text-white/80 max-w-md mx-auto">
            בחרו מבחן מהרשימה והתחילו להתאמן בקצב שלכם.
          </p>
        </header>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tests.map(test => (
            <TestCard key={test.slug} test={test} />
          ))}
        </div>

      </div>
  );
}
