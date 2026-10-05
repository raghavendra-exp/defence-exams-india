import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronRight, 
  Sparkles, 
  HelpCircle, 
  CheckCircle2, 
  GraduationCap 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allDefenceExams, defenceExamsMap } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';
import { ExamCategory } from '../types';

interface SyllabusPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const SyllabusPage: React.FC<SyllabusPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const [selectedExamId, setSelectedExamId] = useState<ExamCategory>('nda');
  const [selectedBranchIdx, setSelectedBranchIdx] = useState<number>(0);

  const exam = defenceExamsMap[selectedExamId] || defenceExamsMap.nda;
  const branch = exam.branches[selectedBranchIdx] || exam.branches[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Official Syllabus Browser', labelHi: 'आधिकारिक पाठ्यक्रम', routeId: 'syllabus' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <BookOpen className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'आधिकारिक यूपीएससी एवं सैन्य पाठ्यक्रम' : 'Official UPSC & Armed Forces Syllabus'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'रक्षा परीक्षा पाठ्यक्रम एवं अंक भार' : 'Defence Exam Syllabus & Weightage'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'प्रत्येक परीक्षा का विस्तृत अनुभागवार पाठ्यक्रम, प्रश्नों की संख्या, समयावधि, एवं नकारात्मक अंकन का आधिकारिक विवरण।'
              : 'Detailed section-wise topics, question allocation, duration, and marking schemes for all major Indian Defence recruitments.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName={exam.officialSource.name}
        sourceUrl={exam.officialSource.url}
      />

      {/* Exam Selection Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {allDefenceExams.map((e) => (
          <button
            key={e.id}
            onClick={() => {
              setSelectedExamId(e.id);
              setSelectedBranchIdx(0);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold border transition-all whitespace-nowrap ${
              selectedExamId === e.id
                ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-amber-400'
            }`}
          >
            {lang === 'hi' ? e.nameHi : e.name}
          </button>
        ))}
      </div>

      {/* Branch selector if multiple branches exist */}
      {exam.branches.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
          <span className="font-bold text-slate-400 uppercase text-[10px] shrink-0">Branch:</span>
          {exam.branches.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setSelectedBranchIdx(idx)}
              className={`px-3 py-1.5 rounded-lg border text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedBranchIdx === idx
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 border-slate-900 dark:border-slate-100'
                  : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700'
              }`}
            >
              {lang === 'hi' ? b.nameHi : b.name}
            </button>
          ))}
        </div>
      )}

      {/* Sections & Topics Map */}
      <div className="space-y-4">
        {branch.examPattern.sections.map((sec, sIdx) => (
          <div
            key={sIdx}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 text-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                  {lang === 'hi' ? sec.nameHi : sec.name}
                </h2>
                <span className="text-slate-500 text-xs">
                  {sec.questions} Questions • {sec.marks} Marks • {sec.durationMinutes} Minutes
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-slate-500">
                  +{sec.marksPerQuestion} / -{sec.negativeMarking}
                </span>
                <button
                  onClick={() => onNavigate('practice', { examId: exam.id })}
                  className="px-3 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 font-bold text-xs transition-colors flex items-center gap-1.5"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{lang === 'hi' ? 'प्रश्न हल करें' : 'Practice Topic'}</span>
                </button>
              </div>
            </div>

            {/* Topics Grid */}
            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                Detailed Official Topics Breakdown:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2.5">
                {sec.syllabusTopics.map((top, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 font-semibold text-slate-800 dark:text-slate-200 flex items-start gap-2"
                  >
                    <CheckCircle2 className="h-4 w-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                    <span>{top}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
