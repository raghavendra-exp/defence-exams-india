import React, { useState } from 'react';
import { 
  Shield, 
  GraduationCap, 
  Compass, 
  Award, 
  Activity, 
  BookOpen, 
  Timer, 
  Bell, 
  Sparkles, 
  ArrowRight, 
  TrendingUp, 
  Users, 
  CheckCircle2, 
  HelpCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { allDefenceExams } from '../data/exams';
import { liveNotifications } from '../data/updates/notificationsData';
import { allQuestions } from '../data/questions';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface DashboardPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const DashboardPage: React.FC<DashboardPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const { progress } = useUserProgress();

  // Daily Challenge Question
  const [dailyAnswered, setDailyAnswered] = useState<number | null>(null);
  const dailyQuestion = allQuestions[12] || allQuestions[0];

  const mottos = [
    { arm: lang === 'hi' ? 'भारतीय सेना' : 'Indian Army', motto: 'Seva Paramo Dharmah', mottoHi: 'सेवा परमो धर्मः', meaning: 'Service Before Self' },
    { arm: lang === 'hi' ? 'भारतीय नौसेना' : 'Indian Navy', motto: 'Sham No Varunah', mottoHi: 'शं नो वरुणः', meaning: 'May the Lord of Oceans be Auspicious Unto Us' },
    { arm: lang === 'hi' ? 'भारतीय वायु सेना' : 'Indian Air Force', motto: 'Nabhat Sparsham Deeptam', mottoHi: 'नभः स्पृशं दीप्तम्', meaning: 'Touch the Sky with Glory' },
    { arm: lang === 'hi' ? 'भारतीय तटरक्षक' : 'Coast Guard', motto: 'Vayam Rakshamah', mottoHi: 'वयम् रक्षामः', meaning: 'We Protect' }
  ];

  return (
    <div className="space-y-6 sm:space-y-8 animate-fadeIn">
      {/* Official Top Alert & Verification Banner */}
      <OfficialSourceBanner />

      {/* Hero Welcome Card with Military Accents */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 lg:p-10 shadow-xl border border-amber-500/20">
        {/* Subtle background crest illustration */}
        <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none translate-x-8 translate-y-8">
          <Shield className="w-80 h-80 text-amber-400" />
        </div>

        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-xs font-bold tracking-wide">
            <Sparkles className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'भारत का अग्रणी रक्षा परीक्षा तैयारी मंच' : 'India’s Comprehensive Defence Preparation Platform'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {lang === 'hi' ? (
              <>मातृभूमि की सेवा के लिए <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">सर्वोत्तम तैयारी</span></>
            ) : (
              <>Prepare with Honour to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">Serve the Nation</span></>
            )}
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            {lang === 'hi' 
              ? 'एनडीए, सीडीएस, एएफकैट, अग्निवीर (आर्मी/नेवी/एयरफोर्स), तटरक्षक बल एवं तकनीकी प्रविष्टियों का आधिकारिक पाठ्यक्रम, 8,700+ प्रश्न, 5-दिवसीय एसएसबी गाइड, एवं सटीक पात्रता खोजक।'
              : 'Complete preparation ecosystem for NDA, CDS, AFCAT, Agniveer (Army/Navy/Air Force), Indian Coast Guard & Technical Entries. Official Syllabus, 8,700+ Practice Questions, 5-Day SSB Lab & Physical Fitness Standards.'}
          </p>

          {/* Mottos grid */}
          <div className="pt-2 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
            {mottos.map((m, i) => (
              <div key={i} className="p-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-xs">
                <div className="font-bold text-amber-400 text-[11px] truncate">{m.arm}</div>
                <div className="font-serif italic text-white text-[12px] truncate">{lang === 'hi' ? m.mottoHi : m.motto}</div>
                <div className="text-[10px] text-slate-400 truncate">{m.meaning}</div>
              </div>
            ))}
          </div>

          {/* Hero CTAs */}
          <div className="pt-3 flex flex-wrap gap-3">
            <button
              onClick={() => onNavigate('discovery')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-extrabold text-sm shadow-lg hover:shadow-amber-500/25 transition-all transform hover:-translate-y-0.5"
            >
              <Compass className="h-4 w-4 text-slate-950" />
              <span>{lang === 'hi' ? 'अपनी पात्रता जांचें' : 'Check Which Exam You Can Apply For'}</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              onClick={() => onNavigate('mock-tests')}
              className="flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm border border-white/20 transition-colors"
            >
              <Timer className="h-4 w-4 text-amber-400" />
              <span>{lang === 'hi' ? 'आधिकारिक मॉक टेस्ट' : 'Attempt Official Mock Test'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Highlights Metrics Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-2xl sm:text-3xl font-black text-amber-600 dark:text-amber-400">8+</div>
          <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">
            {lang === 'hi' ? 'प्रमुख रक्षा प्रविष्टियां' : 'Major Defence Entries'}
          </div>
          <div className="text-[10px] text-slate-400">NDA, CDS, AFCAT, Agniveer, ICG</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-2xl sm:text-3xl font-black text-blue-600 dark:text-blue-400">8,750+</div>
          <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">
            {lang === 'hi' ? 'अभ्यास एवं PYQ प्रश्न' : 'Practice & PYQ Bank'}
          </div>
          <div className="text-[10px] text-slate-400">1,250+ per major exam with solutions</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-2xl sm:text-3xl font-black text-emerald-600 dark:text-emerald-400">15 OLQs</div>
          <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">
            {lang === 'hi' ? 'एसएसबी 5-दिवसीय लैब' : '5-Day SSB & AFSB Lab'}
          </div>
          <div className="text-[10px] text-slate-400">WAT, SRT, PPDT, GTO, Interview</div>
        </div>

        <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
          <div className="text-2xl sm:text-3xl font-black text-purple-600 dark:text-purple-400">100%</div>
          <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mt-0.5">
            {lang === 'hi' ? 'आधिकारिक स्रोत आधारित' : 'Official Grounded'}
          </div>
          <div className="text-[10px] text-slate-400">UPSC, MoD, Army, Navy, IAF, ICG</div>
        </div>
      </div>

      {/* Main Grid: Major Exam Cards */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white">
              {lang === 'hi' ? 'परीक्षा विशिष्ट मॉड्यूल' : 'Major Defence Examinations'}
            </h2>
            <p className="text-xs sm:text-sm text-slate-500">
              {lang === 'hi' ? 'प्रत्येक परीक्षा का अपना विशिष्ट पाठ्यक्रम, योग्यता, परीक्षा पैटर्न एवं मानक' : 'Dedicated syllabus, eligibility, marking scheme, and standards for each examination'}
            </p>
          </div>
          <button
            onClick={() => onNavigate('discovery')}
            className="text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
          >
            <span>{lang === 'hi' ? 'पात्रता खोजक' : 'Eligibility Finder'}</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {allDefenceExams.map((exam) => (
            <div
              key={exam.id}
              className="flex flex-col justify-between rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500/50 shadow-xs hover:shadow-md transition-all p-5 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`px-2 py-0.5 text-[10px] font-extrabold rounded-md uppercase tracking-wider ${
                    exam.entryType === 'officer'
                      ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300'
                      : 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300'
                  }`}>
                    {exam.entryType.toUpperCase()} ENTRY
                  </span>
                  <span className="text-[10px] text-slate-400 font-medium">
                    {exam.conductingBody.split('(')[0]}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-extrabold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {lang === 'hi' ? exam.nameHi : exam.name}
                  </h3>
                  <div className="text-xs text-slate-500 line-clamp-1">{exam.fullName}</div>
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {lang === 'hi' ? exam.overviewHi : exam.overview}
                </p>

                {/* Quick specs */}
                <div className="pt-2 border-t border-slate-100 dark:border-slate-800/80 space-y-1 text-[11px] text-slate-500 dark:text-slate-400">
                  <div className="flex justify-between">
                    <span>{lang === 'hi' ? 'आयु सीमा' : 'Age'}:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200">
                      {exam.branches[0]?.eligibility.minAgeYears} - {exam.branches[0]?.eligibility.maxAgeYears} {lang === 'hi' ? 'वर्ष' : 'Yrs'}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>{lang === 'hi' ? 'वेतन स्तर' : 'Pay'}:</span>
                    <span className="font-semibold text-slate-700 dark:text-slate-200 truncate max-w-[120px]">
                      {exam.salaryAndPerks.level.split('(')[0]}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
                <button
                  onClick={() => onNavigate('exam-detail', { examId: exam.id })}
                  className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-slate-700 dark:text-slate-300 font-bold text-xs transition-colors text-center"
                >
                  {lang === 'hi' ? 'विवरण' : 'Details'}
                </button>
                <button
                  onClick={() => onNavigate('practice', { examId: exam.id })}
                  className="px-3 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-700 dark:text-amber-400 font-bold text-xs transition-colors flex items-center gap-1"
                  title="Practice Questions"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>{lang === 'hi' ? 'अभ्यास' : 'Test'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Two Column Section: Live Notifications + Daily Challenge */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Notification Center (2 cols on lg) */}
        <div className="lg:col-span-2 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="p-2 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400">
                <Bell className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base sm:text-lg">
                  {lang === 'hi' ? 'नवीनतम रक्षा भर्ती सूचनाएं' : 'Latest Defence Exam Updates'}
                </h3>
                <p className="text-xs text-slate-500">
                  {lang === 'hi' ? 'सत्यापित आवेदन तिथियां, प्रवेश पत्र एवं परिणाम' : 'Verified application dates, admit cards & results'}
                </p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('notifications')}
              className="text-xs font-bold text-amber-600 hover:underline flex items-center gap-1"
            >
              <span>{lang === 'hi' ? 'सभी देखें' : 'View All'}</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-3">
            {liveNotifications.slice(0, 4).map((notif) => (
              <div
                key={notif.id}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/70 dark:border-slate-700/60 hover:border-amber-400/80 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2 py-0.5 text-[9px] font-extrabold rounded uppercase tracking-wider ${
                      notif.type === 'Important' 
                        ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300' 
                        : notif.type === 'Deadline' 
                        ? 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300'
                        : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                    }`}>
                      {notif.type}
                    </span>
                    <span className="text-xs font-bold text-slate-900 dark:text-white">
                      {lang === 'hi' ? notif.titleHi : notif.title}
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-1">
                    {lang === 'hi' ? notif.summaryHi : notif.summary}
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0 w-full sm:w-auto justify-end">
                  <span className="text-[11px] font-mono text-slate-400">
                    {notif.examDate}
                  </span>
                  <a
                    href={notif.officialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 rounded-lg bg-slate-200/80 dark:bg-slate-700 text-slate-600 dark:text-slate-200 hover:text-amber-600"
                    title="Official Notification Portal"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Challenge Card (1 col on lg) */}
        <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2.5 w-2.5 rounded-full bg-amber-500 animate-pulse"></span>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-600 dark:text-amber-400">
                  {lang === 'hi' ? 'दैनिक रक्षा चुनौती' : 'Daily Defence Challenge'}
                </span>
              </div>
              <span className="px-2 py-0.5 text-[9px] font-extrabold rounded bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase">
                {dailyQuestion.exam.toUpperCase()}
              </span>
            </div>

            <div>
              <div className="text-xs font-semibold text-slate-400 mb-1">
                {dailyQuestion.subject} • {dailyQuestion.topic}
              </div>
              <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white leading-relaxed">
                {lang === 'hi' ? dailyQuestion.questionHi : dailyQuestion.question}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-1.5 pt-1">
              {(lang === 'hi' ? dailyQuestion.optionsHi : dailyQuestion.options).map((opt, oIdx) => {
                const isSelected = dailyAnswered === oIdx;
                const isCorrect = oIdx === dailyQuestion.answer;
                let btnStyle = 'bg-slate-50 dark:bg-slate-800/80 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200';

                if (dailyAnswered !== null) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-500/15 border-emerald-500 text-emerald-800 dark:text-emerald-300 font-bold';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-red-500/15 border-red-500 text-red-800 dark:text-red-300';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => {
                      if (dailyAnswered === null) setDailyAnswered(oIdx);
                    }}
                    disabled={dailyAnswered !== null}
                    className={`w-full text-left p-2.5 rounded-xl border text-xs font-medium transition-all ${btnStyle}`}
                  >
                    <span className="font-mono mr-2 text-slate-400">{String.fromCharCode(65 + oIdx)}.</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>

            {/* Explanation reveal */}
            {dailyAnswered !== null && (
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <div className="font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                  <span>{lang === 'hi' ? 'विस्तृत समाधान' : 'Explanation'}:</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300">
                  {lang === 'hi' ? dailyQuestion.explanationHi : dailyQuestion.explanation}
                </p>
              </div>
            )}
          </div>

          <button
            onClick={() => onNavigate('practice')}
            className="w-full mt-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-amber-600 hover:text-white text-slate-800 dark:text-slate-200 font-bold text-xs transition-colors text-center"
          >
            {lang === 'hi' ? 'और अधिक प्रश्न हल करें (8,700+)' : 'Practice More Questions (8,700+)'}
          </button>
        </div>
      </div>
    </div>
  );
};
