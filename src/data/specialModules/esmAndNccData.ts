export interface ESMProvision {
  organization: string;
  entryCategory: string;
  ageRelaxation: string;
  ageRelaxationHi: string;
  feeExemption: boolean;
  reservationQuota: string;
  mandatoryDocuments: string[];
  officialSource: string;
}

export const esmProvisionsList: ESMProvision[] = [
  {
    organization: 'UPSC (CDS & NDA)',
    entryCategory: 'CDS Examination (IMA / OTA / INA / AFA)',
    ageRelaxation: 'Up to maximum 5 years for Ex-Servicemen including Commissioned Officers and ECOs/SSCOs who have rendered at least five years Military Service.',
    ageRelaxationHi: 'कम से कम 5 वर्ष की सैन्य सेवा पूर्ण करने वाले पूर्व सैनिकों एवं ईसीओ/एसएससीओ अधिकारियों हेतु अधिकतम 5 वर्ष की आयु छूट।',
    feeExemption: false,
    reservationQuota: 'No horizontal quota in officer training academies; age relaxation and eligibility benefits apply as per DoPT guidelines.',
    mandatoryDocuments: ['Discharge Certificate / Release Order', 'Service Book / Record of Service', 'Pension Payment Order (PPO) if applicable'],
    officialSource: 'UPSC CDS Official Examination Notice & DoPT Gazette'
  },
  {
    organization: 'Indian Army (Agniveer & JCO/OR)',
    entryCategory: 'Agniveer & Regimental Enrolment',
    ageRelaxation: 'Former servicemen / Ex-Servicemen children receive priority in Unit Headquarters Quota (UHQ) rallies. Service duration + 3 years deduction from actual age.',
    ageRelaxationHi: 'यूएचक्यू रैलियों में पूर्व सैनिकों के पुत्रों को वरीयता तथा वास्तविक आयु से सेवा अवधि + 3 वर्ष की छूट।',
    feeExemption: true,
    reservationQuota: 'Special Priority in Unit Headquarters (UHQ) rallies and 10% reservation in CAPF/Assam Rifles upon Agnipath completion.',
    mandatoryDocuments: ['Discharge Book (Red Ink / Exemplary character)', 'Relationship Certificate issued by Record Office', 'Dependent Card'],
    officialSource: 'Join Indian Army Recruitment Directorate'
  },
  {
    organization: 'Indian Coast Guard',
    entryCategory: 'Navik (GD), Navik (DB) & Yantrik',
    ageRelaxation: 'Relaxation in upper age limit for Ex-Servicemen is permitted by deducting the period of service rendered from the actual age, subject to maximum of 3 years above normal limits.',
    ageRelaxationHi: 'तटरक्षक बल में सेवा अवधि घटाकर अधिकतम 3 वर्ष तक की छूट अनुमन्य है।',
    feeExemption: true,
    reservationQuota: 'Horizontal reservation as per Central Government norms for Group C technical and civilian posts.',
    mandatoryDocuments: ['Ex-Servicemen Discharge Certificate', 'NOC from Commanding Officer if serving in final year of engagement'],
    officialSource: 'Indian Coast Guard Enrolled Personnel Rules'
  }
];

export interface NCCBenefit {
  exam: string;
  certificateLevel: 'C Certificate' | 'B Certificate' | 'A Certificate';
  benefitType: 'Direct SSB (No Written Exam)' | 'Bonus Marks in Written Exam' | 'Reserved Seats / Quota';
  benefitDetails: string;
  benefitDetailsHi: string;
  criteria: string;
}

export const nccBenefitsList: NCCBenefit[] = [
  {
    exam: 'Indian Army (NCC Special Entry Scheme)',
    certificateLevel: 'C Certificate',
    benefitType: 'Direct SSB (No Written Exam)',
    benefitDetails: 'Exempted from UPSC CDS written examination! Direct call letter for 5-Day SSB Interview at Selection Centre Allahabad/Bhopal/Kapurthala/Jalandhar.',
    benefitDetailsHi: 'सीडीएस लिखित परीक्षा से पूर्ण छूट! सीधे 5-दिवसीय एसएसबी साक्षात्कार हेतु बुलावा पत्र।',
    criteria: 'Graduation with minimum 50% aggregate marks AND minimum "B" Grade in NCC "C" Certificate (Army Wing).'
  },
  {
    exam: 'Indian Navy (Executive Branch NCC Entry)',
    certificateLevel: 'C Certificate',
    benefitType: 'Direct SSB (No Written Exam)',
    benefitDetails: 'Direct SSB recommendation for Naval Academy Ezhimala pre-commission training for Sub Lieutenant commission.',
    benefitDetailsHi: 'नौसेना अकादमी एझिमाला में सब-लेफ्टिनेंट पद हेतु सीधी एसएसबी प्रविष्टि।',
    criteria: 'B.E./B.Tech degree with 60% marks and NCC Naval Wing "C" Certificate with minimum "B" grade.'
  },
  {
    exam: 'Indian Air Force (NCC Special Flying Branch)',
    certificateLevel: 'C Certificate',
    benefitType: 'Direct SSB (No Written Exam)',
    benefitDetails: 'Direct call to Air Force Selection Board (AFSB) for Flying Branch pilot training at AFA Dundigal without appearing in AFCAT CBT.',
    benefitDetailsHi: 'बिना एएफकैट ऑनलाइन परीक्षा दिए सीधे एएफएसबी साक्षात्कार एवं पायलट प्रशिक्षण।',
    criteria: '10+2 with 50% in Maths & Physics, 60% in Graduation/B.Tech, and NCC Air Wing "C" Certificate with minimum "B" grade.'
  },
  {
    exam: 'Indian Army Agniveer Recruitment (CEE)',
    certificateLevel: 'C Certificate',
    benefitType: 'Bonus Marks in Written Exam',
    benefitDetails: 'Agniveer General Duty: 20 Bonus Marks in CEE (Full marks in CEE if participated in Republic Day Camp - RDC). Agniveer Tech/Clerk: 15-20 Bonus marks.',
    benefitDetailsHi: 'अग्निवीर जीडी में 20 बोनस अंक (आरडीसी शिविर में भाग लेने पर लिखित परीक्षा में विशेष प्राथमिकता)।',
    criteria: 'Original NCC "C" Certificate produced and verified at Rally site.'
  },
  {
    exam: 'Indian Army Agniveer Recruitment (CEE)',
    certificateLevel: 'B Certificate',
    benefitType: 'Bonus Marks in Written Exam',
    benefitDetails: '10 Bonus Marks awarded in CEE for Agniveer GD, Tech, and Clerk entries.',
    benefitDetailsHi: 'सीईई लिखित परीक्षा में 10 बोनस अंक प्रदान किए जाते हैं।',
    criteria: 'Valid NCC "B" Certificate.'
  },
  {
    exam: 'Indian Army Agniveer Recruitment (CEE)',
    certificateLevel: 'A Certificate',
    benefitType: 'Bonus Marks in Written Exam',
    benefitDetails: '5 Bonus Marks awarded in CEE merit calculation.',
    benefitDetailsHi: 'सीईई मेरिट गणना में 5 बोनस अंक प्रदान किए जाते हैं।',
    criteria: 'Valid NCC "A" Certificate.'
  }
];
