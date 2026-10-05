import React, { useState, useMemo } from 'react';
import { 
  HelpCircle, 
  Filter, 
  Search, 
  CheckCircle2, 
  Bookmark, 
  BookmarkCheck, 
  BookOpen, 
  ShieldCheck,
  RotateCcw
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { allQuestions } from '../data/questions';
import { allDefenceExams } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface PYQMasterPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const PYQMasterPage: React.FC<PYQMasterPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const { bookmarkQuestion, unbookmarkQuestion, isBookmarked } = useUserProgress();

  const [selectedExam, setSelectedExam] = useState<string>('nda');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [revealedSolutions, setRevealedSolutions] = useState<Record<string, boolean>>({});

  const pyqs = useMemo(() => {
    return allQuestions.filter(q => {
      const isPyq = q.sourceType === 'VERIFIED PYQ' || q.sourceType === 'PYQ-STYLE';
      const matchExam = selectedExam === 'all' || q.exam === selectedExam;
      const matchDiff = selectedDifficulty === 'all' || q.difficulty === selectedDifficulty;
      const matchQ = !searchQuery || 
        q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        q.topic.toLowerCase().includes(searchQuery.toLowerCase());
      return isPyq && matchExam && matchDiff && matchQ;
    }).slice(0, 50);
  }, [selectedExam, selectedDifficulty, searchQuery]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Verified PYQ Master', labelHi: 'विगत वर्ष प्रश्न (PYQ)', routeId: 'pyqs' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'सत्यापित विगत वर्ष प्रश्न संग्रह' : 'Verified Authentic Past Year Papers'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'डिफेंस विगत वर्ष प्रश्न (PYQ Master)' : 'Defence PYQ Master Archive'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'यूपीएससी एनडीए, सीडीएस, एएफकैट एवं तटरक्षक बल के विगत 10+ वर्षों के प्रामाणिक एवं सत्यापित प्रश्न पत्र विस्तृत हल सहित।'
              : 'Authentic previous years question repository from UPSC, IAF, and Indian Army with verified source attribution.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="UPSC Official Question Paper Archive & Services Examination Papers"
        authority="Union Public Service Commission & Service HQs"
      />

      {/* Filters Ribbon */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-xs text-xs">
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
            {lang === 'hi' ? 'परीक्षा चुनें' : 'Select Examination'}
          </label>
          <select
            value={selectedExam}
            onChange={(e) => setSelectedExam(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
          >
            <option value="all">{lang === 'hi' ? 'सभी परीक्षाएं' : 'All Exams'}</option>
            {allDefenceExams.map(e => (
              <option key={e.id} value={e.id}>{lang === 'hi' ? e.nameHi : e.name}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
            {lang === 'hi' ? 'कठिनाई स्तर' : 'Difficulty'}
          </label>
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
            className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
          >
            <option value="all">{lang === 'hi' ? 'सभी स्तर' : 'All Difficulties'}</option>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
          </select>
        </div>

        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
            {lang === 'hi' ? 'प्रश्न खोजें' : 'Search PYQ'}
          </label>
          <div className="relative">
            <Search className="h-4 w-4 absolute left-3 top-2.5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Keywords (e.g. matrices, siachen)..."
              className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
            />
          </div>
        </div>
      </div>

      {/* PYQ List */}
      <div className="space-y-4">
        {pyqs.map((q, idx) => {
          const isRevealed = revealedSolutions[q.id];

          return (
            <div
              key={q.id}
              className="p-5 sm:p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 text-xs"
            >
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                    q.sourceType === 'VERIFIED PYQ'
                      ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                  }`}>
                    {q.sourceType}
                  </span>
                  <span className="font-bold text-slate-700 dark:text-slate-300">
                    {q.exam.toUpperCase()} • {q.subject} • {q.topic}
                  </span>
                  {q.year && (
                    <span className="font-mono text-slate-400 text-[11px]">
                      ({q.year})
                    </span>
                  )}
                </div>

                <button
                  onClick={() => {
                    if (isBookmarked(q.id)) unbookmarkQuestion(q.id);
                    else bookmarkQuestion(q.id);
                  }}
                  className="text-slate-400 hover:text-amber-500"
                >
                  {isBookmarked(q.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-amber-500" />
                  ) : (
                    <Bookmark className="h-5 w-5" />
                  )}
                </button>
              </div>

              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                {lang === 'hi' ? q.questionHi : q.question}
              </p>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(lang === 'hi' ? q.optionsHi : q.options).map((opt, oIdx) => (
                  <div
                    key={oIdx}
                    className={`p-3 rounded-xl border flex items-center gap-2.5 ${
                      isRevealed && oIdx === q.answer
                        ? 'bg-emerald-500/15 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold'
                        : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    <span className="h-5 w-5 rounded-md font-mono text-[11px] bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 flex items-center justify-center font-bold text-slate-500 shrink-0">
                      {String.fromCharCode(65 + oIdx)}
                    </span>
                    <span>{opt}</span>
                  </div>
                ))}
              </div>

              {/* Solution Button / Reveal */}
              <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <button
                  onClick={() => {
                    setRevealedSolutions(prev => ({
                      ...prev,
                      [q.id]: !prev[q.id]
                    }));
                  }}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>{isRevealed ? (lang === 'hi' ? 'समाधान छिपाएं' : 'Hide Solution') : (lang === 'hi' ? 'आधिकारिक हल देखें' : 'View Verified Solution')}</span>
                </button>

                <span className="text-[11px] text-slate-400">
                  Source: <strong>{q.source}</strong>
                </span>
              </div>

              {isRevealed && (
                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-xs space-y-1.5 text-slate-700 dark:text-slate-300">
                  <div className="font-extrabold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    <span>Correct Answer: Option {String.fromCharCode(65 + q.answer)} ({q.options[q.answer]})</span>
                  </div>
                  <p className="leading-relaxed">
                    {lang === 'hi' ? q.explanationHi : q.explanation}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
