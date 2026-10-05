import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { DesktopSidebar } from './components/DesktopSidebar';
import { MobileNav } from './components/MobileNav';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { useLanguage } from './context/LanguageContext';

// Pages
import { DashboardPage } from './pages/DashboardPage';
import { ExamDiscoveryEngine } from './pages/ExamDiscoveryEngine';
import { ExamDetailPage } from './pages/ExamDetailPage';
import { PracticePage } from './pages/PracticePage';
import { MockTestSimulatorPage } from './pages/MockTestSimulatorPage';
import { PYQMasterPage } from './pages/PYQMasterPage';
import { SyllabusPage } from './pages/SyllabusPage';
import { SpeedLabPage } from './pages/SpeedLabPage';
import { FormulaBookPage } from './pages/FormulaBookPage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { ErrorNotebookPage } from './pages/ErrorNotebookPage';
import { SSBPreparationLab } from './pages/SSBPreparationLab';
import { PhysicalPreparationLab } from './pages/PhysicalPreparationLab';
import { MedicalInformationPage } from './pages/MedicalInformationPage';
import { DefenceGKLab } from './pages/DefenceGKLab';
import { CurrentAffairsPage } from './pages/CurrentAffairsPage';
import { NotificationsTracker } from './pages/NotificationsTracker';
import { VacancyCutoffCenter } from './pages/VacancyCutoffCenter';
import { BookLibraryPage } from './pages/BookLibraryPage';
import { NCCModulePage } from './pages/NCCModulePage';
import { ESMModulePage } from './pages/ESMModulePage';
import { StudyPlannerPage } from './pages/StudyPlannerPage';
import { ZeroToDefenceRoadmapPage } from './pages/ZeroToDefenceRoadmapPage';
import { CareerExplorerPage } from './pages/CareerExplorerPage';
import { Shield, ExternalLink, Heart, Award } from 'lucide-react';

