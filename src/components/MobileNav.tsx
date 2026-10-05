import React, { useEffect } from 'react';
import { 
  Home, 
  Sparkles, 
  Award, 
  Menu, 
  X, 
  Compass, 
  BookOpen, 
  Calendar, 
  Shield, 
  Activity, 
  Layers, 
  Sigma, 
  HeartPulse, 
  TrendingUp, 
  Bell, 
  Library, 
  Map, 
  Timer,
  ChevronRight,
  AlertCircle,
  Users,
  ShieldAlert,
  Zap,
  Target
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allDefenceExams } from '../data/exams';

interface MobileNavProps {
  currentRoute: string;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({
  currentRoute,
  isOpen,
  onClose,
  onNavigate
}) => {
  const { lang } = useLanguage();

  // Prevent background scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNav = (routeId: string, params?: Record<string, string>) => {
    onNavigate(routeId, params);
    onClose();
  };

  const navGroups = [
    {
      title: lang === 'hi' ? 'मुख्य मंच एवं गाइड' : 'Core Hub & Roadmap',
      items: [
        { id: 'dashboard', label: lang === 'hi' ? 'डैशबोर्ड' : 'Dashboard', icon: Home },
        { id: 'discovery', label: lang === 'hi' ? 'पात्रता खोजक' : 'Eligibility Finder', icon: Compass, badge: 'Smart' },
        { id: 'career-finder', label: lang === 'hi' ? 'करियर एक्सप्लोरर' : 'Career Finder', icon: Target },
        { id: 'roadmap', label: lang === 'hi' ? 'शून्य से चयन रोडमैप' : 'Zero-to-Defence Roadmap', icon: Map }
      ]
    },
    {
      title: lang === 'hi' ? 'परीक्षा एवं अभ्यास' : 'Testing & Preparation',
      items: [
        { id: 'practice', label: lang === 'hi' ? 'अभ्यास इंजन' : 'Practice Engine', icon: Sparkles, badge: '10K+' },
        { id: 'mock-tests', label: lang === 'hi' ? 'आधिकारिक मॉक टेस्ट' : 'Official Mock Tests', icon: Timer, badge: 'Live' },
        { id: 'pyqs', label: lang === 'hi' ? 'विगत वर्ष प्रश्न (PYQ)' : 'PYQ Master', icon: BookOpen },
        { id: 'syllabus', label: lang === 'hi' ? 'पाठ्यक्रम' : 'Syllabus Browser', icon: BookOpen },
        { id: 'speed-lab', label: lang === 'hi' ? 'शॉर्टकट एवं स्पीड' : 'Speed & Shortcuts', icon: Zap },
        { id: 'formulas', label: lang === 'hi' ? 'सूत्र पुस्तिका' : 'Formula Master', icon: Sigma },
        { id: 'flashcards', label: lang === 'hi' ? 'रिवीजन फ्लैशकार्ड्स' : 'Spaced Flashcards', icon: Layers },
        { id: 'error-notebook', label: lang === 'hi' ? 'गलती नोटबुक' : 'Error Notebook', icon: AlertCircle }
      ]
    },
    {
      title: lang === 'hi' ? 'एसएसबी एवं स्वास्थ्य मानक' : 'SSB & Physical Preparation',
      items: [
        { id: 'ssb-lab', label: lang === 'hi' ? 'एसएसबी / एएफएसबी लैब' : 'SSB / AFSB Lab', icon: Award, badge: '5-Day' },
        { id: 'physical-prep', label: lang === 'hi' ? 'शारीरिक दक्षता (PFT)' : 'Physical Fitness Lab', icon: Activity },
        { id: 'medical-info', label: lang === 'hi' ? 'चिकित्सा मानक केंद्र' : 'Medical Standards', icon: HeartPulse }
      ]
    },
    {
      title: lang === 'hi' ? 'रक्षा ज्ञान एवं अद्यतन' : 'Defence GK & Updates',
      items: [
        { id: 'defence-gk', label: lang === 'hi' ? 'डिफेंस सामान्य ज्ञान' : 'Defence GK Lab', icon: Shield },
        { id: 'current-affairs', label: lang === 'hi' ? 'करेंट अफेयर्स' : 'Current Affairs', icon: Calendar },
        { id: 'notifications', label: lang === 'hi' ? 'लाइव अधिसूचनाएं' : 'Notifications Tracker', icon: Bell },
        { id: 'vacancies-cutoffs', label: lang === 'hi' ? 'रिक्तियां एवं कटऑफ' : 'Vacancies & Cutoffs', icon: TrendingUp },
        { id: 'books', label: lang === 'hi' ? 'पुस्तक पुस्तकालय' : 'Book Library', icon: Library }
      ]
    },
    {
      title: lang === 'hi' ? 'विशेष वर्ग एवं योजनाएं' : 'Special Modules',
      items: [
        { id: 'ncc-module', label: lang === 'hi' ? 'एनसीसी विशेष प्रविष्टियां' : 'NCC Special Entries', icon: Users },
        { id: 'esm-module', label: lang === 'hi' ? 'पूर्व सैनिक (ESM)' : 'Ex-Servicemen (ESM)', icon: ShieldAlert },
        { id: 'study-planner', label: lang === 'hi' ? 'अध्ययन योजनाकार' : 'Study Planner', icon: Calendar }
      ]
    }
  ];

