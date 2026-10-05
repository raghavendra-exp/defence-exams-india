import { PhysicalRequirement, VisionStandard } from '../../types';

export const physicalStandardsData: PhysicalRequirement[] = [
  {
    examId: 'agniveer-army',
    wing: 'Army',
    test: '1.6 km Run (Group I)',
    testHi: '1.6 किमी दौड़ (ग्रुप 1)',
    maleStandard: 'Up to 5 minutes 30 seconds',
    femaleStandard: 'Up to 7 minutes 30 seconds (WMP)',
    marksOrQualifying: '60 Marks',
    mandatory: true,
    trainingTips: 'Build aerobic base with 3-5 km continuous slow runs 3 days a week, followed by 400m interval sprints on alternate days.',
    trainingTipsHi: 'सप्ताह में 3 दिन 3-5 किमी की मध्यम गति की दौड़ तथा अंतराल पर 400 मीटर के स्प्रिंट लगाएं।'
  },
  {
    examId: 'agniveer-army',
    wing: 'Army',
    test: '1.6 km Run (Group II)',
    testHi: '1.6 किमी दौड़ (ग्रुप 2)',
    maleStandard: '5 minutes 31 seconds to 5 minutes 45 seconds',
    femaleStandard: '7 minutes 31 seconds to 8 minutes 00 seconds',
    marksOrQualifying: '48 Marks',
    mandatory: true,
    trainingTips: 'Focus on stride cadence and pacing; avoid sprint starts in the first 200m of the rally crowd.',
    trainingTipsHi: 'शुरुआती 200 मीटर में अत्यधिक तेज भागने से बचें और अपनी गति को स्थिर रखें।'
  },
  {
    examId: 'agniveer-army',
    wing: 'Army',
    test: 'Beam / Pull-ups (Under-grip)',
    testHi: 'बीम / पुल-अप्स',
    maleStandard: '10 Pull-ups (40 Marks) | 9 (33m) | 8 (27m) | 7 (21m) | 6 (16m Qualifying Minimum)',
    femaleStandard: 'Not applicable (Modified fitness test for WMP)',
    marksOrQualifying: 'Up to 40 Marks (Min 6 required to pass)',
    mandatory: true,
    trainingTips: 'Practice negative pull-ups, dead hangs, and lat pulldowns to build back and grip strength.',
    trainingTipsHi: 'पीठ और कलाई की पकड़ मजबूत करने के लिए बार पर लटकने और धीमे पुल-अप्स का अभ्यास करें।'
  },
  {
    examId: 'agniveer-army',
    wing: 'Army',
    test: '9 Feet Ditch Jump',
    testHi: '9 फीट गड्ढा कूद',
    maleStandard: 'Clear 9 feet ditch with landing on both feet',
    femaleStandard: 'Not applicable',
    marksOrQualifying: 'Qualifying Only',
    mandatory: true,
    trainingTips: 'Practice standing broad jumps and high-knee box jumps to develop explosive leg power.',
    trainingTipsHi: 'पैरों की विस्फोटक शक्ति के लिए ब्रॉड जंप और बॉक्स जंप का अभ्यास करें।'
  },
  {
    examId: 'agniveer-army',
    wing: 'Army',
    test: 'Zig-Zag Balance Beam',
    testHi: 'ज़िग-ज़ैग संतुलन',
    maleStandard: 'Walk across narrow zigzag beam without falling',
    femaleStandard: 'Qualifying',
    marksOrQualifying: 'Qualifying Only',
    mandatory: true,
    trainingTips: 'Keep eyes fixed forward, lower center of gravity slightly, and maintain arms outstretched.',
    trainingTipsHi: 'संतुलन के लिए दृष्टि सामने रखें और हाथों को दोनों ओर फैलाकर रखें।'
  },
  {
    examId: 'agniveer-navy',
    wing: 'Navy',
    test: '1.6 km Run (PFT)',
    testHi: '1.6 किमी दौड़',
    maleStandard: '6 minutes 30 seconds',
    femaleStandard: '8 minutes 00 seconds',
    marksOrQualifying: 'Qualifying',
    mandatory: true,
    trainingTips: 'Steady paced aerobic conditioning 4 times a week.',
    trainingTipsHi: 'सप्ताह में 4 दिन निरंतर दौड़ का अभ्यास।'
  },
  {
    examId: 'agniveer-navy',
    wing: 'Navy',
    test: 'Squats (Uthak Baithak)',
    testHi: 'उठक-बैठक (स्क्वैट्स)',
    maleStandard: '20 Squats',
    femaleStandard: '15 Squats',
    marksOrQualifying: 'Qualifying',
    mandatory: true,
    trainingTips: 'Ensure thighs break parallel with knees over toes and back straight.',
    trainingTipsHi: 'कमर सीधी रखकर पूर्ण उठक-बैठक करें।'
  },
  {
    examId: 'agniveer-navy',
    wing: 'Navy',
    test: 'Push-ups & Bent Knee Sit-ups',
    testHi: 'पुश-अप्स एवं सिट-अप्स',
    maleStandard: '15 Push-ups (Chest touches fist/ground)',
    femaleStandard: '10 Bent Knee Sit-ups',
    marksOrQualifying: 'Qualifying',
    mandatory: true,
    trainingTips: 'Keep core engaged and elbows tucked at 45 degrees.',
    trainingTipsHi: 'शरीर को सीधा रखते हुए सही रूप से 15 पुश-अप्स लगाएं।'
  },
  {
    examId: 'agniveer-airforce',
    wing: 'Air Force',
    test: '1.6 km Run (PFT-I)',
    testHi: '1.6 किमी दौड़ (पीएफटी 1)',
    maleStandard: 'Completed within 7 minutes',
    femaleStandard: 'Completed within 8 minutes',
    marksOrQualifying: 'Qualifying',
    mandatory: true,
    trainingTips: 'Pace yourself at roughly 105 seconds per 400m lap on standard athletic track.',
    trainingTipsHi: '400 मीटर के चक्कर लगभग 105 सेकंड में पूरे करने की लय बनाएं।'
  },
  {
    examId: 'agniveer-airforce',
    wing: 'Air Force',
    test: 'Push-ups, Sit-ups & Squats (PFT-II)',
    testHi: 'पुश-अप्स, सिट-अप्स एवं स्क्वैट्स',
    maleStandard: '10 Push-ups (within 1 min), 10 Sit-ups (within 1 min), 20 Squats (within 1 min)',
    femaleStandard: '10 Sit-ups (within 1m 30s), 15 Squats (within 1 min)',
    marksOrQualifying: 'Qualifying',
    mandatory: true,
    trainingTips: 'Each exercise is conducted with whistle counts and momentary pauses at the bottom position.',
    trainingTipsHi: 'सीटी की आवाज पर नीचे रुकने की मुद्रा का अभ्यास करें।'
  },
  {
    examId: 'coast-guard',
    wing: 'Coast Guard',
    test: 'PFT Sequence (1.6 km Run, Squats, Push-ups)',
    testHi: 'तटरक्षक शारीरिक दक्षता (दौड़, उठक-बैठक, पुश-अप्स)',
    maleStandard: '1.6 km run in 7 minutes, 20 Squat ups, 10 Push-ups (All continuous without break)',
    femaleStandard: '1.6 km in 8 mins (for AC entry)',
    marksOrQualifying: 'Qualifying',
    mandatory: true,
    trainingTips: 'Practice transitions immediately from running shoes to push-up posture without rest interval.',
    trainingTipsHi: 'दौड़ के तुरंत बाद बिना रुके पुश-अप्स और उठक-बैठक का अभ्यास करें।'
  }
];

