import React, { useState, useMemo, useEffect } from 'react';
import { 
  Sparkles, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  Bookmark, 
  BookmarkCheck, 
  AlertCircle, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen,
  Filter,
  Check,
  Zap,
  Loader2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { allDefenceExams } from '../data/exams';
import { allQuestions, loadExamQuestions } from '../data/questions';
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
  const [testLimit, setTestLimit] = useState<number>(30);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Dynamic question loading
  const [examQuestions, setExamQuestions] = useState<Question[]>(allQuestions);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    if (selectedExam !== 'all') {
      setIsLoading(true);
      loadExamQuestions(selectedExam).then(qs => {
        if (isMounted) {
          setExamQuestions(qs);
          setIsLoading(false);
        }
      });
    } else {
      setExamQuestions(allQuestions);
    }
    return () => { isMounted = false; };
  }, [selectedExam]);

  // Reset index when filters change
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedExam, selectedSubject, selectedSourceType]);

  // User interactions for current session
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<string, boolean>>({});
  const [errorLoggingModalQ, setErrorLoggingModalQ] = useState<Question | null>(null);
  const [selectedMistakeType, setSelectedMistakeType] = useState<MistakeCategory>('Conceptual');
  const [mistakeNotes, setMistakeNotes] = useState<string>('');

  // Filtered questions
  const filteredQuestions = useMemo(() => {
    let list = examQuestions.filter(q => selectedExam === 'all' || q.exam === selectedExam || q.exam === 'all');
    if (selectedSubject !== 'all') {
      list = list.filter(q => q.subject.toLowerCase() === selectedSubject.toLowerCase());
    }
    if (selectedSourceType !== 'all') {
      list = list.filter(q => q.sourceType === selectedSourceType);
    }
    return list.slice(0, testLimit);
  }, [examQuestions, selectedExam, selectedSubject, selectedSourceType, testLimit]);

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  // Available subjects for the chosen exam
  const availableSubjects = useMemo(() => {
    const subs = new Set<string>();
    examQuestions
      .filter(q => selectedExam === 'all' || q.exam === selectedExam)
      .forEach(q => subs.add(q.subject));
    return Array.from(subs);
  }, [examQuestions, selectedExam]);

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

  const handleSaveMistakeLog = () => {
    if (!errorLoggingModalQ) return;
    addErrorNotebookItem({
      questionId: errorLoggingModalQ.id,
      exam: errorLoggingModalQ.exam,
      subject: errorLoggingModalQ.subject,
      topic: errorLoggingModalQ.topic,
      userAnswer: answers[errorLoggingModalQ.id] ?? null,
      correctAnswer: errorLoggingModalQ.answer,
      mistakeType: selectedMistakeType,
      notes: mistakeNotes || 'Logged from Practice Mode'
    });
    setErrorLoggingModalQ(null);
    setMistakeNotes('');
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

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
              <Sparkles className="h-3.5 w-3.5" />
              <span>{lang === 'hi' ? '10,000+ अभ्यास एवं विगत वर्ष प्रश्न' : '10,000+ Practice & Authentic PYQ Bank'}</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black">
              {lang === 'hi' ? 'रक्षा परीक्षा अभ्यास इंजन' : 'Defence Examination Practice Engine'}
            </h1>
            <p className="text-xs sm:text-sm text-slate-300">
              {lang === 'hi'
                ? 'एनडीए, सीडीएस, एएफकैट, अग्निवीर एवं तटरक्षक बल के अनुभागवार प्रश्न, त्वरित हल एवं गलती विश्लेषक।'
                : 'Section-wise authentic questions with instantaneous feedback, step-by-step solutions, and error classification.'}
            </p>
          </div>

          <button
            onClick={() => onNavigate('mock-tests', { examId: selectedExam })}
            className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs shadow-lg shrink-0 transition-colors"
          >
            <Zap className="h-4 w-4 fill-current" />
            <span>{lang === 'hi' ? 'पूर्ण मॉक टेस्ट दें' : 'Launch Full Mock Test'}</span>
          </button>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-4 shadow-xs space-y-3 text-xs">
        <div className="flex items-center gap-2 text-slate-400 font-bold uppercase text-[11px]">
          <Filter className="h-3.5 w-3.5" />
          <span>{lang === 'hi' ? 'फ़िल्टर एवं चयन' : 'Question Filters'}</span>
          {isLoading && (
            <span className="flex items-center gap-1 text-amber-600 text-[10px] ml-auto">
              <Loader2 className="h-3 w-3 animate-spin" /> Loading full bank...
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Exam Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">
              {lang === 'hi' ? 'परीक्षा' : 'Target Exam'}
            </label>
            <select
              value={selectedExam}
              onChange={(e) => setSelectedExam(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-slate-900 dark:text-white"
            >
              <option value="all">{lang === 'hi' ? 'सभी परीक्षाएं' : 'All Exams (Combined)'}</option>
              {allDefenceExams.map(e => (
                <option key={e.id} value={e.id}>{lang === 'hi' ? e.nameHi : e.name}</option>
              ))}
            </select>
          </div>

          {/* Subject Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">
              {lang === 'hi' ? 'विषय' : 'Subject'}
            </label>
            <select
              value={selectedSubject}
              onChange={(e) => setSelectedSubject(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium text-slate-900 dark:text-white"
            >
              <option value="all">{lang === 'hi' ? 'सभी विषय' : 'All Subjects'}</option>
              {availableSubjects.map((s, idx) => (
                <option key={idx} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Source Type Filter */}
          <div>
            <label className="text-[10px] font-bold text-slate-400 block mb-1">
              {lang === 'hi' ? 'स्रोत प्रकार' : 'Source Type'}
            </label>
            <select
              value={selectedSourceType}
              onChange={(e) => setSelectedSourceType(e.target.value)}
              className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-medium text-slate-900 dark:text-white"
            >
              <option value="all">{lang === 'hi' ? 'सभी प्रश्न' : 'All Question Types'}</option>
              <option value="VERIFIED PYQ">Verified Official PYQ</option>
              <option value="PYQ-STYLE">Official Pattern PYQ-Style</option>
              <option value="ORIGINAL">Editorial Original</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Practice Area */}
      {filteredQuestions.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-3">
          <HelpCircle className="h-10 w-10 text-slate-400 mx-auto" />
          <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
            {lang === 'hi' ? 'इस फ़िल्टर के लिए कोई प्रश्न नहीं मिला' : 'No questions found for the selected filters'}
          </h3>
          <p className="text-xs text-slate-500">
            {lang === 'hi' ? 'कृपया विषय या परीक्षा फ़िल्टर बदलें।' : 'Try selecting All Subjects or resetting the filter.'}
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Question Jump Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin px-1">
            {filteredQuestions.map((q, idx) => {
              const isAns = answers[q.id] !== undefined;
              const isCurrent = currentIndex === idx;
              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-8 min-w-[32px] px-2 rounded-lg text-xs font-bold transition-all shrink-0 ${
                    isCurrent
                      ? 'bg-amber-600 text-white ring-2 ring-amber-400'
                      : isAns
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800'
                  }`}
                >
                  {idx + 1}
                </button>
              );
            })}
          </div>

          {/* Active Question Card */}
          <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div className="flex items-center gap-2 flex-wrap text-xs">
                <span className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase ${
                  currentQ.sourceType === 'VERIFIED PYQ'
                    ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'
                }`}>
                  {currentQ.sourceType}
                </span>
                <span className="font-bold text-slate-700 dark:text-slate-300">
                  {currentQ.exam.toUpperCase()} • {currentQ.subject}
                </span>
                <span className="text-slate-400">
                  | {currentQ.topic}
                </span>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <span className="text-xs font-mono text-slate-400">
                  Q {currentIndex + 1} of {filteredQuestions.length}
                </span>
                <button
                  onClick={() => {
                    if (isBookmarked(currentQ.id)) unbookmarkQuestion(currentQ.id);
                    else bookmarkQuestion(currentQ.id);
                  }}
                  className="p-1 text-slate-400 hover:text-amber-500 transition-colors"
                  title="Bookmark Question"
                >
                  {isBookmarked(currentQ.id) ? (
                    <BookmarkCheck className="h-5 w-5 text-amber-500" />
                  ) : (
                    <Bookmark className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Question Text */}
            <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
              {lang === 'hi' ? currentQ.questionHi : currentQ.question}
            </p>

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
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
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

            {/* Navigation Controls */}
            <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setCurrentIndex(prev => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className="flex items-center gap-1 px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-xs disabled:opacity-30 transition-colors"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>{lang === 'hi' ? 'पिछला' : 'Previous'}</span>
              </button>

              <button
                onClick={() => setCurrentIndex(prev => Math.min(filteredQuestions.length - 1, prev + 1))}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="flex items-center gap-1 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs disabled:opacity-30 transition-colors"
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
