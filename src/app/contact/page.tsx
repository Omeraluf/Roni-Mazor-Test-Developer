export default function ContactPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16 space-y-8 text-right">
        <h1 className="text-3xl font-semibold text-slate-900">צור קשר</h1>

        <p className="text-sm text-slate-700">
          יש לכם שאלות לגבי אחד המבחנים? רוצים להתייעץ לגבי התאמה לילד או למבוגר?
          מוזמנים להשאיר פרטים ורוני תחזור אליכם.
        </p>

        <form className="space-y-4 max-w-md">
          <div className="space-y-1">
            <label className="text-xs text-slate-700">שם מלא</label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-700">אימייל</label>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs text-slate-700">הודעה</label>
            <textarea
              rows={4}
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <button
            type="button"
            className="mt-2 rounded-full bg-rose-500 text-white text-sm px-6 py-2 hover:bg-rose-600"
          >
            שליחה (בינתיים דמו)
          </button>
        </form>
      </div>
    </div>
  );
}
