import React from 'react';
import { 
  HeartPulse, 
  Eye, 
  AlertTriangle, 
  CheckCircle2, 
  FileText, 
  ShieldCheck, 
  Info,
  Calendar,
  XCircle
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { visionStandardsData, commonMedicalRejections } from '../data/physical/physicalMedicalData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface MedicalInformationPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const MedicalInformationPage: React.FC<MedicalInformationPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Medical Information Center', labelHi: 'चिकित्सा मानक केंद्र', routeId: 'medical-info' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-400/30">
            <HeartPulse className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'सशस्त्र बल चिकित्सा मानक' : 'Armed Forces Medical Standards'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'रक्षा चिकित्सा मानक एवं स्वास्थ्य केंद्र' : 'Defence Medical Standards & Appeal Guide'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'आधिकारिक दृष्टि मानक (6/6, सीपी-1/2/3, लेसिक नियम), दंत अंक (14 अंक), सामान्य अस्वीकृति कारण एवं अपील मेडिकल बोर्ड (AMB) प्रक्रिया।'
              : 'Official visual standards, height-weight parameters, dental points, common causes of medical rejection, and the 42-day Appeal Medical Board procedure.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="Directorate General Armed Forces Medical Services (DGAFMS)"
        authority="Ministry of Defence, Government of India"
      />

      {/* Mandatory Statutory Medical Disclaimer */}
      <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 flex items-start gap-3 text-xs text-amber-900 dark:text-amber-200">
        <AlertTriangle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="space-y-0.5">
          <span className="font-extrabold">{lang === 'hi' ? 'महत्वपूर्ण वैधानिक अस्वीकरण' : 'Statutory Medical Advisory'}:</span>
          <p className="text-amber-800 dark:text-amber-300 leading-relaxed">
            "This information is strictly for educational guidance based on published recruitment standards. Only official Armed Forces Medical Boards (SMB / AMB / RMB) possess the authority to certify a candidate medically fit or unfit. We do not provide clinical diagnoses, and fitness can never be guaranteed."
          </p>
        </div>
      </div>

      {/* Visual Standards by Branch */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Eye className="h-5 w-5 text-amber-500" />
            <span>{lang === 'hi' ? 'शाखावार नेत्र एवं दृष्टि मानक (Visual Standards)' : 'Visual & Eye Acuity Standards'}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
          {visionStandardsData.map((v, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2.5"
            >
              <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-slate-700/60 pb-2">
                <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                  {v.branch}
                </span>
                <span className="px-1.5 py-0.5 rounded font-mono font-bold text-[10px] bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase">
                  {v.examId.toUpperCase()}
                </span>
              </div>

              <div className="space-y-1 text-slate-600 dark:text-slate-300 text-[11px]">
                <div className="flex justify-between">
                  <span>Uncorrected Vision:</span>
                  <strong className="text-slate-900 dark:text-white font-mono">{v.uncorrectedBetter} / {v.uncorrectedWorse}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Colour Perception:</span>
                  <strong className="text-emerald-600 dark:text-emerald-400 font-mono">{v.colourPerception}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Myopia Limit:</span>
                  <strong className="text-slate-900 dark:text-white font-mono">{v.myopiaMax}</strong>
                </div>
                <div className="flex justify-between">
                  <span>Hypermetropia:</span>
                  <strong className="text-slate-900 dark:text-white font-mono">{v.hypermetropiaMax}</strong>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200/60 dark:border-slate-700/60 text-[11px]">
                <span className="font-bold text-slate-700 dark:text-slate-200 block mb-0.5">LASIK / Laser Policy:</span>
                <p className="text-slate-500 leading-relaxed">
                  {lang === 'hi' && v.lasikCriteriaHi ? v.lasikCriteriaHi : v.lasikCriteria}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Common Causes of Medical Rejection & Actionable Remedies */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
        <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <HeartPulse className="h-5 w-5 text-red-500" />
          <span>{lang === 'hi' ? 'सामान्य चिकित्सकीय अस्वीकृति के कारण एवं निवारण' : 'Common Causes for Medical Unfitness & Prevention'}</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          {commonMedicalRejections.map((rej, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-2"
            >
              <h3 className="text-sm font-extrabold text-slate-900 dark:text-white">
                {lang === 'hi' ? rej.conditionHi : rej.condition}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                {lang === 'hi' ? rej.detailsHi : rej.details}
              </p>
              <div className="p-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-[11px] text-emerald-700 dark:text-emerald-400">
                <strong>Corrective Action / Check: </strong> {rej.remedy}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Medical Appeal Procedure (SMB -> AMB -> RMB) */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 text-xs">
        <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
          <FileText className="h-5 w-5 text-amber-500" />
          <span>{lang === 'hi' ? 'चिकित्सीय अपील प्रक्रिया (AMB एवं RMB)' : 'Official Medical Board Appeal Workflow'}</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
            <span className="text-[10px] font-bold text-amber-600 uppercase">Stage 1</span>
            <div className="font-extrabold text-slate-900 dark:text-white text-sm">Special Medical Board (SMB)</div>
            <p className="text-slate-500 text-[11px]">
              Primary evaluation conducted at military hospitals immediately following SSB or Agniveer rally. If declared unfit, a copy of the unfitness certificate is handed to candidate.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
            <span className="text-[10px] font-bold text-amber-600 uppercase">Stage 2 (42-Day Window)</span>
            <div className="font-extrabold text-slate-900 dark:text-white text-sm">Appeal Medical Board (AMB)</div>
            <p className="text-slate-500 text-[11px]">
              Candidate must deposit nominal appeal fee (₹40 MRO) and report to designated Command Hospital within 42 days for complete re-examination by a senior medical specialist.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1.5">
            <span className="text-[10px] font-bold text-amber-600 uppercase">Stage 3 (Final Recourse)</span>
            <div className="font-extrabold text-slate-900 dark:text-white text-sm">Review Medical Board (RMB)</div>
            <p className="text-slate-500 text-[11px]">
              If declared unfit by AMB, a final review application may be sanctioned by Director General Armed Forces Medical Services (DGAFMS) at Army Hospital (R&R), New Delhi within 24 hours.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
