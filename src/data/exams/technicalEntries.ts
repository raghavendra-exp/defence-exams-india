import { DefenceExam } from '../../types';

export const technicalEntriesExamData: DefenceExam = {
  id: 'technical-entries',
  name: 'Technical & Direct Entries',
  nameHi: 'तकनीकी एवं सीधी प्रविष्टियां',
  fullName: 'Armed Forces Technical, B.Tech & Direct SSB Entry Schemes',
  fullNameHi: 'सशस्त्र बल तकनीकी, बी.टेक एवं सीधी एसएसबी प्रविष्टि योजनाएं',
  conductingBody: 'Join Indian Army / Join Indian Navy / IAF',
  frequency: 'Twice yearly (January & July course entries)',
  entryType: 'officer',
  officialPortal: 'https://joinindianarmy.nic.in',
  officialSource: {
    name: 'Indian Armed Forces Direct Officer Entries Official Portal',
    url: 'https://joinindianarmy.nic.in',
    lastVerified: '2026-09-22',
    authority: 'Army, Navy & Air Force Headquarters'
  },
  overview: 'The Indian Armed Forces offer premier direct entry routes without a written entrance examination, where candidates are shortlisted directly for the 5-Day SSB Interview based on JEE (Main) ranks, Engineering Degree cutoff percentages, or NCC "C" Certificate grading. Major schemes include 10+2 TES (Army), 10+2 B.Tech (Navy), TGC (Technical Graduate Course - Army), SSC Tech (Men & Women), and NCC Special Entry Scheme.',
  overviewHi: 'भारतीय सशस्त्र बल बिना लिखित परीक्षा के सीधे एसएसबी साक्षात्कार हेतु कई प्रतिष्ठित तकनीकी प्रविष्टियां संचालित करते हैं। इसमें जेईई मेन रैंक, इंजीनियरिंग डिग्री प्रतिशत अथवा एनसीसी "सी" प्रमाणपत्र के आधार पर सीधे 5-दिवसीय एसएसबी साक्षात्कार के लिए शॉर्टलिस्ट किया जाता है। प्रमुख योजनाओं में 10+2 टीईएस (आर्मी), 10+2 बी.टेक (नेवी), टीजीसी, एसएससी टेक तथा एनसीसी स्पेशल एंट्री शामिल हैं।',
  stages: [
    {
      stageNumber: 1,
      title: 'Online Application & JEE Main / Degree Shortlisting',
      titleHi: 'चरण 1: ऑनलाइन आवेदन एवं शॉर्टलिस्टिंग',
      description: 'Cutoff determined based on JEE Main All India Common Rank List (CRL) for 10+2 entries, or cumulative degree percentage for Graduate Engineering entries.',
      descriptionHi: '10+2 प्रविष्टियों हेतु जेईई (मेन) सीआरएल रैंक अथवा स्नातक इंजीनियरिंग प्रविष्टियों हेतु डिग्री प्रतिशत के आधार पर कटऑफ निर्धारण।'
    },
    {
      stageNumber: 2,
      title: 'Services Selection Board (SSB) Interview',
      titleHi: 'चरण 2: सेवा चयन बोर्ड (एसएसबी) 5 दिवसीय साक्षात्कार',
      description: '5-Day comprehensive assessment (Screening, Psychology, GTO, Personal Interview, Conference) at designated Selection Centres.',
      descriptionHi: 'नामित चयन केंद्रों (इलाहाबाद, भोपाल, जालंधर, कपूरथला, बेंगलुरु, विशाखापत्तनम) पर 5-दिवसीय समग्र मूल्यांकन।'
    },
    {
      stageNumber: 3,
      title: 'Special Medical Board (SMB)',
      titleHi: 'चरण 3: विशेष चिकित्सा बोर्ड (एसएमबी)',
      description: 'Rigorous medical examination at military hospitals for officer commissioning standards.',
      descriptionHi: 'सैन्य अस्पतालों में अधिकारी पद के मानकों के अनुसार गहन चिकित्सीय परीक्षण।'
    },
    {
      stageNumber: 4,
      title: 'Academy Training & Engineering Degree Award',
      titleHi: 'चरण 4: अकादमी प्रशिक्षण एवं इंजीनियरिंग उपाधि',
      description: 'TES cadets undergo 4 years training (1 yr basic military training at Cadets Training Wings + 3 yrs engineering at MCEME/MCTE/CME) with fully sponsored B.Tech degree from JNU.',
      descriptionHi: 'टीईएस कैडेट्स को 4 वर्षीय प्रशिक्षण (1 वर्ष बुनियादी सैन्य + 3 वर्ष इंजीनियरिंग) तथा जेएनयू द्वारा पूर्णतः प्रायोजित बी.टेक उपाधि प्रदान की जाती है।'
    }
  ],
  branches: [
    {
      id: 'army-tes',
      name: '10+2 Technical Entry Scheme (Army TES)',
      nameHi: '10+2 तकनीकी प्रविष्टि योजना (आर्मी टीईएस)',
      wing: 'Army',
      cadetAcademy: 'Cadet Training Wings (CME Pune, MCTE Mhow, MCEME Secunderabad)',
      tenure: 'Permanent Commission (on completion of 4 yrs training)',
      vacanciesTentative: 90,
      eligibility: {
        minAgeYears: 16.5,
        maxAgeYears: 19.5,
        ageDetails: '16.5 to 19.5 years on first day of the month in which the course is due to commence',
        ageDetailsHi: 'प्रवेश माह की प्रथम तारीख को 16.5 से 19.5 वर्ष',
        gender: 'male',
        maritalStatus: 'unmarried',
        educationLevel: 'Passed 10+2 Examination or its equivalent with a minimum aggregate of 60% marks in Physics, Chemistry and Mathematics (PCM) AND candidate must have appeared in JEE (Mains) of the designated year',
        educationLevelHi: 'पीसीएम में न्यूनतम 60% अंकों के साथ 10+2 उत्तीर्ण तथा संबंधित वर्ष की जेईई (मेन) परीक्षा में सम्मिलित होना अनिवार्य',
        physicsMathMandatory: true,
        minPercentage: 60,
        requiredSubjects: ['Physics', 'Chemistry', 'Mathematics'],
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Direct Shortlisting + 5-Day SSB',
        stageNameHi: 'सीधी शॉर्टलिस्टिंग + 5 दिवसीय एसएसबी',
        totalQuestions: 0,
        totalMarks: 900,
        totalDurationMinutes: 0,
        sections: [
          {
            name: 'No Written Exam — Direct SSB Interview',
            nameHi: 'लिखित परीक्षा नहीं — सीधा एसएसबी साक्षात्कार',
            questions: 0,
            marks: 900,
            durationMinutes: 0,
            negativeMarking: 0,
            marksPerQuestion: 0,
            syllabusTopics: ['Shortlisted on JEE (Main) CRL Rank', '5-Day Services Selection Board (SSB)']
          }
        ]
      }
    },
    {
      id: 'navy-btech',
      name: '10+2 (B.Tech) Cadet Entry Scheme (Indian Navy)',
      nameHi: '10+2 (बी.टेक) कैडेट प्रविष्टि योजना (भारतीय नौसेना)',
      wing: 'Navy',
      cadetAcademy: 'Indian Naval Academy (INA), Ezhimala, Kerala',
      tenure: 'Permanent Commission',
      vacanciesTentative: 40,
      eligibility: {
        minAgeYears: 16.5,
        maxAgeYears: 19.5,
        ageDetails: '16.5 to 19.5 years',
        ageDetailsHi: '16.5 से 19.5 वर्ष',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: 'Passed Senior Secondary Examination (10+2 Pattern) with at least 70% aggregate marks in Physics, Chemistry and Mathematics (PCM) and at least 50% marks in English (either in Class X or Class XII) AND appeared in JEE (Main) for B.E./B.Tech',
        educationLevelHi: 'पीसीएम में न्यूनतम 70% कुल अंक तथा 10वीं/12वीं में अंग्रेजी में 50% अंक, एवं जेईई मेन में सम्मिलित',
        physicsMathMandatory: true,
        minPercentage: 70,
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Direct SSB Selection',
        stageNameHi: 'सीधा एसएसबी चयन',
        totalQuestions: 0,
        totalMarks: 900,
        totalDurationMinutes: 0,
        sections: [
          {
            name: 'JEE Main Shortlisting -> 5-Day Naval SSB',
            nameHi: 'जेईई मेन शॉर्टलिस्टिंग -> 5-दिवसीय नौसेना एसएसबी',
            questions: 0,
            marks: 900,
            durationMinutes: 0,
            negativeMarking: 0,
            marksPerQuestion: 0,
            syllabusTopics: ['Direct SSB Assessment (900 marks)']
          }
        ]
      }
    },
    {
      id: 'army-tgc',
      name: 'Technical Graduate Course (TGC) — Indian Army',
      nameHi: 'तकनीकी स्नातक पाठ्यक्रम (टीजीसी) — भारतीय सेना',
      wing: 'Army',
      cadetAcademy: 'Indian Military Academy (IMA), Dehradun',
      tenure: 'Permanent Commission',
      vacanciesTentative: 30,
      eligibility: {
        minAgeYears: 20,
        maxAgeYears: 27,
        ageDetails: '20 to 27 years as on the first day of the month in which the course begins',
        ageDetailsHi: 'पाठ्यक्रम प्रारंभ माह की प्रथम तारीख को 20 से 27 वर्ष',
        gender: 'male',
        maritalStatus: 'unmarried',
        educationLevel: 'Engineering Degree (B.E. / B.Tech) in notified engineering streams (Civil, Computer Science, Mechanical, Electrical, Electronics, IT, Telecomm)',
        educationLevelHi: 'अधिसूचित संकायों (सिविल, सीएस, मैकेनिकल, इलेक्ट्रिकल, इलेक्ट्रॉनिक्स) में इंजीनियरिंग स्नातक उपाधि',
        engineeringRequired: true,
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Degree Merit Shortlisting + SSB',
        stageNameHi: 'डिग्री मेरिट शॉर्टलिस्टिंग + एसएसबी',
        totalQuestions: 0,
        totalMarks: 900,
        totalDurationMinutes: 0,
        sections: [
          {
            name: 'Direct SSB Interview at Army Selection Centres',
            nameHi: 'सेना चयन केंद्रों पर सीधा एसएसबी साक्षात्कार',
            questions: 0,
            marks: 900,
            durationMinutes: 0,
            negativeMarking: 0,
            marksPerQuestion: 0,
            syllabusTopics: ['Engineering Cutoff Shortlisting -> 5-Day Army SSB']
          }
        ]
      }
    },
    {
      id: 'ncc-special',
      name: 'NCC Special Entry Scheme (Army / Navy / Air Force)',
      nameHi: 'एनसीसी विशेष प्रविष्टि योजना (सेना / नौसेना / वायु सेना)',
      wing: 'Tri-Services',
      cadetAcademy: 'OTA Chennai (Army) / INA Ezhimala / AFA Hyderabad',
      tenure: 'Short Service Commission',
      vacanciesTentative: 55,
      eligibility: {
        minAgeYears: 19,
        maxAgeYears: 25,
        ageDetails: '19 to 25 years as on course commencement',
        ageDetailsHi: 'प्रवेश के समय 19 से 25 वर्ष',
        gender: 'both',
        maritalStatus: 'unmarried',
        educationLevel: 'Degree of a recognized University with minimum 50% marks AND minimum of 2/3 years service in NCC Senior Division/Wing with "A" or "B" grade in NCC "C" Certificate',
        educationLevelHi: 'न्यूनतम 50% अंकों के साथ स्नातक उपाधि तथा एनसीसी "सी" प्रमाणपत्र में "ए" अथवा "बी" ग्रेड अनिवार्य',
        minPercentage: 50,
        nccRequirement: 'NCC "C" Certificate with minimum "B" grade is mandatory',
        nccRequirementHi: 'एनसीसी "सी" प्रमाणपत्र में न्यूनतम "बी" ग्रेड अनिवार्य',
        nationality: 'Citizen of India',
        nationalityHi: 'भारत का नागरिक'
      },
      examPattern: {
        stageName: 'Direct SSB Interview (No Written Test)',
        stageNameHi: 'सीधा एसएसबी साक्षात्कार (कोई लिखित परीक्षा नहीं)',
        totalQuestions: 0,
        totalMarks: 900,
        totalDurationMinutes: 0,
        sections: [
          {
            name: '5-Day SSB for NCC "C" Certificate Holders',
            nameHi: 'एनसीसी "सी" प्रमाणपत्र धारकों हेतु 5 दिवसीय एसएसबी',
            questions: 0,
            marks: 900,
            durationMinutes: 0,
            negativeMarking: 0,
            marksPerQuestion: 0,
            syllabusTopics: ['Direct Stage I & Stage II SSB Evaluation']
          }
        ]
      }
    }
  ],
  physicalSummary: {
    running: '2.4 km in 15 minutes, 20 push-ups, 20 sit-ups, 8 chin-ups',
    heightMale: '157.5 cm (157 cm for Navy, 162.5 cm for Flying)',
    heightFemale: '152 cm',
    vision: '6/6 or 6/9 correctable to 6/6'
  },
  salaryAndPerks: {
    rankAtCommission: 'Lieutenant (Army) / Sub Lieutenant (Navy) / Flying Officer (IAF)',
    level: 'Pay Matrix Level 10 (₹56,100 to ₹1,77,500)',
    stipendDuringTraining: '₹56,100 per month during cadet training',
    msp: '₹15,500 per month + applicable allowances'
  }
};
