import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export interface BreadcrumbItem {
  label: string;
  labelHi?: string;
  routeId: string;
  params?: Record<string, string>;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, onNavigate }) => {
  const { lang } = useLanguage();

  return (
    <nav aria-label="Breadcrumb" className="py-2.5 overflow-x-auto scrollbar-thin">
      <ol className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400 whitespace-nowrap">
        <li>
          <button
            onClick={() => onNavigate('dashboard')}
            className="flex items-center gap-1 hover:text-amber-600 dark:hover:text-amber-400 transition-colors p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
            title="Home / Dashboard"
          >
            <Home className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'गृह' : 'Home'}</span>
          </button>
        </li>

        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const displayLabel = (lang === 'hi' && item.labelHi) ? item.labelHi : item.label;

          return (
            <React.Fragment key={index}>
              <ChevronRight className="h-3.5 w-3.5 text-slate-400 shrink-0" />
              <li>
                {isLast ? (
                  <span className="text-slate-900 dark:text-white font-semibold px-1 py-0.5 rounded bg-slate-200/50 dark:bg-slate-800/80">
                    {displayLabel}
                  </span>
                ) : (
                  <button
                    onClick={() => onNavigate(item.routeId, item.params)}
                    className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors p-1 rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    {displayLabel}
                  </button>
                )}
              </li>
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};
