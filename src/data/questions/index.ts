// Master Question Bank for Defence Exams India Platform
import { Question } from '../../types';
import { curatedQuestions } from './curatedQuestions';

// Instant synchronous access to curated flagship questions
export { curatedQuestions };
export const allQuestions: Question[] = curatedQuestions;

// Cache for dynamically loaded exam questions
const examQuestionCache: Record<string, Question[]> = {};

/**
 * Dynamically loads all questions for a specific exam on demand.
 * This keeps the initial bundle lightweight and fast on mobile devices.
 */
export const loadExamQuestions = async (examId: string): Promise<Question[]> => {
  if (examQuestionCache[examId]) {
    return examQuestionCache[examId];
  }

  try {
    let loaded: Question[] = [];
    switch (examId) {
      case 'nda': {
        const mod = await import('./chunks/nda.json');
        loaded = (mod.default || mod) as Question[];
        break;
      }
      case 'cds': {
        const mod = await import('./chunks/cds.json');
        loaded = (mod.default || mod) as Question[];
        break;
      }
      case 'afcat': {
        const mod = await import('./chunks/afcat.json');
        loaded = (mod.default || mod) as Question[];
        break;
      }
      case 'agniveer-army': {
        const mod = await import('./chunks/agniveer-army.json');
        loaded = (mod.default || mod) as Question[];
        break;
      }
      case 'agniveer-navy': {
        const mod = await import('./chunks/agniveer-navy.json');
        loaded = (mod.default || mod) as Question[];
        break;
      }
      case 'agniveer-air-force': {
        const mod = await import('./chunks/agniveer-air-force.json');
        loaded = (mod.default || mod) as Question[];
        break;
      }
      case 'coast-guard': {
        const mod = await import('./chunks/coast-guard.json');
        loaded = (mod.default || mod) as Question[];
        break;
      }
      case 'technical-entries': {
        const mod = await import('./chunks/technical-entries.json');
        loaded = (mod.default || mod) as Question[];
        break;
      }
      default:
        loaded = curatedQuestions.filter(q => q.exam === examId || q.exam === 'all');
    }

    if (loaded && loaded.length > 0) {
      examQuestionCache[examId] = loaded;
      return loaded;
    }
  } catch (err) {
    console.warn(`Failed to lazy-load questions for ${examId}, falling back to curated bank:`, err);
  }

  return curatedQuestions.filter(q => examId === 'all' || q.exam === examId || q.exam === 'all');
};

export const getQuestionsByExam = (examId: string): Question[] => {
  if (examQuestionCache[examId]) {
    return examQuestionCache[examId];
  }
  return curatedQuestions.filter(q => q.exam === examId || q.exam === 'all');
};

export const getQuestionsBySubject = (examId: string, subject: string): Question[] => {
  const base = examQuestionCache[examId] || curatedQuestions;
  return base.filter(q => (q.exam === examId || q.exam === 'all') && q.subject.toLowerCase() === subject.toLowerCase());
};

export const getPyqQuestions = (examId?: string): Question[] => {
  const base = examId && examQuestionCache[examId] ? examQuestionCache[examId] : curatedQuestions;
  return base.filter(q => {
    const isPyq = q.sourceType === 'VERIFIED PYQ' || q.sourceType === 'PYQ-STYLE';
    return examId ? isPyq && (q.exam === examId || q.exam === 'all') : isPyq;
  });
};
