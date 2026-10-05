import React from 'react';
import { 
  Map, 
  CheckCircle2, 
  Circle, 
  ArrowDown, 
  Award, 
  Compass, 
  BookOpen, 
  HelpCircle,
  Timer,
  Activity,
  HeartPulse,
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { zeroToDefenceRoadmap } from '../data/roadmaps/zeroToDefenceRoadmap';
import { Breadcrumb } from '../components/Breadcrumb';

interface ZeroToDefenceRoadmapPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const ZeroToDefenceRoadmapPage: React.FC<ZeroToDefenceRoadmapPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const { progress, toggleRoadmapLevel } = useUserProgress();

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Zero-to-Defence Roadmap', labelHi: 'शून्य से चयन रोडमैप', routeId: 'roadmap' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            <Map className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? '12-चरणीय संपूर्ण तैयारी मार्गदर्शिका' : '12-Level Structured Officer & Soldier Journey'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'शून्य से भारतीय सेना चयन रोडमैप' : 'Zero-to-Defence 12-Level Preparation Roadmap'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'प्रविष्टि चयन -> अधिसूचना अध्ययन -> पात्रता -> बुनियादी आधार -> PYQ -> अभ्यास -> मॉक टेस्ट -> एसएसबी/शारीरिक -> मेडिकल -> अंतिम चयन।'
              : 'From choosing your entry and reading the notification to written syllabus, PYQs, SSB psychological drills, medicals, and academy joining.'}
          </p>
        </div>
      </div>

      {/* Progress Counter */}
      <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs flex items-center justify-between text-xs">
        <div>
          <span className="font-extrabold text-slate-900 dark:text-white text-sm block">
            Your Roadmap Progression
          </span>
          <span className="text-slate-500">
            {progress.completedRoadmapLevels.length} of {zeroToDefenceRoadmap.length} Milestones Checked
          </span>
        </div>
        <div className="font-mono font-black text-lg sm:text-2xl text-amber-600 dark:text-amber-400">
          {Math.round((progress.completedRoadmapLevels.length / zeroToDefenceRoadmap.length) * 100)}%
        </div>
      </div>

      {/* 12 Levels Vertical Timeline */}
      <div className="space-y-4">
        {zeroToDefenceRoadmap.map((lvl) => {
          const isDone = progress.completedRoadmapLevels.includes(lvl.level);

          return (
            <div
              key={lvl.level}
              className={`p-6 rounded-3xl border shadow-xs space-y-3 transition-all ${
                isDone 
                  ? 'bg-emerald-50/40 dark:bg-emerald-950/20 border-emerald-300 dark:border-emerald-800'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => toggleRoadmapLevel(lvl.level)}
                    className="p-1 rounded-full text-slate-400 hover:text-emerald-600 transition-colors"
                    title={isDone ? 'Mark as incomplete' : 'Mark as completed'}
                  >
                    {isDone ? (
                      <CheckCircle2 className="h-6 w-6 text-emerald-600 fill-emerald-100 dark:fill-emerald-950" />
                    ) : (
                      <Circle className="h-6 w-6 text-slate-300 hover:text-emerald-500" />
                    )}
                  </button>

                  <div>
                    <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase font-mono tracking-wider">
                      LEVEL {lvl.level} • {lvl.durationEstimate}
                    </span>
                    <h2 className="text-base font-extrabold text-slate-900 dark:text-white leading-tight">
                      {lang === 'hi' ? lvl.titleHi : lvl.title}
                    </h2>
                  </div>
                </div>

                <span className="text-xs text-slate-400 font-medium">
                  {lang === 'hi' ? lvl.subtitleHi : lvl.subtitle}
                </span>
              </div>

              {/* Action items list */}
              <div className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 pl-9">
                {(lang === 'hi' ? lvl.keyActionsHi : lvl.keyActions).map((act, aIdx) => (
                  <div key={aIdx} className="flex items-start gap-2">
                    <span className="text-amber-500 font-bold">•</span>
                    <span>{act}</span>
                  </div>
                ))}
              </div>

              {/* Official Advice Callout */}
              <div className="ml-9 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-500 dark:text-slate-400">
                <strong className="text-slate-700 dark:text-slate-200">Official Directive: </strong>
                {lvl.officialAdvice}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
