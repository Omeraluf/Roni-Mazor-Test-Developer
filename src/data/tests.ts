export type TestCardData = {
  slug: string;
  title: string;
  subtitle: string;
  duration: number;
  questions: number;
  grade: string;
  image: string;
};

export const recommendedTests: TestCardData[] = [
  {
    slug: "gifted-grade-b",
    title: "מבחן מחוננים - כיתה ב׳",
    subtitle: "מבחן תרגול מקיף המדמה את מבחן המחוננים הארצי.",
    duration: 45,
    questions: 5,
    grade: "כיתה ב׳",
    image: "/images/Roni-pic.jpeg"
  },
  {
    slug: "psychometry-prep",
    title: "הכנה לפסיכומטרי - סימולציה קצרה",
    subtitle: "היכרות עם שאלות נפוצות לקראת פסיכומטרי.",
    duration: 20,
    questions: 10,
    grade: "נוער ומבוגרים",
    image: "/images/Roni-pic.jpeg"
  },
  {
    slug: "cognitive-basic",
    title: "מבחן קוגניטיבי בסיסי",
    subtitle: "הערכת יכולות חשיבה, קשב וזיכרון.",
    duration: 15,
    questions: 8,
    grade: "כל הגילאים",
    image: "/images/Roni-pic.jpeg"
  }
];
