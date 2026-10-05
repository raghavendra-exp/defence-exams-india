import { DefenceExam } from '../../types';

export const agniveerArmyExamData: DefenceExam = {
  id: 'agniveer-army',
  name: 'Agniveer Army',
  nameHi: 'अग्निवीर थल सेना',
  fullName: 'Indian Army Agniveer Recruitment (Agnipath Scheme)',
  fullNameHi: 'भारतीय सेना अग्निवीर भर्ती (अग्निपथ योजना)',
  conductingBody: 'Join Indian Army, Ministry of Defence',
  frequency: 'Rally cycles announced zone-wise twice yearly',
  entryType: 'soldier',
  officialPortal: 'https://joinindianarmy.nic.in',
  officialSource: {
    name: 'Join Indian Army Official Recruitment Notification',
    url: 'https://joinindianarmy.nic.in',
    lastVerified: '2026-09-20',
    authority: 'Directorate General of Recruiting, Army Headquarters, New Delhi'
  },
  overview: 'The Indian Army recruits enrolled soldiers as Agniveers under the Agnipath scheme for a period of 4 years. Based on organizational requirements and operational policies, up to 25% of each batch is enrolled into the regular cadre of the Indian Army as permanent soldiers after completion of 4 years. The recruitment process includes Online Common Entrance Examination (CEE) -> Physical Fitness Test (PFT) at Rally -> Physical Measurement -> Medical Examination -> Final Merit List.',
  overviewHi: 'भारतीय सेना अग्निपथ योजना के तहत 4 वर्ष की अवधि हेतु अग्निवीरों की भर्ती करती है। 4 वर्ष पूर्ण होने पर प्रत्येक बैच में से 25% तक सैनिकों को नियमित संवर्ग में स्थायी रूप से सम्मिलित किया जाता है। भर्ती प्रक्रिया में ऑनलाइन सामान्य प्रवेश परीक्षा (CEE) -> शारीरिक दक्षता परीक्षा (PFT) -> शारीरिक मापदंड -> चिकित्सीय परीक्षण -> मेरिट सूची शामिल है।',
  stages: [
    {
      stageNumber: 1,
      title: 'Phase I: Online Common Entrance Exam (CEE)',
      titleHi: 'चरण 1: ऑनलाइन सामान्य प्रवेश परीक्षा (सीईई)',
      description: 'Computer-Based Online Exam conducted across designated centres nationwide. 50 Questions (General Duty: 100 Marks, Technical & Clerk: 200 Marks). Negative marking of 25% per wrong answer.',
      descriptionHi: 'कंप्यूटर आधारित ऑनलाइन परीक्षा। 50 प्रश्न (जीडी: 100 अंक, तकनीकी एवं क्लर्क: 200 अंक)। प्रत्येक गलत उत्तर पर 25% का नकारात्मक अंकन।'
    },
    {
      stageNumber: 2,
      title: 'Phase II: Recruitment Rally (PFT & PMT)',
      titleHi: 'चरण 2: भर्ती रैली (शारीरिक दक्षता एवं मापदंड)',
      description: '1.6 km Run (Group I: up to 5m 30s = 60 marks; Group II: 5m 31s to 5m 45s = 48 marks), Beam / Pull-ups (10 = 40 marks to 6 = 16 marks), 9 Feet Ditch (Qualifying), Zig-Zag Balance (Qualifying), followed by Adaptability Test.',
      descriptionHi: '1.6 किमी दौड़ (ग्रुप 1: 5 मिनट 30 सेकंड तक = 60 अंक; ग्रुप 2: 5 मिनट 31 से 5:45 सेकंड = 48 अंक), बीम/पुल-अप्स (10 = 40 अंक), 9 फीट गड्ढा कूद, ज़िग-ज़ैग संतुलन एवं अनुकूलनशीलता परीक्षा।'
    },
    {
      stageNumber: 3,
      title: 'Phase III: Medical Examination',
      titleHi: 'चरण 3: चिकित्सीय परीक्षण',
      description: 'Conducted at Rally site by Armed Forces Medical Officers. Unfit candidates referred to Military Hospital with 42-day appeal provision.',
      descriptionHi: 'रैली स्थल पर सैन्य चिकित्सा अधिकारियों द्वारा परीक्षण। अस्थायी रूप से अयोग्य अभ्यर्थियों को सैन्य अस्पताल रेफर किया जाता है।'
    },
    {
      stageNumber: 4,
      title: 'Phase IV: Final Merit & Regimental Centre Dispatch',
      titleHi: 'चरण 4: अंतिम मेरिट एवं रेजीमेंटल सेंटर प्रेषण',
      description: 'Combined CEE score + PFT score (for GD) or CEE merit (for Technical/Clerk). Successful candidates report to Regimental Training Centres.',
      descriptionHi: 'सीईई + पीएफटी अंकों के आधार पर अंतिम मेरिट सूची एवं विभिन्न रेजिमेंटल ट्रेनिंग सेंटरों पर रिपोर्टिंग।'
    }
  ],
  branches: [
    {
      id: 'agniveer-gd',
      name: 'Agniveer General Duty (All Arms)',
      nameHi: 'अग्निवीर सामान्य ड्यूटी (ऑल आर्म्स)',
      wing: 'Army',
      cadetAcademy: 'Army Regimental Training Centres',
      tenure: '4 Years (with 25% permanent absorption)',
      vacanciesTentative: 25000,
      eligibility: {
        minAgeYears: 17.5,
        maxAgeYears: 21,
        ageDetails: '17.5 to 21 years on date of enrollment',
        ageDetailsHi: 'भर्ती के समय 17.5 से 21 वर्ष',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: 'Class 10th / Matric with 45% marks in aggregate and 33% in each subject (For boards following grading system: Min of D grade 33-40 in individual subjects and overall aggregate C2 grade)',
        educationLevelHi: '10वीं/मैट्रिक कुल 45% अंकों के साथ तथा प्रत्येक विषय में कम से कम 33% अंक अनिवार्य',
        minPercentage: 45,
        nationality: 'Citizen of India / Nepal',
        nationalityHi: 'भारत अथवा नेपाल का नागरिक'
      },
      examPattern: {
        stageName: 'CEE (General Duty)',
        stageNameHi: 'सीईई (सामान्य ड्यूटी)',
        totalQuestions: 50,
        totalMarks: 100,
        totalDurationMinutes: 60,
        sections: [
          {
            name: 'General Knowledge',
            nameHi: 'सामान्य ज्ञान',
            questions: 15,
            marks: 30,
            durationMinutes: 18,
            negativeMarking: 0.5,
            marksPerQuestion: 2.0,
            syllabusTopics: ['India & Neighboring Countries', 'History, Culture, Geography', 'National & International Awards', 'Indian Armed Forces & Defence', 'Books, Authors, Sports']
          },
          {
            name: 'General Science',
            nameHi: 'सामान्य विज्ञान',
            questions: 15,
            marks: 30,
            durationMinutes: 18,
            negativeMarking: 0.5,
            marksPerQuestion: 2.0,
            syllabusTopics: ['Human Body, Vitamins & Nutrition', 'Basic Physics (Motion, Force, Gravitation, Work, Energy)', 'Basic Chemistry (Acids, Bases, Metals, Elements)']
          },
          {
            name: 'Mathematics',
            nameHi: 'गणित',
            questions: 15,
            marks: 30,
            durationMinutes: 18,
            negativeMarking: 0.5,
            marksPerQuestion: 2.0,
            syllabusTopics: ['Number System, HCF & LCM', 'Percentage, Profit & Loss', 'Ratio & Proportion, Average', 'Simple Interest', 'Time, Work & Distance', 'Basic Algebra & Geometry']
          },
          {
            name: 'Logical Reasoning',
            nameHi: 'तार्किक क्षमता',
            questions: 5,
            marks: 10,
            durationMinutes: 6,
            negativeMarking: 0.5,
            marksPerQuestion: 2.0,
            syllabusTopics: ['Number & Alphabet Series', 'Coding-Decoding', 'Blood Relations', 'Direction Sense']
          }
        ]
      }
    },
    {
      id: 'agniveer-tech',
      name: 'Agniveer Technical (All Arms)',
      nameHi: 'अग्निवीर तकनीकी (ऑल आर्म्स)',
      wing: 'Army',
      cadetAcademy: 'Army Technical Regimental Centres',
      tenure: '4 Years',
      vacanciesTentative: 6000,
      eligibility: {
        minAgeYears: 17.5,
        maxAgeYears: 21,
        ageDetails: '17.5 to 21 years',
        ageDetailsHi: '17.5 से 21 वर्ष',
        gender: 'male',
        maritalStatus: 'unmarried',
        educationLevel: '10+2 / Intermediate Exam pass in Science with Physics, Chemistry, Maths and English with 50% marks in aggregate and 40% in each subject OR 10th with 50% + 2/3 yr ITI/Diploma',
        educationLevelHi: 'भौतिकी, रसायन, गणित और अंग्रेजी के साथ 10+2 विज्ञान में 50% कुल तथा प्रत्येक विषय में 40% अंक',
        physicsMathMandatory: true,
        minPercentage: 50,
        requiredSubjects: ['Physics', 'Chemistry', 'Mathematics', 'English'],
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'CEE (Technical)',
        stageNameHi: 'सीईई (तकनीकी)',
        totalQuestions: 50,
        totalMarks: 200,
        totalDurationMinutes: 60,
        sections: [
          {
            name: 'General Knowledge & Reasoning',
            nameHi: 'सामान्य ज्ञान एवं रीजनिंग',
            questions: 10,
            marks: 40,
            durationMinutes: 12,
            negativeMarking: 1.0,
            marksPerQuestion: 4.0,
            syllabusTopics: ['Current Affairs', 'History', 'Geography', 'Reasoning']
          },
          {
            name: 'Maths',
            nameHi: 'गणित',
            questions: 15,
            marks: 60,
            durationMinutes: 18,
            negativeMarking: 1.0,
            marksPerQuestion: 4.0,
            syllabusTopics: ['Algebra', 'Matrices', 'Trigonometry', 'Calculus', 'Coordinate Geometry', 'Statistics']
          },
          {
            name: 'Physics',
            nameHi: 'भौतिकी',
            questions: 15,
            marks: 60,
            durationMinutes: 18,
            negativeMarking: 1.0,
            marksPerQuestion: 4.0,
            syllabusTopics: ['Mechanics', 'Waves', 'Heat & Thermodynamics', 'Electricity & Magnetism', 'Modern Physics']
          },
          {
            name: 'Chemistry',
            nameHi: 'रसायन विज्ञान',
            questions: 10,
            marks: 40,
            durationMinutes: 12,
            negativeMarking: 1.0,
            marksPerQuestion: 4.0,
            syllabusTopics: ['Structure of Atom', 'Chemical Bonding', 'Metals & Non-metals', 'Acids, Bases & Salts']
          }
        ]
      }
    },
    {
      id: 'agniveer-clerk',
      name: 'Agniveer Clerk / Store Keeper Technical (SKT)',
      nameHi: 'अग्निवीर क्लर्क / स्टोर कीपर टेक्निकल (एसकेटी)',
      wing: 'Army',
      cadetAcademy: 'Army Services Corps (ASC) Centre',
      tenure: '4 Years',
      vacanciesTentative: 3500,
      eligibility: {
        minAgeYears: 17.5,
        maxAgeYears: 21,
        ageDetails: '17.5 to 21 years',
        ageDetailsHi: '17.5 से 21 वर्ष',
        gender: 'male',
        maritalStatus: 'unmarried',
        educationLevel: '10+2 / Intermediate Exam pass in any stream (Arts, Commerce, Science) with 60% marks in aggregate and minimum 50% in each subject. Securing 50% in English and Maths/Accounts/Book Keeping in Class 12th is mandatory.',
        educationLevelHi: 'किसी भी संकाय (कला, वाणिज्य, विज्ञान) में 10+2 में कुल 60% तथा प्रत्येक विषय में 50% अंक। अंग्रेजी और गणित/लेखा में 50% अनिवार्य।',
        minPercentage: 60,
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'CEE (Clerk / SKT)',
        stageNameHi: 'सीईई (क्लर्क/एसकेटी)',
        totalQuestions: 50,
        totalMarks: 200,
        totalDurationMinutes: 60,
        sections: [
          {
            name: 'Part I: General Knowledge, Science, Maths, Computer Science',
            nameHi: 'भाग 1: सामान्य ज्ञान, विज्ञान, गणित, कंप्यूटर',
            questions: 25,
            marks: 100,
            durationMinutes: 30,
            negativeMarking: 1.0,
            marksPerQuestion: 4.0,
            syllabusTopics: ['GK (5 Qs)', 'General Science (5 Qs)', 'Maths (10 Qs)', 'Computer Science (5 Qs)']
          },
          {
            name: 'Part II: General English',
            nameHi: 'भाग 2: सामान्य अंग्रेजी',
            questions: 25,
            marks: 100,
            durationMinutes: 30,
            negativeMarking: 1.0,
            marksPerQuestion: 4.0,
            syllabusTopics: ['Comprehension', 'Parts of Speech', 'Tenses', 'Voice & Narration', 'Synonyms/Antonyms', 'Idioms']
          }
        ]
      }
    }
  ],
  physicalSummary: {
    running: '1.6 km Run (Group I <= 5 min 30 sec: 60 marks; Group II 5 min 31 sec to 5 min 45 sec: 48 marks)',
    heightMale: '170 cm (GD/Tech in North-Western plain; 162 cm for Clerk/SKT; regional relaxations apply)',
    heightFemale: '162 cm (Women Military Police - WMP)',
    vision: '6/6 better eye, 6/9 worse eye'
  },
  salaryAndPerks: {
    rankAtCommission: 'Agniveer',
    level: 'Customised Monthly Package: 1st Year ₹30,000, 2nd Year ₹33,000, 3rd Year ₹36,500, 4th Year ₹40,000',
    stipendDuringTraining: 'In-hand: 70% cash in hand + 30% contributed to Agniveer Corpus Fund (matched equally by Govt of India)',
    msp: 'Seva Nidhi Package of ~₹11.71 Lakhs (tax-free with interest) upon exit after 4 years'
  }
};
