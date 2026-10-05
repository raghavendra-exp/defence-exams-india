import { FormulaItem } from '../../types';

export const formulaBookList: FormulaItem[] = [
  {
    id: 'f-calc-1',
    subject: 'Mathematics',
    topic: 'Differential Calculus',
    title: 'Standard Derivative of Trigonometric and Exponential Functions',
    titleHi: 'त्रिकोणमितीय एवं चरघातांकी फलनों के मानक अवकलज',
    formula: 'd/dx [sin x] = cos x | d/dx [cos x] = -sin x | d/dx [tan x] = sec² x | d/dx [e^(ax)] = a e^(ax) | d/dx [ln x] = 1/x',
    explanation: 'Fundamental derivatives used frequently in NDA Paper I and CDS Elementary Mathematics.',
    explanationHi: 'एनडीए गणित प्रश्नपत्र में सर्वाधिक प्रयुक्त होने वाले आधारभूत अवकलज सूत्र।',
    examTag: 'NDA, Air Force Technical, Navy SSR'
  },
  {
    id: 'f-trig-1',
    subject: 'Mathematics',
    topic: 'Trigonometry',
    title: 'Triple Angle Formulas & Product Identities',
    titleHi: 'त्रिकोणमितीय त्रिकोण सूत्र एवं गुणन सर्वसमिकाएं',
    formula: 'sin 3θ = 3 sin θ - 4 sin³ θ | cos 3θ = 4 cos³ θ - 3 cos θ | sin θ · sin(60°-θ) · sin(60°+θ) = (1/4) sin 3θ',
    explanation: 'Critical shortcut identities allowing instant calculation of sin 10° · sin 50° · sin 70° = 1/8.',
    explanationHi: 'शॉर्टकट सर्वसमिका जिससे sin 10° · sin 50° · sin 70° का मान तुरंत 1/8 निकाला जा सकता है।',
    examTag: 'NDA, Agniveervayu Science, Navik GD'
  },
  {
    id: 'f-mat-1',
    subject: 'Mathematics',
    topic: 'Matrices & Determinants',
    title: 'Properties of Adjoint & Determinants',
    titleHi: 'सहखंडज एवं सारणिक के प्रमुख गुणधर्म',
    formula: '|adj(A)| = |A|^(n - 1) | adj(adj(A)) = |A|^(n - 2) A | |k A| = k^n |A| (for order n)',
    explanation: 'Tested almost every year in UPSC NDA Mathematics Paper I.',
    explanationHi: 'n कोटि के वर्ग आव्यूह के लिए सहखंडज के सारणिक का मान |A|^(n-1) होता है।',
    examTag: 'NDA I & II'
  },
  {
    id: 'f-speed-1',
    subject: 'Shortcut Techniques',
    topic: 'Speed & Distance',
    title: 'Average Speed with Equal Distance Segments',
    titleHi: 'समान दूरी हेतु औसत चाल शॉर्टकट',
    formula: 'Average Speed = (2 · v₁ · v₂) / (v₁ + v₂) [for 2 equal halves] | (3 · v₁ · v₂ · v₃) / (v₁ v₂ + v₂ v₃ + v₃ v₁)',
    explanation: 'Harmonic mean shortcut avoiding long time-distance algebra calculations.',
    explanationHi: 'दो बराबर दूरियों को अलग-अलग चाल से तय करने पर औसत चाल का त्वरित सूत्र।',
    examTag: 'CDS, AFCAT, Agniveer, ICG Navik'
  },
  {
    id: 'f-work-1',
    subject: 'Shortcut Techniques',
    topic: 'Time & Work',
    title: 'Combined Work Formula (LCM Efficiency Method)',
    titleHi: 'कार्य एवं समय (लघुत्तम कार्य दक्षता विधि)',
    formula: 'Time taken together = (Total Work Units) / (Sum of Daily Efficiency Units) = (A · B) / (A + B)',
    explanation: 'If A takes 12 days and B takes 18 days, Total Work = LCM(12, 18) = 36 units. A = 3 u/day, B = 2 u/day. Together = 36 / 5 = 7.2 days.',
    explanationHi: 'कुल कार्य को लघुत्तम मानकर प्रति दिन कार्य क्षमता से भाग देने की सबसे तेज विधि।',
    examTag: 'CDS, AFCAT, Agniveer Army/Navy'
  }
];
