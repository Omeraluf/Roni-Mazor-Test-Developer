import { notFound } from "next/navigation";
import { getTestBySlug } from "@/data/tests";
import { TakeTestClient } from "@/components/tests/TakeTestClient";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function TakeTestPage({ params }: Props) {
  const { slug } = await params;
  const test = getTestBySlug(slug);

  if (!test) {
    notFound();
  }

  return <TakeTestClient test={test} />;
}
