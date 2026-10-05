import React, { useState } from 'react';
import { 
  Activity, 
  Flame, 
  Trophy, 
  Calendar, 
  Plus, 
  AlertTriangle, 
  CheckCircle2, 
  TrendingUp,
  Heart
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { physicalStandardsData } from '../data/physical/physicalMedicalData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface PhysicalPreparationLabProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const PhysicalPreparationLab: React.FC<PhysicalPreparationLabProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const { progress, addPhysicalLog } = useUserProgress();

  // Form input for new workout log
  const [distanceKm, setDistanceKm] = useState<number>(1.6);
  const [runningTimeMinutes, setRunningTimeMinutes] = useState<number>(5.30);
  const [pushups, setPushups] = useState<number>(30);
  const [situps, setSitups] = useState<number>(40);
  const [pullups, setPullups] = useState<number>(8);
  const [workoutNotes, setWorkoutNotes] = useState<string>('');
  const [showLogModal, setShowLogModal] = useState<boolean>(false);

  const handleSaveWorkout = (e: React.FormEvent) => {
    e.preventDefault();
    addPhysicalLog({
      runningDistanceKm: distanceKm,
      runningTimeMinutes,
      pushups,
      situps,
      pullups,
      notes: workoutNotes || 'Daily routine workout'
    });
    setShowLogModal(false);
    setWorkoutNotes('');
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Physical Fitness Lab (PFT)', labelHi: 'शारीरिक दक्षता लैब', routeId: 'physical-prep' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
              <Activity className="h-3.5 w-3.5" />
              <span>{lang === 'hi' ? 'शारीरिक दक्षता परीक्षण (PFT)' : 'Official Physical Fitness Standards'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {lang === 'hi' ? 'रक्षा शारीरिक तैयारी एवं फिटनेस ट्रैकर' : 'Defence Physical Fitness Lab & Tracker'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              {lang === 'hi' 
                ? 'थल सेना, नौसेना, वायु सेना एवं तटरक्षक बल के आधिकारिक शारीरिक मापदंड, दौड़ समय एवं दैनिक व्यायाम ट्रैकर।'
                : 'Entry-specific physical standards for Army, Navy, Air Force, and Coast Guard with personal fitness tracking.'}
            </p>
          </div>

          <button
            onClick={() => setShowLogModal(true)}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-lg shrink-0 transition-colors"
          >
            <Plus className="h-4 w-4" />
            <span>{lang === 'hi' ? 'दैनिक व्यायाम दर्ज करें' : 'Log Daily Workout'}</span>
          </button>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="Indian Armed Forces Physical Fitness Test Guidelines"
        authority="Army Recruiting Directorate / CASB / Naval Recruitment"
      />

      {/* Statutory Health & Safety Alert */}
      <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 flex items-start gap-3 text-xs text-red-900 dark:text-red-200">
        <AlertTriangle className="h-5 w-5 text-red-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-extrabold">{lang === 'hi' ? 'स्वास्थ्य एवं सुरक्षा परामर्श' : 'Health & Safety Advisory'}:</span>
          <p className="text-red-800 dark:text-red-300 leading-relaxed">
            "Training should be adjusted for your fitness level; seek professional medical advice if you have a medical condition or injury. Never exert beyond safe cardiovascular limits."
          </p>
        </div>
      </div>

      {/* Official Standards Table */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500" />
          <span>{lang === 'hi' ? 'आधिकारिक भर्ती शारीरिक मापदंड' : 'Official Recruitment Physical Standards'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {physicalStandardsData.map((std, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2 text-xs"
            >
              <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                <span className="font-bold text-amber-600 dark:text-amber-400 uppercase text-[10px]">
                  {std.wing} • {std.examId}
                </span>
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                  {std.marksOrQualifying}
                </span>
              </div>

              <h3 className="font-extrabold text-slate-900 dark:text-white text-sm">
                {lang === 'hi' ? std.testHi : std.test}
              </h3>

              <div className="space-y-1 text-slate-600 dark:text-slate-300 text-[11px]">
                <div>
                  <span className="text-slate-400 font-bold">Male: </span>
                  <span className="font-semibold">{std.maleStandard}</span>
                </div>
                <div>
                  <span className="text-slate-400 font-bold">Female: </span>
                  <span className="font-semibold">{std.femaleStandard}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-slate-500 text-[11px]">
                <strong className="text-slate-700 dark:text-slate-200">Tip: </strong>
                {lang === 'hi' ? std.trainingTipsHi : std.trainingTips}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Personal Workout Tracker Log History */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-emerald-500" />
              <span>{lang === 'hi' ? 'आपकी फिटनेस प्रगति एवं रिकॉर्ड्स' : 'Your Physical Workout Progress'}</span>
            </h2>
            <p className="text-xs text-slate-500">
              Saved locally on your device for continuous conditioning
            </p>
          </div>
        </div>

        {progress.physicalLogs.length === 0 ? (
          <div className="p-8 text-center text-slate-400 text-xs">
            No workouts logged yet. Click "Log Daily Workout" above to record your first run!
          </div>
        ) : (
          <div className="space-y-2.5">
            {progress.physicalLogs.map((log) => (
              <div
                key={log.id}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-bold text-amber-600 dark:text-amber-400">
                      {log.date}
                    </span>
                    <span className="text-slate-400">•</span>
                    <span className="font-extrabold text-slate-900 dark:text-white">
                      {log.runningDistanceKm} km in {log.runningTimeMinutes} mins
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500">{log.notes}</p>
                </div>

                <div className="flex items-center gap-4 text-xs font-semibold text-slate-600 dark:text-slate-300 shrink-0">
                  <div>Push-ups: <strong className="text-slate-900 dark:text-white">{log.pushups}</strong></div>
                  <div>Sit-ups: <strong className="text-slate-900 dark:text-white">{log.situps}</strong></div>
                  <div>Pull-ups: <strong className="text-slate-900 dark:text-white">{log.pullups}</strong></div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Workout Log Modal */}
      {showLogModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
          <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-2xl border border-slate-200 dark:border-slate-800 space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
              Log Today Workout
            </h3>

            <form onSubmit={handleSaveWorkout} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Running Distance (km)
                </label>
                <input
                  type="number"
                  step="0.1"
                  value={distanceKm}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">
                  Running Time (minutes, e.g. 5.30 for 5m 30s)
                </label>
                <input
                  type="number"
                  step="0.01"
                  value={runningTimeMinutes}
                  onChange={(e) => setRunningTimeMinutes(Number(e.target.value))}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
                />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Push-ups</label>
                  <input
                    type="number"
                    value={pushups}
                    onChange={(e) => setPushups(Number(e.target.value))}
                    className="w-full px-2 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-center"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Sit-ups</label>
                  <input
                    type="number"
                    value={situps}
                    onChange={(e) => setSitups(Number(e.target.value))}
                    className="w-full px-2 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-center"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Pull-ups</label>
                  <input
                    type="number"
                    value={pullups}
                    onChange={(e) => setPullups(Number(e.target.value))}
                    className="w-full px-2 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-center"
                  />
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Workout Notes</label>
                <input
                  type="text"
                  value={workoutNotes}
                  onChange={(e) => setWorkoutNotes(e.target.value)}
                  placeholder="e.g. morning track intervals, felt strong"
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowLogModal(false)}
                  className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 font-bold"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold"
                >
                  Save Workout
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
