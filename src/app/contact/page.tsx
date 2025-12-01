export default function ContactPage() {
  return (
    

    
      <div className="max-w-6xl mx-auto px-4 space-y-6 text-center py-12">
        <h1 className="text-3xl font-bold text-white drop-shadow">צור קשר</h1>

        <p className="text-sm text-white/80 max-w-md mx-auto">
          יש לכם שאלות לגבי אחד המבחנים? רוצים להתייעץ לגבי התאמה לילד או למבוגר?
          מוזמנים להשאיר פרטים ורוני תחזור אליכם.
        </p>

        <form className="space-y-4 max-w-md text-center mx-auto">
          <div className="space-y-1">
            <label className="text-sm text-white/80 max-w-md mx-auto">שם מלא</label>
            <input
              type="text"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-white/80 max-w-md mx-auto">אימייל</label>
            <input
              type="email"
              className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-white/80 max-w-md mx-auto">הודעה</label>
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
  );
}
