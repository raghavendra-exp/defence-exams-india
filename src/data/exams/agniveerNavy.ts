import { DefenceExam } from '../../types';

export const agniveerNavyExamData: DefenceExam = {
  id: 'agniveer-navy',
  name: 'Agniveer Navy',
  nameHi: 'अग्निवीर नौसेना',
  fullName: 'Indian Navy Agniveer (SSR / MR) Recruitment',
  fullNameHi: 'भारतीय नौसेना अग्निवीर (एसएसआर / एमआर) भर्ती',
  conductingBody: 'Join Indian Navy, Ministry of Defence',
  frequency: 'Twice a year (Batch 01 & Batch 02 cycles)',
  entryType: 'sailor',
  officialPortal: 'https://joinindiannavy.gov.in',
  officialSource: {
    name: 'Indian Navy Official Sailor Recruitment Notification',
    url: 'https://joinindiannavy.gov.in',
    lastVerified: '2026-09-18',
    authority: 'Directorate of Manpower Planning and Recruitment, Naval Headquarters, New Delhi'
  },
  overview: 'The Indian Navy recruits sailors as Agniveers across two principal entries: Agniveer SSR (Senior Secondary Recruit) and Agniveer MR (Matric Recruit). Open to both unmarried male and female candidates. Selection comprises Stage I: Indian Navy Entrance Test (INET - Computer Based Test) -> Stage II: Physical Fitness Test (PFT), Written Test & Recruitment Medical -> Stage III: Final Medical Examination at INS Chilka.',
  overviewHi: 'भारतीय नौसेना दो प्रमुख संवर्गों - अग्निवीर एसएसआर (सीनियर सेकेंडरी रिक्रूट) एवं अग्निवीर एमआर (मैट्रिक रिक्रूट) के तहत नाविकों की भर्ती करती है। यह अविवाहित पुरुष एवं महिला अभ्यर्थियों के लिए खुली है। चयन प्रक्रिया में चरण 1: आईएनईटी कंप्यूटर आधारित परीक्षा -> चरण 2: शारीरिक दक्षता (पीएफटी), लिखित परीक्षा एवं भर्ती चिकित्सा -> चरण 3: आईएनएस चिल्का पर अंतिम चिकित्सा शामिल है।',
  stages: [
    {
      stageNumber: 1,
      title: 'Stage I: Computer Based Online Examination (INET)',
      titleHi: 'चरण 1: कंप्यूटर आधारित ऑनलाइन परीक्षा (आईएनईटी)',
      description: 'SSR: 100 Questions (English, Science, Mathematics, General Awareness) in 60 mins. MR: 50 Questions (Science & Mathematics, General Awareness) in 30 mins. Negative marking 0.25 marks per wrong answer.',
      descriptionHi: 'एसएसआर: 100 प्रश्न (अंग्रेजी, विज्ञान, गणित, सामान्य जागरूकता) 60 मिनट में। एमआर: 50 प्रश्न (विज्ञान एवं गणित, सामान्य ज्ञान) 30 मिनट में। 0.25 नकारात्मक अंक।'
    },
    {
      stageNumber: 2,
      title: 'Stage II: PFT, Written Examination & Initial Medical',
      titleHi: 'चरण 2: शारीरिक दक्षता (पीएफटी), लिखित परीक्षा एवं प्रारंभिक चिकित्सा',
      description: 'Shortlisted candidates from Stage I appear for PFT (1.6 km run, squats/uthtak-baithak, push-ups/kneeling sit-ups) and written examination verification.',
      descriptionHi: 'चरण 1 से चयनित अभ्यर्थियों हेतु शारीरिक परीक्षण (1.6 किमी दौड़, उठक-बैठक, पुश-अप्स) तथा लिखित परीक्षा का आयोजन।'
    },
    {
      stageNumber: 3,
      title: 'Stage III: Final Medical at INS Chilka & Training',
      titleHi: 'चरण 3: आईएनएस चिल्का पर अंतिम चिकित्सा एवं बुनियादी नौसैनिक प्रशिक्षण',
      description: 'Reporting to premier naval basic training establishment INS Chilka (Odisha). Candidates passing final medical enrollment undergo 22 weeks of naval training.',
      descriptionHi: 'आईएनएस चिल्का (ओडिशा) में अंतिम चिकित्सा एवं 22 सप्ताह का बुनियादी नौसेना प्रशिक्षण।'
    }
  ],
  branches: [
    {
      id: 'agniveer-ssr',
      name: 'Agniveer SSR (Senior Secondary Recruit)',
      nameHi: 'अग्निवीर एसएसआर (सीनियर सेकेंडरी रिक्रूट)',
      wing: 'Navy',
      cadetAcademy: 'INS Chilka, Odisha',
      tenure: '4 Years (with up to 25% permanent absorption)',
      vacanciesTentative: 4000,
      eligibility: {
        minAgeYears: 17.5,
        maxAgeYears: 21,
        ageDetails: '17.5 to 21 years on the day of enrollment',
        ageDetailsHi: 'नामांकन के दिन 17.5 से 21 वर्ष',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: '10+2 with Mathematics & Physics and at least one of these subjects: Chemistry/Biology/Computer Science from an approved educational board',
        educationLevelHi: 'गणित एवं भौतिकी तथा रसायन/जीव विज्ञान/कंप्यूटर में से किसी एक विषय के साथ 10+2 उत्तीर्ण',
        physicsMathMandatory: true,
        requiredSubjects: ['Physics', 'Mathematics'],
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'INET (SSR)',
        stageNameHi: 'आईएनईटी (एसएसआर)',
        totalQuestions: 100,
        totalMarks: 100,
        totalDurationMinutes: 60,
        sections: [
          {
            name: 'English',
            nameHi: 'अंग्रेजी',
            questions: 25,
            marks: 25,
            durationMinutes: 15,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Passage, Preposition, Correction of sentences, Active/Passive Voice, Direct/Indirect, Synonyms/Antonyms']
          },
          {
            name: 'Science (Physics, Chemistry, Basic Biology)',
            nameHi: 'विज्ञान (भौतिकी, रसायन, सामान्य जीवविज्ञान)',
            questions: 25,
            marks: 25,
            durationMinutes: 15,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Physical World & Measurement, Kinematics, Laws of Motion, Work, Energy & Power, Gravitation, Thermodynamics, Optics, Atomic Structure']
          },
          {
            name: 'Mathematics',
            nameHi: 'गणित',
            questions: 25,
            marks: 25,
            durationMinutes: 15,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Relations and Functions, Complex Numbers, Quadratic Equations, Sequences and Series, Trigonometry, Coordinate Geometry, Calculus, Probability']
          },
          {
            name: 'General Awareness',
            nameHi: 'सामान्य जागरूकता',
            questions: 25,
            marks: 25,
            durationMinutes: 15,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Culture and Religion, Geography, History, National Facts, Heritage, Arts, Dance, Defence, Wars and Neighbours, Current Affairs, Sports']
          }
        ]
      }
    },
    {
      id: 'agniveer-mr',
      name: 'Agniveer MR (Matric Recruit) — Chef, Steward, Hygienist',
      nameHi: 'अग्निवीर एमआर (मैट्रिक रिक्रूट) — शेफ, स्टीवर्ड, हाइजीनिस्ट',
      wing: 'Navy',
      cadetAcademy: 'INS Chilka, Odisha',
      tenure: '4 Years',
      vacanciesTentative: 300,
      eligibility: {
        minAgeYears: 17.5,
        maxAgeYears: 21,
        ageDetails: '17.5 to 21 years on enrollment',
        ageDetailsHi: '17.5 से 21 वर्ष',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: 'Matriculation (10th) examination pass from an educational board recognized by Govt of India',
        educationLevelHi: 'भारत सरकार द्वारा मान्यता प्राप्त शिक्षा बोर्ड से 10वीं/मैट्रिक उत्तीर्ण',
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'INET (MR)',
        stageNameHi: 'आईएनईटी (एमआर)',
        totalQuestions: 50,
        totalMarks: 50,
        totalDurationMinutes: 30,
        sections: [
          {
            name: 'Science & Mathematics',
            nameHi: 'विज्ञान एवं गणित',
            questions: 25,
            marks: 25,
            durationMinutes: 15,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Nature of Matter, Force and Gravitation, Work, Energy & Power, Heat, Sound, Mathematical Simplification, Ratio, Percentage, Geometry, Mensuration']
          },
          {
            name: 'General Awareness',
            nameHi: 'सामान्य जागरूकता',
            questions: 25,
            marks: 25,
            durationMinutes: 15,
            negativeMarking: 0.25,
            marksPerQuestion: 1.0,
            syllabusTopics: ['Geography (Rivers, Ports, Mountains), History, Defence, Current Affairs, National Symbols, Eminent Personalities, Sports']
          }
        ]
      }
    }
  ],
  physicalSummary: {
    running: 'Male: 1.6 km in 6 min 30 sec | Female: 1.6 km in 8 min',
    heightMale: '157 cm',
    heightFemale: '152 cm',
    vision: 'Without glasses: 6/6 better eye, 6/9 worse eye. With glasses: 6/6 both eyes. Colour perception: CP II'
  },
  salaryAndPerks: {
    rankAtCommission: 'Agniveer (Matric/SSR)',
    level: 'Customised Package: ₹30,000 (1st yr) rising to ₹40,000 (4th yr)',
    stipendDuringTraining: 'Monthly stipend with 30% Seva Nidhi contribution',
    msp: 'Seva Nidhi Package of ₹11.71 Lakhs on completion of 4-year tenure'
  }
};
