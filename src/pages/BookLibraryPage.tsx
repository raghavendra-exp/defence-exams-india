import React, { useState } from 'react';
import { 
  Library, 
  ExternalLink, 
  BookOpen, 
  ShieldCheck, 
  Download, 
  CheckCircle2,
  Tag
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { legitimateBooksData } from '../data/books/defenceBooksData';
import { Breadcrumb } from '../components/Breadcrumb';
import { OfficialSourceBanner } from '../components/OfficialSourceBanner';

interface BookLibraryPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const BookLibraryPage: React.FC<BookLibraryPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const [selectedExam, setSelectedExam] = useState<string>('all');

  const filteredBooks = legitimateBooksData.filter(
    b => selectedExam === 'all' || b.exam === selectedExam || b.exam === 'all'
  );

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Defence Book Library', labelHi: 'पुस्तक पुस्तकालय', routeId: 'books' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Library className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'प्रामाणिक प्रकाशक एवं पुस्तकें' : 'Legitimate Publishers & Reference Books'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'डिफेंस परीक्षा संदर्भ पुस्तक पुस्तकालय' : 'Defence Examination Reference Books & NCERT'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'अरिहंत, दिशा, किरण, ओसवाल एवं एनसीईआरटी की प्रामाणिक पुस्तकें, पाठ्यक्रम मैपिंग तथा निःशुल्क आधिकारिक संसाधन।'
              : 'Established publisher recommendations mapped directly to exam syllabus with legitimate purchase and free official NCERT links.'}
          </p>
        </div>
      </div>

      <OfficialSourceBanner
        sourceName="Established Publishers (Arihant, Disha, NCERT) & Official Educational Portals"
        authority="National Council of Educational Research and Training (NCERT)"
      />

      {/* Filter by Exam */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin text-xs">
        {['all', 'nda', 'cds', 'afcat', 'agniveer-army'].map((ex) => (
          <button
            key={ex}
            onClick={() => setSelectedExam(ex)}
            className={`px-4 py-2 rounded-xl font-extrabold border transition-all whitespace-nowrap ${
              selectedExam === ex
                ? 'bg-amber-600 text-white border-amber-600'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:border-amber-400'
            }`}
          >
            {ex === 'all' ? (lang === 'hi' ? 'सभी पुस्तकें' : 'All Books') : ex.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Books Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs flex flex-col justify-between space-y-4 text-xs"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 uppercase">
                  {book.recommendedLevel}
                </span>
                <span className="text-[11px] text-slate-400 font-mono">
                  {book.publisher} ({book.publicationYear})
                </span>
              </div>

              <div>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white leading-snug">
                  {lang === 'hi' ? book.titleHi : book.title}
                </h2>
                <div className="text-xs text-slate-500 font-medium">By {book.author}</div>
              </div>

              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-xs">
                {lang === 'hi' ? book.syllabusCoverageHi : book.syllabusCoverage}
              </p>

              {/* Mapped Topics */}
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                  Syllabus Mapped Topics:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {book.mappedTopics.map((top, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded-md bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-[10px] font-medium"
                    >
                      {top}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Links */}
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-2">
              <a
                href={book.legitimatePurchaseUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-amber-600 text-white font-bold text-xs transition-colors"
              >
                <span>Publisher Store</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </a>

              {book.freeOfficialAlternative && (
                <a
                  href={book.freeOfficialAlternative.split(' ')[0]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 font-bold text-xs"
                >
                  <Download className="h-3.5 w-3.5" />
                  <span>Free Official Alternative</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
