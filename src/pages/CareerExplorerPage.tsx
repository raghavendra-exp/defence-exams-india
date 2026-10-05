import React from 'react';
import { 
  Target, 
  Check, 
  X, 
  ExternalLink, 
  AlertTriangle, 
  ArrowRight,
  Shield
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface CareerExplorerPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const CareerExplorerPage: React.FC<CareerExplorerPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  const comparisonTable = [
    {
      feature: 'Entry Level Qualification',
      featureHi: 'प्रवेश स्तर योग्यता',
      nda: '12th Class Pass (PCM for Navy/AF)',
      cds: 'Graduation Degree / B.E. / B.Tech',
      afcat: 'Graduation (min 60%) / B.E. (60%)',
      agniveer: '10th / 12th (Trade Dependent)',
      icg: '10th (DB) / 12th PCM (GD) / Diploma (Yantrik)'
    },
    {
      feature: 'Commissioned Officer Status',
      featureHi: 'अधिकारी पद का दर्जा',
      nda: 'YES (Permanent Commission)',
      cds: 'YES (PC / SSC via OTA)',
      afcat: 'YES (SSC & PC)',
      agniveer: 'NO (Enrolled Personnel Cadre)',
      icg: 'NO for Navik/Yantrik (YES for AC)'
    },
    {
      feature: 'Written Examination',
      featureHi: 'लिखित परीक्षा',
      nda: 'UPSC Offline (Maths + GAT = 900m)',
      cds: 'UPSC Offline (300m / 200m OTA)',
      afcat: 'IAF Online CBT (100 Qs, 300m)',
      agniveer: 'Online CEE (50 Qs, 100/200m)',
      icg: 'Online CBT (Section I, II, III/IV/V)'
    },
    {
      feature: 'SSB / AFSB 5-Day Interview',
      featureHi: 'एसएसबी / एएफएसबी साक्षात्कार',
      nda: 'MANDATORY (900 Marks)',
      cds: 'MANDATORY (300m / 200m OTA)',
      afcat: 'MANDATORY (AFSB Testing)',
      agniveer: 'NOT APPLICABLE',
      icg: 'Entry-Specific (FSB/PSB for AC)'
    },
    {
      feature: 'Physical Fitness Test (PFT)',
      featureHi: 'शारीरिक दक्षता परीक्षण',
      nda: 'Academy Standard (2.4 km run, push-ups)',
      cds: 'Academy Standard (2.4 km run, chin-ups)',
      afcat: 'Aviation Standard (1.6 km run in 10 mins)',
      agniveer: 'STRICT (1.6 km run <= 5:30m, Pull-ups)',
      icg: 'STRICT (1.6 km run <= 7 mins, Squats)'
    },
    {
      feature: 'Medical Standards',
      featureHi: 'चिकित्सा मानक',
      nda: 'Special Medical Board (Rigorous)',
      cds: 'Special Medical Board (Rigorous)',
      afcat: 'IAF Aviation Medical (AFCME/IAM)',
      agniveer: 'Recruitment Rally Medical Board',
      icg: 'Coast Guard / Naval Medical Board'
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Defence Career Path Finder & Comparison', labelHi: 'करियर एक्सप्लोरर', routeId: 'career-finder' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Target className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'करियर तुलना एवं चयन विश्लेषण' : 'Comprehensive Career Path Analysis'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'रक्षा परीक्षा तुलना एवं करियर मार्गदर्शक' : 'Defence Examination Comparison Matrix'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'एनडीए, सीडीएस, एएफकैट, अग्निवीर एवं तटरक्षक बल की सीधी तुलना - योग्यता, अधिकारी पद, लिखित परीक्षा, एसएसबी, शारीरिक एवं चिकित्सीय आवश्यकताएं।'
              : 'Direct side-by-side comparison across NDA, CDS, AFCAT, Agniveer, and Indian Coast Guard.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner />

      {/* Official Disclaimer */}
      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 flex items-start gap-2.5 text-xs text-amber-900 dark:text-amber-200">
        <AlertTriangle className="h-4 w-4 text-amber-600 shrink-0 mt-0.5" />
        <p>
          "Do not use this table as a substitute for the current official recruitment notification. Rules, age cutoffs, and vacancies change per designated course notification."
        </p>
      </div>

      {/* Big Comparison Table */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        <h2 className="text-base font-black text-slate-900 dark:text-white">
          Major Indian Defence Recruitment Comparison Table
        </h2>

        <div className="overflow-x-auto scrollbar-thin">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800 text-[11px] uppercase tracking-wider text-slate-400">
                <th className="py-3 px-3">Recruitment Feature</th>
                <th className="py-3 px-3 text-amber-600 dark:text-amber-400 font-bold">NDA & NA</th>
                <th className="py-3 px-3 text-blue-600 dark:text-blue-400 font-bold">CDS (UPSC)</th>
                <th className="py-3 px-3 text-sky-600 dark:text-sky-400 font-bold">AFCAT (IAF)</th>
                <th className="py-3 px-3 text-emerald-600 dark:text-emerald-400 font-bold">Agniveer</th>
                <th className="py-3 px-3 text-purple-600 dark:text-purple-400 font-bold">Coast Guard</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
              {comparisonTable.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="py-3.5 px-3 font-extrabold text-slate-900 dark:text-white">
                    {lang === 'hi' ? row.featureHi : row.feature}
                  </td>
                  <td className="py-3.5 px-3 font-medium text-slate-700 dark:text-slate-300">{row.nda}</td>
                  <td className="py-3.5 px-3 font-medium text-slate-700 dark:text-slate-300">{row.cds}</td>
                  <td className="py-3.5 px-3 font-medium text-slate-700 dark:text-slate-300">{row.afcat}</td>
                  <td className="py-3.5 px-3 font-medium text-slate-700 dark:text-slate-300">{row.agniveer}</td>
                  <td className="py-3.5 px-3 font-medium text-slate-700 dark:text-slate-300">{row.icg}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
