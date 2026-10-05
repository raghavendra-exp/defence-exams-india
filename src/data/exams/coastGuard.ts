import { DefenceExam } from '../../types';

export const coastGuardExamData: DefenceExam = {
  id: 'coast-guard',
  name: 'Coast Guard',
  nameHi: 'भारतीय तटरक्षक बल (ICG)',
  fullName: 'Indian Coast Guard Navik (GD/DB), Yantrik & Assistant Commandant',
  fullNameHi: 'भारतीय तटरक्षक बल नाविक (जीडी/डीबी), यांत्रिक एवं असिस्टेंट कमांडेंट भर्ती',
  conductingBody: 'Indian Coast Guard, Ministry of Defence',
  frequency: 'Twice a year (01 & 02 batches)',
  entryType: 'sailor',
  officialPortal: 'https://joinindiancoastguard.cdac.in',
  officialSource: {
    name: 'Indian Coast Guard Official Recruitment Portal',
    url: 'https://joinindiancoastguard.cdac.in',
    lastVerified: '2026-09-14',
    authority: 'Directorate of Recruitment, Coast Guard Headquarters, New Delhi'
  },
  overview: 'The Indian Coast Guard (ICG) protects India’s maritime interests and enforces maritime law across its 7,516 km coastline and Exclusive Economic Zone (EEZ). It recruits Enrolled Personnel as Navik (General Duty), Navik (Domestic Branch), and Yantrik (Mechanical, Electrical, Electronics), as well as Gazetted Officers as Assistant Commandant through CGCAT. Selection includes Computer Based Test -> Physical Fitness Test -> Document Verification -> Medical Examination.',
  overviewHi: 'भारतीय तटरक्षक बल (ICG) भारत के समुद्री हितों की रक्षा करता है। यह नाविक (सामान्य ड्यूटी), नाविक (घरेलू शाखा) तथा यांत्रिक (मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स) के रूप में नाविकों की तथा सीजीसीएटी के माध्यम से राजपत्रित अधिकारियों (असिस्टेंट कमांडेंट) की भर्ती करता है। चयन में ऑनलाइन परीक्षा -> शारीरिक दक्षता परीक्षण -> दस्तावेज सत्यापन -> चिकित्सा परीक्षण शामिल है।',
  stages: [
    {
      stageNumber: 1,
      title: 'Stage I: Computer Based Online Examination',
      titleHi: 'चरण 1: कंप्यूटर आधारित ऑनलाइन परीक्षा',
      description: 'Section I (for Navik DB, GD, Yantrik): 60 Qs (60 marks, 45 mins). Section II (Maths + Physics for Navik GD): 50 Qs (50 marks, 30 mins). Section III/IV/V (Diploma engg for Yantrik): 50 Qs (50 marks, 30 mins). No negative marking in ICG online exam.',
      descriptionHi: 'खंड 1 (डीबी, जीडी, यांत्रिक हेतु सामान्य): 60 प्रश्न (60 अंक)। खंड 2 (जीडी हेतु गणित+भौतिकी): 50 प्रश्न। खंड 3/4/5 (यांत्रिक हेतु डिप्लोमा इंजीनियरिंग)। तटरक्षक ऑनलाइन परीक्षा में नकारात्मक अंकन नहीं होता है।'
    },
    {
      stageNumber: 2,
      title: 'Stage II: Physical Fitness Test (PFT) & Document Verification',
      titleHi: 'चरण 2: शारीरिक दक्षता परीक्षण एवं दस्तावेज़ सत्यापन',
      description: '1.6 km run completed in 7 minutes, 20 squat ups (Uthak Baithak), and 10 Push-ups. Strict biometric and digital document verification with zero tolerance for discrepancies.',
      descriptionHi: '7 मिनट में 1.6 किमी दौड़, 20 उठक-बैठक तथा 10 पुश-अप्स। इसके साथ ही सख्त बायोमेट्रिक एवं डिजिटल दस्तावेज सत्यापन।'
    },
    {
      stageNumber: 3,
      title: 'Stage III: Document Verification & Final Medical at INS Chilka',
      titleHi: 'चरण 3: दस्तावेज़ पुनः सत्यापन एवं आईएनएस चिल्का पर अंतिम चिकित्सा',
      description: 'Verification of original certificates and comprehensive medical examination before formal enrollment.',
      descriptionHi: 'मूल प्रमाणपत्रों का अंतिम मिलान एवं नामांकन से पूर्व गहन चिकित्सकीय परीक्षण।'
    },
    {
      stageNumber: 4,
      title: 'Stage IV: Training at INS Chilka',
      titleHi: 'चरण 4: आईएनएस चिल्का पर प्रशिक्षण',
      description: 'Basic training at INS Chilka followed by sea training and professional trade training at respective Coast Guard or Navy schools.',
      descriptionHi: 'आईएनएस चिल्का पर बुनियादी प्रशिक्षण एवं संबंधित तटरक्षक/नौसेना प्रशिक्षण केंद्रों पर ट्रेड प्रशिक्षण।'
    }
  ],
  branches: [
    {
      id: 'icg-navik-gd',
      name: 'Navik (General Duty)',
      nameHi: 'नाविक (सामान्य ड्यूटी)',
      wing: 'Coast Guard',
      cadetAcademy: 'INS Chilka -> CG Training Establishments',
      tenure: 'Permanent Service (up to 57 years of age)',
      vacanciesTentative: 260,
      eligibility: {
        minAgeYears: 18,
        maxAgeYears: 22,
        ageDetails: '18 to 22 years (5 years relaxation for SC/ST and 3 years for OBC)',
        ageDetailsHi: '18 से 22 वर्ष (एससी/एसटी हेतु 5 वर्ष तथा ओबीसी हेतु 3 वर्ष की छूट)',
        gender: 'male',
        maritalStatus: 'unmarried',
        educationLevel: '10+2 passed with Mathematics and Physics from an education board recognized by Council of Boards of School Education (COBSE)',
        educationLevelHi: 'मान्यता प्राप्त शिक्षा बोर्ड से गणित एवं भौतिकी के साथ 10+2 उत्तीर्ण',
        physicsMathMandatory: true,
        requiredSubjects: ['Mathematics', 'Physics'],
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Stage I (Section I + Section II)',
        stageNameHi: 'चरण 1 (खंड 1 + खंड 2)',
        totalQuestions: 110,
        totalMarks: 110,
        totalDurationMinutes: 75,
        sections: [
          {
            name: 'Section I (Science, Maths, English, Reasoning, GK)',
            nameHi: 'खंड 1 (विज्ञान, गणित, अंग्रेजी, रीजनिंग, सामान्य ज्ञान)',
            questions: 60,
            marks: 60,
            durationMinutes: 45,
            negativeMarking: 0,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Maths (20 Qs)', 'Science (10 Qs)', 'English (15 Qs)', 'Reasoning (10 Qs)', 'GK (5 Qs)']
          },
          {
            name: 'Section II (Maths + Physics 10+2 level)',
            nameHi: 'खंड 2 (गणित एवं भौतिकी 10+2 स्तर)',
            questions: 50,
            marks: 50,
            durationMinutes: 30,
            negativeMarking: 0,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Physics 10+2 Level (25 Qs)', 'Mathematics 10+2 Level (25 Qs)']
          }
        ]
      }
    },
    {
      id: 'icg-navik-db',
      name: 'Navik (Domestic Branch) — Cook & Steward',
      nameHi: 'नाविक (घरेलू शाखा) — कुक एवं स्टीवर्ड',
      wing: 'Coast Guard',
      cadetAcademy: 'INS Chilka',
      tenure: 'Permanent Service',
      vacanciesTentative: 35,
      eligibility: {
        minAgeYears: 18,
        maxAgeYears: 22,
        ageDetails: '18 to 22 years (SC/ST/OBC relaxations apply)',
        ageDetailsHi: '18 से 22 वर्ष',
        gender: 'male',
        maritalStatus: 'unmarried',
        educationLevel: '10th Class passed from an education board recognized by Council of Boards of School Education (COBSE)',
        educationLevelHi: 'मान्यता प्राप्त शिक्षा बोर्ड से 10वीं कक्षा उत्तीर्ण',
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Stage I (Section I Only)',
        stageNameHi: 'चरण 1 (केवल खंड 1)',
        totalQuestions: 60,
        totalMarks: 60,
        totalDurationMinutes: 45,
        sections: [
          {
            name: 'Section I (10th Standard Syllabus)',
            nameHi: 'खंड 1 (10वीं कक्षा स्तर)',
            questions: 60,
            marks: 60,
            durationMinutes: 45,
            negativeMarking: 0,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Mathematics (20 Qs)', 'Science (10 Qs)', 'English (15 Qs)', 'Reasoning (10 Qs)', 'General Knowledge (5 Qs)']
          }
        ]
      }
    },
    {
      id: 'icg-yantrik',
      name: 'Yantrik (Mechanical, Electrical, Electronics)',
      nameHi: 'यांत्रिक (मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स)',
      wing: 'Coast Guard',
      cadetAcademy: 'INS Chilka -> Technical Training Institutes',
      tenure: 'Permanent Service',
      vacanciesTentative: 60,
      eligibility: {
        minAgeYears: 18,
        maxAgeYears: 22,
        ageDetails: '18 to 22 years',
        ageDetailsHi: '18 से 22 वर्ष',
        gender: 'male',
        maritalStatus: 'unmarried',
        educationLevel: '10th class passed AND 3-year Diploma in Electrical/Mechanical/Electronics/Telecommunication Engineering approved by AICTE',
        educationLevelHi: '10वीं उत्तीर्ण तथा एआईसीटीई द्वारा अनुमोदित इलेक्ट्रिकल/मैकेनिकल/इलेक्ट्रॉनिक्स में 3 वर्षीय डिप्लोमा',
        engineeringRequired: true,
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Stage I (Section I + Section III/IV/V)',
        stageNameHi: 'चरण 1 (खंड 1 + संबंधित इंजीनियरिंग खंड)',
        totalQuestions: 110,
        totalMarks: 110,
        totalDurationMinutes: 75,
        sections: [
          {
            name: 'Section I (General Aptitude)',
            nameHi: 'खंड 1 (सामान्य अभिरुचि)',
            questions: 60,
            marks: 60,
            durationMinutes: 45,
            negativeMarking: 0,
            marksPerQuestion: 1.0,
            syllabusTopics: ['General Science, Maths, English, Reasoning, GK']
          },
          {
            name: 'Section III/IV/V (Diploma Engineering Branch)',
            nameHi: 'खंड 3/4/5 (डिप्लोमा इंजीनियरिंग ट्रेड)',
            questions: 50,
            marks: 50,
            durationMinutes: 30,
            negativeMarking: 0,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Mechanical / Electrical / Electronics Core Engineering']
          }
        ]
      }
    }
  ],
  physicalSummary: {
    running: '1.6 km run in 7 minutes, 20 squat ups (uthak baithak), 10 push-ups (all continuous)',
    heightMale: '157 cm minimum (relaxable for hilly regions)',
    heightFemale: '152 cm minimum (for AC entry)',
    vision: '6/6 better eye, 6/9 worse eye (without glasses for Navik GD)'
  },
  salaryAndPerks: {
    rankAtCommission: 'Navik (GD/DB) / Yantrik',
    level: 'Pay Level 3 (₹21,700 basic) for Navik; Pay Level 5 (₹29,200 basic) for Yantrik + Yantrik Pay ₹6,200/month',
    stipendDuringTraining: 'Basic pay + Dearness Allowance during training at INS Chilka',
    msp: 'Dearness allowance, free ration, medical cover for self & dependents, canteen facilities (CSD)'
  }
};
