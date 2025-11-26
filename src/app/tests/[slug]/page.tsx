import { notFound } from "next/navigation";
import { getTestBySlug } from "@/data/tests";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tag } from "@/components/ui/tag";

interface TestPageProps {
  params: Promise<{ slug: string }>;
}

export default async function TestPage({ params }: TestPageProps) {
  const { slug } = await params;

  const test = getTestBySlug(slug);

  if (!test) notFound();

  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      <div className="max-w-5xl mx-auto px-4 py-12 space-y-10">
        {/* Back link */}
        <Link
          href="/tests"
          className="text-xs text-[#6B7280] hover:text-[#111827]"
        >
          ← חזרה לכל המבחנים
        </Link>

        {/* Header section */}
        <div className="space-y-3 text-right">
          <h1 className="text-3xl font-semibold text-[#111827]">{test.title}</h1>
          <p className="text-sm text-[#6B7280]">{test.subtitle}</p>

          <div className="flex gap-2 justify-end pt-1">
            {test.isRecommended && <Tag variant="success">מומלץ</Tag>}
            <Tag variant="purple">{test.grade}</Tag>
          </div>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-[320px,1fr] gap-8 items-start">
          {/* Info sidebar */}
          <Card padding="lg" className="space-y-4 text-right">
            <div className="space-y-3 text-sm text-[#374151]">
              <div className="flex items-center justify-between">
                <span>⏱ משך המבחן</span>
                <span className="font-medium">{test.duration} דקות</span>
              </div>

              <div className="flex items-center justify-between">
                <span>❓ מספר שאלות</span>
                <span className="font-medium">{test.questions}</span>
              </div>

              <div className="flex items-center justify-between">
                <span>🎓 שכבת גיל</span>
                <span className="font-medium">{test.grade}</span>
              </div>
            </div>

            <Link href={`/take/${test.slug}`} className="block w-full mt-4">
              <Button
                variant="primary"
                size="lg"
                className="w-full"
              >
                התחל את המבחן
              </Button>
            </Link>


            <p className="text-[11px] text-[#9CA3AF] text-center pt-2">
              ניתן לצאת ולחזור בכל שלב
            </p>
          </Card>

          {/* Description / main content */}
          <Card padding="lg" className="text-right space-y-4">
            <h2 className="text-lg font-semibold text-[#111827]">על המבחן</h2>
            <p className="text-sm text-[#4B5563] leading-relaxed">
              {test.description || "מבחן תרגול מקצועי שמטרתו לאמן את הילד/ה ולשפר את מיומנויות החשיבה, הפתרון, וההיערכות למבחני קבלה."}
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
