import React, { useState, useMemo } from 'react';
import { 
  Compass, 
  CheckCircle, 
  XCircle, 
  AlertTriangle, 
  ExternalLink, 
  Sparkles, 
  GraduationCap, 
  Filter, 
  ArrowRight,
  Info,
  Calendar,
  UserCheck
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allDefenceExams } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface ExamDiscoveryEngineProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const ExamDiscoveryEngine: React.FC<ExamDiscoveryEngineProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  // User input states
  const [dob, setDob] = useState<string>('2005-06-15');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [maritalStatus, setMaritalStatus] = useState<'unmarried' | 'married'>('unmarried');
  const [educationLevel, setEducationLevel] = useState<string>('12th-pcm');
  const [twelfthPercentage, setTwelfthPercentage] = useState<number>(75);
  const [hasPhysicsMaths, setHasPhysicsMaths] = useState<boolean>(true);
  const [isEngineer, setIsEngineer] = useState<boolean>(false);
  const [engineeringBranch, setEngineeringBranch] = useState<string>('Mechanical');
  const [degreePercentage, setDegreePercentage] = useState<number>(65);
  const [nccCertificate, setNccCertificate] = useState<'none' | 'A' | 'B' | 'C'>('none');
  const [nccGrade, setNccGrade] = useState<'A' | 'B' | 'C'>('B');
  const [isExServiceman, setIsExServiceman] = useState<boolean>(false);

  // Calculate current age in years and months as of current date (2026 reference)
  const ageYears = useMemo(() => {
    if (!dob) return 20;
    const birthDate = new Date(dob);
    const refDate = new Date('2026-10-01');
    let age = refDate.getFullYear() - birthDate.getFullYear();
    const m = refDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && refDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age + (refDate.getMonth() - birthDate.getMonth() >= 0 ? (refDate.getMonth() - birthDate.getMonth()) / 12 : 0.5);
  }, [dob]);

  // Evaluate matching entries across all defence branches
  const evaluationResults = useMemo(() => {
    const eligibleMatches: {
      examId: string;
      examName: string;
      examNameHi: string;
      branchName: string;
      branchNameHi: string;
      wing: string;
      cadetAcademy: string;
      officialUrl: string;
      reasons: string[];
      ageRequirement: string;
      selectionProcess: string;
    }[] = [];

    const nonEligibleEntries: {
      examName: string;
      branchName: string;
      reason: string;
    }[] = [];

    // Helper checks
    allDefenceExams.forEach((exam) => {
      exam.branches.forEach((branch) => {
        const rules = branch.eligibility;
        let isEligible = true;
        const reasons: string[] = [];

        // 1. Age check
        if (ageYears < rules.minAgeYears || ageYears > rules.maxAgeYears) {
          isEligible = false;
          reasons.push(
            lang === 'hi' 
              ? `आयु सीमा (${rules.minAgeYears} - ${rules.maxAgeYears} वर्ष) से बाहर है। आपकी आयु लगभग ${ageYears.toFixed(1)} वर्ष है।` 
              : `Age out of range (${rules.minAgeYears} - ${rules.maxAgeYears} yrs). Your age is ~${ageYears.toFixed(1)} yrs.`
          );
        }

        // 2. Gender check
        if (rules.gender !== 'both' && rules.gender !== gender) {
          isEligible = false;
          reasons.push(
            lang === 'hi' 
              ? `यह प्रविष्टि केवल ${rules.gender === 'male' ? 'पुरुष' : 'महिला'} अभ्यर्थियों हेतु मान्य है।` 
              : `Only open to ${rules.gender} candidates.`
          );
        }

        // 3. Marital status check
        if (rules.maritalStatus === 'unmarried' && maritalStatus !== 'unmarried') {
          isEligible = false;
          reasons.push(
            lang === 'hi' 
              ? 'केवल अविवाहित अभ्यर्थी पात्र हैं।' 
              : 'Candidate must be unmarried.'
          );
        }

        // 4. Physics & Maths check for technical / flying / naval wings
        if (rules.physicsMathMandatory && !hasPhysicsMaths) {
          isEligible = false;
          reasons.push(
            lang === 'hi' 
              ? '10+2 स्तर पर भौतिकी एवं गणित (PCM) अनिवार्य है।' 
              : 'Physics and Mathematics at 10+2 level are mandatory.'
          );
        }

        // 5. Engineering requirement
        if (rules.engineeringRequired && !isEngineer && educationLevel !== 'engineering') {
          isEligible = false;
          reasons.push(
            lang === 'hi' 
              ? 'बी.ई. / बी.टेक इंजीनियरिंग डिग्री अनिवार्य है।' 
              : 'Engineering degree (B.E./B.Tech) is required.'
          );
        }

        // 6. Minimum Percentage check
        if (rules.minPercentage) {
          const userPct = (educationLevel === 'graduate' || educationLevel === 'engineering') ? degreePercentage : twelfthPercentage;
          if (userPct < rules.minPercentage) {
            isEligible = false;
            reasons.push(
              lang === 'hi' 
                ? `न्यूनतम ${rules.minPercentage}% अंक अनिवार्य (आपके अंक: ${userPct}%)` 
                : `Minimum ${rules.minPercentage}% marks required (Yours: ${userPct}%)`
            );
          }
        }

        // 7. NCC special entry rule
        if (branch.id === 'ncc-special') {
          if (nccCertificate !== 'C' || nccGrade === 'C') {
            isEligible = false;
            reasons.push(
              lang === 'hi' 
                ? 'एनसीसी "सी" प्रमाणपत्र में कम से कम "ए" या "बी" ग्रेड अनिवार्य है।' 
                : 'NCC "C" Certificate with minimum "A" or "B" grade is mandatory.'
            );
          }
        }

        if (isEligible) {
          eligibleMatches.push({
            examId: exam.id,
            examName: exam.name,
            examNameHi: exam.nameHi,
            branchName: branch.name,
            branchNameHi: branch.nameHi,
            wing: branch.wing,
            cadetAcademy: branch.cadetAcademy,
            officialUrl: exam.officialPortal,
            reasons: [
              lang === 'hi' ? 'आपकी आयु, लिंग और शैक्षणिक योग्यता पूर्णतः मेल खाती है!' : 'Your age, gender, and education match all official requirements!'
            ],
            ageRequirement: `${rules.minAgeYears} to ${rules.maxAgeYears} Years`,
            selectionProcess: exam.stages.map(s => s.title).join(' ➔ ')
          });
        } else {
          nonEligibleEntries.push({
            examName: exam.name,
            branchName: branch.name,
            reason: reasons[0]
          });
        }
      });
    });

    return { eligibleMatches, nonEligibleEntries };
  }, [
    ageYears, 
    gender, 
    maritalStatus, 
    educationLevel, 
    twelfthPercentage, 
    hasPhysicsMaths, 
    isEngineer, 
    degreePercentage, 
    nccCertificate, 
    nccGrade,
    lang
  ]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Eligibility Discovery Engine', labelHi: 'पात्रता खोजक', routeId: 'discovery' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header */}
      <div className="rounded-3xl bg-gradient-to-r from-amber-600 via-amber-700 to-orange-700 text-white p-6 sm:p-8 shadow-lg">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2.5 rounded-xl bg-white/10 backdrop-blur-xs">
            <Compass className="h-6 w-6 text-amber-200" />
          </div>
          <div>
            <h1 className="text-xl sm:text-3xl font-black">
              {lang === 'hi' ? 'मैं किस रक्षा परीक्षा के लिए पात्र हूँ?' : 'Which Defence Exam Can I Apply For?'}
            </h1>
            <p className="text-amber-100 text-xs sm:text-sm">
              {lang === 'hi' ? 'अपनी आयु, लिंग, 12वीं/डिग्री विषय एवं एनसीसी योग्यता के आधार पर सटीक अवसर खोजें' : 'Intelligent real-time eligibility calculator across 20+ Armed Forces entries'}
            </p>
          </div>
        </div>
      </div>

      <OfficialSourceBanner />

      {/* Interactive Form Controls */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Inputs (1 col on lg) */}
        <div className="lg:col-span-1 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4">
          <h2 className="text-base font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <UserCheck className="h-4 w-4 text-amber-600 dark:text-amber-400" />
            <span>{lang === 'hi' ? 'अभ्यर्थी विवरण दर्ज करें' : 'Candidate Profile Inputs'}</span>
          </h2>

          {/* Date of Birth */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300 flex items-center justify-between">
              <span>{lang === 'hi' ? 'जन्म तिथि (DOB)' : 'Date of Birth'}</span>
              <span className="text-amber-600 dark:text-amber-400 font-mono text-[11px]">
                {lang === 'hi' ? `आयु: ~${ageYears.toFixed(1)} वर्ष` : `Age: ~${ageYears.toFixed(1)} yrs`}
              </span>
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
            />
          </div>

          {/* Gender */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {lang === 'hi' ? 'लिंग (Gender)' : 'Gender'}
            </label>
            <div className="grid grid-cols-2 gap-2">
              {(['male', 'female'] as const).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                    gender === g
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {g === 'male' ? (lang === 'hi' ? 'पुरुष (Male)' : 'Male') : (lang === 'hi' ? 'महिला (Female)' : 'Female')}
                </button>
              ))}
            </div>
          </div>

          {/* Marital Status */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {lang === 'hi' ? 'वैवाहिक स्थिति (Marital Status)' : 'Marital Status'}
            </label>
            <select
              value={maritalStatus}
              onChange={(e) => setMaritalStatus(e.target.value as any)}
              className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
            >
              <option value="unmarried">{lang === 'hi' ? 'अविवाहित (Unmarried)' : 'Unmarried'}</option>
              <option value="married">{lang === 'hi' ? 'विवाहित (Married)' : 'Married'}</option>
            </select>
          </div>

          {/* Educational Qualification */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {lang === 'hi' ? 'शैक्षणिक योग्यता' : 'Highest Education Level'}
            </label>
            <select
              value={educationLevel}
              onChange={(e) => {
                setEducationLevel(e.target.value);
                if (e.target.value === '12th-pcm' || e.target.value === 'engineering') {
                  setHasPhysicsMaths(true);
                }
                if (e.target.value === 'engineering') {
                  setIsEngineer(true);
                } else {
                  setIsEngineer(false);
                }
              }}
              className="w-full px-3 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
            >
              <option value="10th">{lang === 'hi' ? '10वीं / मैट्रिक पास' : '10th / Matriculation Pass'}</option>
              <option value="12th-pcm">{lang === 'hi' ? '12वीं (भौतिकी एवं गणित - PCM)' : '12th (Physics & Mathematics - PCM)'}</option>
              <option value="12th-other">{lang === 'hi' ? '12वीं (कला / वाणिज्य / जीवविज्ञान)' : '12th (Arts / Commerce / Biology)'}</option>
              <option value="diploma">{lang === 'hi' ? 'डिप्लोमा इन इंजीनियरिंग (3 वर्षीय)' : '3-Year Polytechnic Engineering Diploma'}</option>
              <option value="graduate">{lang === 'hi' ? 'स्नातक (BA / B.Sc / B.Com)' : 'Graduation (BA / B.Sc / B.Com)'}</option>
              <option value="engineering">{lang === 'hi' ? 'इंजीनियरिंग स्नातक (B.E. / B.Tech)' : 'Engineering Graduate (B.E. / B.Tech)'}</option>
            </select>
          </div>

          {/* Physics & Maths Toggle */}
          <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
              {lang === 'hi' ? '10+2 में भौतिकी एवं गणित?' : 'Physics & Maths in 10+2?'}
            </span>
            <input
              type="checkbox"
              checked={hasPhysicsMaths}
              onChange={(e) => setHasPhysicsMaths(e.target.checked)}
              className="h-4 w-4 rounded accent-amber-600"
            />
          </div>

          {/* 12th Percentage */}
          <div className="space-y-1">
            <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
              <span>{lang === 'hi' ? '12वीं में कुल प्रतिशत' : '12th Class Percentage'}</span>
              <span className="text-amber-600 font-mono">{twelfthPercentage}%</span>
            </div>
            <input
              type="range"
              min={33}
              max={100}
              value={twelfthPercentage}
              onChange={(e) => setTwelfthPercentage(Number(e.target.value))}
              className="w-full accent-amber-600"
            />
          </div>

          {/* Degree Percentage (if applicable) */}
          {(educationLevel === 'graduate' || educationLevel === 'engineering') && (
            <div className="space-y-1">
              <div className="flex justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
                <span>{lang === 'hi' ? 'स्नातक/डिग्री प्रतिशत' : 'Graduation Degree Percentage'}</span>
                <span className="text-amber-600 font-mono">{degreePercentage}%</span>
              </div>
              <input
                type="range"
                min={40}
                max={100}
                value={degreePercentage}
                onChange={(e) => setDegreePercentage(Number(e.target.value))}
                className="w-full accent-amber-600"
              />
            </div>
          )}

          {/* NCC Certificate */}
          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {lang === 'hi' ? 'एनसीसी प्रमाणपत्र (NCC)' : 'NCC Certificate'}
            </label>
            <div className="grid grid-cols-4 gap-1.5">
              {(['none', 'A', 'B', 'C'] as const).map((lvl) => (
                <button
                  key={lvl}
                  type="button"
                  onClick={() => setNccCertificate(lvl)}
                  className={`py-1.5 text-xs font-bold rounded-lg border transition-all ${
                    nccCertificate === lvl
                      ? 'bg-amber-600 text-white border-amber-600'
                      : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700'
                  }`}
                >
                  {lvl === 'none' ? (lang === 'hi' ? 'कोई नहीं' : 'None') : `${lvl} Cert`}
                </button>
              ))}
            </div>
          </div>

          {nccCertificate === 'C' && (
            <div className="space-y-1">
              <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
                {lang === 'hi' ? 'एनसीसी "सी" ग्रेड' : 'NCC "C" Grade'}
              </label>
              <select
                value={nccGrade}
                onChange={(e) => setNccGrade(e.target.value as any)}
                className="w-full px-3 py-1.5 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
              >
                <option value="A">Grade "A"</option>
                <option value="B">Grade "B" (Direct Entry Eligible)</option>
                <option value="C">Grade "C"</option>
              </select>
            </div>
          )}
        </div>

        {/* Right Matches List (2 cols on lg) */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <h2 className="text-base sm:text-lg font-black text-slate-900 dark:text-white">
                {lang === 'hi' 
                  ? `पात्र रक्षा प्रविष्टियां (${evaluationResults.eligibleMatches.length} उपलब्ध)` 
                  : `Potentially Eligible Entries (${evaluationResults.eligibleMatches.length} Found)`}
              </h2>
            </div>
            <span className="text-xs font-semibold text-slate-400">
              {lang === 'hi' ? 'सत्यापित आधिकारिक नियम' : 'Matched via Official Criteria'}
            </span>
          </div>

          {evaluationResults.eligibleMatches.length === 0 ? (
            <div className="p-8 text-center rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
              <AlertTriangle className="h-10 w-10 text-amber-500 mx-auto" />
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                {lang === 'hi' ? 'वर्तमान मापदंडों पर कोई प्रविष्टि मेल नहीं खाती' : 'No Direct Matches for Current Criteria'}
              </h3>
              <p className="text-xs text-slate-500 max-w-md mx-auto">
                {lang === 'hi' 
                  ? 'कृपया जन्म तिथि, 12वीं विषय अथवा शैक्षणिक योग्यता की जांच करें।' 
                  : 'Adjust your date of birth or check whether you meet the age and PCM requirements.'}
              </p>
            </div>
          ) : (
            <div className="space-y-3">
              {evaluationResults.eligibleMatches.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500/60 p-5 shadow-xs transition-all space-y-3"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 py-0.5 text-[10px] font-extrabold rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 uppercase">
                          ELIGIBLE
                        </span>
                        <span className="text-xs font-bold text-slate-400 uppercase">
                          {m.wing} • {m.examName}
                        </span>
                      </div>
                      <h3 className="text-base font-extrabold text-slate-900 dark:text-white mt-0.5">
                        {lang === 'hi' ? m.branchNameHi : m.branchName}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onNavigate('exam-detail', { examId: m.examId })}
                        className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs transition-colors"
                      >
                        {lang === 'hi' ? 'पाठ्यक्रम एवं विवरण' : 'View Syllabus'}
                      </button>
                      <button
                        onClick={() => onNavigate('practice', { examId: m.examId })}
                        className="px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs transition-colors"
                      >
                        {lang === 'hi' ? 'टेस्ट दें' : 'Practice'}
                      </button>
                    </div>
                  </div>

                  {/* Criteria metadata pills */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 dark:text-slate-300">
                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                      <span className="font-semibold text-slate-400 block text-[10px] uppercase">
                        {lang === 'hi' ? 'आयु सीमा' : 'Age Requirement'}:
                      </span>
                      <span className="font-bold">{m.ageRequirement}</span>
                    </div>

                    <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                      <span className="font-semibold text-slate-400 block text-[10px] uppercase">
                        {lang === 'hi' ? 'प्रशिक्षण अकादमी' : 'Training Academy'}:
                      </span>
                      <span className="font-bold truncate">{m.cadetAcademy}</span>
                    </div>
                  </div>

                  {/* Selection stages progression */}
                  <div className="text-xs text-slate-500">
                    <span className="font-semibold text-slate-400 block text-[10px] uppercase mb-0.5">
                      {lang === 'hi' ? 'चयन प्रक्रिया' : 'Selection Process'}:
                    </span>
                    <span className="font-medium text-slate-700 dark:text-slate-300">
                      {m.selectionProcess}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Non-Eligible Accordion Summary */}
          {evaluationResults.nonEligibleEntries.length > 0 && (
            <div className="rounded-2xl bg-slate-50 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 p-4 space-y-2">
              <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-1.5">
                <Info className="h-4 w-4" />
                <span>{lang === 'hi' ? 'अन्य प्रविष्टियां (जिनके लिए आप वर्तमान में पात्र नहीं हैं)' : 'Other Entries (Currently Ineligible)'}</span>
              </h3>
              <div className="space-y-1.5 text-xs">
                {evaluationResults.nonEligibleEntries.slice(0, 5).map((ne, idx) => (
                  <div key={idx} className="flex items-start justify-between gap-2 text-slate-500 dark:text-slate-400">
                    <span className="font-semibold">{ne.branchName}</span>
                    <span className="text-[11px] text-red-500 dark:text-red-400 text-right">{ne.reason}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
