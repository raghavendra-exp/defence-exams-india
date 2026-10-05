// Master Question Bank for Defence Exams India Platform
import { Question } from '../../types';
import questionsData from './allQuestions.json';

export const allQuestions: Question[] = questionsData as Question[];

export const getQuestionsByExam = (examId: string): Question[] => {
  return allQuestions.filter(q => q.exam === examId || q.exam === 'all');
};

export const getQuestionsBySubject = (examId: string, subject: string): Question[] => {
  return allQuestions.filter(q => (q.exam === examId || q.exam === 'all') && q.subject.toLowerCase() === subject.toLowerCase());
};

export const getPyqQuestions = (examId?: string): Question[] => {
  return allQuestions.filter(q => {
    const isPyq = q.sourceType === 'VERIFIED PYQ' || q.sourceType === 'PYQ-STYLE';
    return examId ? isPyq && (q.exam === examId || q.exam === 'all') : isPyq;
  });
};
