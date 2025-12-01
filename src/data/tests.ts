// src/data/tests.ts

export type Test = {
  slug: string;
  title: string;
  subtitle: string;
  duration: number;
  questions: number;
  grade: string;
  image: string;
  isRecommended: boolean;
  description: string;
  items: {
    id: number;
    question: string;
    options: string[];
    correct: number;
  }[];
};


const tests: Test[] = [
  {
    slug: "gifted-grade-b",
    title: "מבחן מחוננים - כיתה ב׳",
    subtitle: "מבחן תרגול מקיף המדמה את מבחן המחוננים הארצי.",
    duration: 45,
    questions: 25,
    grade: "כיתה ב׳",
    image: "/images/exam.png",
    isRecommended: true,
    description: "מבחן תרגול מקצועי שמטרתו לאמן את הילד/ה ולשפר את מיומנויות החשיבה, הפתרון, וההיערכות למבחני קבלה.",
        items: [
    {
        id: 1,
        question: "איזו צורה משלימה את הרצף?",
        options: ["◼︎", "▲", "●", "◆"],
        correct: 2,
    },
    {
        id: 2,
        question: "מה מספר הבא בסדרה: 2, 4, 8, 16, ?",
        options: ["24", "30", "32", "36"],
        correct: 2,
    },
    ],
  },
  {
    slug: "psychometry-mini",
    title: "פרה-פסיכומטרי - חשיבה כמותית",
    subtitle: "מבחן קצר להכרת סגנון השאלות במבחן הפסיכומטרי.",
    duration: 30,
    questions: 20,
    grade: "נוער ומבוגרים",
    image: "/images/exam1.png",
    isRecommended: true,
    description: "מבחן תרגול מקצועי שמטרתו לאמן את הילד/ה ולשפר את מיומנויות החשיבה, הפתרון, וההיערכות למבחני קבלה.",
        items: [
    {
        id: 1,
        question: "איזו צורה משלימה את הרצף?",
        options: ["◼︎", "▲", "●", "◆"],
        correct: 2,
    },
    {
        id: 2,
        question: "מה מספר הבא בסדרה: 2, 4, 8, 16, ?",
        options: ["24", "30", "32", "36"],
        correct: 2,
    },
    ],

  },
  {
    slug: "cognitive-basic",
    title: "מבחן קוגניטיבי בסיסי",
    subtitle: "הערכת זיכרון, קשב וחשיבה לוגית בצורה ידידותית.",
    duration: 20,
    questions: 15,
    grade: "כל הגילאים",
    image: "/images/exam4.png",
    isRecommended: true,
    description: "מבחן תרגול מקצועי שמטרתו לאמן את הילד/ה ולשפר את מיומנויות החשיבה, הפתרון, וההיערכות למבחני קבלה.",
        items: [
    {
        id: 1,
        question: "איזו צורה משלימה את הרצף?",
        options: ["◼︎", "▲", "●", "◆"],
        correct: 2,
    },
    {
        id: 2,
        question: "מה מספר הבא בסדרה: 2, 4, 8, 16, ?",
        options: ["24", "30", "32", "36"],
        correct: 2,
    },
    ],
  },
];

export function getAllTests(): Test[] {
  return tests;
}

export function getRecommendedTests(): Test[] {
  return tests.filter((t) => t.isRecommended);
}

export function getTestBySlug(slug: string): Test | undefined {
  return tests.find((t) => t.slug === slug);
}
