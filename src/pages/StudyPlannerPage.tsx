import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Activity, 
  Timer, 
  Layers 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { allDefenceExams } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';

interface StudyPlannerPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const StudyPlannerPage: React.FC<StudyPlannerPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const { progress, setStudyTarget } = useUserProgress();

  const [targetExam, setTargetExam] = useState<string>(progress.studyTargetExam || 'nda');
  const [dailyHours, setDailyHours] = useState<number>(4);
  const [prepWeeks, setPrepWeeks] = useState<number>(16);
  const [focusArea, setFocusArea] = useState<string>('Mathematics');

  const selectedExamObj = allDefenceExams.find(e => e.id === targetExam) || allDefenceExams[0];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Custom Study Planner', labelHi: 'अध्ययन योजनाकार', routeId: 'study-planner' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Calendar className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'रणनीतिक अध्ययन एवं समय सारिणी' : 'Personalized Study Timetable & Milestone Generator'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'डिफेंस परीक्षा अध्ययन योजनाकार (Study Planner)' : 'Defence Exam Study Planner & Schedule'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'लिखित परीक्षा, विगत वर्ष प्रश्न, नियमित मॉक टेस्ट एवं दैनिक शारीरिक दौड़ का संतुलित समय-विभाजन।'
              : 'Dynamic daily, weekly, and monthly timetable integrating concept study, PYQ drills, mock tests, and physical conditioning.'}
          </p>
        </div>
      </div>

      {/* Planner Inputs Card */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 text-xs">
        <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Clock className="h-4 w-4 text-amber-500" />
          <span>Configure Your Preparation Schedule</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Target Defence Exam</label>
            <select
              value={targetExam}
              onChange={(e) => {
                setTargetExam(e.target.value);
                setStudyTarget(e.target.value, dailyHours * 60);
              }}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
            >
              {allDefenceExams.map((e) => (
                <option key={e.id} value={e.id}>{lang === 'hi' ? e.nameHi : e.name}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Available Daily Study Time: <strong className="text-amber-600">{dailyHours} Hours/Day</strong>
            </label>
            <input
              type="range"
              min={2}
              max={10}
              value={dailyHours}
              onChange={(e) => {
                setDailyHours(Number(e.target.value));
                setStudyTarget(targetExam, Number(e.target.value) * 60);
              }}
              className="w-full accent-amber-600 mt-2"
            />
          </div>

          <div>
            <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
              Preparation Window: <strong className="text-amber-600">{prepWeeks} Weeks</strong>
            </label>
            <input
              type="range"
              min={4}
              max={32}
              value={prepWeeks}
              onChange={(e) => setPrepWeeks(Number(e.target.value))}
              className="w-full accent-amber-600 mt-2"
            />
          </div>
        </div>
      </div>

      {/* Generated Schedule Blueprint */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Daily Time Block Distribution */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 text-xs">
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-500" />
            <span>Recommended Daily {dailyHours}-Hour Time Blocks</span>
          </h3>

          <div className="space-y-3">
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                <span>06:00 AM - 07:15 AM (75 mins)</span>
                <span className="text-emerald-600">Physical Conditioning</span>
              </div>
              <p className="text-slate-500 text-[11px]">
                1.6 km / 2.4 km run, push-ups, chin-ups and stretching routine as per {selectedExamObj.name} standards.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                <span>Morning Block ({Math.round(dailyHours * 0.45 * 60)} mins)</span>
                <span className="text-blue-600">Core Subject & Concepts</span>
              </div>
              <p className="text-slate-500 text-[11px]">
                High-focus theory study (e.g. Mathematics / Calculus / General Science). Solve NCERT foundational examples.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                <span>Afternoon Block ({Math.round(dailyHours * 0.3 * 60)} mins)</span>
                <span className="text-purple-600">PYQ & Practice Engine</span>
              </div>
              <p className="text-slate-500 text-[11px]">
                Solve 40-50 practice questions on current topic; log wrong attempts into the Error Notebook.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                <span>Night Block ({Math.round(dailyHours * 0.25 * 60)} mins)</span>
                <span className="text-amber-600">Current Affairs & Revision</span>
              </div>
              <p className="text-slate-500 text-[11px]">
                Daily defence current events, military exercises flashcards, and formula book review.
              </p>
            </div>
          </div>
        </div>

        {/* Weekly & Monthly Milestone Schedule */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 text-xs">
          <h3 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="h-5 w-5 text-emerald-500" />
            <span>Weekly Milestone Target Blueprint</span>
          </h3>

          <div className="space-y-3">
            <div className="p-3.5 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/60 space-y-1">
              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">Weeks 1 to 4: Foundation Phase</span>
              <p className="text-slate-700 dark:text-slate-300 text-[11px]">
                Complete 100% syllabus reading, formula indexing, and basic 10-question practice drills.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/60 space-y-1">
              <span className="text-[10px] font-bold text-blue-700 dark:text-blue-400 uppercase">Weeks 5 to 10: PYQ & Speed Mastery</span>
              <p className="text-slate-700 dark:text-slate-300 text-[11px]">
                Solve past 10 years verified PYQ papers. Transition to Speed Lab shortcut calculations.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-purple-50/60 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800/60 space-y-1">
              <span className="text-[10px] font-bold text-purple-700 dark:text-purple-400 uppercase">Weeks 11 to 14: Full Mock Simulations</span>
              <p className="text-slate-700 dark:text-slate-300 text-[11px]">
                Attempt 2 full-length mocks per week in our Official Mock Test Simulator under real countdown timers.
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/60 space-y-1">
              <span className="text-[10px] font-bold text-amber-700 dark:text-amber-400 uppercase">Final 2 Weeks: Error Reversal & Tapering</span>
              <p className="text-slate-700 dark:text-slate-300 text-[11px]">
                Review all marked questions in Error Notebook twice. Keep physical fitness steady and sleep well.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
