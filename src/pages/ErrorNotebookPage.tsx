import React, { useState } from 'react';
import { 
  AlertCircle, 
  Trash2, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Sparkles,
  BookOpen,
  Filter
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { allQuestions } from '../data/questions';
import { Breadcrumb } from '../components/Breadcrumb';
import { MistakeCategory } from '../types';

interface ErrorNotebookPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const ErrorNotebookPage: React.FC<ErrorNotebookPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const { progress, updateMistakeType, markErrorReviewed, removeErrorItem } = useUserProgress();
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const errorItemsWithQ = progress.errorNotebook.map((item) => {
    const q = allQuestions.find(ques => ques.id === item.questionId);
    return { item, question: q };
  }).filter(entry => entry.question !== undefined);

  const filteredItems = errorItemsWithQ.filter(({ item }) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'unreviewed') return !item.reviewed;
    if (selectedFilter === 'reviewed') return item.reviewed;
    return item.mistakeType === selectedFilter;
  });

  const mistakeTypes: MistakeCategory[] = [
    'Conceptual',
    'Calculation',
    'Misread',
    'Memory',
    'Guess',
    'Time pressure',
    'Careless'
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Error Notebook & Mistake Tracker', labelHi: 'गलती नोटबुक', routeId: 'error-notebook' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-400/30">
            <AlertCircle className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'स्मार्ट व्यक्तिगत गलती विश्लेषक' : 'Intelligent Mistake Classification'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'डिफेंस परीक्षा गलती नोटबुक (Error Notebook)' : 'Defence Exam Error Notebook'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'प्रैक्टिस एवं मॉक टेस्ट में हुई गलतियों का वर्गीकरण (संकल्पनात्मक, गणना, असावधानी, समय दबाव) तथा दोहराव ट्रैकिंग।'
              : 'Categorize your wrong attempts by mistake type (Conceptual, Calculation, Misread, Guess) and schedule systematic revisions.'}
          </p>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin text-xs">
        {['all', 'unreviewed', 'reviewed', ...mistakeTypes].map((f) => (
          <button
            key={f}
            onClick={() => setSelectedFilter(f)}
            className={`px-3 py-1.5 rounded-xl font-bold border transition-all whitespace-nowrap capitalize ${
              selectedFilter === f
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-amber-400'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Error Question Cards */}
      {filteredItems.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
            {lang === 'hi' ? 'कोई गलती दर्ज नहीं है!' : 'No Errors Recorded in this Category!'}
          </h2>
          <p className="text-xs text-slate-500 max-w-sm mx-auto">
            {lang === 'hi' ? 'जब आप प्रैक्टिस या मॉक टेस्ट में कोई प्रश्न गलत करेंगे, तो वह यहां स्वचालित रूप से दर्ज हो जाएगा।' : 'Whenever you make an error in Practice or Mock Tests, it automatically shows up here.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredItems.map(({ item, question }) => {
            if (!question) return null;

            return (
              <div
                key={item.questionId}
                className={`p-6 rounded-3xl border shadow-xs space-y-4 text-xs transition-all ${
                  item.reviewed
                    ? 'bg-slate-50/60 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 opacity-75'
                    : 'bg-white dark:bg-slate-900 border-red-500/30 dark:border-red-500/20'
                }`}
              >
                <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300">
                      {item.mistakeType} Mistake
                    </span>
                    <span className="font-bold text-slate-700 dark:text-slate-300">
                      {question.exam.toUpperCase()} • {question.subject} • {question.topic}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => markErrorReviewed(item.questionId)}
                      className={`px-3 py-1 rounded-xl text-xs font-bold transition-colors ${
                        item.reviewed
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-500 hover:text-white'
                      }`}
                    >
                      {item.reviewed ? 'Reviewed ✓' : 'Mark Reviewed'}
                    </button>

                    <button
                      onClick={() => removeErrorItem(item.questionId)}
                      className="p-1.5 text-slate-400 hover:text-red-500 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800"
                      title="Remove from notebook"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>

                <p className="text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                  {lang === 'hi' ? question.questionHi : question.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px]">
                  <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-900 dark:text-red-300">
                    <strong>Your Incorrect Choice: </strong> {question.options[item.userAnswer]}
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-900 dark:text-emerald-300">
                    <strong>Official Correct Answer: </strong> {question.options[question.answer]}
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                  <span className="font-bold text-slate-700 dark:text-slate-200 block">Explanatory Concept:</span>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-[11px]">
                    {lang === 'hi' ? question.explanationHi : question.explanation}
                  </p>
                </div>

                {/* Edit Mistake Category */}
                <div className="flex items-center gap-2 pt-1 text-slate-500 text-[11px]">
                  <span>Change classification:</span>
                  <select
                    value={item.mistakeType}
                    onChange={(e) => updateMistakeType(item.questionId, e.target.value as any, item.notes)}
                    className="px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-semibold"
                  >
                    {mistakeTypes.map((mt) => (
                      <option key={mt} value={mt}>{mt}</option>
                    ))}
                  </select>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
