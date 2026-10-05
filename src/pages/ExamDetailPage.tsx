import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  HelpCircle, 
  Timer, 
  ExternalLink, 
  ShieldCheck, 
  Activity, 
  HeartPulse, 
  Award, 
  Sparkles,
  ChevronRight,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { defenceExamsMap, allDefenceExams } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';
import { ExamCategory } from '../types';

interface ExamDetailPageProps {
  examId?: string;
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const ExamDetailPage: React.FC<ExamDetailPageProps> = ({
  examId = 'nda',
  onNavigate
}) => {
  const { lang, t } = useLanguage();
  const [selectedBranchIdx, setSelectedBranchIdx] = useState(0);

  const exam = defenceExamsMap[examId as ExamCategory] || defenceExamsMap.nda;
  const currentBranch = exam.branches[selectedBranchIdx] || exam.branches[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: lang === 'hi' ? exam.nameHi : exam.name, routeId: 'exam-detail', params: { examId: exam.id } }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2.5 py-0.5 text-[10px] font-extrabold rounded-md bg-amber-500/20 text-amber-300 border border-amber-400/30 uppercase">
                {exam.entryType.toUpperCase()} ENTRY
              </span>
              <span className="text-xs text-slate-300">
                {exam.conductingBody}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-black tracking-tight">
              {lang === 'hi' ? exam.nameHi : exam.name}
            </h1>
            <div className="text-sm font-semibold text-amber-300">
              {lang === 'hi' ? exam.fullNameHi : exam.fullName}
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {lang === 'hi' ? exam.overviewHi : exam.overview}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row md:flex-col gap-2 shrink-0">
            <button
              onClick={() => onNavigate('practice', { examId: exam.id })}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-md transition-colors"
            >
              <Sparkles className="h-4 w-4" />
              <span>{lang === 'hi' ? 'अभ्यास प्रश्न हल करें' : 'Start Practice Questions'}</span>
            </button>

            <button
              onClick={() => onNavigate('mock-tests', { examId: exam.id })}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/20 transition-colors"
            >
              <Timer className="h-4 w-4 text-amber-400" />
              <span>{lang === 'hi' ? 'आधिकारिक मॉक टेस्ट' : 'Full Exam Mock Simulation'}</span>
            </button>
          </div>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName={exam.officialSource.name}
        sourceUrl={exam.officialSource.url}
        lastVerified={exam.officialSource.lastVerified}
        authority={exam.officialSource.authority}
      />

      {/* Branch / Stream Tabs */}
      {exam.branches.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {exam.branches.map((b, idx) => (
            <button
              key={b.id}
              onClick={() => setSelectedBranchIdx(idx)}
              className={`px-4 py-2 text-xs font-extrabold rounded-xl border whitespace-nowrap transition-all ${
                selectedBranchIdx === idx
                  ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-amber-400'
              }`}
            >
              {lang === 'hi' ? b.nameHi : b.name}
            </button>
          ))}
        </div>
      )}

