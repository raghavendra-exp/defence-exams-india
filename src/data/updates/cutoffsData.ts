import { CutoffRecord } from '../../types';

export const officialCutoffsList: CutoffRecord[] = [
  {
    id: 'cut-nda-2024-1',
    examId: 'nda',
    year: '2024 NDA I',
    paperOrStage: 'Written Exam & Final Recommendation',
    category: 'General / All Candidates',
    minimumQualifying: '25% in each of the two papers (Maths 75/300 & GAT 150/600)',
    writtenCutoff: 301,
    finalRecommendedCutoff: 664,
    maxMarks: 1800,
    source: 'UPSC Official NDA-I Marks of Recommended Candidates',
    notes: 'Historical cutoff out of 900 for written and 1800 for final merit. Cutoffs vary based on question paper difficulty and candidate volumes.',
    notesHi: 'लिखित परीक्षा 900 अंकों में से तथा अंतिम संस्तुति 1800 अंकों में से। ऐतिहासिक कटऑफ केवल संदर्भ हेतु है।'
  },
  {
    id: 'cut-nda-2023-2',
    examId: 'nda',
    year: '2023 NDA II',
    paperOrStage: 'Written & Final Merit',
    category: 'General',
    minimumQualifying: '25% sectional minimum in each paper',
    writtenCutoff: 292,
    finalRecommendedCutoff: 656,
    maxMarks: 1800,
    source: 'UPSC Official Cutoff Archive',
    notes: 'Last candidate recommended scored 292 in written exam out of 900.',
    notesHi: 'अंतिम संस्तुत अभ्यर्थी ने 900 में से 292 अंक प्राप्त किए।'
  },
  {
    id: 'cut-cds-ima-2023-2',
    examId: 'cds',
    year: '2023 CDS II',
    paperOrStage: 'Indian Military Academy (IMA)',
    category: 'All India',
    minimumQualifying: '20% marks in each of the three papers (English, GK, Elementary Maths)',
    writtenCutoff: 126,
    finalRecommendedCutoff: 247,
    maxMarks: 600,
    source: 'UPSC Official CDS-II Cutoff Gazette',
    notes: 'Written exam out of 300 marks; final merit out of 600 marks (300 Written + 300 SSB).',
    notesHi: 'लिखित परीक्षा 300 अंकों में से; अंतिम मेरिट 600 अंकों (300 लिखित + 300 एसएसबी) में से।'
  },
  {
    id: 'cut-cds-ota-2023-2',
    examId: 'cds',
    year: '2023 CDS II',
    paperOrStage: 'Officers Training Academy (OTA)',
    category: 'Men & Women',
    minimumQualifying: '20% marks in each paper (English & GK)',
    writtenCutoff: 98,
    finalRecommendedCutoff: 178,
    maxMarks: 400,
    source: 'UPSC Official CDS Cutoff Archive',
    notes: 'Written exam out of 200 marks; final merit out of 400 marks (200 Written + 200 SSB).',
    notesHi: 'ओटीए लिखित परीक्षा 200 अंकों में से; अंतिम मेरिट 400 अंकों (200 लिखित + 200 एसएसबी) में से।'
  },
  {
    id: 'cut-afcat-2024-1',
    examId: 'afcat',
    year: '2024 AFCAT 01',
    paperOrStage: 'Online Computer Based Test',
    category: 'All Branches',
    minimumQualifying: 'Overall cutoff determined by IAF',
    writtenCutoff: 137,
    finalRecommendedCutoff: 137,
    maxMarks: 300,
    source: 'Indian Air Force AFCAT Official Scorecard Release',
    notes: 'Out of 300 marks (100 questions x 3 marks with -1 negative mark).',
    notesHi: '300 अंकों में से (100 प्रश्न x 3 अंक, -1 नकारात्मक अंक)।'
  },
  {
    id: 'cut-afcat-2023-2',
    examId: 'afcat',
    year: '2023 AFCAT 02',
    paperOrStage: 'Online CBT',
    category: 'All Branches',
    minimumQualifying: 'Consolidated normalized cutoff',
    writtenCutoff: 151,
    finalRecommendedCutoff: 151,
    maxMarks: 300,
    source: 'IAF AFCAT Official Portal Archive',
    notes: 'AFCAT cutoff was 151/300 for shortlisting to Air Force Selection Boards (AFSB).',
    notesHi: 'एएफएसबी साक्षात्कार हेतु शॉर्टलिस्टिंग कटऑफ 151/300 रही।'
  }
];
