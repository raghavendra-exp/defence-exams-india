import { DefenceExam, ExamCategory } from '../../types';
import { ndaExamData } from './nda';
import { cdsExamData } from './cds';
import { afcatExamData } from './afcat';
import { agniveerArmyExamData } from './agniveerArmy';
import { agniveerNavyExamData } from './agniveerNavy';
import { agniveerAirForceExamData } from './agniveerAirForce';
import { coastGuardExamData } from './coastGuard';
import { technicalEntriesExamData } from './technicalEntries';

export const allDefenceExams: DefenceExam[] = [
  ndaExamData,
  cdsExamData,
  afcatExamData,
  agniveerArmyExamData,
  agniveerNavyExamData,
  agniveerAirForceExamData,
  coastGuardExamData,
  technicalEntriesExamData
];

export const defenceExamsMap: Record<ExamCategory, DefenceExam> = {
  nda: ndaExamData,
  cds: cdsExamData,
  afcat: afcatExamData,
  'agniveer-army': agniveerArmyExamData,
  'agniveer-navy': agniveerNavyExamData,
  'agniveer-airforce': agniveerAirForceExamData,
  'agniveer-air-force': agniveerAirForceExamData,
  'coast-guard': coastGuardExamData,
  'technical-entries': technicalEntriesExamData
};

export const getExamById = (id: string): DefenceExam | undefined => {
  return allDefenceExams.find(e => e.id === id);
};