      {/* Main Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column: Eligibility & Exam Pattern (2 cols on lg) */}
        <div className="lg:col-span-2 space-y-6">
          {/* Eligibility Section */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-amber-600 dark:text-amber-400" />
              <span>{lang === 'hi' ? 'शाखा पात्रता एवं नियम' : 'Branch Eligibility & Qualifications'}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">{lang === 'hi' ? 'आयु सीमा' : 'Age Limit'}</span>
                <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                  {currentBranch.eligibility.minAgeYears} to {currentBranch.eligibility.maxAgeYears} {lang === 'hi' ? 'वर्ष' : 'Years'}
                </div>
                <p className="text-slate-500 text-[11px]">
                  {lang === 'hi' ? currentBranch.eligibility.ageDetailsHi : currentBranch.eligibility.ageDetails}
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">{lang === 'hi' ? 'लिंग एवं वैवाहिक स्थिति' : 'Gender & Marital Status'}</span>
                <div className="font-extrabold text-slate-900 dark:text-white text-sm capitalize">
                  {currentBranch.eligibility.gender} • {currentBranch.eligibility.maritalStatus}
                </div>
                <p className="text-slate-500 text-[11px]">
                  {currentBranch.eligibility.maritalStatus === 'unmarried' ? 'Unmarried candidates only' : 'As per notification'}
                </p>
              </div>

              <div className="sm:col-span-2 p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <span className="text-[10px] font-bold text-slate-400 uppercase">{lang === 'hi' ? 'न्यूनतम शैक्षणिक योग्यता' : 'Minimum Educational Qualification'}</span>
                <p className="font-semibold text-slate-900 dark:text-white text-xs sm:text-sm">
                  {lang === 'hi' ? currentBranch.eligibility.educationLevelHi : currentBranch.eligibility.educationLevel}
                </p>
              </div>
            </div>
          </div>

          {/* Exam Pattern & Syllabus Section */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                <span>{lang === 'hi' ? 'परीक्षा पैटर्न एवं अंक विभाजन' : 'Official Exam Pattern & Marking Scheme'}</span>
              </h2>
              <span className="text-xs font-mono text-slate-400">
                Total: {currentBranch.examPattern.totalMarks} Marks
              </span>
            </div>

            <div className="space-y-3">
              {currentBranch.examPattern.sections.map((sec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                    <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                      {lang === 'hi' ? sec.nameHi : sec.name}
                    </span>
                    <div className="flex items-center gap-2 text-xs text-slate-500">
                      <span>{sec.questions} Qs</span>
                      <span>•</span>
                      <span className="font-bold text-amber-600 dark:text-amber-400">{sec.marks} Marks</span>
                      <span>•</span>
                      <span>{sec.durationMinutes} Mins</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <span>
                      {lang === 'hi' ? 'सही उत्तर' : 'Correct'}: <strong className="text-emerald-600">+{sec.marksPerQuestion}</strong>
                    </span>
                    <span>
                      {lang === 'hi' ? 'नकारात्मक अंकन' : 'Negative'}: <strong className="text-red-500">-{sec.negativeMarking}</strong>
                    </span>
                  </div>

                  {/* Syllabus Topics */}
                  <div className="pt-2">
                    <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                      {lang === 'hi' ? 'मुख्य पाठ्यक्रम विषय' : 'Key Syllabus Topics'}:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {sec.syllabusTopics.map((top, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded-lg bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-[11px] border border-slate-200 dark:border-slate-700"
                        >
                          {top}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Selection Stages, Training Academy, Salary */}
        <div className="space-y-6">
          {/* Selection Stages */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="h-4 w-4 text-amber-600 dark:text-amber-400" />
              <span>{lang === 'hi' ? 'चयन के 4 चरण' : 'Selection Stages'}</span>
            </h2>

            <div className="space-y-3">
              {exam.stages.map((stg) => (
                <div key={stg.stageNumber} className="flex gap-3 text-xs">
                  <div className="flex flex-col items-center">
                    <div className="h-6 w-6 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-xs">
                      {stg.stageNumber}
                    </div>
                    {stg.stageNumber < exam.stages.length && (
                      <div className="w-0.5 h-full bg-amber-200 dark:bg-amber-900 my-1"></div>
                    )}
                  </div>
                  <div className="space-y-0.5 pb-2">
                    <div className="font-extrabold text-slate-900 dark:text-white">
                      {lang === 'hi' ? stg.titleHi : stg.title}
                    </div>
                    <p className="text-slate-500 text-[11px]">
                      {lang === 'hi' ? stg.descriptionHi : stg.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pay Scale & Academy Info */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3 text-xs">
            <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
              {lang === 'hi' ? 'प्रशिक्षण एवं वेतनमान' : 'Training & Career Remuneration'}
            </h2>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">{lang === 'hi' ? 'प्रशिक्षण संस्थान' : 'Cadet Academy'}</span>
              <div className="font-bold text-slate-900 dark:text-white">{currentBranch.cadetAcademy}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">{lang === 'hi' ? 'कमीशनिंग पद' : 'Rank at Commission'}</span>
              <div className="font-bold text-slate-900 dark:text-white">{exam.salaryAndPerks.rankAtCommission}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">{lang === 'hi' ? 'वेतन स्तर' : 'Pay Matrix Level'}</span>
              <div className="font-bold text-slate-900 dark:text-white">{exam.salaryAndPerks.level}</div>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 space-y-1">
              <span className="text-[10px] text-slate-400 font-bold uppercase">{lang === 'hi' ? 'सैन्य सेवा वेतन (MSP)' : 'Military Service Pay'}</span>
              <div className="font-bold text-amber-600 dark:text-amber-400">{exam.salaryAndPerks.msp}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
