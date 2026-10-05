import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  Award, 
  AlertTriangle, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { officialVacanciesList } from '../data/updates/vacanciesData';
import { officialCutoffsList } from '../data/updates/cutoffsData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface VacancyCutoffCenterProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const VacancyCutoffCenter: React.FC<VacancyCutoffCenterProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'vacancies' | 'cutoffs'>('vacancies');

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Vacancies & Cutoffs Center', labelHi: 'रिक्तियां एवं कटऑफ', routeId: 'vacancies-cutoffs' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <TrendingUp className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'आधिकारिक रिक्तियां एवं ऐतिहासिक कटऑफ' : 'Official Vacancies & Historical Cutoffs'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'रक्षा रिक्तियां एवं आधिकारिक कटऑफ केंद्र' : 'Defence Vacancy Tracker & Cutoff Intelligence'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'एनडीए, सीडीएस, एएफकैट एवं तटरक्षक बल की शाखावार आधिकारिक रिक्तियां एवं विगत वर्षों के लिखित व अंतिम कटऑफ अंक।'
              : 'Verified vacancy distributions across services and authoritative historical cutoff scores published in official UPSC/IAF gazettes.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="UPSC Examination Notices & Service Headquarters Gazettes"
        authority="Union Public Service Commission & Ministry of Defence"
      />

      {/* Tabs */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => setActiveTab('vacancies')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold border transition-all ${
            activeTab === 'vacancies'
              ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-amber-400'
          }`}
        >
          {lang === 'hi' ? 'आधिकारिक रिक्तियां (Vacancies)' : 'Official Vacancy Tracker'}
        </button>

        <button
          onClick={() => setActiveTab('cutoffs')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold border transition-all ${
            activeTab === 'cutoffs'
              ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
              : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-amber-400'
          }`}
        >
          {lang === 'hi' ? 'ऐतिहासिक कटऑफ (Cutoffs)' : 'Official Cutoff Database'}
        </button>
      </div>

      {/* TAB 1: VACANCIES */}
      {activeTab === 'vacancies' && (
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base font-black text-slate-900 dark:text-white">
              Recruitment Wing & Branch Vacancy Distributions
            </h2>
            <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
              Verified from Notifications
            </span>
          </div>

          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] uppercase tracking-wider text-slate-400">
                  <th className="py-3 px-3">Exam / Course</th>
                  <th className="py-3 px-3">Wing</th>
                  <th className="py-3 px-3">Branch Details</th>
                  <th className="py-3 px-3 text-center">Male</th>
                  <th className="py-3 px-3 text-center">Female</th>
                  <th className="py-3 px-3 text-center font-bold text-amber-600">Total</th>
                  <th className="py-3 px-3 text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {officialVacanciesList.map((v) => (
                  <tr key={v.id} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{v.courseCycle}</td>
                    <td className="py-3 px-3 font-semibold text-slate-600 dark:text-slate-300">{v.wing}</td>
                    <td className="py-3 px-3 text-slate-500 text-[11px] max-w-xs">{v.branch}</td>
                    <td className="py-3 px-3 text-center font-mono">{v.maleVacancies}</td>
                    <td className="py-3 px-3 text-center font-mono">{v.femaleVacancies}</td>
                    <td className="py-3 px-3 text-center font-mono font-bold text-slate-900 dark:text-white">{v.totalVacancies}</td>
                    <td className="py-3 px-3 text-right">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 uppercase">
                        {v.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: CUTOFFS */}
      {activeTab === 'cutoffs' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
            <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <strong>Important Statutory Notice: </strong>
              Historical cutoffs are published for orientation only. Future cutoff marks depend entirely on exam difficulty, candidate performance, and notified vacancies. Securing previous cutoffs does not guarantee future selection.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {officialCutoffsList.map((cut) => (
              <div
                key={cut.id}
                className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 text-xs"
              >
                <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
                  <span className="font-mono text-amber-600 dark:text-amber-400 font-extrabold text-[11px]">
                    {cut.year}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 dark:bg-slate-800 uppercase">
                    {cut.examId.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white">
                    {cut.paperOrStage}
                  </h3>
                  <div className="text-xs text-slate-500 font-medium">Category: {cut.category}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Written Cutoff</span>
                    <span className="text-lg font-black text-slate-900 dark:text-white">
                      {cut.writtenCutoff} <span className="text-xs text-slate-400 font-normal">/ {cut.examId === 'nda' ? 900 : cut.examId === 'cds' ? 300 : 300}</span>
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                    <span className="text-[10px] text-slate-400 font-bold uppercase block">Final Merit Cutoff</span>
                    <span className="text-lg font-black text-amber-600 dark:text-amber-400">
                      {cut.finalRecommendedCutoff} <span className="text-xs text-slate-400 font-normal">/ {cut.maxMarks}</span>
                    </span>
                  </div>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 text-[11px] text-slate-600 dark:text-slate-300">
                  <strong>Sectional Minimum: </strong> {cut.minimumQualifying}
                </div>

                <div className="text-[10px] text-slate-400">
                  Official Source: {cut.source}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
