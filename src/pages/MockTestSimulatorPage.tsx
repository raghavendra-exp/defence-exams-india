import React, { useState, useEffect, useMemo } from 'react';
import { 
  Timer, 
  CheckCircle, 
  XCircle, 
  HelpCircle, 
  Bookmark, 
  ArrowRight, 
  RotateCcw, 
  BarChart3, 
  Award, 
  Clock, 
  AlertTriangle,
  Play,
  CheckCircle2
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { useUserProgress } from '../context/UserProgressContext';
import { allDefenceExams, defenceExamsMap } from '../data/exams';
import { allQuestions, loadExamQuestions } from '../data/questions';
import { Breadcrumb } from '../components/Breadcrumb';
import { ExamCategory, TestAttemptResult, Question } from '../types';

interface MockTestSimulatorPageProps {
  initialExamId?: string;
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const MockTestSimulatorPage: React.FC<MockTestSimulatorPageProps> = ({
  initialExamId = 'nda',
  onNavigate
}) => {
  const { lang, t } = useLanguage();
  const { saveTestResult, addErrorNotebookItem } = useUserProgress();

  const [selectedExamId, setSelectedExamId] = useState<string>(initialExamId);
  const [isTestActive, setIsTestActive] = useState<boolean>(false);
  const [testResult, setTestResult] = useState<TestAttemptResult | null>(null);
  const [mobileViewTab, setMobileViewTab] = useState<'question' | 'palette'>('question');

  // Dynamic question loading
  const [examQuestions, setExamQuestions] = useState<Question[]>(allQuestions);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    loadExamQuestions(selectedExamId).then((qs) => {
      if (isMounted) {
        setExamQuestions(qs);
        setIsLoading(false);
      }
    });
    return () => { isMounted = false; };
  }, [selectedExamId]);

  // Active Test State
  const [currentQIndex, setCurrentQIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});
  const [timeRemainingSeconds, setTimeRemainingSeconds] = useState<number>(1800); // 30 mins simulation
  const [startTime, setStartTime] = useState<number>(0);

  const selectedExam = defenceExamsMap[selectedExamId as ExamCategory] || defenceExamsMap.nda;
  const examPattern = selectedExam.branches[0].examPattern;

  // Question pool for this mock test
  const mockQuestions = useMemo(() => {
    const list = examQuestions.filter(q => q.exam === selectedExamId || q.exam === 'all');
    // Take 30 balanced simulation questions for fast real-time mock
    return list.slice(0, 30);
  }, [examQuestions, selectedExamId]);

  const activeQuestion = mockQuestions[currentQIndex] || mockQuestions[0];

  // Timer countdown
  useEffect(() => {
    if (!isTestActive) return;
    const interval = setInterval(() => {
      setTimeRemainingSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isTestActive, userAnswers]);

  const handleStartTest = () => {
    setUserAnswers({});
    setMarkedForReview({});
    setCurrentQIndex(0);
    setTestResult(null);
    setTimeRemainingSeconds(30 * 60); // 30 min full test simulation
    setStartTime(Date.now());
    setIsTestActive(true);
  };

  const handleSubmitTest = () => {
    setIsTestActive(false);
    const duration = Math.round((Date.now() - startTime) / 1000);

    let correct = 0;
    let incorrect = 0;
    let unattempted = 0;

    const currentSection = examPattern.sections[0];
    const marksPerQ = currentSection ? currentSection.marksPerQuestion : 2.0;
    const negMarksPerQ = currentSection ? currentSection.negativeMarking : 0.5;

    const questionResults = mockQuestions.map(q => {
      const userAns = userAnswers[q.id];
      if (userAns === undefined) {
        unattempted++;
        return { questionId: q.id, userAnswer: null, isCorrect: false, timeSeconds: 0 };
      }
      if (userAns === q.answer) {
        correct++;
        return { questionId: q.id, userAnswer: userAns, isCorrect: true, timeSeconds: 0 };
      } else {
        incorrect++;
        // Auto-log to error notebook
        addErrorNotebookItem({
          questionId: q.id,
          exam: q.exam,
          subject: q.subject,
          topic: q.topic,
          userAnswer: userAns,
          correctAnswer: q.answer,
          mistakeType: 'Conceptual',
          notes: `Failed during ${selectedExam.name} Mock Test`
        });
        return { questionId: q.id, userAnswer: userAns, isCorrect: false, timeSeconds: 0 };
      }
    });

    const calculatedScore = (correct * marksPerQ) - (incorrect * negMarksPerQ);
    const maxScore = mockQuestions.length * marksPerQ;
    const accuracy = correct + incorrect > 0 ? (correct / (correct + incorrect)) * 100 : 0;

    const result: TestAttemptResult = {
      examId: selectedExamId,
      mode: 'Official Mock Simulation',
      totalQuestions: mockQuestions.length,
      attempted: correct + incorrect,
      correct,
      incorrect,
      unattempted,
      score: Math.max(0, Math.round(calculatedScore * 10) / 10),
      maxScore,
      accuracy: Math.round(accuracy),
      timeSpentSeconds: duration,
      date: new Date().toISOString(),
      questionResults
    };

    setTestResult(result);
    saveTestResult(result);
  };

  const formatTimer = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Official Mock Test Simulator', labelHi: 'मॉक टेस्ट सिमुलेटर', routeId: 'mock-tests' }
        ]}
        onNavigate={onNavigate}
      />

      {/* When NOT actively testing and NO result: Setup Screen */}
      {!isTestActive && !testResult && (
        <div className="max-w-3xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-lg space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-600 dark:text-amber-400">
              <Timer className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {lang === 'hi' ? 'आधिकारिक पैटर्न रक्षा मॉक टेस्ट सिमुलेटर' : 'Official Pattern Defence Mock Simulator'}
              </h1>
              <p className="text-xs sm:text-sm text-slate-500">
                {lang === 'hi' ? 'वास्तविक परीक्षा समय, नकारात्मक अंकन एवं प्रश्न पैलेट के साथ' : 'Countdown timer, question palette, negative marking and detailed scorecard'}
              </p>
            </div>
          </div>

          {/* Exam Selection */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-slate-700 dark:text-slate-300">
              {lang === 'hi' ? 'लक्ष्य परीक्षा चुनें' : 'Select Target Examination'}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {allDefenceExams.map((e) => (
                <button
                  key={e.id}
                  onClick={() => setSelectedExamId(e.id)}
                  className={`p-3 rounded-xl border text-xs font-bold text-left transition-all ${
                    selectedExamId === e.id
                      ? 'bg-amber-600 text-white border-amber-600 shadow-sm'
                      : 'bg-slate-50 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-amber-400'
                  }`}
                >
                  <div className="truncate">{lang === 'hi' ? e.nameHi : e.name}</div>
                  <div className={`text-[10px] font-normal ${selectedExamId === e.id ? 'text-amber-100' : 'text-slate-400'}`}>
                    {e.entryType.toUpperCase()}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Instructions Box */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2 text-xs text-slate-600 dark:text-slate-300">
            <div className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5">
              <Award className="h-4 w-4 text-amber-500" />
              <span>{lang === 'hi' ? 'आधिकारिक परीक्षा निर्देश' : 'Official Instructions'}:</span>
            </div>
            <ul className="list-disc list-inside space-y-1 text-[11px] leading-relaxed">
              <li>{lang === 'hi' ? 'कुल प्रश्न: 30 प्रश्न (सिमुलेटेड टेस्ट)' : 'Total Questions: 30 questions (simulated full pattern)'}</li>
              <li>{lang === 'hi' ? 'समय सीमा: 30 मिनट (घटता हुआ टाइमर)' : 'Duration: 30 Minutes countdown timer with auto-submit'}</li>
              <li>{lang === 'hi' ? 'नकारात्मक अंकन: परीक्षा नियम के अनुसार लागू होगा' : 'Negative Marking strictly enforced as per official syllabus rules'}</li>
              <li>{lang === 'hi' ? 'गलत उत्तरों को स्वचालित रूप से आपकी "गलती नोटबुक" में जोड़ दिया जाएगा' : 'Incorrect questions are automatically logged to your Error Notebook for scheduled revision'}</li>
            </ul>
          </div>

          <button
            onClick={handleStartTest}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black text-sm shadow-xl flex items-center justify-center gap-2 transition-all"
          >
            <Play className="h-5 w-5 text-slate-950 fill-current" />
            <span>{lang === 'hi' ? 'मॉक टेस्ट शुरू करें' : 'Begin Mock Examination'}</span>
          </button>
        </div>
      )}

      {/* ACTIVE TEST SIMULATOR */}
      {isTestActive && (
        <div className="space-y-4">
          {/* Mobile Tab Switcher */}
          <div className="flex lg:hidden items-center p-1 rounded-2xl bg-slate-100 dark:bg-slate-800 text-xs font-bold gap-1 shadow-inner">
            <button
              onClick={() => setMobileViewTab('question')}
              className={`flex-1 py-2 rounded-xl transition-all ${
                mobileViewTab === 'question'
                  ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'hi' ? `प्रश्न ${currentQIndex + 1}` : `Question ${currentQIndex + 1}`}
            </button>
            <button
              onClick={() => setMobileViewTab('palette')}
              className={`flex-1 py-2 rounded-xl transition-all ${
                mobileViewTab === 'palette'
                  ? 'bg-white dark:bg-slate-900 text-amber-600 dark:text-amber-400 shadow-sm'
                  : 'text-slate-500 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {lang === 'hi' 
                ? `पैलेट (${Object.keys(userAnswers).length}/${mockQuestions.length})` 
                : `Palette (${Object.keys(userAnswers).length}/${mockQuestions.length})`}
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Main Question Panel (3 cols on lg, or visible on mobile if mobileViewTab === 'question') */}
            <div className={`lg:col-span-3 space-y-4 ${mobileViewTab === 'palette' ? 'hidden lg:block' : 'block'}`}>
              {/* Top Toolbar */}
              <div className="flex items-center justify-between p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex items-center gap-2">
                  <span className="font-extrabold text-slate-900 dark:text-white text-xs sm:text-sm">
                    {selectedExam.name} Official Mock
                  </span>
                  <span className="text-xs text-slate-400">
                    | Q {currentQIndex + 1} of {mockQuestions.length}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {/* Countdown Timer */}
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/10 text-red-600 dark:text-red-400 font-mono font-bold text-xs sm:text-sm border border-red-500/20">
                    <Clock className="h-4 w-4 animate-spin text-red-500" />
                    <span>{formatTimer(timeRemainingSeconds)}</span>
                  </div>

                  <button
                    onClick={handleSubmitTest}
                    className="px-3 py-1.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-sm transition-colors"
                  >
                    {lang === 'hi' ? 'सबमिट' : 'Submit'}
                  </button>
                </div>
              </div>

              {/* Question Card */}
              <div className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-7 shadow-xs space-y-5">
                <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <span className="font-bold text-slate-600 dark:text-slate-300">
                    {activeQuestion.subject} • {activeQuestion.topic}
                  </span>
                  <button
                    onClick={() => {
                      setMarkedForReview(prev => ({
                        ...prev,
                        [activeQuestion.id]: !prev[activeQuestion.id]
                      }));
                    }}
                    className={`flex items-center gap-1 font-bold ${
                      markedForReview[activeQuestion.id]
                        ? 'text-purple-600 dark:text-purple-400'
                        : 'text-slate-400 hover:text-slate-600'
                    }`}
                  >
                    <Bookmark className="h-4 w-4" />
                    <span>{markedForReview[activeQuestion.id] ? 'Marked for Review' : 'Mark for Review'}</span>
                  </button>
                </div>

                {/* Question Text */}
                <p className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-relaxed">
                  {lang === 'hi' ? activeQuestion.questionHi : activeQuestion.question}
                </p>

                {/* Options */}
                <div className="space-y-2.5 pt-2">
                  {(lang === 'hi' ? activeQuestion.optionsHi : activeQuestion.options).map((opt, oIdx) => {
                    const isSelected = userAnswers[activeQuestion.id] === oIdx;

                    return (
                      <button
                        key={oIdx}
                        onClick={() => {
                          setUserAnswers(prev => ({
                            ...prev,
                            [activeQuestion.id]: oIdx
                          }));
                        }}
                        className={`w-full flex items-center gap-3 p-3.5 rounded-2xl border text-xs sm:text-sm font-medium transition-all text-left ${
                          isSelected
                            ? 'bg-amber-500/15 border-amber-600 text-amber-950 dark:text-amber-200 font-bold'
                            : 'bg-slate-50 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200'
                        }`}
                      >
                        <span className={`h-6 w-6 rounded-lg font-mono text-xs flex items-center justify-center font-bold shrink-0 ${
                          isSelected
                            ? 'bg-amber-600 text-white'
                            : 'bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-500'
                        }`}>
                          {String.fromCharCode(65 + oIdx)}
                        </span>
                        <span>{opt}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Controls */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <button
                    onClick={() => {
                      const next = { ...userAnswers };
                      delete next[activeQuestion.id];
                      setUserAnswers(next);
                    }}
                    className="px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 font-semibold"
                  >
                    Clear Response
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setCurrentQIndex(prev => Math.max(0, prev - 1))}
                      disabled={currentQIndex === 0}
                      className="px-4 py-2 rounded-xl border border-slate-200 dark:border-slate-700 font-bold disabled:opacity-30"
                    >
                      Previous
                    </button>

                    <button
                      onClick={() => setCurrentQIndex(prev => Math.min(mockQuestions.length - 1, prev + 1))}
                      disabled={currentQIndex === mockQuestions.length - 1}
                      className="px-4 py-2 rounded-xl bg-slate-900 dark:bg-slate-800 text-white font-bold"
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Question Palette (1 col on lg, or visible on mobile if mobileViewTab === 'palette') */}
            <div className={`rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 shadow-xs space-y-4 flex flex-col justify-between ${mobileViewTab === 'question' ? 'hidden lg:flex' : 'flex'}`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Question Palette
                  </h3>
                  <span className="text-xs font-bold text-amber-600">
                    {mockQuestions.length} Questions
                  </span>
                </div>

                {/* Status summary */}
                <div className="grid grid-cols-2 gap-2 text-[10px] text-slate-600 dark:text-slate-300">
                  <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-emerald-500 shrink-0"></div>
                    <span>Answered ({Object.keys(userAnswers).length})</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="h-3 w-3 rounded-full bg-purple-500 shrink-0"></div>
                    <span>Review ({Object.keys(markedForReview).length})</span>
                  </div>
                  <div className="flex items-center gap-1.5 sm:col-span-2">
                    <div className="h-3 w-3 rounded-full bg-slate-200 dark:bg-slate-700 shrink-0"></div>
                    <span>Not Answered ({mockQuestions.length - Object.keys(userAnswers).length})</span>
                  </div>
                </div>

                {/* Grid of question buttons */}
                <div className="grid grid-cols-5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-5 gap-2 max-h-80 overflow-y-auto p-1 scrollbar-thin">
                  {mockQuestions.map((q, idx) => {
                    const isCurrent = currentQIndex === idx;
                    const isAns = userAnswers[q.id] !== undefined;
                    const isMarked = markedForReview[q.id];

                    let btnColor = 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700';

                    if (isMarked) {
                      btnColor = 'bg-purple-500 text-white border-purple-600';
                    } else if (isAns) {
                      btnColor = 'bg-emerald-600 text-white border-emerald-600';
                    }

                    return (
                      <button
                        key={q.id}
                        onClick={() => {
                          setCurrentQIndex(idx);
                          setMobileViewTab('question');
                        }}
                        className={`h-9 w-9 rounded-xl text-xs font-bold border transition-all flex items-center justify-center ${btnColor} ${
                          isCurrent ? 'ring-2 ring-amber-500 ring-offset-2' : ''
                        }`}
                      >
                        {idx + 1}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleSubmitTest}
                className="w-full py-3.5 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-xs shadow-md transition-colors"
              >
                Submit & View Analysis
              </button>
            </div>
          </div>
        </div>
      )}

      {/* PERFORMANCE ANALYSIS SCORECARD */}
      {testResult && (
        <div className="max-w-4xl mx-auto rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-10 shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 dark:border-slate-800 pb-5">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 text-[10px] font-extrabold rounded bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 uppercase">
                  COMPLETED
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {new Date(testResult.date).toLocaleDateString()}
                </span>
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                {selectedExam.name} Mock Examination Scorecard
              </h1>
            </div>

            <button
              onClick={handleStartTest}
              className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs shadow-md transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              <span>{lang === 'hi' ? 'पुनः प्रयास करें' : 'Retake Test'}</span>
            </button>
          </div>

          {/* Metric Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900/40 text-center space-y-1">
              <span className="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase">Total Score</span>
              <div className="text-2xl sm:text-3xl font-black text-amber-900 dark:text-amber-100">
                {testResult.score} <span className="text-xs text-slate-400">/ {testResult.maxScore}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 text-center space-y-1">
              <span className="text-[10px] font-bold text-blue-700 dark:text-blue-300 uppercase">Accuracy</span>
              <div className="text-2xl sm:text-3xl font-black text-blue-900 dark:text-blue-100">
                {testResult.accuracy}%
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/40 text-center space-y-1">
              <span className="text-[10px] font-bold text-emerald-700 dark:text-emerald-300 uppercase">Correct</span>
              <div className="text-2xl sm:text-3xl font-black text-emerald-900 dark:text-emerald-100">
                {testResult.correct} <span className="text-xs text-slate-400">/ {testResult.totalQuestions}</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/40 text-center space-y-1">
              <span className="text-[10px] font-bold text-red-700 dark:text-red-300 uppercase">Incorrect</span>
              <div className="text-2xl sm:text-3xl font-black text-red-900 dark:text-red-100">
                {testResult.incorrect}
              </div>
            </div>
          </div>

          {/* Detailed Question Review List */}
          <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
            <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
              Detailed Question Analysis & Explanations
            </h3>

            <div className="space-y-3">
              {mockQuestions.map((q, idx) => {
                const userAns = userAnswers[q.id];
                const isCorrect = userAns === q.answer;
                const isUnattempted = userAns === undefined;

                return (
                  <div
                    key={q.id}
                    className={`p-4 rounded-2xl border text-xs space-y-2 ${
                      isCorrect 
                        ? 'bg-emerald-500/5 border-emerald-500/30'
                        : isUnattempted 
                        ? 'bg-slate-50 dark:bg-slate-800/40 border-slate-200 dark:border-slate-800'
                        : 'bg-red-500/5 border-red-500/30'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-400">
                        Q{idx + 1}. {q.subject} • {q.topic}
                      </span>
                      <span className={`font-extrabold px-2 py-0.5 rounded text-[10px] ${
                        isCorrect
                          ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                          : isUnattempted
                          ? 'bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                          : 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300'
                      }`}>
                        {isCorrect ? 'CORRECT' : isUnattempted ? 'UNATTEMPTED' : 'INCORRECT'}
                      </span>
                    </div>

                    <p className="font-bold text-slate-900 dark:text-white leading-relaxed">
                      {lang === 'hi' ? q.questionHi : q.question}
                    </p>

                    <div className="text-slate-600 dark:text-slate-300 text-[11px] space-y-1 pt-1">
                      <div>
                        Correct Answer: <strong className="text-emerald-600">{q.options[q.answer]}</strong>
                      </div>
                      {!isUnattempted && !isCorrect && (
                        <div>
                          Your Answer: <strong className="text-red-500">{q.options[userAns]}</strong>
                        </div>
                      )}
                      <div className="p-2.5 rounded-xl bg-white/70 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 mt-2">
                        <span className="font-bold text-slate-700 dark:text-slate-200 block mb-0.5">Explanation:</span>
                        <p>{lang === 'hi' ? q.explanationHi : q.explanation}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
