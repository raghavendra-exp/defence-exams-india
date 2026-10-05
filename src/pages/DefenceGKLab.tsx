import React, { useState } from 'react';
import { 
  Shield, 
  Award, 
  MapPin, 
  Crosshair, 
  Anchor, 
  Plane, 
  CheckCircle2, 
  Flag,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { equivalentRanks, militaryCommandsData, majorMilitaryOperations, jointMilitaryExercises } from '../data/currentAffairs/defenceGkData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface DefenceGKLabProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const DefenceGKLab: React.FC<DefenceGKLabProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'ranks' | 'commands' | 'ops' | 'exercises' | 'awards'>('ranks');

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Defence Awareness & GK Lab', labelHi: 'डिफेंस सामान्य ज्ञान लैब', routeId: 'defence-gk' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Shield className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'भारतीय सशस्त्र बल ज्ञान कोष' : 'Indian Armed Forces Knowledge Repository'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'डिफेंस अवेयरनेस एवं मिलिट्री जीके लैब' : 'Defence Awareness & Military GK Lab'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'सेना, नौसेना, वायुसेना एवं तटरक्षक बल के समतुल्य पद (Ranks), 7 सैन्य कमान, ऐतिहासिक ऑपरेशन्स (मेघदूत, विजय), संयुक्त युद्धाभ्यास एवं वीरता पदक।'
              : 'Equivalent tri-service ranks, operational commands, historic operations, joint military exercises, and gallantry awards.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="Ministry of Defence & Service Headquarters"
        authority="Indian Army, Indian Navy, Indian Air Force, ICG"
      />

      {/* Tabs Ribbon */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {[
          { id: 'ranks', label: lang === 'hi' ? 'समतुल्य सैन्य पद (Equivalent Ranks)' : 'Equivalent Ranks Matrix' },
          { id: 'commands', label: lang === 'hi' ? 'सैन्य कमान एवं मुख्यालय (Commands)' : 'Military Commands' },
          { id: 'ops', label: lang === 'hi' ? 'ऐतिहासिक ऑपरेशन्स (Historic Ops)' : 'Major Operations' },
          { id: 'exercises', label: lang === 'hi' ? 'संयुक्त सैन्य अभ्यास (Exercises)' : 'Joint Military Exercises' },
          { id: 'awards', label: lang === 'hi' ? 'वीरता पदक (Gallantry Awards)' : 'Gallantry Awards' }
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

      {/* TAB 1: EQUIVALENT RANKS MATRIX */}
      {activeTab === 'ranks' && (
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
              Tri-Services Equivalent Officer Ranks Comparison
            </h2>
            <span className="text-xs text-slate-400">7th CPC Pay Scale Aligned</span>
          </div>

          <div className="overflow-x-auto scrollbar-thin">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] uppercase tracking-wider text-slate-400">
                  <th className="py-3 px-3">Grade Level</th>
                  <th className="py-3 px-3 text-amber-600 dark:text-amber-400">Indian Army</th>
                  <th className="py-3 px-3 text-blue-600 dark:text-blue-400">Indian Navy</th>
                  <th className="py-3 px-3 text-sky-600 dark:text-sky-400">Indian Air Force</th>
                  <th className="py-3 px-3">Insignia / Badges</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {equivalentRanks.map((r, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    <td className="py-3 px-3 font-semibold text-slate-500">{r.level}</td>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{r.army}</td>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{r.navy}</td>
                    <td className="py-3 px-3 font-bold text-slate-900 dark:text-white">{r.airforce}</td>
                    <td className="py-3 px-3 text-[11px] text-slate-600 dark:text-slate-400">{r.insignia}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* TAB 2: MILITARY COMMANDS */}
      {activeTab === 'commands' && (
        <div className="space-y-6">
          {militaryCommandsData.map((svc, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3"
            >
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="h-5 w-5 text-amber-500" />
                <span>{svc.service} ({svc.totalCommands} Commands)</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
                {svc.commands.map((cmd, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5"
                  >
                    <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                      {cmd.name}
                    </div>
                    <div className="text-amber-600 dark:text-amber-400 font-bold text-[11px]">
                      HQ: {cmd.hq}
                    </div>
                    <p className="text-slate-500 text-[11px]">
                      {cmd.role}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* TAB 3: HISTORIC MILITARY OPERATIONS */}
      {activeTab === 'ops' && (
        <div className="space-y-4">
          {majorMilitaryOperations.map((op, idx) => (
            <div
              key={idx}
              className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-2 text-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-extrabold text-amber-600 dark:text-amber-400 font-mono text-[11px]">
                  {op.year}
                </span>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase">
                  HISTORIC TRIUMPH
                </span>
              </div>

              <h3 className="text-base font-black text-slate-900 dark:text-white">
                {lang === 'hi' ? op.nameHi : op.name}
              </h3>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
                {op.details}
              </p>
            </div>
          ))}
        </div>
      )}

      {/* TAB 4: JOINT EXERCISES */}
      {activeTab === 'exercises' && (
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
            Major Joint Military & Bilateral Training Exercises
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-xs">
            {jointMilitaryExercises.map((ex, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                    Ex {ex.name}
                  </span>
                  <span className="px-1.5 py-0.5 rounded font-mono text-[10px] bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold">
                    {ex.branch}
                  </span>
                </div>
                <div className="text-amber-600 dark:text-amber-400 font-bold text-[11px]">
                  Partner: {ex.country}
                </div>
                <p className="text-slate-500 text-[11px] leading-relaxed">
                  {ex.type}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* TAB 5: GALLANTRY AWARDS */}
      {activeTab === 'awards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Wartime Gallantry Awards */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 text-xs">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="h-5 w-5 text-amber-500" />
              <span>Wartime Gallantry Awards (युद्धकालीन वीरता पदक)</span>
            </h3>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                  1. Param Vir Chakra (PVC) — परमवीर चक्र
                </div>
                <p className="text-slate-500 text-[11px]">
                  India highest military decoration for most conspicuous bravery or daring or pre-eminent act of valour in the presence of the enemy. Ribbon: Plain purple.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                  2. Maha Vir Chakra (MVC) — महावीर चक्र
                </div>
                <p className="text-slate-500 text-[11px]">
                  Second highest wartime gallantry award for conspicuous gallantry in the presence of the enemy on land, at sea or in the air. Ribbon: Half white and half orange.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                  3. Vir Chakra (VrC) — वीर चक्र
                </div>
                <p className="text-slate-500 text-[11px]">
                  Third in precedence for acts of gallantry in the face of the enemy. Ribbon: Half blue and half orange.
                </p>
              </div>
            </div>
          </div>

          {/* Peacetime Gallantry Awards */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 text-xs">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-500" />
              <span>Peacetime Gallantry Awards (शांतिकालीन वीरता पदक)</span>
            </h3>

            <div className="space-y-3">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                  1. Ashoka Chakra — अशोक चक्र
                </div>
                <p className="text-slate-500 text-[11px]">
                  Highest peacetime military decoration awarded for valor, courageous action or self-sacrifice away from the battlefield. Equivalent to PVC. Ribbon: Dark green with orange vertical stripe.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                  2. Kirti Chakra — कीर्ति चक्र
                </div>
                <p className="text-slate-500 text-[11px]">
                  Second in peacetime precedence for conspicuous gallantry other than in the face of the enemy. Equivalent to MVC. Ribbon: Dark green with two orange vertical stripes.
                </p>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm">
                  3. Shaurya Chakra — शौर्य चक्र
                </div>
                <p className="text-slate-500 text-[11px]">
                  Third in peacetime precedence for courage, valiant action or self-sacrifice. Equivalent to Vir Chakra. Ribbon: Dark green with three orange stripes.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
