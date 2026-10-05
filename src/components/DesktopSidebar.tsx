import React from 'react';
import { 
  LayoutDashboard, 
  Compass, 
  GraduationCap, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  Timer, 
  Award, 
  Activity, 
  HeartPulse, 
  FileText, 
  TrendingUp, 
  Bell, 
  Library, 
  Zap, 
  Sigma, 
  Layers, 
  AlertCircle, 
  Calendar, 
  Map, 
  Users, 
  ShieldAlert, 
  Target,
  ChevronRight,
  Shield
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { allDefenceExams } from '../data/exams';

interface NavItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  routeId?: string;
  params?: Record<string, string>;
}

interface NavCategory {
  group: string;
  items: NavItem[];
}

interface DesktopSidebarProps {
  currentRoute: string;
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const DesktopSidebar: React.FC<DesktopSidebarProps> = ({
  currentRoute,
  onNavigate
}) => {
  const { lang, t } = useLanguage();

  const navCategories: NavCategory[] = [
    {
      group: lang === 'hi' ? 'मुख्य मंच' : 'Core Hub',
      items: [
        { id: 'dashboard', label: lang === 'hi' ? 'डैशबोर्ड' : 'Dashboard', icon: LayoutDashboard },
        { id: 'discovery', label: lang === 'hi' ? 'पात्रता खोजक' : 'Eligibility Finder', icon: Compass, badge: 'Smart' },
        { id: 'career-finder', label: lang === 'hi' ? 'करियर एक्सप्लोरर' : 'Career Explorer', icon: Target },
        { id: 'roadmap', label: lang === 'hi' ? 'शून्य से चयन रोडमैप' : 'Zero-to-Defence Roadmap', icon: Map }
      ]
    },
    {
      group: lang === 'hi' ? 'प्रमुख रक्षा परीक्षाएं' : 'Major Defence Exams',
      items: allDefenceExams.map(e => ({
        id: `exam-${e.id}`,
        label: lang === 'hi' ? e.nameHi : e.name,
        icon: GraduationCap,
        badge: e.entryType === 'officer' ? 'Officer' : 'Sailor/Soldier',
        routeId: 'exam-detail',
        params: { examId: e.id }
      }))
    },
    {
      group: lang === 'hi' ? 'परीक्षा एवं अभ्यास' : 'Testing & Preparation',
      items: [
        { id: 'practice', label: lang === 'hi' ? 'प्रैक्टिस इंजन' : 'Practice Engine', icon: Sparkles, badge: '8,700+' },
        { id: 'mock-tests', label: lang === 'hi' ? 'मॉक टेस्ट सिमुलेटर' : 'Official Mock Tests', icon: Timer, badge: 'Live' },
        { id: 'pyqs', label: lang === 'hi' ? 'विगत वर्ष प्रश्न (PYQ)' : 'PYQ Master', icon: HelpCircle },
        { id: 'syllabus', label: lang === 'hi' ? 'विस्तृत पाठ्यक्रम' : 'Syllabus Browser', icon: BookOpen },
        { id: 'speed-lab', label: lang === 'hi' ? 'स्पीड एवं शॉर्टकट लैब' : 'Speed & Shortcut Lab', icon: Zap },
        { id: 'formulas', label: lang === 'hi' ? 'सूत्र पुस्तिका' : 'Formula Master', icon: Sigma },
        { id: 'flashcards', label: lang === 'hi' ? 'रिवीजन फ्लैशकार्ड्स' : 'Spaced Flashcards', icon: Layers },
        { id: 'error-notebook', label: lang === 'hi' ? 'गलती नोटबुक' : 'Error Notebook', icon: AlertCircle }
      ]
    },
    {
      group: lang === 'hi' ? 'एसएसबी एवं शारीरिक दक्षता' : 'SSB & Physical Preparation',
      items: [
        { id: 'ssb-lab', label: lang === 'hi' ? 'एसएसबी / एएफएसबी लैब' : 'SSB / AFSB Lab', icon: Award, badge: '5-Day' },
        { id: 'physical-prep', label: lang === 'hi' ? 'शारीरिक दक्षता (PFT)' : 'Physical Fitness Lab', icon: Activity },
        { id: 'medical-info', label: lang === 'hi' ? 'चिकित्सा मानक केंद्र' : 'Medical Standards', icon: HeartPulse }
      ]
    },
    {
      group: lang === 'hi' ? 'रक्षा ज्ञान एवं अद्यतन' : 'Defence GK & Updates',
      items: [
        { id: 'defence-gk', label: lang === 'hi' ? 'डिफेंस जीके लैब' : 'Defence GK Lab', icon: Shield },
        { id: 'current-affairs', label: lang === 'hi' ? 'करेंट अफेयर्स' : 'Current Affairs', icon: Calendar },
        { id: 'notifications', label: lang === 'hi' ? 'लाइव अधिसूचनाएं' : 'Notifications Tracker', icon: Bell },
        { id: 'vacancies-cutoffs', label: lang === 'hi' ? 'रिक्तियां एवं कटऑफ' : 'Vacancies & Cutoffs', icon: TrendingUp },
        { id: 'books', label: lang === 'hi' ? 'पुस्तक पुस्तकालय' : 'Book Library', icon: Library }
      ]
    },
    {
      group: lang === 'hi' ? 'विशेष वर्ग एवं योजनाएं' : 'Special Categories',
      items: [
        { id: 'ncc-module', label: lang === 'hi' ? 'एनसीसी विशेष प्रविष्टियां' : 'NCC Special Entries', icon: Users },
        { id: 'esm-module', label: lang === 'hi' ? 'पूर्व सैनिक (ESM)' : 'Ex-Servicemen (ESM)', icon: ShieldAlert },
        { id: 'study-planner', label: lang === 'hi' ? 'अध्ययन योजनाकार' : 'Study Planner', icon: Calendar }
      ]
    }
  ];

  return (
    <aside className="w-64 shrink-0 hidden lg:block border-r border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-md h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto scrollbar-thin p-3 text-xs">
      <div className="space-y-5">
        {navCategories.map((cat, idx) => (
          <div key={idx} className="space-y-1">
            <h3 className="px-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
              {cat.group}
            </h3>
            <div className="space-y-0.5">
              {cat.items.map((item) => {
                const isActive = currentRoute === item.id || (item.routeId && currentRoute === item.routeId);
                const Icon = item.icon;

                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.routeId || item.id, item.params)}
                    className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg font-medium transition-all group ${
                      isActive
                        ? 'bg-amber-500/15 text-amber-700 dark:text-amber-300 font-semibold border-l-3 border-amber-600'
                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800/80 hover:text-slate-900 dark:hover:text-white'
                    }`}
                  >
                    <div className="flex items-center gap-2.5 truncate">
                      <Icon className={`h-4 w-4 shrink-0 ${isActive ? 'text-amber-600 dark:text-amber-400' : 'text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200'}`} />
                      <span className="truncate">{item.label}</span>
                    </div>

                    {item.badge && (
                      <span className={`px-1.5 py-0.5 text-[9px] font-bold rounded-md shrink-0 ${
                        item.badge === 'Officer' 
                          ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-950/60 dark:text-indigo-300'
                          : item.badge === 'Live' || item.badge === 'Smart'
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300'
                          : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300'
                      }`}>
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
    </aside>
  );
};
