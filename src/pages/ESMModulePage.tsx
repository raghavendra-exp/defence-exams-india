import React from 'react';
import { 
  ShieldAlert, 
  CheckCircle2, 
  FileText, 
  AlertTriangle, 
  ExternalLink,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { esmProvisionsList } from '../data/specialModules/esmAndNccData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface ESMModulePageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const ESMModulePage: React.FC<ESMModulePageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Ex-Servicemen (ESM) Provisions', labelHi: 'पूर्व सैनिक (ESM) दिशानिर्देश', routeId: 'esm-module' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <ShieldAlert className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'पूर्व सैनिक कल्याण एवं पुनर्नियुक्ति' : 'Ex-Servicemen Welfare & Re-employment'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'पूर्व सैनिक (ESM) रक्षा परीक्षा दिशानिर्देश' : 'Ex-Servicemen (ESM) Entry Provisions'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'यूपीएससी, थल सेना, नौसेना, वायु सेना एवं तटरक्षक बल में पूर्व सैनिकों हेतु आयु सीमा में छूट, आरक्षण प्रावधान एवं आवश्यक दस्तावेज।'
              : 'Service-specific age relaxations, fee exemptions, horizontal reservation quotas, and mandatory discharge documentation.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="Department of Ex-Servicemen Welfare (DESW) / Ministry of Defence"
        authority="Ministry of Defence, Government of India"
      />

      {/* Mandatory Statutory Notice */}
      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
        <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-extrabold">{lang === 'hi' ? 'महत्वपूर्ण आधिकारिक नियम' : 'Critical Official Rule'}:</span>
          <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
            "Never assume ESM benefits are identical across Army, Navy, Air Force, Coast Guard, UPSC and state recruitment systems. Age relaxation calculations (service rendered + 3 years) and reservation rules vary strictly by individual gazette notification."
          </p>
        </div>
      </div>

      {/* Provisions Grid */}
      <div className="space-y-4">
        {esmProvisionsList.map((esm, idx) => (
          <div
            key={idx}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 text-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-extrabold uppercase text-amber-600 dark:text-amber-400">
                  {esm.organization}
                </span>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                  {esm.entryCategory}
                </h2>
              </div>

              <span className={`px-2.5 py-1 rounded-xl text-[10px] font-bold ${
                esm.feeExemption 
                  ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                  : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
              }`}>
                {esm.feeExemption ? 'Fee Exempted ✓' : 'Fee Applicable'}
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">
                Age Relaxation Criteria:
              </span>
              <p className="text-slate-700 dark:text-slate-200 font-semibold leading-relaxed">
                {lang === 'hi' ? esm.ageRelaxationHi : esm.ageRelaxation}
              </p>
            </div>

            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase block">Reservation & Quota:</span>
              <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                {esm.reservationQuota}
              </p>
            </div>

            {/* Mandatory Documents */}
            <div>
              <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1.5">
                Mandatory Documentation Required at Verification:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {esm.mandatoryDocuments.map((doc, dIdx) => (
                  <div
                    key={dIdx}
                    className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-2 text-[11px]"
                  >
                    <FileText className="h-3.5 w-3.5 text-amber-500 shrink-0" />
                    <span className="truncate">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 text-[10px] text-slate-400">
              Source Authority: {esm.officialSource}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
