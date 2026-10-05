import React, { useState, useMemo } from 'react';
import { 
  Sparkles, 
  Filter, 
  CheckCircle2, 
  XCircle, 
  Bookmark, 
  BookmarkCheck, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft, 
  RotateCcw,
  BookOpen,
  HelpCircle,
  Clock
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { allQuestions } from '../data/questions';
import { allDefenceExams } from '../data/exams';
import { Breadcrumb } from '../components/Breadcrumb';
import { MistakeCategory, Question } from '../types';

interface PracticePageProps {
  initialExamId?: string;
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const PracticePage: React.FC<PracticePageProps> = ({
  initialExamId = 'nda',
  onNavigate
}) => {
  const { lang, t } = useLanguage();
  const { bookmarkQuestion, unbookmarkQuestion, isBookmarked, addErrorNotebookItem } = useUserProgress();

  // Filters
  const [selectedExam, setSelectedExam] = useState<string>(initialExamId);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedSourceType, setSelectedSourceType] = useState<string>('all');
  const [testLimit, setTestLimit] = useState<number>(20);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // User interactions for current session
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [errorLoggingModalQ, setErrorLoggingModalQ] = useState<Question | null>(null);
  const [selectedMistakeType, setSelectedMistakeType] = useState<MistakeCategory>('Conceptual');
  const [mistakeNotes, setMistakeNotes] = useState<string>('');

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    let list = allQuestions.filter(q => selectedExam === 'all' || q.exam === selectedExam || q.exam === 'all');
    if (selectedSubject !== 'all') {
      list = list.filter(q => q.subject.toLowerCase() === selectedSubject.toLowerCase());
    }
    if (selectedSourceType !== 'all') {
      list = list.filter(q => q.sourceType === selectedSourceType);
    }
    return list.slice(0, testLimit);
  }, [selectedExam, selectedSubject, selectedSourceType, testLimit]);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  // Available subjects for the chosen exam
  const availableSubjects = useMemo(() => {
    const subs = new Set<string>();
    allQuestions
      .filter(q => selectedExam === 'all' || q.exam === selectedExam)
      .forEach(q => subs.add(q.subject));
    return Array.from(subs);
  }, [selectedExam]);

  const handleSelectOption = (optIdx: number) => {
    if (!currentQ || answers[currentQ.id] !== undefined) return;
    setAnswers(prev => ({ ...prev, [currentQ.id]: optIdx }));
    setShowExplanation(prev => ({ ...prev, [currentQ.id]: true }));

    // If incorrect, prompt for error notebook
    if (optIdx !== currentQ.answer) {
      addErrorNotebookItem({
        questionId: currentQ.id,
        exam: currentQ.exam,
        subject: currentQ.subject,
        topic: currentQ.topic,
        userAnswer: optIdx,
        correctAnswer: currentQ.answer,
        mistakeType: 'Conceptual',
        notes: 'Attempted in practice engine'
      });
    }
  };

  const handleReset = () => {
    setAnswers({});
    setShowExplanation({});
    setCurrentIndex(0);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Practice Engine', labelHi: 'अभ्यास इंजन', routeId: 'practice' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 shadow-xs">
        <div>
          <h1 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-amber-500" />
            <span>{lang === 'hi' ? 'रक्षा परीक्षा अभ्यास इंजन' : 'Defence Practice Engine'}</span>
          </h1>
          <p className="text-xs text-slate-500">
            {lang === 'hi' ? '8,750+ प्रश्न, विस्तृत द्विभाषी समाधान एवं तत्काल त्रुटि नोटबुक ट्रैकिंग' : '8,750+ questions with bilingual explanations and instant Error Notebook tracking'}
          </p>
        </div>

        <button
          onClick={handleReset}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 text-xs font-bold transition-colors shrink-0"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          <span>{lang === 'hi' ? 'रीसेट करें' : 'Reset Session'}</span>
        </button>
      </div>

      {/* Filter Ribbon */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-xs text-xs">
        {/* Exam filter */}
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
            {lang === 'hi' ? 'परीक्षा' : 'Exam'}
          </label>
          <select
            value={selectedExam}
            onChange={(e) => {
              setSelectedExam(e.target.value);
              setSelectedSubject('all');
              setCurrentIndex(0);
            }}
            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
          >
            <option value="all">{lang === 'hi' ? 'सभी परीक्षाएं' : 'All Exams'}</option>
            {allDefenceExams.map(e => (
              <option key={e.id} value={e.id}>{lang === 'hi' ? e.nameHi : e.name}</option>
            ))}
          </select>
        </div>

        {/* Subject filter */}
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
            {lang === 'hi' ? 'विषय' : 'Subject'}
          </label>
          <select
            value={selectedSubject}
            onChange={(e) => {
              setSelectedSubject(e.target.value);
              setCurrentIndex(0);
            }}
            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
          >
            <option value="all">{lang === 'hi' ? 'सभी विषय' : 'All Subjects'}</option>
            {availableSubjects.map(sub => (
              <option key={sub} value={sub}>{sub}</option>
            ))}
          </select>
        </div>

        {/* Source filter */}
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
            {lang === 'hi' ? 'स्रोत प्रकार' : 'Source Type'}
          </label>
          <select
            value={selectedSourceType}
            onChange={(e) => {
              setSelectedSourceType(e.target.value);
              setCurrentIndex(0);
            }}
            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
          >
            <option value="all">{lang === 'hi' ? 'सभी प्रश्न' : 'All Questions'}</option>
            <option value="VERIFIED PYQ">VERIFIED PYQ</option>
            <option value="PYQ-STYLE">PYQ-STYLE</option>
            <option value="ORIGINAL">ORIGINAL</option>
          </select>
        </div>

        {/* Question limit mode */}
        <div>
          <label className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
            {lang === 'hi' ? 'टेस्ट मोड' : 'Question Count'}
          </label>
          <select
            value={testLimit}
            onChange={(e) => {
              setTestLimit(Number(e.target.value));
              setCurrentIndex(0);
            }}
            className="w-full px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-semibold"
          >
            <option value={10}>10 Questions</option>
            <option value={20}>20 Questions</option>
            <option value={50}>50 Questions</option>
            <option value={100}>100 Questions</option>
          </select>
        </div>
      </div>

      {/* Main Question Display */}
      {filteredQuestions.length === 0 ? (
        <div className="p-8 text-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl">
          <HelpCircle className="h-10 w-10 text-slate-400 mx-auto mb-2" />
          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">
            {lang === 'hi' ? 'चयनित फिल्टर के लिए कोई प्रश्न नहीं मिला' : 'No questions match the current filters'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Progress index bar */}
          <div className="flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>
              {lang === 'hi' ? `प्रश्न ${currentIndex + 1} / ${filteredQuestions.length}` : `Question ${currentIndex + 1} of ${filteredQuestions.length}`}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-emerald-600 font-bold">
                ✓ {Object.entries(answers).filter(([qid, a]) => {
                  const q = filteredQuestions.find(item => item.id === qid);
                  return q && q.answer === a;
                }).length}
              </span>
              <span>•</span>
              <span className="text-red-500 font-bold">
                ✗ {Object.entries(answers).filter(([qid, a]) => {
                  const q = filteredQuestions.find(item => item.id === qid);
                  return q && q.answer !== a;
                }).length}
              </span>
            </div>
          </div>

          {/* Question Card */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs space-y-5">
            {/* Question Header & Badges */}
            <div className="flex items-start justify-between gap-3 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`px-2 py-0.5 text-[9px] font-extrabold rounded uppercase tracking-wider ${
                  currentQ.sourceType === 'VERIFIED PYQ'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800'
                    : currentQ.sourceType === 'PYQ-STYLE'
                    ? 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                    : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-300'
                }`}>
                  {currentQ.sourceType}
                </span>

                <span className="text-xs font-bold text-slate-500">
                  {currentQ.exam.toUpperCase()} • {currentQ.subject} • {currentQ.topic}
                </span>

                {currentQ.year && (
                  <span className="text-xs font-mono text-slate-400">
                    ({currentQ.year})
                  </span>
                )}
              </div>

              {/* Bookmark Toggle */}
              <button
                onClick={() => {
                  if (isBookmarked(currentQ.id)) {
                    unbookmarkQuestion(currentQ.id);
                  } else {
                    bookmarkQuestion(currentQ.id);
                  }
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-amber-500 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                title={isBookmarked(currentQ.id) ? 'Remove Bookmark' : 'Bookmark Question'}
              >
                {isBookmarked(currentQ.id) ? (
                  <BookmarkCheck className="h-5 w-5 text-amber-500" />
                ) : (
                  <Bookmark className="h-5 w-5" />
                )}
              </button>
            </div>

            {/* Question Text */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                {lang === 'hi' ? currentQ.questionHi : currentQ.question}
              </p>
            </div>

            {/* Options List */}
            <div className="space-y-2.5 pt-2">
              {(lang === 'hi' ? currentQ.optionsHi : currentQ.options).map((opt, oIdx) => {
                const isSelected = answers[currentQ.id] === oIdx;
                const isAnswered = answers[currentQ.id] !== undefined;
                const isCorrect = oIdx === currentQ.answer;

                let stateClasses = 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200';

                if (isAnswered) {
                  if (isCorrect) {
                    stateClasses = 'bg-emerald-500/15 border-emerald-500 text-emerald-900 dark:text-emerald-200 font-bold';
                  } else if (isSelected && !isCorrect) {
                    stateClasses = 'bg-red-500/15 border-red-500 text-red-900 dark:text-red-200';
                  } else {
                    stateClasses = 'opacity-60 bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400';
                  }
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => handleSelectOption(oIdx)}
                    disabled={isAnswered}
                    className={`w-full flex items-center justify-between p-3.5 rounded-2xl border text-xs sm:text-sm font-medium transition-all text-left ${stateClasses}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="h-6 w-6 rounded-lg bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 font-mono text-xs flex items-center justify-center font-bold text-slate-500 shrink-0">
                        {String.fromCharCode(65 + oIdx)}
                      </span>
                      <span>{opt}</span>
                    </div>

                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 text-red-500 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation Box */}
            {showExplanation[currentQ.id] && (
              <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-2 text-xs sm:text-sm">
                <div className="flex items-center justify-between">
                  <div className="font-extrabold text-amber-900 dark:text-amber-300 flex items-center gap-1.5">
                    <BookOpen className="h-4 w-4" />
                    <span>{lang === 'hi' ? 'विस्तृत समाधान एवं व्याख्या' : 'Detailed Step-by-Step Explanation'}</span>
                  </div>
                  <span className="text-[11px] text-slate-500">
                    Source: {currentQ.source}
                  </span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                  {lang === 'hi' ? currentQ.explanationHi : currentQ.explanation}
                </p>
              </div>
            )}

            {/* Nav Arrows */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-xs disabled:opacity-30"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>{lang === 'hi' ? 'पिछला' : 'Previous'}</span>
              </button>

              <button
                onClick={() => setCurrentIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="flex items-center gap-1 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs disabled:opacity-30"
              >
                <span>{lang === 'hi' ? 'अगला' : 'Next'}</span>
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
