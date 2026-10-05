import React from 'react';
import { ShieldCheck, ExternalLink, AlertTriangle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface OfficialSourceBannerProps {
  sourceName?: string;
  sourceUrl?: string;
  lastVerified?: string;
  authority?: string;
}

export const OfficialSourceBanner: React.FC<OfficialSourceBannerProps> = ({
  sourceName = 'Official Government of India Recruitment Portals (UPSC / Armed Forces / ICG)',
  sourceUrl = 'https://upsc.gov.in',
  lastVerified = '2026-09-28',
  authority = 'Ministry of Defence & Union Public Service Commission'
}) => {
  const { lang, t } = useLanguage();

  return (
    <div className="my-4 rounded-xl border border-amber-500/30 bg-amber-50/70 p-4 dark:border-amber-500/20 dark:bg-amber-950/30 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="h-5 w-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-slate-900 dark:text-amber-300 flex items-center gap-1.5 flex-wrap">
              <span>{lang === 'hi' ? 'आधिकारिक स्रोत सत्यापन' : 'Verified Official Authority'}:</span>
              <span className="text-amber-800 dark:text-amber-200">{sourceName}</span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 mt-0.5">
              {lang === 'hi' ? 'संचालन प्राधिकारी' : 'Authority'}: {authority} • {lang === 'hi' ? 'अंतिम सत्यापन' : 'Last Verified'}: <span className="font-mono text-slate-800 dark:text-slate-200">{lastVerified}</span>
            </p>
          </div>
        </div>

        <a
          href={sourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium text-xs transition-colors shrink-0 shadow-sm"
        >
          <span>{lang === 'hi' ? 'आधिकारिक पोर्टल पर जाएं' : 'Visit Official Portal'}</span>
          <ExternalLink className="h-3.5 w-3.5" />
        </a>
      </div>

      <div className="mt-2.5 pt-2 border-t border-amber-200/60 dark:border-amber-900/40 flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs">
        <AlertTriangle className="h-3.5 w-3.5 text-amber-600 dark:text-amber-400 shrink-0" />
        <span>{t('officialDisclaimer')}</span>
      </div>
    </div>
  );
};
