export interface RoadmapLevel {
  level: number;
  title: string;
  titleHi: string;
  subtitle: string;
  subtitleHi: string;
  keyActions: string[];
  keyActionsHi: string[];
  durationEstimate: string;
  officialAdvice: string;
}

export const zeroToDefenceRoadmap: RoadmapLevel[] = [
  {
    level: 0,
    title: 'Choose Your Entry & Service Arm',
    titleHi: 'अपनी प्रविष्टि एवं सैन्य सेवा का चयन करें',
    subtitle: 'Army, Navy, Air Force, or Coast Guard | Officer vs Enrolled Personnel',
    subtitleHi: 'थल सेना, नौसेना, वायु सेना अथवा तटरक्षक बल | अधिकारी अथवा सैनिक/नाविक/वायुसैनिक संवर्ग',
    keyActions: [
      'Use the Eligibility Finder tool to map your age, gender, and educational qualification.',
      'Decide between 10+2 entry (NDA, Army TES, Navy BTech, Agniveer) or Graduate entry (CDS, AFCAT, TGC, SSC Tech).',
      'Understand the service commitments: Permanent Commission vs Short Service Commission (SSC) vs Agnipath 4-year tenure.'
    ],
    keyActionsHi: [
      'पात्रता खोजक का उपयोग कर अपनी आयु एवं शिक्षा के अनुसार सटीक प्रविष्टि का चुनाव करें।',
      '10+2 प्रविष्टि अथवा स्नातक प्रविष्टि में से लक्ष्य निर्धारित करें।',
      'स्थायी कमीशन, शॉर्ट सर्विस कमीशन अथवा अग्निपथ योजना के सेवा नियमों को समझें।'
    ],
    durationEstimate: 'Week 1',
    officialAdvice: 'Never apply based on hearsay; ensure your exact date of birth fits within the official age window.'
  },
  {
    level: 1,
    title: 'Read & Deconstruct Official Notification',
    titleHi: 'आधिकारिक अधिसूचना का अध्ययन एवं विश्लेषण',
    subtitle: 'Extract exact vacancy split, exam centres, and cutoff dates',
    subtitleHi: 'रिक्तियां, परीक्षा केंद्र और अंतिम तिथियों का सटीक संकलन',
    keyActions: [
      'Download authentic PDF notification from UPSC / Join Indian Army / Join Indian Navy / AFCAT portal.',
      'Check educational eligibility, minimum percentages, and mandatory subjects (e.g. Physics & Maths for Flying/Navy).',
      'Verify photograph and signature specifications to prevent online application rejection.'
    ],
    keyActionsHi: [
      'आधिकारिक पोर्टल से मूल अधिसूचना डाउनलोड करें।',
      'शैक्षणिक पात्रता एवं आवश्यक विषय (गणित व भौतिकी) जांचें।',
      'फोटो एवं हस्ताक्षर के निर्धारित प्रारूप का ध्यान रखें।'
    ],
    durationEstimate: 'Days 1-3',
    officialAdvice: 'Double check whether fee exemption applies to you (Women / SC / ST candidates are exempted from UPSC exam fees).'
  },
  {
    level: 2,
    title: 'Preliminary Medical & Physical Self-Check',
    titleHi: 'प्रारंभिक चिकित्सा एवं शारीरिक स्व-परीक्षण',
    subtitle: 'Prevent heartbreak by verifying non-correctable medical criteria upfront',
    subtitleHi: 'स्थायी चिकित्सीय अयोग्यताओं की पहले ही जांच कर लें',
    keyActions: [
      'Measure exact bare-foot height against official branch standards (e.g. 162.5 cm for Air Force Flying).',
      'Check visual acuity and colour perception at a civil hospital (CP-I for pilots, CP-II/III for technical/ground).',
      'Check for knock knees, flat feet, carrying angles, and ear wax.'
    ],
    keyActionsHi: [
      'नंगे पैर आधिकारिक मानकों के अनुसार सटीक लंबाई मापें।',
      'आंखों की दृष्टि और कलर विजन का डॉक्टरी परीक्षण करवाएं।',
      'नौक नी, फ्लैट फुट और कान के मैल की पहले से जांच कराएं।'
    ],
    durationEstimate: 'Week 2',
    officialAdvice: 'Get ear wax cleaned by an ENT specialist 2 weeks prior to reporting for military medicals.'
  },
  {
    level: 3,
    title: 'Syllabus & Exam Pattern Mastery',
    titleHi: 'पाठ्यक्रम एवं परीक्षा पैटर्न की सूक्ष्म समझ',
    subtitle: 'Deconstruct negative marking, question distribution, and sectional cutoffs',
    subtitleHi: 'नकारात्मक अंकन, प्रश्न वितरण एवं अनुभागीय कटऑफ का विश्लेषण',
    keyActions: [
      'Print the official syllabus topic by topic.',
      'Understand the negative marking formula (e.g., -0.83 on NDA Maths, -1.33 on NDA GAT, -1.0 on AFCAT, -0.33 on CDS).',
      'Identify high-scoring weightage sections (e.g. Calculus & Trigonometry in NDA Maths; English in CDS/AFCAT).'
    ],
    keyActionsHi: [
      'आधिकारिक पाठ्यक्रम का विषयवार प्रिंट निकालें।',
      'नकारात्मक अंकन प्रणाली को समझें।',
      'अधिक अंक वाले महत्वपूर्ण अध्यायों की सूची बनाएं।'
    ],
    durationEstimate: 'Week 2',
    officialAdvice: 'In CDS and NDA, you must clear both individual sectional qualifying cutoffs (20-25%) and the overall aggregate cutoff.'
  },
  {
    level: 4,
    title: 'NCERT & Core Foundation Building',
    titleHi: 'एनसीईआरटी एवं बुनियादी आधार निर्माण',
    subtitle: 'Clear core concepts before touching tricky shortcut guides',
    subtitleHi: 'शॉर्टकट से पहले मूलभूत संकल्पनाओं को स्पष्ट करें',
    keyActions: [
      'Finish Class 9 to 12 NCERT Science and Mathematics textbooks.',
      'Establish a formula handbook for arithmetic, algebra, trigonometry, and calculus.',
      'Read one national newspaper daily (The Hindu / Indian Express) for editorial vocabulary and geopolitical current affairs.'
    ],
    keyActionsHi: [
      'कक्षा 9 से 12 तक की एनसीईआरटी विज्ञान एवं गणित की पुस्तकें पढ़ें।',
      'सूत्र पुस्तिका बनाएं।',
      'दैनिक समाचार पत्र से करेंट अफेयर्स और शब्दावली तैयार करें।'
    ],
    durationEstimate: 'Month 1 - 2',
    officialAdvice: 'Direct NCERT lines frequently appear as statement-based questions in UPSC NDA and CDS papers.'
  },
  {
    level: 5,
    title: 'Concept Deep-Dive & Practice Drills',
    titleHi: 'गहन अभ्यास एवं अध्यायवार टेस्ट',
    subtitle: 'Topic tests and Speed Lab shortcuts',
    subtitleHi: 'अध्यायवार परीक्षण एवं स्पीड तकनीक',
    keyActions: [
      'Solve 50-100 practice questions for each topic in our Practice Engine.',
      'Record wrong answers in the Error Notebook and categorize mistake types (Conceptual, Calculation, Careless).',
      'Practice mental arithmetic and LCM-based shortcuts for Time-Work and Speed-Distance.'
    ],
    keyActionsHi: [
      'प्रत्येक अध्याय के 50-100 प्रश्नों का अभ्यास करें।',
      'गलतियों को एरर नोटबुक में दर्ज करें।',
      'गणना की गति बढ़ाने के लिए शॉर्टकट तकनीकों का अभ्यास करें।'
    ],
    durationEstimate: 'Month 2 - 3',
    officialAdvice: 'Never skip reviewing why an answer was wrong. An unanalyzed error will repeat in the exam hall.'
  },
  {
    level: 6,
    title: 'PYQ Deep Decoding (10+ Years)',
    titleHi: 'विगत 10 वर्षों के प्रश्नों का गहन विश्लेषण (PYQ)',
    subtitle: 'Solve verified UPSC / IAF / Army past papers in real exam time limits',
    subtitleHi: 'वास्तविक समय सीमा में विगत वर्षों के प्रामाणिक प्रश्नपत्र हल करें',
    keyActions: [
      'Solve at least past 15 papers of NDA, CDS, AFCAT, or Agniveer.',
      'Note recurring patterns: types of matrices questions, specific battle dates, constitutional articles.',
      'Aim for minimum 130% of the historical cutoff score during home practice.'
    ],
    keyActionsHi: [
      'कम से कम पिछले 15 प्रश्नपत्रों को वास्तविक समय में हल करें।',
      'बार-बार पूछे जाने वाले विषयों को चिन्हित करें।',
      'कटऑफ से कम से कम 30% अधिक अंक लाने का लक्ष्य रखें।'
    ],
    durationEstimate: 'Month 3 - 4',
    officialAdvice: 'UPSC rarely repeats the exact question, but constantly repeats the underlying concept with altered numericals.'
  },
  {
    level: 7,
    title: 'Full-Length Timed Mock Simulations',
    titleHi: 'पूर्ण समयबद्ध मॉक टेस्ट सिमुलेशन',
    subtitle: 'Experience exam day pressure with countdown timer and negative marking',
    subtitleHi: 'टाइमर और नकारात्मक अंकन के साथ वास्तविक परीक्षा जैसा अनुभव',
    keyActions: [
      'Take full-length mocks matching official timing (e.g. NDA Maths 10:00 AM - 12:30 PM, GAT 2:00 PM - 4:30 PM).',
      'Adopt a 3-round attempting strategy: Round 1 (100% sure shots), Round 2 (50-50 elimination), Round 3 (avoid wild guesses).',
      'Track accuracy percentage; target > 85% accuracy on attempted questions.'
    ],
    keyActionsHi: [
      'आधिकारिक समय के अनुसार पूरे 2.5 घंटे के मॉक टेस्ट दें।',
      '3 चरणों में प्रश्न हल करने की रणनीति अपनाएं: 100% निश्चित प्रश्न -> 50-50 वाले -> अनुमान से बचें।',
      '85% से अधिक सटीकता (एक्यूरेसी) प्राप्त करने का प्रयास करें।'
    ],
    durationEstimate: 'Month 4 - 5',
    officialAdvice: 'Careless negative marking eliminates more candidates in NDA and CDS than lack of knowledge.'
  },
  {
    level: 8,
    title: 'Physical Fitness & Endurance Conditioning',
    titleHi: 'शारीरिक दक्षता एवं सहनशक्ति निर्माण',
    subtitle: 'Daily morning routine: 1.6 km / 2.4 km run, push-ups, chin-ups',
    subtitleHi: 'दैनिक दौड़, पुश-अप्स, चिन-अप्स एवं स्टैमिना विकास',
    keyActions: [
      'Log daily workouts in the Defence Fitness Tracker.',
      'Army Agniveers must achieve Group I timing (1.6 km under 5 min 30 sec) for maximum 60 marks.',
      'Officers aspirants must run 2.4 km comfortably within 15 minutes, 20 pushups, 20 situps, and 8 pullups.'
    ],
    keyActionsHi: [
      'दैनिक व्यायाम को फिटनेस ट्रैकर में दर्ज करें।',
      'अग्निवीर भर्ती हेतु 1.6 किमी दौड़ 5:30 मिनट के भीतर पूरी करने का अभ्यास करें।',
      'अधिकारी प्रविष्टियों हेतु 2.4 किमी दौड़, 20 पुश-अप्स और 8 चिन-अप्स का अभ्यास।'
    ],
    durationEstimate: 'Concurrent (Daily 1 hour)',
    officialAdvice: 'Physical fitness cannot be achieved in the last 10 days before rally; start at least 3 months early.'
  },
  {
    level: 9,
    title: 'SSB / AFSB Psychological & GTO Preparation',
    titleHi: 'एसएसबी / एएफएसबी मनोवैज्ञानिक एवं जीटीओ तैयारी',
    subtitle: 'Inculcate 15 Officer-Like Qualities (OLQs) naturally without faking',
    subtitleHi: 'बिना किसी बनावटीपन के 15 सैन्य अधिकारी गुणों (OLQs) का प्राकृतिक विकास',
    keyActions: [
      'Practice 60 WAT words daily in our interactive 15-second timed simulator.',
      'Practice writing realistic, problem-solving PPDT and TAT stories with constructive heroes.',
      'Participate in group discussions on current geopolitical and national topics; speak fluently and listen respectfully.',
      'Fill up your Personal Information Questionnaire (PIQ) with total authenticity.'
    ],
    keyActionsHi: [
      '15 सेकंड के टाइमर पर प्रतिदिन 60 शब्दों के डब्ल्यूएटी का अभ्यास करें।',
      'पीपीडीटी और टीएटी में सकारात्मक एवं व्यावहारिक कहानियों का अभ्यास करें।',
      'समसामयिक मुद्दों पर दोस्तों के साथ ग्रुप डिस्कशन करें।',
      'पीआईक्यू फॉर्म में पूर्ण सत्यता के साथ अपना विवरण भरें।'
    ],
    durationEstimate: 'Month 4 onwards',
    officialAdvice: 'Assessors look for trainability and honesty. Memorized coaching formulas get immediately exposed in deep cross-questioning.'
  },
  {
    level: 10,
    title: 'Document Verification & Dossier Assembly',
    titleHi: 'दस्तावेज़ सत्यापन एवं फाइल तैयार करना',
    subtitle: 'Zero-error original certificates, marksheets, NCC, and domicile',
    subtitleHi: 'मूल प्रमाणपत्र, अंकतालिकाएं, एनसीसी व मूल निवास प्रमाण पत्र',
    keyActions: [
      'Ensure name, father’s name, and date of birth match exactly across 10th certificate, 12th marksheet, and Aadhaar card.',
      'Procure Bonafide certificate from college principal if currently in final year of degree.',
      'Have caste certificates (SC/ST/OBC/EWS) in central government format issued by competent authority.'
    ],
    keyActionsHi: [
      '10वीं प्रमाणपत्र, 12वीं अंकतालिका और आधार कार्ड में नाम व जन्मतिथि का सटीक मिलान करें।',
      'अंतिम वर्ष के छात्र कॉलेज प्राचार्य से बोनाफाइड प्रमाणपत्र बनवाएं।',
      'केंद्र सरकार के प्रारूप में सक्षम अधिकारी द्वारा जारी जाति/ईडब्ल्यूएस प्रमाणपत्र तैयार रखें।'
    ],
    durationEstimate: '2 Weeks prior',
    officialAdvice: 'A mismatch of even a single alphabet in candidate or parent name between Aadhaar and matriculation certificate can lead to immediate debarment at rally gates.'
  },
  {
    level: 11,
    title: 'Final Revision & Exam Day Execution',
    titleHi: 'अंतिम दोहराव एवं परीक्षा दिवस रणनीति',
    subtitle: 'Consolidate flashcards, error notebook, formula sheet, and stay calm',
    subtitleHi: 'फ्लैशकार्ड, गलती नोटबुक, सूत्र दोहराव एवं शांत चित्त',
    keyActions: [
      'Review Error Notebook questions twice in the last 72 hours.',
      'Visit your examination centre one day in advance.',
      'Carry two black ballpoint pens, original photo ID, admit card printout, and clipboard if pen-paper test.'
    ],
    keyActionsHi: [
      'परीक्षा से 72 घंटे पूर्व एरर नोटबुक और सूत्रों का त्वरित दोहराव करें।',
      'परीक्षा केंद्र का एक दिन पहले ही पता कर लें।',
      'काले बॉलपॉइंट पेन, मूल पहचान पत्र और प्रवेश पत्र साथ रखें।'
    ],
    durationEstimate: 'Final Week',
    officialAdvice: 'Get 8 hours of deep sleep before the exam night. A fatigued brain loses 15-20 marks in calculation errors.'
  },
  {
    level: 12,
    title: 'Merit List, Academy Call-Up & Commissioning',
    titleHi: 'अंतिम मेरिट सूची, अकादमी आगमन एवं कमीशनिंग',
    subtitle: 'Report to NDA Khadakwasla / IMA Dehradun / INA Ezhimala / AFA Dundigal / INS Chilka',
    subtitleHi: 'एनडीए, आईएमए, आईएनए, एएफए अथवा आईएनएस चिल्का पर रिपोर्टिंग',
    keyActions: [
      'Keep medical fitness intact while waiting for final All India Merit List.',
      'Assemble the academy joining kit as listed in the official joining instructions.',
      'Take the oath of allegiance to the Constitution of India and begin your glorious journey of serving the motherland.'
    ],
    keyActionsHi: [
      'अंतिम मेरिट सूची आने तक अपने स्वास्थ्य और फिटनेस को बनाए रखें।',
      'आधिकारिक जॉइनिंग निर्देशों के अनुसार आवश्यक सामग्री की तैयारी करें।',
      'भारत के संविधान के प्रति निष्ठा की शपथ लेकर मातृभूमि की सेवा का गौरवमयी सफर आरंभ करें।'
    ],
    durationEstimate: 'Goal Realized',
    officialAdvice: 'Service Before Self. The safety, honour and welfare of your country come first, always and every time.'
  }
];