function parseHash(hash: string): { route: string; params: Record<string, string> } {
  const clean = hash.replace(/^#\/?/, '');
  if (!clean) return { route: 'dashboard', params: {} };
  const [routePart, queryPart] = clean.split('?');
  const params: Record<string, string> = {};
  if (queryPart) {
    const searchParams = new URLSearchParams(queryPart);
    searchParams.forEach((val, key) => {
      params[key] = val;
    });
  }
  return { route: routePart || 'dashboard', params };
}

export const App: React.FC = () => {
  const { lang, t } = useLanguage();
  const [currentRoute, setCurrentRoute] = useState<string>(() => parseHash(window.location.hash).route);
  const [routeParams, setRouteParams] = useState<Record<string, string>>(() => parseHash(window.location.hash).params);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync with browser hash changes for back/forward buttons & deep linking
  useEffect(() => {
    const handleHashChange = () => {
      const { route, params } = parseHash(window.location.hash);
      setCurrentRoute(route);
      setRouteParams(params);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Global keyboard shortcut for search (Ctrl+K or Cmd+K)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavigate = (routeId: string, params?: Record<string, string>) => {
    const cleanRoute = routeId.replace(/^exam-/, '');
    const isExamDirect = ['nda', 'cds', 'afcat', 'agniveer-army', 'agniveer-navy', 'agniveer-air-force', 'coast-guard', 'technical-entries'].includes(cleanRoute);
    
    const targetRoute = isExamDirect ? 'exam-detail' : routeId;
    const finalParams = isExamDirect ? { examId: cleanRoute, ...(params || {}) } : (params || {});

    const queryStr = Object.keys(finalParams).length > 0
      ? '?' + new URLSearchParams(finalParams).toString()
      : '';

    window.location.hash = `#${targetRoute}${queryStr}`;
    setCurrentRoute(targetRoute);
    setRouteParams(finalParams);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderActiveRoute = () => {
    switch (currentRoute) {
      case 'dashboard':
        return <DashboardPage onNavigate={handleNavigate} />;
      case 'discovery':
        return <ExamDiscoveryEngine onNavigate={handleNavigate} />;
      case 'exam-detail':
        return <ExamDetailPage examId={routeParams.examId || 'nda'} onNavigate={handleNavigate} />;
      case 'practice':
        return <PracticePage initialExamId={routeParams.examId || 'nda'} onNavigate={handleNavigate} />;
      case 'mock-tests':
        return <MockTestSimulatorPage initialExamId={routeParams.examId || 'nda'} onNavigate={handleNavigate} />;
      case 'pyqs':
        return <PYQMasterPage onNavigate={handleNavigate} />;
      case 'syllabus':
        return <SyllabusPage onNavigate={handleNavigate} />;
      case 'speed-lab':
        return <SpeedLabPage onNavigate={handleNavigate} />;
      case 'formulas':
        return <FormulaBookPage onNavigate={handleNavigate} />;
      case 'flashcards':
        return <FlashcardsPage onNavigate={handleNavigate} />;
      case 'error-notebook':
        return <ErrorNotebookPage onNavigate={handleNavigate} />;
      case 'ssb-lab':
        return <SSBPreparationLab onNavigate={handleNavigate} />;
      case 'physical-prep':
        return <PhysicalPreparationLab onNavigate={handleNavigate} />;
      case 'medical-info':
        return <MedicalInformationPage onNavigate={handleNavigate} />;
      case 'defence-gk':
        return <DefenceGKLab onNavigate={handleNavigate} />;
      case 'current-affairs':
        return <CurrentAffairsPage onNavigate={handleNavigate} />;
      case 'notifications':
        return <NotificationsTracker onNavigate={handleNavigate} />;
      case 'vacancies-cutoffs':
        return <VacancyCutoffCenter onNavigate={handleNavigate} />;
      case 'books':
        return <BookLibraryPage onNavigate={handleNavigate} />;
      case 'ncc-module':
        return <NCCModulePage onNavigate={handleNavigate} />;
      case 'esm-module':
        return <ESMModulePage onNavigate={handleNavigate} />;
      case 'study-planner':
        return <StudyPlannerPage onNavigate={handleNavigate} />;
      case 'roadmap':
        return <ZeroToDefenceRoadmapPage onNavigate={handleNavigate} />;
      case 'career-finder':
        return <CareerExplorerPage onNavigate={handleNavigate} />;
      default:
        return <DashboardPage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Top Main Navigation Header */}
      <Header
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleMobileMenu={() => setIsMobileMenuOpen(prev => !prev)}
        onNavigate={handleNavigate}
      />

      {/* Main Body Layout with Desktop Sidebar */}
      <div className="flex-1 flex max-w-7xl w-full mx-auto pb-16 lg:pb-0">
        <DesktopSidebar
          currentRoute={currentRoute}
          onNavigate={handleNavigate}
        />

        <main className="flex-1 min-w-0 px-3 sm:px-6 lg:px-8 py-6">
          {renderActiveRoute()}

          {/* Master Footer */}
          <footer className="mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 text-xs text-slate-500 dark:text-slate-400 space-y-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-amber-500/10 text-amber-500 font-bold">
                  <Shield className="h-4 w-4" />
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">
                  {lang === 'hi' ? 'डिफेंस एग्ज़ाम्स इंडिया — मास्टर तैयारी प्लेटफॉर्म' : 'DEFENCE EXAMS INDIA — Master Preparation Platform'}
                </span>
              </div>
              <p className="text-center sm:text-right">
                {lang === 'hi' 
                  ? 'भारतीय सशस्त्र बलों में सेवा हेतु राष्ट्र-समर्पित अभ्यर्थियों के लिए निर्मित।'
                  : 'Dedicated to aspirants serving the Indian Armed Forces. Jai Hind!'}
              </p>
            </div>

            <div className="p-3 rounded-lg bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 text-[11px] text-amber-900 dark:text-amber-300/90 leading-relaxed">
              <strong>{lang === 'hi' ? 'महत्वपूर्ण सूचना एवं अस्वीकरण:' : 'Official Disclaimer & Advisory:'}</strong>{' '}
              {lang === 'hi'
                ? 'यह पोर्टल एक स्वतंत्र शैक्षिक एवं तैयारी संसाधन है। पात्रता मापदंड, रिक्तियां, कटऑफ, चिकित्सा नियम एवं चयन प्रक्रियाएं संबंधित आधिकारिक अधिसूचनाओं (UPSC, MoD, Join Indian Army, Join Indian Navy, IAF AFCAT, Indian Coast Guard) पर आधारित हैं। आवेदन करने से पहले सदैव नवीनतम आधिकारिक गजट अधिसूचना की पुष्टि करें।'
                : 'This platform is an independent educational and preparation resource. Eligibility criteria, vacancies, cutoffs, physical/medical standards, and selection processes are aligned with official gazette notifications (UPSC, MoD, Indian Army, Indian Navy, Indian Air Force, ICG). Aspirants must always verify current rules from official commission portals before applying.'}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2 pt-2 text-[11px]">
              <div className="flex items-center gap-4">
                <button onClick={() => handleNavigate('discovery')} className="hover:underline hover:text-amber-500">
                  {lang === 'hi' ? 'पात्रता खोजक' : 'Eligibility Finder'}
                </button>
                <button onClick={() => handleNavigate('notifications')} className="hover:underline hover:text-amber-500">
                  {lang === 'hi' ? 'अधिसूचनाएं' : 'Notifications'}
                </button>
                <button onClick={() => handleNavigate('medical-info')} className="hover:underline hover:text-amber-500">
                  {lang === 'hi' ? 'चिकित्सा मानक' : 'Medical Standards'}
                </button>
                <button onClick={() => handleNavigate('ssb-lab')} className="hover:underline hover:text-amber-500">
                  {lang === 'hi' ? 'एसएसबी गाइड' : 'SSB Guide'}
                </button>
              </div>
              <span className="text-slate-400">
                PWA Ready • Offline Supported • Version 2026.1
              </span>
            </div>
          </footer>
        </main>
      </div>

      {/* Mobile Drawer & Bottom Tab Bar */}
      <MobileNav
        currentRoute={currentRoute}
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onNavigate={handleNavigate}
      />

      {/* Global Command/Search Palette (Ctrl+K) */}
      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={handleNavigate}
      />
    </div>
  );
};