export const visionStandardsData: VisionStandard[] = [
  {
    examId: 'nda',
    branch: 'Army Wing',
    uncorrectedBetter: '6/6',
    uncorrectedWorse: '6/9',
    correctedBetter: '6/6',
    correctedWorse: '6/6',
    myopiaMax: '-2.50 D',
    hypermetropiaMax: '+2.50 D',
    colourPerception: 'CP-III',
    lasikAllowed: true,
    lasikCriteria: 'Permitted if candidate is above 20 years with post-op stable refraction for over 1 year and normal corneal thickness (not applicable for basic 10+2 entry under 20 years).',
    lasikCriteriaHi: '20 वर्ष से अधिक आयु होने पर 1 वर्ष से अधिक समय पूर्व कराई गई स्थिर लेसिक मान्य।'
  },
  {
    examId: 'nda',
    branch: 'Air Force (Flying Branch)',
    uncorrectedBetter: '6/6',
    uncorrectedWorse: '6/6',
    correctedBetter: '6/6',
    correctedWorse: '6/6',
    myopiaMax: 'Nil (0.0 D)',
    hypermetropiaMax: '+1.50 D',
    colourPerception: 'CP-I',
    lasikAllowed: false,
    lasikCriteria: 'Laser surgery of any kind (LASIK/PRK/SMILE) is strictly disqualifying for NDA Air Force Flying Cadets.',
    lasikCriteriaHi: 'एनडीए फ्लाइंग ब्रांच कैडेट्स हेतु किसी भी प्रकार की लेज़र सर्जरी अमान्य है।'
  },
  {
    examId: 'cds',
    branch: 'IMA (Army)',
    uncorrectedBetter: '6/12',
    uncorrectedWorse: '6/12',
    correctedBetter: '6/6',
    correctedWorse: '6/6',
    myopiaMax: '-3.50 D',
    hypermetropiaMax: '+3.50 D',
    colourPerception: 'CP-III',
    lasikAllowed: true,
    lasikCriteria: 'Candidate must be at least 20 years old, post-op uncomplicated duration of minimum 12 months, residual corneal bed > 250 microns.',
    lasikCriteriaHi: 'न्यूनतम 20 वर्ष आयु तथा सफल लेसिक सर्जरी के 12 माह बाद मान्य।'
  },
  {
    examId: 'cds',
    branch: 'INA (Navy Executive/Tech)',
    uncorrectedBetter: '6/12',
    uncorrectedWorse: '6/12',
    correctedBetter: '6/6',
    correctedWorse: '6/6',
    myopiaMax: '-1.50 D',
    hypermetropiaMax: '+1.50 D',
    colourPerception: 'CP-II',
    lasikAllowed: true,
    lasikCriteria: 'PRK/LASIK permitted for Navy Executive entries if performed after 20 years of age with stable corneal topology.',
    lasikCriteriaHi: '20 वर्ष के बाद कराई गई पीआरके/लेसिक मान्य।'
  },
  {
    examId: 'afcat',
    branch: 'Ground Duty Technical & Non-Technical',
    uncorrectedBetter: '6/36',
    uncorrectedWorse: '6/36',
    correctedBetter: '6/6',
    correctedWorse: '6/6',
    myopiaMax: '-3.50 D',
    hypermetropiaMax: '+3.50 D',
    colourPerception: 'CP-III',
    lasikAllowed: true,
    lasikCriteria: 'Permitted if done after 20 years of age with stable refraction for at least 1 year.',
    lasikCriteriaHi: '20 वर्ष की आयु के बाद संपन्न 1 वर्ष पुरानी स्थिर लेसिक मान्य।'
  }
];

