import React, { useState, useMemo, useEffect } from 'react';
import { Search, X, GraduationCap, BookOpen, Shield, HelpCircle, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allDefenceExams } from '../data/exams';
import { allQuestions } from '../data/questions';
import { majorMilitaryOperations, jointMilitaryExercises, equivalentRanks } from '../data/currentAffairs/defenceGkData';
import { legitimateBooksData } from '../data/books/defenceBooksData';
import { liveNotifications } from '../data/updates/notificationsData';

interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  onNavigate
}) => {
  const { lang } = useLanguage();
  const [query, setQuery] = useState('');

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        // toggle if already handled
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q || q.length < 2) return null;

    // 1. Matches in Exams
    const matchedExams = allDefenceExams.filter(
      e => e.name.toLowerCase().includes(q) || 
           e.fullName.toLowerCase().includes(q) ||
           e.nameHi.toLowerCase().includes(q) ||
           e.overview.toLowerCase().includes(q)
    ).slice(0, 3);

    // 2. Matches in Defence Facts & Exercises
    const matchedExercises = jointMilitaryExercises.filter(
      ex => ex.name.toLowerCase().includes(q) || ex.country.toLowerCase().includes(q)
    ).slice(0, 3);

    const matchedOps = majorMilitaryOperations.filter(
      op => op.name.toLowerCase().includes(q) || op.details.toLowerCase().includes(q)
    ).slice(0, 3);

    // 3. Matches in Questions
    const matchedQuestions = allQuestions.filter(
      ques => ques.question.toLowerCase().includes(q) ||
              ques.questionHi.toLowerCase().includes(q) ||
              ques.topic.toLowerCase().includes(q) ||
              ques.subject.toLowerCase().includes(q)
    ).slice(0, 5);

    // 4. Matches in Books
    const matchedBooks = legitimateBooksData.filter(
      b => b.title.toLowerCase().includes(q) || b.subject.toLowerCase().includes(q) || b.publisher.toLowerCase().includes(q)
    ).slice(0, 3);

    // 5. Matches in Notifications
    const matchedNotifs = liveNotifications.filter(
      n => n.title.toLowerCase().includes(q) || n.summary.toLowerCase().includes(q)
    ).slice(0, 3);

    return {
      exams: matchedExams,
      exercises: matchedExercises,
      ops: matchedOps,
      questions: matchedQuestions,
      books: matchedBooks,
      notifications: matchedNotifs
    };
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-12 sm:pt-20 px-3 bg-slate-950/70 backdrop-blur-xs">
      <div className="w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[80vh]">
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={lang === 'hi' ? 'परीक्षाएं, विषय, प्रश्न, मिसाइल, ऑपरेशन्स खोजें...' : 'Search exams, topics, questions, missiles, operations...'}
            autoFocus
            className="w-full bg-transparent border-none outline-none text-slate-900 dark:text-white placeholder-slate-400 text-sm sm:text-base font-medium"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 text-xs font-semibold rounded bg-slate-100 dark:bg-slate-800 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-700"
          >
            ESC
          </button>
        </div>

        {/* Results Area */}
        <div className="overflow-y-auto p-4 space-y-4 scrollbar-thin text-xs sm:text-sm">
          {!query && (
            <div className="text-center py-8 text-slate-400">
              <Search className="h-10 w-10 mx-auto mb-2 opacity-30 text-amber-500" />
              <p>{lang === 'hi' ? 'खोजने के लिए कुछ टाइप करें (उदा. NDA, BrahMos, Siachen, Trigonometry)' : 'Type to search across exams, questions, operations (e.g. NDA, BrahMos, Siachen, Trigonometry)'}</p>
            </div>
          )}

          {searchResults && (
            <>
              {/* Exams */}
              {searchResults.exams.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <GraduationCap className="h-4 w-4" />
                    <span>{lang === 'hi' ? 'रक्षा परीक्षाएं' : 'Defence Exams'}</span>
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.exams.map(e => (
                      <button
                        key={e.id}
                        onClick={() => {
                          onNavigate('exam-detail', { examId: e.id });
                          onClose();
                        }}
                        className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-amber-500/10 text-left border border-slate-200/60 dark:border-slate-700/60 transition-colors group"
                      >
                        <div>
                          <div className="font-bold text-slate-900 dark:text-white group-hover:text-amber-600">
                            {lang === 'hi' ? e.nameHi : e.name} ({e.fullName})
                          </div>
                          <div className="text-xs text-slate-500 line-clamp-1">{e.overview}</div>
                        </div>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-amber-600 shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Defence GK & Exercises */}
              {(searchResults.exercises.length > 0 || searchResults.ops.length > 0) && (
                <div>
                  <h4 className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Shield className="h-4 w-4" />
                    <span>{lang === 'hi' ? 'रक्षा सामान्य ज्ञान एवं ऑपरेशन्स' : 'Defence GK & Operations'}</span>
                  </h4>
                  <div className="space-y-1.5">
                    {searchResults.exercises.map((ex, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          onNavigate('defence-gk');
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-500/10 cursor-pointer border border-slate-200/60 dark:border-slate-700/60"
                      >
                        <div className="font-bold text-slate-900 dark:text-white">
                          Ex {ex.name} — {ex.country} ({ex.branch})
                        </div>
                        <div className="text-xs text-slate-500">{ex.type}</div>
                      </div>
                    ))}
                    {searchResults.ops.map((op, i) => (
                      <div
                        key={i}
                        onClick={() => {
                          onNavigate('defence-gk');
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-500/10 cursor-pointer border border-slate-200/60 dark:border-slate-700/60"
                      >
                        <div className="font-bold text-slate-900 dark:text-white">
                          {op.name} ({op.year})
                        </div>
                        <div className="text-xs text-slate-500 line-clamp-2">{op.details}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Questions */}
              {searchResults.questions.length > 0 && (
                <div>
                  <h4 className="text-[11px] font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <HelpCircle className="h-4 w-4" />
                    <span>{lang === 'hi' ? 'अभ्यास प्रश्न एवं विगत प्रश्न' : 'Practice Questions & PYQs'}</span>
                  </h4>
                  <div className="space-y-2">
                    {searchResults.questions.map(q => (
                      <div
                        key={q.id}
                        onClick={() => {
                          onNavigate('practice');
                          onClose();
                        }}
                        className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-500/10 cursor-pointer border border-slate-200/60 dark:border-slate-700/60"
                      >
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300 uppercase">
                            {q.exam}
                          </span>
                          <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">
                            {q.subject} • {q.topic}
                          </span>
                        </div>
                        <p className="text-xs text-slate-900 dark:text-white line-clamp-2">
                          {lang === 'hi' ? q.questionHi : q.question}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