  return (
    <>
      {/* Mobile Bottom Fixed Bar */}
      <nav 
        aria-label="Mobile Navigation" 
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-1.5 px-2 shadow-2xl safe-area-bottom"
      >
        <div className="max-w-md mx-auto grid grid-cols-5 gap-1">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-bold transition-colors ${
              currentRoute === 'dashboard'
                ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Home className="h-4 w-4" />
            <span className="mt-0.5">{lang === 'hi' ? 'गृह' : 'Home'}</span>
          </button>

          <button
            onClick={() => onNavigate('discovery')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-bold transition-colors ${
              currentRoute === 'discovery'
                ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Compass className="h-4 w-4" />
            <span className="mt-0.5">{lang === 'hi' ? 'पात्रता' : 'Eligible'}</span>
          </button>

          <button
            onClick={() => onNavigate('practice')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-bold transition-colors ${
              currentRoute === 'practice'
                ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span className="mt-0.5">{lang === 'hi' ? 'अभ्यास' : 'Practice'}</span>
          </button>

          <button
            onClick={() => onNavigate('mock-tests')}
            className={`flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-bold transition-colors ${
              currentRoute === 'mock-tests'
                ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Timer className="h-4 w-4" />
            <span className="mt-0.5">{lang === 'hi' ? 'मॉक टेस्ट' : 'Mocks'}</span>
          </button>

          <button
            onClick={isOpen ? onClose : () => {
              // Open drawer by triggering parent's open state
              const btn = document.querySelector('header button[aria-label="Toggle Navigation Menu"]') as HTMLButtonElement;
              if (btn) btn.click();
            }}
            className={`flex flex-col items-center justify-center py-1 rounded-xl text-[10px] font-bold transition-colors ${
              isOpen
                ? 'text-amber-600 dark:text-amber-400 bg-amber-500/10'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Menu className="h-4 w-4" />
            <span className="mt-0.5">{lang === 'hi' ? 'मेन्यू' : 'Menu'}</span>
          </button>
        </div>
      </nav>

      {/* Slide-out Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-xs transition-opacity"
            onClick={onClose}
          />

          {/* Drawer content */}
          <div className="relative w-5/6 max-w-sm bg-white dark:bg-slate-900 h-full overflow-y-auto p-4 shadow-2xl flex flex-col justify-between scrollbar-thin">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="h-7 w-7 rounded-lg bg-amber-500/20 text-amber-500 flex items-center justify-center font-bold">
                    <Shield className="h-4 w-4" />
                  </div>
                  <span className="font-extrabold text-slate-900 dark:text-white text-sm">
                    {lang === 'hi' ? 'रक्षा परीक्षा नेविगेशन' : 'Defence Exam Navigation'}
                  </span>
                </div>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                  aria-label="Close Navigation"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Major Exams Quick Jump */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'प्रमुख रक्षा परीक्षाएं' : 'Major Defence Exams'}
                </h4>
                <div className="grid grid-cols-2 gap-1.5">
                  {allDefenceExams.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => handleNav('exam-detail', { examId: e.id })}
                      className="px-2.5 py-2 text-xs font-semibold rounded-xl bg-slate-50 dark:bg-slate-800/80 hover:bg-amber-500/10 hover:text-amber-600 dark:hover:text-amber-400 text-left truncate border border-slate-200/60 dark:border-slate-700/60 transition-colors"
                    >
                      {lang === 'hi' ? e.nameHi : e.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Structured Navigation Groups */}
              <div className="space-y-4 pt-1">
                {navGroups.map((group, gIdx) => (
                  <div key={gIdx} className="space-y-1">
                    <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-1">
                      {group.title}
                    </h4>
                    <div className="space-y-0.5">
                      {group.items.map((item) => {
                        const Icon = item.icon;
                        const isActive = currentRoute === item.id;
                        return (
                          <button
                            key={item.id}
                            onClick={() => handleNav(item.id)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition-colors ${
                              isActive
                                ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 font-bold border-l-2 border-amber-600'
                                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                            }`}
                          >
                            <div className="flex items-center gap-2.5 truncate">
                              <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400'}`} />
                              <span className="truncate">{item.label}</span>
                            </div>
                            {item.badge && (
                              <span className="px-1.5 py-0.5 text-[9px] font-bold rounded bg-slate-100 dark:bg-slate-800 text-slate-500 shrink-0">
                                {item.badge}
                              </span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 text-center">
              🇮🇳 Defence Exams India Master Preparation Platform
            </div>
          </div>
        </div>
      )}
    </>
  );
};
