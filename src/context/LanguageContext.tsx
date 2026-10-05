import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<string, { en: string; hi: string }> = {
  // Brand & Navigation
  platformTitle: {
    en: 'DEFENCE EXAMS INDIA',
    hi: 'डिफेंस एग्ज़ाम्स इंडिया'
  },
  platformSubtitle: {
    en: 'Master Preparation & Recruitment Ecosystem',
    hi: 'मास्टर तैयारी एवं भर्ती इकोसिस्टम'
  },
  dashboard: {
    en: 'Dashboard',
    hi: 'डैशबोर्ड'
  },
  examDiscovery: {
    en: 'Eligibility Finder',
    hi: 'पात्रता खोजक'
  },
  exams: {
    en: 'Defence Exams',
    hi: 'रक्षा परीक्षाएं'
  },
  syllabus: {
    en: 'Official Syllabus',
    hi: 'आधिकारिक पाठ्यक्रम'
  },
  pyqMaster: {
    en: 'PYQ Master',
    hi: 'विगत वर्ष प्रश्न (PYQ)'
  },
  practiceEngine: {
    en: 'Practice Engine',
    hi: 'अभ्यास इंजन'
  },
  mockTests: {
    en: 'Mock Tests',
    hi: 'मॉक टेस्ट'
  },
  currentAffairs: {
    en: 'Current Affairs',
    hi: 'करेंट अफेयर्स'
  },
  defenceGk: {
    en: 'Defence GK Lab',
    hi: 'रक्षा सामान्य ज्ञान'
  },
  ssbLab: {
    en: 'SSB / AFSB Lab',
    hi: 'एसएसबी / एएफएसबी लैब'
  },
  physicalPrep: {
    en: 'Physical Fitness',
    hi: 'शारीरिक दक्षता (PFT)'
  },
  medicalInfo: {
    en: 'Medical Standards',
    hi: 'चिकित्सा मानक'
  },
  vacancies: {
    en: 'Vacancies',
    hi: 'रिक्तियां'
  },
  cutoffs: {
    en: 'Official Cutoffs',
    hi: 'आधिकारिक कटऑफ'
  },
  notifications: {
    en: 'Live Notifications',
    hi: 'लाइव अधिसूचनाएं'
  },
  books: {
    en: 'Book Library',
    hi: 'पुस्तक पुस्तकालय'
  },
  speedLab: {
    en: 'Speed & Shortcuts',
    hi: 'स्पीड एवं शॉर्टकट'
  },
  formulaBook: {
    en: 'Formula Master',
    hi: 'सूत्र पुस्तिका'
  },
  flashcards: {
    en: 'Flashcards',
    hi: 'फ्लैशकार्ड'
  },
  errorNotebook: {
    en: 'Error Notebook',
    hi: 'गलती नोटबुक'
  },
  studyPlanner: {
    en: 'Study Planner',
    hi: 'अध्ययन योजनाकार'
  },
  roadmap: {
    en: 'Zero to Defence',
    hi: 'शून्य से चयन रोडमैप'
  },
  esmModule: {
    en: 'Ex-Servicemen (ESM)',
    hi: 'पूर्व सैनिक (ESM)'
  },
  nccModule: {
    en: 'NCC Special Entries',
    hi: 'एनसीसी विशेष प्रविष्टियां'
  },
  technicalEntries: {
    en: 'Technical Entries',
    hi: 'तकनीकी प्रविष्टियां'
  },
  careerFinder: {
    en: 'Career Explorer',
    hi: 'करियर एक्सप्लोरर'
  },

  // Disclaimers & Official Sources
  officialDisclaimer: {
    en: 'Eligibility and exam details are strictly indicative based on official notifications. Always verify the latest notification on UPSC, Indian Army, Navy, Air Force, or Coast Guard portals.',
    hi: 'पात्रता एवं परीक्षा विवरण आधिकारिक अधिसूचनाओं पर आधारित सांकेतिक हैं। आवेदन से पूर्व सदैव UPSC, भारतीय सेना, नौसेना, वायुसेना अथवा तटरक्षक बल के आधिकारिक पोर्टल पर नवीनतम अधिसूचना अवश्य सत्यापित करें।'
  },
  sourceTransparency: {
    en: 'Official Source Transparency',
    hi: 'आधिकारिक स्रोत पारदर्शिता'
  },
  verifiedPyqBadge: {
    en: 'VERIFIED PYQ',
    hi: 'सत्यापित विगत प्रश्न'
  },
  originalBadge: {
    en: 'ORIGINAL PREPARATION',
    hi: 'मूल अभ्यास प्रश्न'
  },
  pyqStyleBadge: {
    en: 'PYQ-STYLE',
    hi: 'पीवाईक्यू प्रारूप'
  },

  // Common UI
  searchPlaceholder: {
    en: 'Search exams, syllabus topics, questions, defence facts, cutoffs...',
    hi: 'परीक्षाएं, पाठ्यक्रम, प्रश्न, रक्षा तथ्य, कटऑफ खोजें...'
  },
  startTest: {
    en: 'Start Practice',
    hi: 'अभ्यास शुरू करें'
  },
  startMock: {
    en: 'Attempt Official Mock',
    hi: 'आधिकारिक मॉक दें'
  },
  viewDetails: {
    en: 'Explore Details',
    hi: 'विस्तार से देखें'
  },
  checkEligibility: {
    en: 'Check Your Eligibility',
    hi: 'अपनी पात्रता जांचें'
  },
  all: {
    en: 'All',
    hi: 'सभी'
  },
  filter: {
    en: 'Filter',
    hi: 'फ़िल्टर'
  },
  next: {
    en: 'Next',
    hi: 'अगला'
  },
  prev: {
    en: 'Previous',
    hi: 'पिछला'
  },
  submit: {
    en: 'Submit',
    hi: 'जमा करें'
  },
  explanation: {
    en: 'Detailed Explanation',
    hi: 'विस्तृत व्याख्या'
  },
  markForReview: {
    en: 'Mark for Review',
    hi: 'समीक्षा के लिए चिह्नित करें'
  },
  clearResponse: {
    en: 'Clear Response',
    hi: 'उत्तर साफ़ करें'
  },
  timeRemaining: {
    en: 'Time Remaining',
    hi: 'शेष समय'
  }
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'en',
  setLang: () => {},
  t: () => ''
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('defence_lang');
      return (saved === 'hi' ? 'hi' : 'en') as Language;
    } catch {
      return 'en';
    }
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('defence_lang', newLang);
    } catch (e) {
      console.error(e);
    }
  };

  const t = (key: string): string => {
    if (translations[key]) {
      return translations[key][lang] || translations[key].en;
    }
    return key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
