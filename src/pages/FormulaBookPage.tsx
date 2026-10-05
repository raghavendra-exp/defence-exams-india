import React, { useState, useMemo } from 'react';
import { 
  Sigma, 
  Search, 
  Copy, 
  Check, 
  BookOpen, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { formulaBookList } from '../data/formulas/formulaBookData';
import { Breadcrumb } from '../components/Breadcrumb';

interface FormulaBookPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const FormulaBookPage: React.FC<FormulaBookPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredFormulas = useMemo(() => {
    return formulaBookList.filter((f) => {
      const matchSub = selectedSubject === 'all' || f.subject === selectedSubject;
      const matchQ = !searchQuery ||
        f.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.topic.toLowerCase().includes(searchQuery.toLowerCase()) ||
        f.formula.toLowerCase().includes(searchQuery.toLowerCase());
      return matchSub && matchQ;
    });
  }, [selectedSubject, searchQuery]);

  const handleCopy = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Formula Book Master', labelHi: 'सूत्र पुस्तिका', routeId: 'formulas' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/20 text-purple-300 text-xs font-bold border border-purple-400/30">
            <Sigma className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'गणित एवं भौतिकी सूत्र संग्रह' : 'Mathematical & Physics Formulas'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'डिफेंस परीक्षा सूत्र पुस्तिका (Formula Master)' : 'Defence Exam Formula Master'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'एनडीए 10+2 गणित (कलन, त्रिकोणमिति, आव्यूह, प्रायिकता) एवं सीडीएस/अग्निवीर अंकगणित के त्वरित सूत्र।'
              : 'Indexed formulas for Calculus, Trigonometry, Matrix Algebra, Coordinate Geometry, and Arithmetic shortcuts.'}
          </p>
        </div>
      </div>

      {/* Filter and Search Ribbon */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-xs text-xs">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-thin">
          {['all', 'Mathematics', 'Shortcut Techniques'].map((sub) => (
            <button
              key={sub}
              onClick={() => setSelectedSubject(sub)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                selectedSubject === sub
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {sub === 'all' ? (lang === 'hi' ? 'सभी विषय' : 'All Subjects') : sub}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-64">
          <Search className="h-4 w-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search formulas (e.g. sin 3θ)..."
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Formula Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredFormulas.map((f) => (
          <div
            key={f.id}
            className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 flex flex-col justify-between text-xs"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {f.topic}
                </span>
                <span className="text-[11px] text-slate-400 font-medium">
                  {f.examTag}
                </span>
              </div>

              <h2 className="text-sm font-extrabold text-slate-900 dark:text-white">
                {lang === 'hi' ? f.titleHi : f.title}
              </h2>

              {/* Formula code block */}
              <div className="relative p-3.5 rounded-2xl bg-slate-900 text-amber-300 font-mono text-xs shadow-inner border border-slate-800 flex items-center justify-between">
                <span className="break-all">{f.formula}</span>
                <button
                  onClick={() => handleCopy(f.id, f.formula)}
                  className="p-1 rounded text-slate-400 hover:text-white ml-2 shrink-0"
                  title="Copy Formula"
                >
                  {copiedId === f.id ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                {lang === 'hi' ? f.explanationHi : f.explanation}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