export const commonMedicalRejections = [
  {
    condition: 'Knock Knees (Genu Valgum)',
    conditionHi: 'नौक नी (घुटने टकराना)',
    details: 'Distance between internal malleoli of ankles must be greater than 5 cm when knees are touching.',
    detailsHi: 'घुटने छूने पर टखनों के बीच की दूरी 5 सेमी से अधिक होने पर अमान्य।',
    remedy: 'Pillow between knees during sleep, butterfly stretches, horse riding exercises, inner thigh strengthening.'
  },
  {
    condition: 'Flat Foot (Pes Planus)',
    conditionHi: 'फ्लैट फुट (समतल पैर)',
    details: 'Loss of medial longitudinal arch of the foot. Can be rigid or flexible. Severe flat foot causes early fatigue and spine shock.',
    detailsHi: 'पैर के तलवे का प्राकृतिक आर्च न होना। कठोर फ्लैट फुट अस्वीकृति का स्थायी कारण है।',
    remedy: 'Walking barefoot on sand or uneven pebbles, towel scrunches with toes, arch insoles during training.'
  },
  {
    condition: 'Carrying Angle (> 15° for males, > 20° for females)',
    conditionHi: 'कैरिंग एंगल (कोहनी का कोण)',
    details: 'Carrying angle of elbows beyond 15 degrees in males and 20 degrees in females is a common cause for temporary or permanent unfitness.',
    detailsHi: 'पुरुषों में 15 डिग्री तथा महिलाओं में 20 डिग्री से अधिक कोहनी का झुकाव अमान्य है।',
    remedy: 'Physiotherapy exercises, straight bar bicep curls under orthopedic guidance.'
  },
  {
    condition: 'Deviated Nasal Septum (DNS)',
    conditionHi: 'डीएनएस (नाक की हड्डी का टेढ़ा होना)',
    details: 'Severe DNS blocking air passage leads to sinus congestion and oxygen deficiency during high altitude or flight.',
    detailsHi: 'नाक के वायुमार्ग में गंभीर रुकावट होने पर अस्वीकृति।',
    remedy: 'Minor septoplasty surgery (must be healed for at least 30 days prior to medical examination).'
  },
  {
    condition: 'Dental Points (< 14 Dental Points)',
    conditionHi: 'डेंटल पॉइंट्स (14 से कम दंत अंक)',
    details: 'A candidate must have minimum 14 dental points out of 22. Incisors = 1 pt each, premolars = 1 pt, molars = 2 pts each when in functional occlusion.',
    detailsHi: 'कार्यात्मक दांतों के आधार पर 22 में से कम से कम 14 डेंटल अंक अनिवार्य हैं।',
    remedy: 'Proper scaling, filling of minor cavities, wisdom tooth hygiene.'
  },
  {
    condition: 'Ear Wax & Tympanic Membrane Perforation',
    conditionHi: 'कान का मैल एवं पर्दे में छेद',
    details: 'Presence of ear wax prevents inspection of the eardrum and is the most common temporary rejection at military medical boards.',
    detailsHi: 'कान में मैल होने पर डॉक्टर पर्दे का निरीक्षण नहीं कर पाते, जिससे अस्थायी अनफिट घोषित कर दिया जाता है।',
    remedy: 'Get ears cleaned by an ENT specialist 1-2 weeks before the medical examination.'
  },
  {
    condition: 'Tattoos Policy',
    conditionHi: 'टैटू नीति (स्थायी गोदना)',
    details: 'Permanent body tattoos are permitted only on inner face of forearm (from inside of elbow to wrist) and on reverse side of palm/back of hand. Tribal candidates with traditional tattoos are exempted subject to certificate.',
    detailsHi: 'केवल कोहनी के भीतरी भाग से कलाई तक तथा हथेली के पीछे छोटे टैटू की अनुमति है। जनजातीय अभ्यर्थियों को नियमों के अधीन छूट प्राप्त है।',
    remedy: 'Laser tattoo removal must be completed and fully scarred/healed well before medicals.'
  }
];
