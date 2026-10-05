// Master Type Definitions for Defence Exams India Platform

export type Language = 'en' | 'hi';

export type ExamCategory = 
  | 'nda' 
  | 'cds' 
  | 'afcat' 
  | 'agniveer-army' 
  | 'agniveer-navy' 
  | 'agniveer-airforce' 
  | 'coast-guard' 
  | 'technical-entries';

export type EntryType = 'officer' | 'soldier' | 'sailor' | 'airman' | 'technical';

export type GenderEligibility = 'male' | 'female' | 'both';

export type MaritalStatus = 'unmarried' | 'married' | 'unmarried_or_widower' | 'any';

export interface OfficialSource {
  name: string;
  url: string;
  lastVerified: string;
  authority: string;
}

export interface EligibilityRules {
  minAgeYears: number;
  maxAgeYears: number;
  ageDetails: string;
  ageDetailsHi: string;
  gender: GenderEligibility;
  maritalStatus: MaritalStatus;
  educationLevel: string;
  educationLevelHi: string;
  requiredSubjects?: string[];
  minPercentage?: number;
  physicsMathMandatory?: boolean;
  engineeringRequired?: boolean;
  eligibleBranches?: string[];
  nccRequirement?: string;
  nccRequirementHi?: string;
  nationality: string;
  nationalityHi: string;
}

export interface ExamPatternSection {
  name: string;
  nameHi: string;
  questions: number;
  marks: number;
  durationMinutes: number;
  negativeMarking: number; // e.g. 0.33, 0.5, 1.0, 1.33
  marksPerQuestion: number;
  syllabusTopics: string[];
}

export interface ExamPattern {
  stageName: string;
  stageNameHi: string;
  totalQuestions: number;
  totalMarks: number;
  totalDurationMinutes: number;
  sections: ExamPatternSection[];
}

export interface ExamBranchDetail {
  id: string;
  name: string;
  nameHi: string;
  wing: 'Army' | 'Navy' | 'Air Force' | 'Coast Guard' | 'Tri-Services';
  cadetAcademy: string;
  tenure: string;
  vacanciesTentative: number;
  eligibility: EligibilityRules;
  examPattern: ExamPattern;
}

export interface DefenceExam {
  id: ExamCategory;
  name: string;
  nameHi: string;
  fullName: string;
  fullNameHi: string;
  conductingBody: string;
  frequency: string;
  entryType: EntryType;
  officialPortal: string;
  officialSource: OfficialSource;
  overview: string;
  overviewHi: string;
  stages: {
    stageNumber: number;
    title: string;
    titleHi: string;
    description: string;
    descriptionHi: string;
  }[];
  branches: ExamBranchDetail[];
  physicalSummary: {
    running: string;
    heightMale: string;
    heightFemale: string;
    vision: string;
  };
  salaryAndPerks: {
    rankAtCommission: string;
    level: string;
    stipendDuringTraining: string;
    msp: string;
  };
}

export type QuestionSourceType = 'VERIFIED PYQ' | 'ORIGINAL' | 'PYQ-STYLE';

export interface Question {
  id: string;
  exam: ExamCategory | 'all';
  stage?: string;
  paper?: string;
  subject: string;
  subjectHi?: string;
  topic: string;
  topicHi?: string;
  year?: string;
  difficulty: 'Easy' | 'Moderate' | 'Hard';
  question: string;
  questionHi: string;
  options: [string, string, string, string];
  optionsHi: [string, string, string, string];
  answer: number; // 0, 1, 2, 3
  explanation: string;
  explanationHi: string;
  sourceType: QuestionSourceType;
  source: string;
  tags: string[];
}

export interface TestAttemptResult {
  examId: string;
  mode: string;
  totalQuestions: number;
  attempted: number;
  correct: number;
  incorrect: number;
  unattempted: number;
  score: number;
  maxScore: number;
  accuracy: number;
  timeSpentSeconds: number;
  date: string;
  questionResults: {
    questionId: string;
    userAnswer: number | null;
    isCorrect: boolean;
    timeSeconds: number;
  }[];
}

export type MistakeCategory = 
  | 'Conceptual' 
  | 'Calculation' 
  | 'Misread' 
  | 'Memory' 
  | 'Guess' 
  | 'Time pressure' 
  | 'Careless';

export interface ErrorNotebookItem {
  questionId: string;
  exam: string;
  subject: string;
  topic: string;
  userAnswer: number;
  correctAnswer: number;
  mistakeType: MistakeCategory;
  notes: string;
  timestamp: string;
  reviewed: boolean;
}

