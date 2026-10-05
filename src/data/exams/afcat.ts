import { DefenceExam } from '../../types';

export const afcatExamData: DefenceExam = {
  id: 'afcat',
  name: 'AFCAT',
  nameHi: 'एएफकैट',
  fullName: 'Air Force Common Admission Test',
  fullNameHi: 'वायु सेना सामान्य प्रवेश परीक्षा',
  conductingBody: 'Indian Air Force (IAF)',
  frequency: 'Twice a year (AFCAT 01 in February, AFCAT 02 in August/September)',
  entryType: 'officer',
  officialPortal: 'https://afcat.cdac.in',
  officialSource: {
    name: 'Indian Air Force Official AFCAT Notification',
    url: 'https://afcat.cdac.in',
    lastVerified: '2026-09-10',
    authority: 'Indian Air Force, Air Headquarters, New Delhi'
  },
  overview: 'AFCAT is conducted by the Indian Air Force for commissioning commissioned officers in Flying and Ground Duty (Technical and Non-Technical) branches. Both men and women can apply for Short Service Commission (SSC) and Permanent Commission as notified. Selection includes Online AFCAT Examination -> AFSB Testing -> Medical Examination -> All India Merit List.',
  overviewHi: 'एएफकैट भारतीय वायु सेना द्वारा फ्लाइंग ब्रांच और ग्राउंड ड्यूटी (तकनीकी एवं गैर-तकनीकी) शाखाओं में अधिकारियों की भर्ती के लिए आयोजित की जाती है। पुरुष एवं महिला दोनों अभ्यर्थी आवेदन कर सकते हैं। चयन प्रक्रिया में ऑनलाइन परीक्षा -> एएफएसबी परीक्षण -> चिकित्सा परीक्षण -> अखिल भारतीय मेरिट सूची शामिल है।',
  stages: [
    {
      stageNumber: 1,
      title: 'Online AFCAT Examination (CBT)',
      titleHi: 'ऑनलाइन एएफकैट परीक्षा (कंप्यूटर आधारित)',
      description: '100 Questions, 300 Marks, 2 Hours. Objective Multiple Choice with +3 marks for correct answer and -1 mark penalty for wrong answer.',
      descriptionHi: '100 प्रश्न, 300 अंक, 2 घंटे। प्रत्येक सही उत्तर पर +3 अंक तथा गलत उत्तर पर -1 अंक का नकारात्मक अंकन।'
    },
    {
      stageNumber: 2,
      title: 'Air Force Selection Board (AFSB)',
      titleHi: 'वायु सेना चयन बोर्ड (एएफएसबी)',
      description: 'Stage I: Officer Intelligence Rating (OIR) and Picture Perception & Discussion Test (PPDT). Stage II: Psychological Tests, Group Tests (GTO), and Personal Interview. Computerised Pilot Selection System (CPSS) for Flying branch aspirants.',
      descriptionHi: 'चरण 1: ओआईआर एवं पीपीडीटी। चरण 2: मनोवैज्ञानिक परीक्षण, जीटीओ टास्क, व्यक्तिगत साक्षात्कार तथा फ्लाइंग ब्रांच के लिए सीपीएसएस (CPSS) पायलट परीक्षण।'
    },
    {
      stageNumber: 3,
      title: 'Medical Examination',
      titleHi: 'चिकित्सीय परीक्षण',
      description: 'Conducted at AFCME (New Delhi) or IAM (Bengaluru) according to strict IAF aviation/ground medical standards.',
      descriptionHi: 'एएफसीएमई नई दिल्ली अथवा आईएएम बेंगलुरु में विमानन मानकों के अनुसार कठोर चिकित्सीय परीक्षण।'
    },
    {
      stageNumber: 4,
      title: 'Final Merit & AFA Training',
      titleHi: 'अंतिम मेरिट एवं एएफए प्रशिक्षण',
      description: 'Pre-commission training at Air Force Academy, Dundigal (Hyderabad) commencing in January/July.',
      descriptionHi: 'वायु सेना अकादमी (एएफए) डुंडीगल, हैदराबाद में जनवरी/जुलाई से कमीशन-पूर्व गहन प्रशिक्षण।'
    }
  ],
  branches: [
    {
      id: 'afcat-flying',
      name: 'Flying Branch',
      nameHi: 'फ्लाइंग ब्रांच',
      wing: 'Air Force',
      cadetAcademy: 'Air Force Academy (AFA), Dundigal',
      tenure: 'Short Service Commission (14 years)',
      vacanciesTentative: 38,
      eligibility: {
        minAgeYears: 20,
        maxAgeYears: 24,
        ageDetails: '20 to 24 years (upper age limit relaxable up to 26 years for DGCA valid CPL holders)',
        ageDetailsHi: '20 से 24 वर्ष (डीजीसीए सीपीएल धारकों के लिए अधिकतम 26 वर्ष तक छूट)',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: 'Minimum 50% marks each in Maths and Physics at 10+2 level AND Graduation with minimum 60% marks OR B.E./B.Tech degree with minimum 60% marks',
        educationLevelHi: '10+2 में गणित और भौतिकी में 50-50% अंक तथा स्नातक में न्यूनतम 60% अथवा बी.ई./बी.टेक में 60% अंक',
        physicsMathMandatory: true,
        requiredSubjects: ['Physics', 'Mathematics'],
        minPercentage: 60,
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'AFCAT Online Test',
        stageNameHi: 'एएफकैट ऑनलाइन परीक्षा',
        totalQuestions: 100,
        totalMarks: 300,
        totalDurationMinutes: 120,
        sections: [
          {
            name: 'English Language',
            nameHi: 'अंग्रेजी भाषा',
            questions: 30,
            marks: 90,
            durationMinutes: 36,
            negativeMarking: 1.0,
            marksPerQuestion: 3.0,
            syllabusTopics: ['Comprehension', 'Detecting Errors in Sentences', 'Sentence Completion / Fill in Blanks', 'Synonyms / Antonyms', 'Idioms and Phrases', 'Analogy', 'Sentence Rearrangement']
          },
          {
            name: 'General Awareness',
            nameHi: 'सामान्य जागरूकता',
            questions: 25,
            marks: 75,
            durationMinutes: 30,
            negativeMarking: 1.0,
            marksPerQuestion: 3.0,
            syllabusTopics: ['History', 'Geography', 'Sports', 'National & International Current Affairs', 'Defence Exercises & Aircraft', 'Basic Science', 'Environment', 'Art and Culture']
          },
          {
            name: 'Numerical Ability',
            nameHi: 'संख्यात्मक अभियोग्यता',
            questions: 20,
            marks: 60,
            durationMinutes: 24,
            negativeMarking: 1.0,
            marksPerQuestion: 3.0,
            syllabusTopics: ['Decimal Fraction', 'Time and Work', 'Average', 'Profit & Loss', 'Percentage', 'Ratio & Proportion', 'Simple and Compound Interest', 'Time, Speed and Distance', 'Probability']
          },
          {
            name: 'Reasoning and Military Aptitude',
            nameHi: 'तर्कशक्ति एवं सैन्य अभिक्षमता',
            questions: 25,
            marks: 75,
            durationMinutes: 30,
            negativeMarking: 1.0,
            marksPerQuestion: 3.0,
            syllabusTopics: ['Verbal Skills and Spatial Ability', 'Analogy', 'Classification', 'Series Completion', 'Pattern Completion', 'Dot Situation', 'Venn Diagrams', 'Embedded Figures']
          }
        ]
      }
    },
    {
      id: 'afcat-tech',
      name: 'Ground Duty (Technical) Branch — AE(L) and AE(M)',
      nameHi: 'ग्राउंड ड्यूटी (तकनीकी) — एई(एल) एवं एई(एम)',
      wing: 'Air Force',
      cadetAcademy: 'Air Force Academy (AFA), Dundigal -> Air Force Technical College (AFTC), Jalahalli',
      tenure: 'Permanent / Short Service Commission',
      vacanciesTentative: 165,
      eligibility: {
        minAgeYears: 20,
        maxAgeYears: 26,
        ageDetails: '20 to 26 years as per AFCAT notification',
        ageDetailsHi: '20 से 26 वर्ष',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: 'Minimum 50% marks each in Physics and Maths at 10+2 AND 4-year degree graduation/post-graduation in Engineering/Technology with minimum 60% marks',
        educationLevelHi: '10+2 में भौतिकी एवं गणित में 50-50% तथा 4 वर्षीय इंजीनियरिंग उपाधि में न्यूनतम 60% अंक',
        engineeringRequired: true,
        physicsMathMandatory: true,
        minPercentage: 60,
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'AFCAT Online Test',
        stageNameHi: 'एएफकैट ऑनलाइन परीक्षा',
        totalQuestions: 100,
        totalMarks: 300,
        totalDurationMinutes: 120,
        sections: [
          {
            name: 'General Awareness, English, Numerical Ability, Reasoning',
            nameHi: 'सामान्य जागरूकता, अंग्रेजी, संख्यात्मक अभिक्षमता, रीजनिंग',
            questions: 100,
            marks: 300,
            durationMinutes: 120,
            negativeMarking: 1.0,
            marksPerQuestion: 3.0,
            syllabusTopics: ['Complete AFCAT Syllabus']
          }
        ]
      }
    },
    {
      id: 'afcat-nontech',
      name: 'Ground Duty (Non-Technical) — Admin, Logistics, Accounts, Education, Met',
      nameHi: 'ग्राउंड ड्यूटी (गैर-तकनीकी) — प्रशासन, लॉजिस्टिक्स, लेखा, शिक्षा, मौसम विज्ञान',
      wing: 'Air Force',
      cadetAcademy: 'Air Force Academy, Dundigal',
      tenure: 'Permanent / Short Service Commission',
      vacanciesTentative: 114,
      eligibility: {
        minAgeYears: 20,
        maxAgeYears: 26,
        ageDetails: '20 to 26 years on course commencement',
        ageDetailsHi: '20 से 26 वर्ष',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: 'Graduate Degree in any discipline with minimum 60% marks (B.Com with 60% for Accounts; Post-Graduation 50% for Education/Meteorology)',
        educationLevelHi: 'न्यूनतम 60% अंकों के साथ किसी भी संकाय में स्नातक उपाधि (लेखा हेतु 60% के साथ बी.कॉम)',
        minPercentage: 60,
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'AFCAT Online Test',
        stageNameHi: 'एएफकैट ऑनलाइन परीक्षा',
        totalQuestions: 100,
        totalMarks: 300,
        totalDurationMinutes: 120,
        sections: [
          {
            name: 'Standard AFCAT 4-Section Test',
            nameHi: 'मानक एएफकैट 4-खंड परीक्षा',
            questions: 100,
            marks: 300,
            durationMinutes: 120,
            negativeMarking: 1.0,
            marksPerQuestion: 3.0,
            syllabusTopics: ['English (30 Qs)', 'General Awareness (25 Qs)', 'Numerical Ability (20 Qs)', 'Reasoning (25 Qs)']
          }
        ]
      }
    }
  ],
  physicalSummary: {
    running: '1.6 km in 10 minutes, 10 push-ups, 3 chin-ups',
    heightMale: '162.5 cm (Flying Branch), 157.5 cm (Ground Duty)',
    heightFemale: '162.5 cm (Flying Branch), 152 cm (Ground Duty)',
    vision: 'Flying: 6/6 uncorrected each eye, Hypermetropia max +1.5D, Myopia Nil. Ground: Correctable to 6/6'
  },
  salaryAndPerks: {
    rankAtCommission: 'Flying Officer',
    level: 'Pay Matrix Level 10 (₹56,100 - ₹1,77,500)',
    stipendDuringTraining: '₹56,100 per month during 1 year training at AFA',
    msp: '₹15,500 per month + Flying Allowance ₹25,000/month for Flying Branch'
  }
};
