import React, { createContext, useContext, useState, useEffect } from 'react';
import { TestAttemptResult, ErrorNotebookItem, MistakeCategory } from '../types';

export interface PhysicalWorkoutLog {
  id: string;
  date: string;
  runningDistanceKm: number;
  runningTimeMinutes: number;
  pushups: number;
  situps: number;
  pullups: number;
  notes: string;
}

export interface UserProgressState {
  bookmarkedQuestions: string[];
  testHistory: TestAttemptResult[];
  errorNotebook: ErrorNotebookItem[];
  masteredFlashcards: string[];
  physicalLogs: PhysicalWorkoutLog[];
  studyTargetExam: string;
  dailyStudyMinutes: number;
  completedRoadmapLevels: number[];
}

interface UserProgressContextType {
  progress: UserProgressState;
  bookmarkQuestion: (questionId: string) => void;
  unbookmarkQuestion: (questionId: string) => void;
  isBookmarked: (questionId: string) => boolean;
  saveTestResult: (result: TestAttemptResult) => void;
  addErrorNotebookItem: (item: Omit<ErrorNotebookItem, 'timestamp' | 'reviewed'>) => void;
  updateMistakeType: (questionId: string, mistakeType: MistakeCategory, notes: string) => void;
  markErrorReviewed: (questionId: string) => void;
  removeErrorItem: (questionId: string) => void;
  toggleFlashcardMastery: (cardId: string) => void;
  addPhysicalLog: (log: Omit<PhysicalWorkoutLog, 'id' | 'date'>) => void;
  toggleRoadmapLevel: (level: number) => void;
  setStudyTarget: (exam: string, dailyMinutes: number) => void;
  clearAllProgress: () => void;
}

const STORAGE_KEY = 'defence_user_progress_v1';

const defaultState: UserProgressState = {
  bookmarkedQuestions: [],
  testHistory: [],
  errorNotebook: [],
  masteredFlashcards: [],
  physicalLogs: [
    {
      id: 'demo-1',
      date: '2026-09-28',
      runningDistanceKm: 1.6,
      runningTimeMinutes: 5.45,
      pushups: 32,
      situps: 40,
      pullups: 8,
      notes: 'Initial Agniveer baseline run'
    },
    {
      id: 'demo-2',
      date: '2026-10-02',
      runningDistanceKm: 1.6,
      runningTimeMinutes: 5.25,
      pushups: 38,
      situps: 45,
      pullups: 10,
      notes: 'Group 1 timing achieved!'
    }
  ],
  studyTargetExam: 'nda',
  dailyStudyMinutes: 240,
  completedRoadmapLevels: [0, 1, 2]
};

const UserProgressContext = createContext<UserProgressContextType | undefined>(undefined);

export const UserProgressProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [progress, setProgress] = useState<UserProgressState>(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        return { ...defaultState, ...JSON.parse(stored) };
      }
    } catch (e) {
      console.error(e);
    }
    return defaultState;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch (e) {
      console.error(e);
    }
  }, [progress]);

  const bookmarkQuestion = (questionId: string) => {
    setProgress((prev) => ({
      ...prev,
      bookmarkedQuestions: prev.bookmarkedQuestions.includes(questionId)
        ? prev.bookmarkedQuestions
        : [...prev.bookmarkedQuestions, questionId]
    }));
  };

  const unbookmarkQuestion = (questionId: string) => {
    setProgress((prev) => ({
      ...prev,
      bookmarkedQuestions: prev.bookmarkedQuestions.filter((id) => id !== questionId)
    }));
  };

  const isBookmarked = (questionId: string) => {
    return progress.bookmarkedQuestions.includes(questionId);
  };

  const saveTestResult = (result: TestAttemptResult) => {
    setProgress((prev) => ({
      ...prev,
      testHistory: [result, ...prev.testHistory]
    }));
  };

  const addErrorNotebookItem = (item: Omit<ErrorNotebookItem, 'timestamp' | 'reviewed'>) => {
    setProgress((prev) => {
      const existing = prev.errorNotebook.find((e) => e.questionId === item.questionId);
      if (existing) {
        return {
          ...prev,
          errorNotebook: prev.errorNotebook.map((e) =>
            e.questionId === item.questionId
              ? { ...e, mistakeType: item.mistakeType, notes: item.notes, timestamp: new Date().toISOString() }
              : e
          )
        };
      }
      return {
        ...prev,
        errorNotebook: [
          {
            ...item,
            timestamp: new Date().toISOString(),
            reviewed: false
          },
          ...prev.errorNotebook
        ]
      };
    });
  };

  const updateMistakeType = (questionId: string, mistakeType: MistakeCategory, notes: string) => {
    setProgress((prev) => ({
      ...prev,
      errorNotebook: prev.errorNotebook.map((e) =>
        e.questionId === questionId ? { ...e, mistakeType, notes } : e
      )
    }));
  };

  const markErrorReviewed = (questionId: string) => {
    setProgress((prev) => ({
      ...prev,
      errorNotebook: prev.errorNotebook.map((e) =>
        e.questionId === questionId ? { ...e, reviewed: !e.reviewed } : e
      )
    }));
  };

  const removeErrorItem = (questionId: string) => {
    setProgress((prev) => ({
      ...prev,
      errorNotebook: prev.errorNotebook.filter((e) => e.questionId !== questionId)
    }));
  };

  const toggleFlashcardMastery = (cardId: string) => {
    setProgress((prev) => ({
      ...prev,
      masteredFlashcards: prev.masteredFlashcards.includes(cardId)
        ? prev.masteredFlashcards.filter((id) => id !== cardId)
        : [...prev.masteredFlashcards, cardId]
    }));
  };

  const addPhysicalLog = (log: Omit<PhysicalWorkoutLog, 'id' | 'date'>) => {
    const newLog: PhysicalWorkoutLog = {
      ...log,
      id: 'log-' + Date.now(),
      date: new Date().toISOString().split('T')[0]
    };
    setProgress((prev) => ({
      ...prev,
      physicalLogs: [newLog, ...prev.physicalLogs]
    }));
  };

  const toggleRoadmapLevel = (level: number) => {
    setProgress((prev) => ({
      ...prev,
      completedRoadmapLevels: prev.completedRoadmapLevels.includes(level)
        ? prev.completedRoadmapLevels.filter((l) => l !== level)
        : [...prev.completedRoadmapLevels, level]
    }));
  };

  const setStudyTarget = (exam: string, dailyMinutes: number) => {
    setProgress((prev) => ({
      ...prev,
      studyTargetExam: exam,
      dailyStudyMinutes: dailyMinutes
    }));
  };

  const clearAllProgress = () => {
    if (window.confirm('Are you sure you want to reset all progress data?')) {
      setProgress(defaultState);
      localStorage.removeItem(STORAGE_KEY);
    }
  };

  return (
    <UserProgressContext.Provider
      value={{
        progress,
        bookmarkQuestion,
        unbookmarkQuestion,
        isBookmarked,
        saveTestResult,
        addErrorNotebookItem,
        updateMistakeType,
        markErrorReviewed,
        removeErrorItem,
        toggleFlashcardMastery,
        addPhysicalLog,
        toggleRoadmapLevel,
        setStudyTarget,
        clearAllProgress
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
};

export const useUserProgress = () => {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within UserProgressProvider');
  }
  return context;
};
