import React from 'react';
import { 
  Bell, 
  ExternalLink, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { liveNotifications } from '../data/updates/notificationsData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface NotificationsTrackerProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const NotificationsTracker: React.FC<NotificationsTrackerProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  const lifecycleStages = [
    'Notification',
    'Application Window',
    'Admit Card',
    'Written Exam',
    'Result',
    'SSB / PFT',
    'Medical',
    'Merit List',
    'Training'
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Live Notifications Tracker', labelHi: 'अधिसूचना ट्रैकर', routeId: 'notifications' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 text-red-300 text-xs font-bold border border-red-400/30">
            <Bell className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'लाइव रक्षा भर्ती कैलेंडर' : 'Live Defence Recruitment Lifecycle'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'रक्षा भर्ती सूचनाएं एवं परीक्षा कैलेंडर' : 'Live Defence Notifications & Calendar'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'अधिसूचना -> ऑनलाइन आवेदन -> प्रवेश पत्र -> लिखित परीक्षा -> एसएसबी -> चिकित्सा -> अंतिम मेरिट की संपूर्ण चरणबद्ध ट्रैकिंग।'
              : 'End-to-end recruitment pipeline tracking: Notification, Application, Admit Cards, Written, SSB, Medicals, and Academy Joining.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="Government of India Defence Recruitment Portals"
        authority="UPSC, Army, Navy, Air Force, Coast Guard"
      />

      {/* Recruitment Lifecycle Visual Pipeline */}
      <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-3">
        <h2 className="text-sm font-extrabold uppercase tracking-wider text-slate-400">
          Official 9-Stage Recruitment Lifecycle
        </h2>
        <div className="grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-9 gap-2 text-center text-xs">
          {lifecycleStages.map((stage, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1"
            >
              <span className="h-5 w-5 mx-auto rounded-full bg-amber-500/20 text-amber-600 dark:text-amber-400 font-bold text-[10px] flex items-center justify-center">
                {idx + 1}
              </span>
              <div className="font-extrabold text-[11px] text-slate-900 dark:text-white leading-tight">
                {stage}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Notification Cards */}
      <div className="space-y-4">
        {liveNotifications.map((notif) => (
          <div
            key={notif.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-4 text-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                  notif.type === 'Important'
                    ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-300'
                    : notif.type === 'Deadline'
                    ? 'bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300'
                    : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300'
                }`}>
                  {notif.type}
                </span>

                <span className="font-mono text-slate-400 text-[11px]">
                  Verified: {notif.verifiedDate}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                  notif.status === 'Live'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                    : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                }`}>
                  Status: {notif.status}
                </span>
              </div>
            </div>

            <div>
              <h2 className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white">
                {lang === 'hi' ? notif.titleHi : notif.title}
              </h2>
              <p className="text-slate-600 dark:text-slate-300 mt-1 leading-relaxed text-xs sm:text-sm">
                {lang === 'hi' ? notif.summaryHi : notif.summary}
              </p>
            </div>

            {/* Timeline Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-0.5">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Notification Date</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">{notif.notificationDate}</span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-0.5">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Application Window</span>
                <span className="font-bold text-slate-900 dark:text-white font-mono">
                  {notif.applicationStart} ➔ {notif.applicationEnd}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-0.5">
                <span className="text-[10px] text-slate-400 font-bold uppercase block">Exam / Rally Date</span>
                <span className="font-bold text-amber-600 dark:text-amber-400 font-mono">{notif.examDate}</span>
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <a
                href={notif.officialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-amber-600 text-white font-bold text-xs transition-colors"
              >
                <span>Visit Official Portal</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