export interface NotificationItem {
  id: string;
  examId: ExamCategory;
  title: string;
  titleHi: string;
  type: 'Important' | 'Deadline' | 'New' | 'Information';
  status: 'Upcoming' | 'Live' | 'Closed' | 'Result Out';
  notificationDate: string;
  applicationStart: string;
  applicationEnd: string;
  examDate: string;
  resultDate?: string;
  admitCardDate?: string;
  officialUrl: string;
  verifiedDate: string;
  summary: string;
  summaryHi: string;
}

export interface VacancyRecord {
  id: string;
  examId: ExamCategory;
  courseCycle: string;
  year: number;
  wing: 'Army' | 'Navy' | 'Air Force' | 'Coast Guard' | 'OTA';
  branch: string;
  category: string;
  maleVacancies: number;
  femaleVacancies: number;
  totalVacancies: number;
  status: 'Tentative' | 'Final';
  source: string;
}

export interface CutoffRecord {
  id: string;
  examId: ExamCategory;
  year: string;
  paperOrStage: string;
  category: string;
  minimumQualifying: string;
  writtenCutoff: number;
  finalRecommendedCutoff: number;
  maxMarks: number;
  source: string;
  notes: string;
  notesHi: string;
}

export interface BookRecord {
  id: string;
  title: string;
  titleHi: string;
  author: string;
  publisher: string;
  edition: string;
  publicationYear: number;
  exam: ExamCategory | 'all';
  subject: string;
  syllabusCoverage: string;
  syllabusCoverageHi: string;
  pyqCoverage: string;
  recommendedLevel: 'Beginner' | 'Comprehensive' | 'Advanced Practice';
  legitimatePurchaseUrl: string;
  freeOfficialAlternative?: string;
  mappedTopics: string[];
}

export interface SSBGuideStep {
  day: number;
  phase: string;
  phaseHi: string;
  title: string;
  titleHi: string;
  tests: {
    testName: string;
    testNameHi: string;
    duration: string;
    purpose: string;
    purposeHi: string;
    procedure: string[];
    procedureHi: string[];
    dos: string[];
    donts: string[];
  }[];
}

export interface OLQ {
  factor: 'Factor I: Planning & Organizing' | 'Factor II: Social Adjustment' | 'Factor III: Social Effectiveness' | 'Factor IV: Dynamic';
  factorHi: string;
  number: number;
  name: string;
  nameHi: string;
  definition: string;
  definitionHi: string;
  behaviouralIndicators: string[];
}

export interface PhysicalRequirement {
  examId: ExamCategory;
  wing: string;
  test: string;
  testHi: string;
  maleStandard: string;
  femaleStandard: string;
  marksOrQualifying: string;
  mandatory: boolean;
  trainingTips: string;
  trainingTipsHi: string;
}

export interface VisionStandard {
  examId: ExamCategory;
  branch: string;
  uncorrectedBetter: string;
  uncorrectedWorse: string;
  correctedBetter: string;
  correctedWorse: string;
  myopiaMax: string;
  hypermetropiaMax: string;
  colourPerception: 'CP-I' | 'CP-II' | 'CP-III';
  lasikAllowed: boolean;
  lasikCriteria?: string;
  lasikCriteriaHi?: string;
}

export interface CurrentAffairsItem {
  id: string;
  date: string;
  headline: string;
  headlineHi: string;
  category: 'Defence' | 'National' | 'International' | 'Science & Tech' | 'Exercises' | 'Appointments';
  summary: string;
  summaryHi: string;
  examRelevance: string;
  source: string;
  tags: string[];
  verifiedDate: string;
}

export interface DefenceGKItem {
  id: string;
  title: string;
  titleHi: string;
  category: 'Commands' | 'Ranks' | 'Insignia' | 'Weapons & Missiles' | 'Aircraft & Warships' | 'Exercises' | 'Operations' | 'Gallantry Awards';
  details: Record<string, any>;
  summary: string;
  summaryHi: string;
  verifiedDate: string;
}

export interface Flashcard {
  id: string;
  category: string;
  front: string;
  frontHi: string;
  back: string;
  backHi: string;
  source: string;
}

export interface FormulaItem {
  id: string;
  subject: 'Mathematics' | 'Physics' | 'Shortcut Techniques';
  topic: string;
  title: string;
  titleHi: string;
  formula: string;
  explanation: string;
  explanationHi: string;
  examTag: string;
}
