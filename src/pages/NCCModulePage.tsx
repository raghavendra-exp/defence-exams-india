import React from 'react';
import { 
  Users, 
  Award, 
  CheckCircle2, 
  Sparkles, 
  ExternalLink,
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { nccBenefitsList } from '../data/specialModules/esmAndNccData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface NCCModulePageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const NCCModulePage: React.FC<NCCModulePageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'NCC Special Entry Explorer', labelHi: 'एनसीसी विशेष प्रविष्टियां', routeId: 'ncc-module' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
            <Users className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'राष्ट्रीय कैडेट कोर (NCC) विशेष प्रविष्टि' : 'National Cadet Corps (NCC) Special Schemes'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'एनसीसी "सी" प्रमाणपत्र सीधी एसएसबी प्रविष्टि एवं बोनस अंक' : 'NCC Special Entry Scheme & C-Certificate Privileges'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'बिना लिखित परीक्षा सीधे 5-दिवसीय एसएसबी साक्षात्कार (सेना, नौसेना, वायु सेना) एवं अग्निवीर भर्ती परीक्षा में 20 तक बोनस अंक।'
              : 'Direct 5-Day SSB call letters without written examinations for Army, Navy, and Air Force, plus bonus marks in Agniveer recruitment.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="National Cadet Corps Directorate / Ministry of Defence"
        authority="Indian Army Recruiting Directorate & CASB"
      />

      {/* Benefits Grid */}
      <div className="space-y-4">
        {nccBenefitsList.map((item, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 text-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-amber-600 dark:text-amber-400">
                  {item.exam}
                </span>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {item.benefitType}
                </h2>
              </div>

              <span className="px-3 py-1 rounded-full font-black text-xs bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                {item.certificateLevel}
              </span>
            </div>

            <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
              {lang === 'hi' ? item.benefitDetailsHi : item.benefitDetails}
            </p>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 text-[11px] text-slate-600 dark:text-slate-300 space-y-0.5">
              <span className="font-bold text-slate-400 uppercase text-[10px] block">Eligibility Criteria:</span>
              <p>{item.criteria}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
