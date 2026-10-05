import React, { useState } from 'react';
import { 
  Layers, 
  RotateCw, 
  CheckCircle2, 
  XCircle, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { flashcardsData } from '../data/flashcards/flashcardsData';
import { Breadcrumb } from '../components/Breadcrumb';

interface FlashcardsPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const FlashcardsPage: React.FC<FlashcardsPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();
  const { progress, toggleFlashcardMastery } = useUserProgress();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  const currentCard = flashcardsData[currentIndex] || flashcardsData[0];
  const isMastered = progress.masteredFlashcards.includes(currentCard.id);

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => Math.min(flashcardsData.length - 1, prev + 1));
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Spaced Flashcards', labelHi: 'फ्लैशकार्ड्स', routeId: 'flashcards' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-400/30">
            <Layers className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'स्पैस्ड रिपीटिशन तकनीक' : 'Spaced Repetition Active Recall'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'डिफेंस परीक्षा रिवीजन फ्लैशकार्ड्स' : 'Defence Spaced Repetition Flashcards'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'डिफेंस जीके, मिसाइल, सैन्य अभ्यास, इतिहास, संविधान एवं सूत्रों के त्वरित दोहराव हेतु फ्लिप कार्ड।'
              : 'Interactive flip flashcards for rapid revision of Defence GK, Missiles, Commands, and Formulas.'}
          </p>
        </div>
      </div>

      {/* Interactive Card Presentation */}
      <div className="max-w-xl mx-auto space-y-4">
        {/* Progress header */}
        <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
          <span>Card {currentIndex + 1} of {flashcardsData.length}</span>
          <span className="text-emerald-600 font-bold">
            Mastered: {progress.masteredFlashcards.length} / {flashcardsData.length}
          </span>
        </div>

        {/* 3D Flip Card Container */}
        <div
          onClick={() => setIsFlipped(!isFlipped)}
          className="cursor-pointer min-h-[260px] rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-amber-400 dark:hover:border-amber-500 p-8 shadow-xl flex flex-col justify-between transition-all transform hover:scale-[1.01]"
        >
          <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
              {currentCard.category}
            </span>
            <span className="text-[11px] text-slate-400 flex items-center gap-1 font-semibold">
              <RotateCw className="h-3.5 w-3.5" /> Click to flip
            </span>
          </div>

          <div className="my-auto py-6 text-center space-y-3">
            {!isFlipped ? (
              <p className="text-base sm:text-xl font-black text-slate-900 dark:text-white leading-relaxed">
                {lang === 'hi' ? currentCard.frontHi : currentCard.front}
              </p>
            ) : (
              <div className="space-y-2">
                <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-wider block">Answer:</span>
                <p className="text-base sm:text-2xl font-black text-amber-600 dark:text-amber-400 leading-relaxed">
                  {lang === 'hi' ? currentCard.backHi : currentCard.back}
                </p>
              </div>
            )}
          </div>

          <div className="text-[10px] text-slate-400 text-center border-t border-slate-100 dark:border-slate-800 pt-2">
            Source: {currentCard.source}
          </div>
        </div>

        {/* Navigation & Mastery Controls */}
        <div className="flex items-center justify-between pt-2">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 text-xs font-bold disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Prev</span>
          </button>

          <button
            onClick={() => toggleFlashcardMastery(currentCard.id)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
              isMastered
                ? 'bg-emerald-600 text-white'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-emerald-500 hover:text-white'
            }`}
          >
            <CheckCircle2 className="h-4 w-4" />
            <span>{isMastered ? 'Mastered ✓' : 'Mark as Known'}</span>
          </button>

          <button
            onClick={handleNext}
            disabled={currentIndex === flashcardsData.length - 1}
            className="flex items-center gap-1 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold disabled:opacity-30"
          >
            <span>Next</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
