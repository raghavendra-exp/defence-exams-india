import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Search, 
  Tag, 
  ExternalLink, 
  CheckCircle2, 
  Clock, 
  Shield, 
  Award,
  Filter
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { currentAffairsList } from '../data/currentAffairs/currentAffairsData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface CurrentAffairsPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const CurrentAffairsPage: React.FC<CurrentAffairsPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredItems = useMemo(() => {
    return currentAffairsList.filter((item) => {
      const matchCat = selectedCategory === 'all' || item.category === selectedCategory;
      const matchQ = !searchQuery || 
        item.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.headlineHi.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchCat && matchQ;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Defence Current Affairs', labelHi: 'डिफेंस करेंट अफेयर्स', routeId: 'current-affairs' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold border border-blue-400/30">
            <Calendar className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'दैनिक एवं मासिक समसामयिकी' : 'Daily & Monthly Defence Currents'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'रक्षा समसामयिकी एवं करेंट अफेयर्स लैब' : 'Defence Current Affairs & Strategic Events'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'सैन्य अभ्यास, डीआरडीओ मिसाइल परीक्षण, नौसैनिक युद्धपोत, रक्षा खरीद एवं वीरता पुरस्कारों का प्रामाणिक संकलन।'
              : 'Verified military exercises, DRDO weapon tests, warship commissionings, defence pacts, and gallantry awardees.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="Press Information Bureau (PIB) Defence & Ministry of Defence"
        authority="Government of India"
      />

      {/* Filter and Search Ribbon */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 rounded-2xl shadow-xs text-xs">
        {/* Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0 scrollbar-thin">
          {['all', 'Defence', 'Exercises', 'Appointments'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-xl font-bold transition-all whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-amber-600 text-white'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {cat === 'all' ? (lang === 'hi' ? 'सभी' : 'All') : cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <Search className="h-4 w-4 absolute left-3 top-2.5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={lang === 'hi' ? 'करेंट अफेयर्स खोजें...' : 'Search news, missiles...'}
            className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white"
          />
        </div>
      </div>

      {/* Current Affairs Cards */}
      <div className="space-y-4">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="p-5 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs space-y-3 hover:border-amber-400/80 transition-all text-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2.5">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {item.category}
                </span>
                <span className="font-mono text-slate-400 text-[11px]">
                  {item.date}
                </span>
              </div>
              <span className="text-[11px] text-slate-400">
                Source: <strong className="text-slate-600 dark:text-slate-300">{item.source}</strong>
              </span>
            </div>

            <h2 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">
              {lang === 'hi' ? item.headlineHi : item.headline}
            </h2>

            <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs sm:text-sm">
              {lang === 'hi' ? item.summaryHi : item.summary}
            </p>

            <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 text-[11px] text-amber-900 dark:text-amber-300">
              <strong>Exam Relevance: </strong> {item.examRelevance}
            </div>

            {/* Tags */}
            <div className="flex items-center gap-1.5 flex-wrap pt-1">
              <Tag className="h-3 w-3 text-slate-400" />
              {item.tags.map((tag, tIdx) => (
                <span
                  key={tIdx}
                  className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-[10px] font-medium text-slate-500"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
