import React from 'react';
import { 
  Home, 
  GraduationCap, 
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
  ChevronRight
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

  const handleNav = (routeId: string, params?: Record<string, string>) => {
    onNavigate(routeId, params);
    onClose();
  };

  return (
    <>
      {/* Mobile Bottom Fixed Bar */}
      <nav aria-label="Mobile Navigation" className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 py-1 px-2 shadow-lg">
        <div className="grid grid-cols-5 gap-1">
          <button
            onClick={() => onNavigate('dashboard')}
            className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              currentRoute === 'dashboard'
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Home className="h-4 w-4" />
            <span className="mt-0.5">{lang === 'hi' ? 'गृह' : 'Home'}</span>
          </button>

          <button
            onClick={() => onNavigate('discovery')}
            className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              currentRoute === 'discovery'
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Compass className="h-4 w-4" />
            <span className="mt-0.5">{lang === 'hi' ? 'पात्रता' : 'Eligible'}</span>
          </button>

          <button
            onClick={() => onNavigate('practice')}
            className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              currentRoute === 'practice'
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span className="mt-0.5">{lang === 'hi' ? 'अभ्यास' : 'Practice'}</span>
          </button>

          <button
            onClick={() => onNavigate('ssb-lab')}
            className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              currentRoute === 'ssb-lab'
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Award className="h-4 w-4" />
            <span className="mt-0.5">SSB</span>
          </button>

          <button
            onClick={() => onNavigate('physical-prep')}
            className={`flex flex-col items-center justify-center py-1 rounded-lg text-[10px] font-semibold transition-colors ${
              currentRoute === 'physical-prep'
                ? 'text-amber-600 dark:text-amber-400'
                : 'text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white'
            }`}
          >
            <Activity className="h-4 w-4" />
            <span className="mt-0.5">{lang === 'hi' ? 'फिटनेस' : 'Fitness'}</span>
          </button>
        </div>
      </nav>

      {/* Slide-out Drawer Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-xs transition-opacity"
            onClick={onClose}
          />

          {/* Drawer content */}
          <div className="relative w-4/5 max-w-sm bg-white dark:bg-slate-900 h-full overflow-y-auto p-4 shadow-2xl flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-slate-800">
                <span className="font-extrabold text-slate-900 dark:text-white text-base">
                  {lang === 'hi' ? 'रक्षा परीक्षा नेविगेशन' : 'Defence Navigation'}
                </span>
                <button
                  onClick={onClose}
                  className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Major Exams Quick Jump */}
              <div>
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-2">
                  {lang === 'hi' ? 'रक्षा परीक्षाएं' : 'Major Defence Exams'}
                </h4>
                <div className="grid grid-cols-2 gap-1.5">
                  {allDefenceExams.map((e) => (
                    <button
                      key={e.id}
                      onClick={() => handleNav('exam-detail', { examId: e.id })}
                      className="px-2.5 py-2 text-xs font-semibold rounded-lg bg-slate-50 dark:bg-slate-800/80 hover:bg-amber-500/10 hover:text-amber-600 text-left truncate border border-slate-200/60 dark:border-slate-700/60"
                    >
                      {lang === 'hi' ? e.nameHi : e.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* All Major Modules */}
              <div className="space-y-1 text-xs">
                <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1 pt-2">
                  {lang === 'hi' ? 'अध्ययन एवं टूल्स' : 'Preparation Modules'}
                </h4>
                {[
                  { id: 'mock-tests', label: lang === 'hi' ? 'आधिकारिक मॉक टेस्ट' : 'Official Mock Tests', icon: Timer },
                  { id: 'pyqs', label: lang === 'hi' ? 'विगत वर्ष प्रश्न (PYQ)' : 'PYQ Master', icon: BookOpen },
                  { id: 'syllabus', label: lang === 'hi' ? 'पाठ्यक्रम' : 'Syllabus Browser', icon: BookOpen },
                  { id: 'defence-gk', label: lang === 'hi' ? 'डिफेंस सामान्य ज्ञान' : 'Defence GK Lab', icon: Shield },
                  { id: 'current-affairs', label: lang === 'hi' ? 'करेंट अफेयर्स' : 'Current Affairs', icon: Calendar },
                  { id: 'medical-info', label: lang === 'hi' ? 'चिकित्सा मानक' : 'Medical Standards', icon: HeartPulse },
                  { id: 'vacancies-cutoffs', label: lang === 'hi' ? 'रिक्तियां एवं कटऑफ' : 'Vacancies & Cutoffs', icon: TrendingUp },
                  { id: 'notifications', label: lang === 'hi' ? 'लाइव सूचनाएं' : 'Notifications', icon: Bell },
                  { id: 'books', label: lang === 'hi' ? 'पुस्तकें एवं सामग्री' : 'Book Library', icon: Library },
                  { id: 'speed-lab', label: lang === 'hi' ? 'शॉर्टकट एवं स्पीड' : 'Speed & Shortcuts', icon: Sparkles },
                  { id: 'formulas', label: lang === 'hi' ? 'सूत्र पुस्तिका' : 'Formula Master', icon: Sigma },
                  { id: 'flashcards', label: lang === 'hi' ? 'फ्लैशकार्ड्स' : 'Flashcards', icon: Layers },
                  { id: 'roadmap', label: lang === 'hi' ? 'शून्य से चयन रोडमैप' : 'Zero to Defence Roadmap', icon: Map },
                  { id: 'career-finder', label: lang === 'hi' ? 'करियर एक्सप्लोरर' : 'Career Finder', icon: Compass }
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(item.id)}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="h-4 w-4 text-amber-600 dark:text-amber-400" />
                        <span>{item.label}</span>
                      </div>
                      <ChevronRight className="h-3.5 w-3.5 text-slate-400" />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 text-[11px] text-slate-500 text-center">
              🇮🇳 Defence Exams India Master Preparation Platform
            </div>
          </div>
        </div>
      )}
    </>
  );
};
