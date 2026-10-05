import { DefenceExam } from '../../types';

export const agniveerAirForceExamData: DefenceExam = {
  id: 'agniveer-airforce',
  name: 'Agniveervayu',
  nameHi: 'अग्निवीरवायु (वायु सेना)',
  fullName: 'Indian Air Force Agniveervayu Recruitment (Intake Cycles)',
  fullNameHi: 'भारतीय वायु सेना अग्निवीरवायु भर्ती (प्रवेश चक्र)',
  conductingBody: 'Indian Air Force (IAF - CASB)',
  frequency: 'Twice a year (Intake 01 & 02 cycles)',
  entryType: 'airman',
  officialPortal: 'https://agnipathvayu.cdac.in',
  officialSource: {
    name: 'Indian Air Force Agniveervayu Official Notification',
    url: 'https://agnipathvayu.cdac.in',
    lastVerified: '2026-09-12',
    authority: 'Central Airmen Selection Board (CASB), Brar Square, New Delhi'
  },
  overview: 'Agniveervayu is the recruitment gateway for airmen in the Indian Air Force under the Agnipath scheme for unmarried Indian male and female citizens. Candidates can apply for Science Subjects, Other than Science Subjects, or Both Science & Other Than Science. The selection system includes Phase I: Online Test -> Phase II: Physical Fitness Test (PFT), Adaptability Test-I & Adaptability Test-II -> Phase III: Mandatory Medical Examination.',
  overviewHi: 'अग्निवीरवायु भारतीय वायु सेना में अग्निपथ योजना के तहत अविवाहित पुरुष एवं महिला नागरिकों हेतु वायु सैनिक भर्ती परीक्षा है। अभ्यर्थी विज्ञान विषय, विज्ञान के अतिरिक्त अन्य विषय, अथवा दोनों हेतु आवेदन कर सकते हैं। चयन में चरण 1: ऑनलाइन परीक्षा -> चरण 2: शारीरिक दक्षता (पीएफटी) एवं अनुकूलनशीलता परीक्षण 1 व 2 -> चरण 3: चिकित्सीय परीक्षण शामिल है।',
  stages: [
    {
      stageNumber: 1,
      title: 'Phase I: Online Test (STAR Examination)',
      titleHi: 'चरण 1: ऑनलाइन परीक्षा (स्टार परीक्षा)',
      description: 'Science Stream: 60 mins (English 20, Physics 25, Maths 25 = 70 marks). Other Than Science: 45 mins (English 20, RAGA 30 = 50 marks). Both: 85 mins (English 20, Physics 25, Maths 25, RAGA 30 = 100 marks). Marking: +1 correct, -0.25 negative.',
      descriptionHi: 'विज्ञान संकाय: 60 मिनट (अंग्रेजी 20, भौतिकी 25, गणित 25 = 70 अंक)। अन्य संकाय: 45 मिनट (अंग्रेजी 20, रागा 30 = 50 अंक)। दोनों: 85 मिनट (100 अंक)। अंकन: +1 सही, -0.25 नकारात्मक।'
    },
    {
      stageNumber: 2,
      title: 'Phase II: PFT & Adaptability Tests',
      titleHi: 'चरण 2: शारीरिक दक्षता एवं अनुकूलनशीलता परीक्षण',
      description: '1.6 km Run (Male <= 7 mins, Female <= 8 mins), 10 Push-ups, 10 Sit-ups, 20 Squats. Followed by Adaptability Test-I (SRT personality assessment) and Adaptability Test-II (Group Discussion in English).',
      descriptionHi: '1.6 किमी दौड़ (पुरुष: 7 मिनट, महिला: 8 मिनट), 10 पुश-अप्स, 10 सिट-अप्स, 20 स्क्वैट्स। इसके पश्चात अनुकूलनशीलता परीक्षण 1 (SRT) एवं अनुकूलनशीलता परीक्षण 2 (अंग्रेजी में ग्रुप डिस्कशन)।'
    },
    {
      stageNumber: 3,
      title: 'Phase III: Medical Examination',
      titleHi: 'चरण 3: चिकित्सीय परीक्षण',
      description: 'Rigorous baseline clinical assessment by Air Force Medical Teams. Final enrollment list published on CASB web portal.',
      descriptionHi: 'वायु सेना चिकित्सा दल द्वारा विस्तृत स्वास्थ्य परीक्षण एवं अंतिम नामांकन सूची का प्रकाशन।'
    }
  ],
  branches: [
    {
      id: 'vayu-science',
      name: 'Science Subjects Stream (Technical Trade)',
      nameHi: 'विज्ञान विषय संकाय (तकनीकी ट्रेड)',
      wing: 'Air Force',
      cadetAcademy: 'Airmen Training School (ATS), Belagavi (Karnataka)',
      tenure: '4 Years',
      vacanciesTentative: 2500,
      eligibility: {
        minAgeYears: 17.5,
        maxAgeYears: 21,
        ageDetails: '17.5 to 21 years on date of enrollment',
        ageDetailsHi: 'नामांकन के समय 17.5 से 21 वर्ष',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: '10+2 / Intermediate with Mathematics, Physics and English with minimum 50% marks in aggregate and 50% marks in English OR 3-year Diploma in Engineering with 50% aggregate and 50% in English',
        educationLevelHi: 'गणित, भौतिकी और अंग्रेजी के साथ 10+2 में कुल 50% तथा अंग्रेजी में 50% अनिवार्य अंक',
        physicsMathMandatory: true,
        minPercentage: 50,
        requiredSubjects: ['Mathematics', 'Physics', 'English'],
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Phase I Online Exam (Science)',
        stageNameHi: 'चरण 1 ऑनलाइन परीक्षा (विज्ञान)',
        totalQuestions: 70,
        totalMarks: 70,
        totalDurationMinutes: 60,
        sections: [
          {
            name: 'English',
            nameHi: 'अंग्रेजी',
            questions: 20,
            marks: 20,
            durationMinutes: 20,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Comprehension passage', 'Grammar (Subject-verb concord, verb patterns, tenses)', 'Vocabulary (Synonyms, antonyms, spelling, one word)']
          },
          {
            name: 'Physics',
            nameHi: 'भौतिक विज्ञान',
            questions: 25,
            marks: 25,
            durationMinutes: 20,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Kinematics, Laws of Motion, Work, Energy and Power, Motion of system of particles, Gravitation, Thermodynamics, Oscillations & Waves, Electrostatics, Current Electricity, Optics']
          },
          {
            name: 'Mathematics',
            nameHi: 'गणित',
            questions: 25,
            marks: 25,
            durationMinutes: 20,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Sets, Relations and Functions, Trigonometric Functions, Complex Numbers, Permutations and Combinations, Binomial Theorem, Sequences and Series, Calculus, Vectors']
          }
        ]
      }
    },
    {
      id: 'vayu-non-science',
      name: 'Other Than Science Subjects Stream (Non-Technical)',
      nameHi: 'विज्ञान के अतिरिक्त अन्य विषय संकाय (गैर-तकनीकी)',
      wing: 'Air Force',
      cadetAcademy: 'Airmen Training School (ATS), Belagavi',
      tenure: '4 Years',
      vacanciesTentative: 1500,
      eligibility: {
        minAgeYears: 17.5,
        maxAgeYears: 21,
        ageDetails: '17.5 to 21 years',
        ageDetailsHi: '17.5 से 21 वर्ष',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: '10+2 / Intermediate passed in any stream/subjects with minimum 50% marks in aggregate and 50% marks in English',
        educationLevelHi: 'किसी भी संकाय में कुल 50% अंकों तथा अंग्रेजी में 50% अंकों के साथ 10+2 उत्तीर्ण',
        minPercentage: 50,
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Phase I Online Exam (Other Than Science)',
        stageNameHi: 'चरण 1 ऑनलाइन परीक्षा (गैर-विज्ञान)',
        totalQuestions: 50,
        totalMarks: 50,
        totalDurationMinutes: 45,
        sections: [
          {
            name: 'English',
            nameHi: 'अंग्रेजी',
            questions: 20,
            marks: 20,
            durationMinutes: 20,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Comprehension, Grammar, Vocabulary, Sentence Structure']
          },
          {
            name: 'Reasoning & General Awareness (RAGA)',
            nameHi: 'रीजनिंग एवं सामान्य जागरूकता (रागा)',
            questions: 30,
            marks: 30,
            durationMinutes: 25,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Verbal & Non-Verbal Reasoning', 'Numerical Ability (Ratio, Average, LCM/HCF, Profit & Loss, Speed-Time-Distance, Simple Trigonometry & Geometry)', 'General Science', 'Civics, Geography, Current Events, History, Basic Computer']
          }
        ]
      }
    }
  ],
  physicalSummary: {
    running: '1.6 km run in 7 minutes for Male, 8 minutes for Female',
    heightMale: '152.5 cm minimum',
    heightFemale: '152 cm minimum',
    vision: '6/12 each eye correctable to 6/6, Maximum Myopia 1.5D, Hypermetropia +2.0D'
  },
  salaryAndPerks: {
    rankAtCommission: 'Agniveervayu',
    level: '₹30,000 to ₹40,000 per month across 4 years',
    stipendDuringTraining: 'In-hand stipend + 30% Seva Nidhi deduction',
    msp: 'Seva Nidhi Package ~₹11.71 Lakhs on completion of 4 years'
  }
};
