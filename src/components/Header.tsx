import React, { useState } from 'react';
import { 
  Shield, 
  Search, 
  Moon, 
  Sun, 
  Languages, 
  Menu, 
  Bell, 
  Sparkles,
  Award
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { liveNotifications } from '../data/updates/notificationsData';

interface HeaderProps {
  onOpenSearch: () => void;
  onToggleMobileMenu: () => void;
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenSearch,
  onToggleMobileMenu,
  onNavigate
}) => {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme, isDark } = useTheme();
  const [activeNotifIndex, setActiveNotifIndex] = useState(0);

  const currentNotif = liveNotifications[activeNotifIndex] || liveNotifications[0];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-xs">
      {/* Indian Tri-colour Accent Top Stripe */}
      <div className="h-1.5 w-full grid grid-cols-3">
        <div className="bg-[#FF9933]"></div>
        <div className="bg-[#FFFFFF]"></div>
        <div className="bg-[#138808]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-2 sm:gap-4">
          {/* Left Brand Identity */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={onToggleMobileMenu}
              className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <button
              onClick={() => onNavigate('dashboard')}
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="relative flex items-center justify-center h-10 w-10 rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 dark:from-slate-800 dark:to-slate-950 text-amber-400 shadow-md border border-amber-500/30 group-hover:scale-105 transition-transform">
                <Shield className="h-6 w-6 text-amber-400 drop-shadow" />
                <Award className="h-3 w-3 text-white absolute bottom-1 right-1" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="font-extrabold tracking-tight text-slate-900 dark:text-white text-base sm:text-lg leading-tight">
                    {lang === 'hi' ? 'डिफेंस एग्ज़ाम्स इंडिया' : 'DEFENCE EXAMS INDIA'}
                  </span>
                  <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold rounded bg-amber-500/20 text-amber-700 dark:text-amber-400 border border-amber-500/30 uppercase tracking-wider">
                    Master Hub
                  </span>
                </div>
                <p className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium truncate max-w-[200px] sm:max-w-xs">
                  {lang === 'hi' ? 'एनडीए • सीडीएस • एएफकैट • अग्निवीर • एसएसबी' : 'NDA • CDS • AFCAT • Agniveer • SSB'}
                </p>
              </div>
            </button>
          </div>

          {/* Center Live Notification Pill (Visible on md and larger) */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <button
              onClick={() => onNavigate('notifications')}
              className="w-full flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 hover:border-amber-400 dark:hover:border-amber-500/50 text-xs transition-colors text-left group"
            >
              <span className="flex h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
              <Bell className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
              <span className="truncate text-slate-700 dark:text-slate-300 group-hover:text-amber-600 dark:group-hover:text-amber-400 font-medium">
                {lang === 'hi' ? currentNotif.titleHi : currentNotif.title}
              </span>
            </button>
          </div>

          {/* Right Action Controls */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 border border-slate-200/80 dark:border-slate-700 text-xs font-medium transition-colors"
              title="Search (Ctrl + K)"
            >
              <Search className="h-4 w-4 text-slate-500" />
              <span className="hidden sm:inline">{lang === 'hi' ? 'खोजें' : 'Search'}</span>
              <kbd className="hidden lg:inline-block px-1.5 py-0.5 text-[10px] font-mono text-slate-400 bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded">
                ⌘K
              </kbd>
            </button>

            {/* Language Switcher Pill */}
            <button
              onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-300/60 dark:border-amber-700/50 hover:bg-amber-100 dark:hover:bg-amber-900/60 text-xs font-bold transition-colors"
              title="Toggle English / हिंदी"
            >
              <Languages className="h-3.5 w-3.5" />
              <span>{lang === 'en' ? 'हिंदी' : 'English'}</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={() => setTheme(isDark ? 'light' : 'dark')}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700 transition-colors"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <Sun className="h-4 w-4 text-amber-400" />
              ) : (
                <Moon className="h-4 w-4 text-slate-600" />
              )}
            </button>

            {/* Quick Practice Pill */}
            <button
              onClick={() => onNavigate('practice')}
              className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white text-xs font-bold shadow-sm transition-all hover:shadow"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-200" />
              <span>{lang === 'hi' ? 'टेस्ट दें' : 'Start Test'}</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
