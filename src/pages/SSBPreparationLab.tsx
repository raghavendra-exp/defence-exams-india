import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Clock, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  BookOpen, 
  UserCheck, 
  Eye, 
  AlertTriangle,
  Sparkles,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ssb15OLQs, ssb5DaySchedule, interactiveWATBank, interactiveSRTBank } from '../data/ssb/ssbMasterData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface SSBPreparationLabProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const SSBPreparationLab: React.FC<SSBPreparationLabProps> = ({ onNavigate }) => {
  const { lang } = useLanguage();
  const [activeTab, setActiveTab] = useState<'schedule' | 'olqs' | 'wat' | 'srt'>('schedule');

  // Timed WAT Simulator State
  const [isWatRunning, setIsWatRunning] = useState<boolean>(false);
  const [currentWatIndex, setCurrentWatIndex] = useState<number>(0);
  const [watTimer, setWatTimer] = useState<number>(15);
  const [userSentences, setUserSentences] = useState<Record<number, string>>({});
  const [currentSentenceInput, setCurrentSentenceInput] = useState<string>('');

  useEffect(() => {
    let interval: any = null;
    if (isWatRunning) {
      interval = setInterval(() => {
        setWatTimer((prev) => {
          if (prev <= 1) {
            // Next word
            if (currentWatIndex < interactiveWATBank.length - 1) {
              setCurrentWatIndex((c) => c + 1);
              setCurrentSentenceInput('');
              return 15;
            } else {
              setIsWatRunning(false);
              return 0;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isWatRunning, currentWatIndex]);

  const handleStartWat = () => {
    setCurrentWatIndex(0);
    setWatTimer(15);
    setUserSentences({});
    setCurrentSentenceInput('');
    setIsWatRunning(true);
  };

  const handleSentenceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserSentences(prev => ({ ...prev, [currentWatIndex]: currentSentenceInput }));
    if (currentWatIndex < interactiveWATBank.length - 1) {
      setCurrentWatIndex(prev => prev + 1);
      setCurrentSentenceInput('');
      setWatTimer(15);
    } else {
      setIsWatRunning(false);
    }
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'SSB / AFSB Preparation Lab', labelHi: 'एसएसबी / एएफएसबी लैब', routeId: 'ssb-lab' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Award className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'सेवा चयन बोर्ड (Services Selection Board)' : 'Services Selection Board (SSB / AFSB / NSB)'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'एसएसबी 5-दिवसीय संपूर्ण तैयारी लैब' : '5-Day SSB & AFSB Master Preparation Lab'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'स्क्रीनिंग (OIR, PPDT), मनोवैज्ञानिक परीक्षण (TAT, WAT, SRT, SD), जीटीओ टास्क, व्यक्तिगत साक्षात्कार एवं 15 सैन्य अधिकारी गुणों (OLQs) का प्रमाणिक विश्लेषण।'
              : 'Authentic guide to Screening (OIR/PPDT), Psychology (TAT/WAT/SRT/SD), GTO Outdoor Tasks, Personal Interview, and the 15 Officer-Like Qualities.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="Directorate General of Recruiting / Services Selection Boards"
        authority="Indian Army, Indian Navy & Indian Air Force Selection Boards"
      />

      {/* Sub Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {[
          { id: 'schedule', label: lang === 'hi' ? '5-दिवसीय संपूर्ण प्रक्रिया' : '5-Day SSB Schedule' },
          { id: 'olqs', label: lang === 'hi' ? '15 सैन्य अधिकारी गुण (15 OLQs)' : '15 Officer-Like Qualities' },
          { id: 'wat', label: lang === 'hi' ? 'WAT टाइमर सिमुलेटर' : 'Interactive WAT Simulator' },
          { id: 'srt', label: lang === 'hi' ? 'एसआरटी (SRT) समाधान' : 'Practical SRT Solver' }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold border transition-all whitespace-nowrap ${
              activeTab === tab.id
                ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-amber-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* TAB 1: 5-DAY SSB SCHEDULE */}
      {activeTab === 'schedule' && (
        <div className="space-y-6">
          {ssb5DaySchedule.map((step) => (
            <div
              key={step.day}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3">
                <div className="flex items-center gap-2.5">
                  <span className="h-8 w-8 rounded-xl bg-amber-600 text-white font-black flex items-center justify-center text-xs">
                    Day {step.day}
                  </span>
                  <div>
                    <h2 className="text-base font-extrabold text-slate-900 dark:text-white">
                      {lang === 'hi' ? step.titleHi : step.title}
                    </h2>
                    <span className="text-xs text-amber-600 dark:text-amber-400 font-semibold">
                      {lang === 'hi' ? step.phaseHi : step.phase}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {step.tests.map((test, tIdx) => (
                  <div
                    key={tIdx}
                    className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2.5 text-xs"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                        {lang === 'hi' ? test.testNameHi : test.testName}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 shrink-0">
                        {test.duration}
                      </span>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300">
                      {lang === 'hi' ? test.purposeHi : test.purpose}
                    </p>

                    {/* Do's and Don'ts */}
                    <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 space-y-1">
                      <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-bold">
                        ✓ DO: {test.dos[0]}
                      </div>
                      <div className="text-[11px] text-red-500 font-bold">
                        ✗ AVOID: {test.donts[0]}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: 15 OFFICER-LIKE QUALITIES (OLQs) */}
      {activeTab === 'olqs' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {ssb15OLQs.map((olq) => (
            <div
              key={olq.number}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2.5 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                  {lang === 'hi' ? olq.factorHi : olq.factor}
                </span>
                <span className="h-5 w-5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-[10px] flex items-center justify-center">
                  #{olq.number}
                </span>
              </div>

              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                {lang === 'hi' ? olq.nameHi : olq.name}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {lang === 'hi' ? olq.definitionHi : olq.definition}
              </p>

              <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                  Observable Behaviours:
                </span>
                <ul className="list-disc list-inside space-y-0.5 text-slate-500 text-[11px]">
                  {olq.behaviouralIndicators.map((ind, iIdx) => (
                    <li key={iIdx}>{ind}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: INTERACTIVE WAT SIMULATOR */}
      {activeTab === 'wat' && (
        <div className="max-w-2xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-lg space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-black text-slate-900 dark:text-white">
                Word Association Test (WAT) 15-Second Simulator
              </h2>
              <p className="text-xs text-slate-500">
                In real psychological testing, 60 words are flashed at 15-second intervals.
              </p>
            </div>

            {isWatRunning && (
              <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-600 font-mono font-bold text-sm">
                <Clock className="h-4 w-4 animate-spin" />
                <span>{watTimer}s</span>
              </div>
            )}
          </div>

          {!isWatRunning ? (
            <div className="text-center py-8 space-y-4">
              <div className="h-20 w-20 rounded-full bg-amber-500/10 text-amber-600 mx-auto flex items-center justify-center">
                <Sparkles className="h-10 w-10" />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                Ready to Test Your Spontaneous Cognitive Associations?
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                Write a concise, positive action sentence for each displayed word within 15 seconds. Avoid preaching or definitions.
              </p>
              <button
                onClick={handleStartWat}
                className="px-6 py-3 rounded-2xl bg-amber-600 hover:bg-amber-700 text-white font-extrabold text-xs shadow-md transition-colors"
              >
                Start 15-Sec Timed WAT Drill
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Word Display Box */}
              <div className="p-8 rounded-3xl bg-slate-900 text-center space-y-2 shadow-inner border border-amber-500/20">
                <span className="text-[11px] font-mono text-amber-400 uppercase tracking-widest">
                  Word {currentWatIndex + 1} of {interactiveWATBank.length}
                </span>
                <div className="text-3xl sm:text-5xl font-black text-white tracking-wider">
                  {interactiveWATBank[currentWatIndex].word}
                </div>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSentenceSubmit} className="space-y-3">
                <input
                  type="text"
                  value={currentSentenceInput}
                  onChange={(e) => setCurrentSentenceInput(e.target.value)}
                  placeholder="Type your spontaneous sentence and hit Enter..."
                  autoFocus
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm font-medium text-slate-900 dark:text-white outline-none focus:border-amber-500"
                />
                <div className="flex justify-between items-center text-xs">
                  <span className="text-slate-400">
                    Model Example: <em className="text-slate-600 dark:text-slate-300">{interactiveWATBank[currentWatIndex].sentence}</em>
                  </span>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold"
                  >
                    Next Word ➔
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* TAB 4: PRACTICAL SRT SOLVER */}
      {activeTab === 'srt' && (
        <div className="space-y-4">
          {interactiveSRTBank.map((srt) => (
            <div
              key={srt.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  Situation #{srt.id}
                </span>
              </div>

              <p className="font-bold text-slate-900 dark:text-white text-sm">
                {lang === 'hi' ? srt.situationHi : srt.situation}
              </p>

              <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800 space-y-1">
                <span className="font-bold text-emerald-800 dark:text-emerald-300 text-xs flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>Practical Recommended Action:</span>
                </span>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed text-xs">
                  {srt.modelAction}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
