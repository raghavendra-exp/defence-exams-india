import { DefenceExam } from '../../types';

export const cdsExamData: DefenceExam = {
  id: 'cds',
  name: 'CDS',
  nameHi: 'सीडीएस',
  fullName: 'Combined Defence Services Examination',
  fullNameHi: 'संयुक्त रक्षा सेवा परीक्षा',
  conductingBody: 'Union Public Service Commission (UPSC)',
  frequency: 'Twice a year (CDS I in April, CDS II in September)',
  entryType: 'officer',
  officialPortal: 'https://upsc.gov.in',
  officialSource: {
    name: 'UPSC Official CDS Notification',
    url: 'https://upsc.gov.in',
    lastVerified: '2026-09-15',
    authority: 'Union Public Service Commission, New Delhi'
  },
  overview: 'The Combined Defence Services (CDS) Examination is conducted by UPSC for recruiting officers into the Indian Military Academy (IMA), Indian Naval Academy (INA), Air Force Academy (AFA), and Officers Training Academy (OTA - Men & Women). It offers both Permanent Commission (through IMA, INA, AFA) and Short Service Commission (through OTA).',
  overviewHi: 'सीडीएस परीक्षा संघ लोक सेवा आयोग (UPSC) द्वारा भारतीय सैन्य अकादमी (IMA), भारतीय नौसेना अकादमी (INA), वायु सेना अकादमी (AFA) तथा अधिकारी प्रशिक्षण अकादमी (OTA - पुरुष एवं महिला) में अधिकारियों की भर्ती हेतु आयोजित की जाती है। इसके माध्यम से स्थायी एवं अल्पकालिक (एसएससी) कमीशन दोनों अवसर प्राप्त होते हैं।',
  stages: [
    {
      stageNumber: 1,
      title: 'Written Examination',
      titleHi: 'लिखित परीक्षा',
      description: 'IMA, INA, AFA: 3 Papers (English 100m, GK 100m, Elementary Maths 100m = 300 Marks). OTA: 2 Papers (English 100m, GK 100m = 200 Marks). Objective offline test.',
      descriptionHi: 'आईएमए, आईएनए, एएफए: 3 प्रश्नपत्र (अंग्रेजी 100अंक, सामान्य ज्ञान 100अंक, प्रारंभिक गणित 100अंक = 300 अंक)। ओटीए: 2 प्रश्नपत्र (अंग्रेजी 100अंक, सामान्य ज्ञान 100अंक = 200 अंक)।'
    },
    {
      stageNumber: 2,
      title: 'SSB Interview',
      titleHi: 'एसएसबी साक्षात्कार',
      description: '5-Day Services Selection Board assessment. IMA/INA/AFA: 300 Marks. OTA: 200 Marks.',
      descriptionHi: '5 दिवसीय सेवा चयन बोर्ड परीक्षण। आईएमए/आईएनए/एएफए: 300 अंक। ओटीए: 200 अंक।'
    },
    {
      stageNumber: 3,
      title: 'Medical Fitness Board',
      titleHi: 'चिकित्सीय परीक्षण बोर्ड',
      description: 'Comprehensive evaluation by Special Medical Board (SMB). Appeals permitted via AMB/RMB within 42 days.',
      descriptionHi: 'विशेष चिकित्सा बोर्ड (SMB) द्वारा समग्र चिकित्सीय परीक्षण।'
    },
    {
      stageNumber: 4,
      title: 'Final Merit & Academy Commissioning',
      titleHi: 'अंतिम योग्यता सूची एवं अकादमी प्रवेश',
      description: 'Merit list compiled combining Written Score + SSB Score (600 marks for IMA/INA/AFA, 400 marks for OTA).',
      descriptionHi: 'लिखित एवं एसएसबी अंकों के योग के आधार पर अंतिम मेरिट सूची (आईएमए/आईएनए/एएफए: 600 अंक, ओटीए: 400 अंक)।'
    }
  ],
  branches: [
    {
      id: 'cds-ima',
      name: 'Indian Military Academy (IMA), Dehradun',
      nameHi: 'भारतीय सैन्य अकादमी (आईएमए), देहरादून',
      wing: 'Army',
      cadetAcademy: 'IMA Dehradun',
      tenure: 'Permanent Commission (Army)',
      vacanciesTentative: 100,
      eligibility: {
        minAgeYears: 19,
        maxAgeYears: 24,
        ageDetails: '19 to 24 years as on 1st of the month of course commencement',
        ageDetailsHi: 'पाठ्यक्रम प्रारंभ होने के माह की 1 तारीख को 19 से 24 वर्ष',
        gender: 'male',
        maritalStatus: 'unmarried',
        educationLevel: 'Degree of a recognised University or equivalent',
        educationLevelHi: 'किसी मान्यता प्राप्त विश्वविद्यालय से स्नातक उपाधि अथवा समकक्ष',
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Written Exam (3 Papers)',
        stageNameHi: 'लिखित परीक्षा (3 प्रश्नपत्र)',
        totalQuestions: 340,
        totalMarks: 300,
        totalDurationMinutes: 360,
        sections: [
          {
            name: 'Paper I: English',
            nameHi: 'प्रश्नपत्र 1: अंग्रेजी',
            questions: 120,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 0.833,
            syllabusTopics: ['Reading Comprehension', 'Spotting Errors', 'Ordering of Words / Sentences', 'Idioms & Phrases', 'Fill in the blanks', 'Synonyms & Antonyms', 'Parts of Speech']
          },
          {
            name: 'Paper II: General Knowledge',
            nameHi: 'प्रश्नपत्र 2: सामान्य ज्ञान',
            questions: 120,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 0.833,
            syllabusTopics: ['Current Affairs & Defence', 'Indian History & Freedom Struggle', 'Physical & Indian Geography', 'Constitution & Indian Polity', 'Physics, Chemistry & Biology', 'Indian Economy']
          },
          {
            name: 'Paper III: Elementary Mathematics',
            nameHi: 'प्रश्नपत्र 3: प्रारंभिक गणित',
            questions: 100,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Arithmetic (Number system, percentage, profit-loss, time & work, ratio)', 'Algebra (Basic operations, remainder theorem, quadratic equations)', 'Trigonometry', 'Geometry', 'Mensuration 2D & 3D', 'Statistics']
          }
        ]
      }
    },
    {
      id: 'cds-ina',
      name: 'Indian Naval Academy (INA), Ezhimala',
      nameHi: 'भारतीय नौसेना अकादमी (आईएनए), एझिमाला',
      wing: 'Navy',
      cadetAcademy: 'INA Ezhimala, Kerala',
      tenure: 'Permanent Commission (Navy)',
      vacanciesTentative: 32,
      eligibility: {
        minAgeYears: 19,
        maxAgeYears: 24,
        ageDetails: '19 to 24 years unmarried male candidates',
        ageDetailsHi: '19 से 24 वर्ष अविवाहित पुरुष अभ्यर्थी',
        gender: 'male',
        maritalStatus: 'unmarried',
        educationLevel: 'Degree in Engineering (B.E. / B.Tech) from a recognized University/Institution',
        educationLevelHi: 'मान्यता प्राप्त विश्वविद्यालय से इंजीनियरिंग में स्नातक (B.E./B.Tech) डिग्री',
        engineeringRequired: true,
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Written Exam (3 Papers)',
        stageNameHi: 'लिखित परीक्षा (3 प्रश्नपत्र)',
        totalQuestions: 340,
        totalMarks: 300,
        totalDurationMinutes: 360,
        sections: [
          {
            name: 'English',
            nameHi: 'अंग्रेजी',
            questions: 120,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 0.833,
            syllabusTopics: ['Grammar', 'Vocabulary', 'Comprehension']
          },
          {
            name: 'General Knowledge',
            nameHi: 'सामान्य ज्ञान',
            questions: 120,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 0.833,
            syllabusTopics: ['General Science', 'Indian Polity', 'History', 'Geography', 'Current Events']
          },
          {
            name: 'Elementary Mathematics',
            nameHi: 'प्रारंभिक गणित',
            questions: 100,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Arithmetic', 'Algebra', 'Trigonometry', 'Geometry', 'Mensuration', 'Statistics']
          }
        ]
      }
    },
    {
      id: 'cds-afa',
      name: 'Air Force Academy (AFA), Hyderabad',
      nameHi: 'वायु सेना अकादमी (एएफए), हैदराबाद',
      wing: 'Air Force',
      cadetAcademy: 'AFA Dundigal',
      tenure: 'Permanent Commission (Air Force Flying Branch)',
      vacanciesTentative: 32,
      eligibility: {
        minAgeYears: 20,
        maxAgeYears: 24,
        ageDetails: '20 to 24 years (upper age relaxable up to 26 years for candidates holding valid Commercial Pilot Licence issued by DGCA)',
        ageDetailsHi: '20 से 24 वर्ष (डीजीसीए द्वारा जारी वैध वाणिज्यिक पायलट लाइसेंस धारकों के लिए अधिकतम 26 वर्ष)',
        gender: 'male',
        maritalStatus: 'unmarried',
        educationLevel: 'Degree of a recognised University (with Physics and Mathematics at 10+2 level) OR Bachelor of Engineering',
        educationLevelHi: '10+2 स्तर पर भौतिकी एवं गणित के साथ स्नातक उपाधि अथवा बी.ई./बी.टेक',
        physicsMathMandatory: true,
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Written Exam (3 Papers)',
        stageNameHi: 'लिखित परीक्षा',
        totalQuestions: 340,
        totalMarks: 300,
        totalDurationMinutes: 360,
        sections: [
          {
            name: 'English',
            nameHi: 'अंग्रेजी',
            questions: 120,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 0.833,
            syllabusTopics: ['English Grammar & Usage']
          },
          {
            name: 'General Knowledge',
            nameHi: 'सामान्य ज्ञान',
            questions: 120,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 0.833,
            syllabusTopics: ['General Science', 'Defence Affairs', 'Polity', 'History']
          },
          {
            name: 'Elementary Mathematics',
            nameHi: 'प्रारंभिक गणित',
            questions: 100,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Matriculation standard Elementary Mathematics']
          }
        ]
      }
    },
    {
      id: 'cds-ota',
      name: 'Officers Training Academy (OTA), Chennai (Men & Women)',
      nameHi: 'अधिकारी प्रशिक्षण अकादमी (ओटीए), चेन्नई (पुरुष एवं महिला)',
      wing: 'Army',
      cadetAcademy: 'OTA Chennai',
      tenure: 'Short Service Commission (10 years extendable up to 14 years)',
      vacanciesTentative: 275,
      eligibility: {
        minAgeYears: 19,
        maxAgeYears: 25,
        ageDetails: '19 to 25 years as per UPSC notification',
        ageDetailsHi: '19 से 25 वर्ष आधिकारिक अधिसूचना अनुसार',
        gender: 'both',
        maritalStatus: 'unmarried_or_widower',
        educationLevel: 'Degree of a recognised University or equivalent in any discipline',
        educationLevelHi: 'किसी भी संकाय में मान्यता प्राप्त विश्वविद्यालय से स्नातक डिग्री',
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Written Exam (2 Papers Only - No Mathematics)',
        stageNameHi: 'लिखित परीक्षा (केवल 2 प्रश्नपत्र - गणित नहीं)',
        totalQuestions: 240,
        totalMarks: 200,
        totalDurationMinutes: 240,
        sections: [
          {
            name: 'Paper I: English',
            nameHi: 'प्रश्नपत्र 1: अंग्रेजी',
            questions: 120,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 0.833,
            syllabusTopics: ['Reading Comprehension', 'Spotting Errors', 'Ordering of Words', 'Idioms & Phrases', 'Fill in the Blanks', 'Synonyms & Antonyms']
          },
          {
            name: 'Paper II: General Knowledge',
            nameHi: 'प्रश्नपत्र 2: सामान्य ज्ञान',
            questions: 120,
            marks: 100,
            durationMinutes: 120,
            negativeMarking: 0.33,
            marksPerQuestion: 0.833,
            syllabusTopics: ['Current Affairs & Defence', 'Indian History', 'Geography', 'Indian Polity & Constitution', 'General Science', 'Economy']
          }
        ]
      }
    }
  ],
  physicalSummary: {
    running: '2.4 km in 15 minutes, skipping, 20 push-ups, 20 sit-ups, 8 chin-ups',
    heightMale: '157.5 cm (Army/Navy), 162.5 cm (Air Force Flying)',
    heightFemale: '152 cm (OTA Women)',
    vision: '6/6 or 6/9 correctable to 6/6 (Myopia <= -3.50D, Hypermetropia <= +3.50D)'
  },
  salaryAndPerks: {
    rankAtCommission: 'Lieutenant (Army) / Sub Lieutenant (Navy) / Flying Officer (Air Force)',
    level: 'Pay Matrix Level 10 (₹56,100 to ₹1,77,500)',
    stipendDuringTraining: '₹56,100 per month during cadet training at IMA/OTA/INA/AFA',
    msp: '₹15,500 per month'
  }
};
