import { DefenceExam } from '../../types';

export const ndaExamData: DefenceExam = {
  id: 'nda',
  name: 'NDA & NA',
  nameHi: 'एनडीए एवं एनए',
  fullName: 'National Defence Academy & Naval Academy Examination',
  fullNameHi: 'राष्ट्रीय रक्षा अकादमी एवं नौसेना अकादमी परीक्षा',
  conductingBody: 'Union Public Service Commission (UPSC)',
  frequency: 'Twice a year (NDA I in April, NDA II in September)',
  entryType: 'officer',
  officialPortal: 'https://upsc.gov.in',
  officialSource: {
    name: 'UPSC Official Examination Notification',
    url: 'https://upsc.gov.in',
    lastVerified: '2026-09-15',
    authority: 'Union Public Service Commission, Dholpur House, New Delhi'
  },
  overview: 'The National Defence Academy (NDA) at Khadakwasla, Pune, is the joint training academy for the Indian Army, Navy, and Air Force. Cadets train together for 3 years before proceeding to respective service academies (IMA, INA, AFA). It is one of the most prestigious officer-level entrance exams after 10+2 in India, open to both unmarried male and female candidates.',
  overviewHi: 'राष्ट्रीय रक्षा अकादमी (एनडीए) खड़कवासला, पुणे में भारतीय सेना, नौसेना और वायु सेना का संयुक्त प्रशिक्षण संस्थान है। यहां कैडेट संबंधित सैन्य अकादमियों (IMA, INA, AFA) में जाने से पहले 3 वर्ष का संयुक्त प्रशिक्षण प्राप्त करते हैं। यह 10+2 के बाद अविवाहित पुरुष एवं महिला अभ्यर्थियों के लिए भारत की सर्वाधिक प्रतिष्ठित अधिकारी प्रविष्टि परीक्षा है।',
  stages: [
    {
      stageNumber: 1,
      title: 'Written Examination',
      titleHi: 'लिखित परीक्षा',
      description: 'Conducted offline (pen & paper OMR) with 2 papers: Mathematics (300 Marks, 120 Qs) and General Ability Test - GAT (600 Marks, 150 Qs). Total: 900 Marks.',
      descriptionHi: 'ऑफलाइन ओएमआर आधारित 2 प्रश्नपत्र: गणित (300 अंक, 120 प्रश्न) एवं सामान्य योग्यता परीक्षा - जीएटी (600 अंक, 150 प्रश्न)। कुल: 900 अंक।'
    },
    {
      stageNumber: 2,
      title: 'Services Selection Board (SSB) Interview',
      titleHi: 'सेवा चयन बोर्ड (एसएसबी) साक्षात्कार',
      description: '5-Day comprehensive personality and intelligence assessment conducted by Army/Navy/Air Force selection boards. Carries 900 Marks.',
      descriptionHi: 'सेना/नौसेना/वायुसेना चयन बोर्डों द्वारा 5 दिवसीय समग्र व्यक्तित्व एवं बौद्धिक परीक्षण। पूर्णांक: 900 अंक।'
    },
    {
      stageNumber: 3,
      title: 'Medical Examination',
      titleHi: 'चिकित्सीय परीक्षण',
      description: 'Rigorous medical fitness evaluation at designated military hospitals (SMB/AMB/RMB).',
      descriptionHi: 'नामित सैन्य अस्पतालों में गहन चिकित्सीय परीक्षण एवं शारीरिक स्वास्थ्य सत्यापन।'
    },
    {
      stageNumber: 4,
      title: 'Final Merit & Training',
      titleHi: 'अंतिम योग्यता सूची एवं प्रशिक्षण',
      description: 'Merit list generated out of 1800 marks (900 Written + 900 SSB) subject to medical fitness and academy vacancies. 3 years training at NDA + 1 year at IMA/INA/AFA.',
      descriptionHi: '1800 अंकों (900 लिखित + 900 एसएसबी) में से अंतिम योग्यता सूची। एनडीए में 3 वर्ष + संबंधित अकादमी में 1 वर्ष का गहन सैन्य प्रशिक्षण।'
    }
  ],
  branches: [
    {
      id: 'nda-army',
      name: 'NDA Army Wing',
      nameHi: 'एनडीए थल सेना स्कंध',
      wing: 'Army',
      cadetAcademy: 'National Defence Academy (Pune) -> Indian Military Academy (Dehradun)',
      tenure: 'Permanent Commission',
      vacanciesTentative: 208,
      eligibility: {
        minAgeYears: 16.5,
        maxAgeYears: 19.5,
        ageDetails: 'Born between 2nd Jan and 1st July of the designated notification cohort (must not be older than 19.5 at time of joining)',
        ageDetailsHi: 'अधिसूचना के अनुसार निर्धारित आयु सीमा (प्रवेश के समय 16.5 से 19.5 वर्ष के मध्य)',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: '12th Class pass of 10+2 pattern of School Education or equivalent with any stream (Arts / Science / Commerce)',
        educationLevelHi: 'किसी भी संकाय (कला / विज्ञान / वाणिज्य) से 10+2 प्रणाली के तहत 12वीं उत्तीर्ण अथवा अपीयरिंग',
        nationality: 'Citizen of India / Subject of Nepal / Tibetan refugee who arrived before 1 Jan 1962',
        nationalityHi: 'भारत का नागरिक / नेपाल का नागरिक'
      },
      examPattern: {
        stageName: 'Written Exam',
        stageNameHi: 'लिखित परीक्षा',
        totalQuestions: 270,
        totalMarks: 900,
        totalDurationMinutes: 300,
        sections: [
          {
            name: 'Paper I: Mathematics (Code 01)',
            nameHi: 'प्रश्नपत्र 1: गणित (कोड 01)',
            questions: 120,
            marks: 300,
            durationMinutes: 150,
            negativeMarking: 0.83,
            marksPerQuestion: 2.5,
            syllabusTopics: [
              'Algebra', 'Matrices and Determinants', 'Trigonometry', 
              'Analytical Geometry of Two and Three Dimensions', 
              'Differential Calculus', 'Integral Calculus and Differential Equations', 
              'Vector Algebra', 'Statistics and Probability'
            ]
          },
          {
            name: 'Paper II: General Ability Test (Code 02)',
            nameHi: 'प्रश्नपत्र 2: सामान्य योग्यता परीक्षा (जीएटी)',
            questions: 150,
            marks: 600,
            durationMinutes: 150,
            negativeMarking: 1.33,
            marksPerQuestion: 4.0,
            syllabusTopics: [
              'Part A: English (50 Questions - 200 Marks: Grammar, Vocabulary, Comprehension)',
              'Part B: General Knowledge (100 Questions - 400 Marks)',
              'Section A: Physics (approx 100 Marks)',
              'Section B: Chemistry (approx 60 Marks)',
              'Section C: General Science / Biology (approx 40 Marks)',
              'Section D: History, Freedom Movement (approx 80 Marks)',
              'Section E: Geography (approx 80 Marks)',
              'Section F: Current Events & Defence GK (approx 40 Marks)'
            ]
          }
        ]
      }
    },
    {
      id: 'nda-navy',
      name: 'NDA Navy Wing & 10+2 Cadet Entry (Naval Academy)',
      nameHi: 'एनडीए नौसेना स्कंध एवं नौसेना अकादमी (10+2 कैडेट प्रविष्टि)',
      wing: 'Navy',
      cadetAcademy: 'NDA Pune -> Indian Naval Academy (Ezhimala)',
      tenure: 'Permanent Commission',
      vacanciesTentative: 72,
      eligibility: {
        minAgeYears: 16.5,
        maxAgeYears: 19.5,
        ageDetails: '16.5 to 19.5 years as per UPSC NDA notification',
        ageDetailsHi: '16.5 से 19.5 वर्ष आधिकारिक अधिसूचना अनुसार',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: '12th Class pass with Physics, Chemistry and Mathematics (PCM)',
        educationLevelHi: 'भौतिकी, रसायन विज्ञान एवं गणित (PCM) के साथ 12वीं उत्तीर्ण अथवा अपीयरिंग',
        physicsMathMandatory: true,
        requiredSubjects: ['Physics', 'Mathematics'],
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Written Exam',
        stageNameHi: 'लिखित परीक्षा',
        totalQuestions: 270,
        totalMarks: 900,
        totalDurationMinutes: 300,
        sections: [
          {
            name: 'Paper I: Mathematics',
            nameHi: 'प्रश्नपत्र 1: गणित',
            questions: 120,
            marks: 300,
            durationMinutes: 150,
            negativeMarking: 0.83,
            marksPerQuestion: 2.5,
            syllabusTopics: ['Algebra', 'Matrices', 'Trigonometry', 'Calculus', 'Vectors', 'Coordinate Geometry', 'Statistics & Probability']
          },
          {
            name: 'Paper II: General Ability Test',
            nameHi: 'प्रश्नपत्र 2: सामान्य योग्यता परीक्षा',
            questions: 150,
            marks: 600,
            durationMinutes: 150,
            negativeMarking: 1.33,
            marksPerQuestion: 4.0,
            syllabusTopics: ['English (200m)', 'Physics, Chemistry, General Science, History, Geography, Current Events (400m)']
          }
        ]
      }
    },
    {
      id: 'nda-airforce',
      name: 'NDA Air Force Wing (Flying, Ground Duty Tech & Non-Tech)',
      nameHi: 'एनडीए वायुसेना स्कंध (फ़्लाइंग, ग्राउंड ड्यूटी तकनीकी एवं गैर-तकनीकी)',
      wing: 'Air Force',
      cadetAcademy: 'NDA Pune -> Air Force Academy (Dundigal)',
      tenure: 'Permanent Commission',
      vacanciesTentative: 120,
      eligibility: {
        minAgeYears: 16.5,
        maxAgeYears: 19.5,
        ageDetails: '16.5 to 19.5 years on date of course commencement',
        ageDetailsHi: 'प्रवेश के समय 16.5 से 19.5 वर्ष',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: '12th Class pass with Physics and Mathematics of the 10+2 pattern',
        educationLevelHi: 'भौतिक विज्ञान एवं गणित विषयों के साथ 10+2 प्रणाली में 12वीं उत्तीर्ण',
        physicsMathMandatory: true,
        requiredSubjects: ['Physics', 'Mathematics'],
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Written Exam',
        stageNameHi: 'लिखित परीक्षा',
        totalQuestions: 270,
        totalMarks: 900,
        totalDurationMinutes: 300,
        sections: [
          {
            name: 'Paper I: Mathematics',
            nameHi: 'प्रश्नपत्र 1: गणित',
            questions: 120,
            marks: 300,
            durationMinutes: 150,
            negativeMarking: 0.83,
            marksPerQuestion: 2.5,
            syllabusTopics: ['10+2 Higher Secondary Mathematics']
          },
          {
            name: 'Paper II: GAT',
            nameHi: 'प्रश्नपत्र 2: जीएटी',
            questions: 150,
            marks: 600,
            durationMinutes: 150,
            negativeMarking: 1.33,
            marksPerQuestion: 4.0,
            syllabusTopics: ['English', 'General Science', 'Indian History', 'Geography', 'Defence & Current Affairs']
          }
        ]
      }
    }
  ],
  physicalSummary: {
    running: '2.4 km in 15 minutes, skipping, push-ups & sit-ups (minimum 20 each), chin-ups (min 8)',
    heightMale: '157 cm (162.5 cm for Air Force Flying branch)',
    heightFemale: '152 cm (162.5 cm for Air Force Flying branch)',
    vision: '6/6 better eye, 6/9 worse eye (6/6 uncorrected for Air Force Flying)'
  },
  salaryAndPerks: {
    rankAtCommission: 'Lieutenant (Army) / Sub Lieutenant (Navy) / Flying Officer (Air Force)',
    level: 'Pay Matrix Level 10 (₹56,100 to ₹1,77,500)',
    stipendDuringTraining: '₹56,100 per month fixed during final year of pre-commission training',
    msp: 'Military Service Pay (MSP) of ₹15,500 per month upon commissioning'
  }
};
