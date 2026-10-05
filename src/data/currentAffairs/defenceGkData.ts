import { DefenceGKItem } from '../../types';

export const equivalentRanks = [
  {
    level: 'Officer 1 (Subaltern)',
    army: 'Lieutenant',
    navy: 'Sub Lieutenant',
    airforce: 'Flying Officer',
    insignia: 'Two Five-Pointed Golden Stars',
    payLevel: 'Level 10 (₹56,100)'
  },
  {
    level: 'Officer 2',
    army: 'Captain',
    navy: 'Lieutenant',
    airforce: 'Flight Lieutenant',
    insignia: 'Three Five-Pointed Stars',
    payLevel: 'Level 10B (₹61,300)'
  },
  {
    level: 'Officer 3 (Field Officer)',
    army: 'Major',
    navy: 'Lieutenant Commander',
    airforce: 'Squadron Leader',
    insignia: 'National Emblem (Ashoka Lion Capital)',
    payLevel: 'Level 11 (₹69,400)'
  },
  {
    level: 'Officer 4',
    army: 'Lieutenant Colonel',
    navy: 'Commander',
    airforce: 'Wing Commander',
    insignia: 'National Emblem and One Star',
    payLevel: 'Level 12A (₹1,21,200)'
  },
  {
    level: 'Officer 5 (Selection Grade)',
    army: 'Colonel',
    navy: 'Captain',
    airforce: 'Group Captain',
    insignia: 'National Emblem and Two Stars',
    payLevel: 'Level 13 (₹1,30,600)'
  },
  {
    level: 'Officer 6 (1-Star Flag Officer)',
    army: 'Brigadier',
    navy: 'Commodore',
    airforce: 'Air Commodore',
    insignia: 'National Emblem and Three Stars in Triangular Formation',
    payLevel: 'Level 13A (₹1,39,600)'
  },
  {
    level: 'Officer 7 (2-Star Flag Officer)',
    army: 'Major General',
    navy: 'Rear Admiral',
    airforce: 'Air Vice Marshal',
    insignia: 'Crossed Baton & Saber and One Star',
    payLevel: 'Level 14 (₹1,44,200)'
  },
  {
    level: 'Officer 8 (3-Star Flag Officer)',
    army: 'Lieutenant General',
    navy: 'Vice Admiral',
    airforce: 'Air Marshal',
    insignia: 'Crossed Baton & Saber and National Emblem',
    payLevel: 'Level 15 (₹1,82,200) / Level 16 Army Commander (₹2,05,400)'
  },
  {
    level: 'Officer 9 (4-Star Chief of Staff)',
    army: 'General (COAS)',
    navy: 'Admiral (CNS)',
    airforce: 'Air Chief Marshal (CAS)',
    insignia: 'Crossed Baton & Saber, National Emblem and One Star',
    payLevel: 'Level 17 (Apex Scale ₹2,50,000)'
  },
  {
    level: 'Apex Tri-Service Chief',
    army: 'Chief of Defence Staff (CDS)',
    navy: 'Permanent Chairman COSC',
    airforce: 'Four-Star General Rank',
    insignia: 'Ashoka Lion Capital over Crossed Swords & Eagle Emblem',
    payLevel: 'Level 17 (₹2,50,000)'
  },
  {
    level: 'Ceremonial 5-Star Rank',
    army: 'Field Marshal',
    navy: 'Admiral of the Fleet',
    airforce: 'Marshal of the Air Force',
    insignia: 'National Emblem over Crossed Batons in Lotus Wreath',
    payLevel: 'Held for life by Sam Manekshaw, K.M. Cariappa, and Arjan Singh'
  }
];

export const militaryCommandsData = [
  {
    service: 'Indian Army',
    totalCommands: 7,
    commands: [
      { name: 'Northern Command', hq: 'Udhampur (Jammu & Kashmir)', role: 'Guards northern borders including LOC and LAC in Ladakh' },
      { name: 'Western Command', hq: 'Chandimandir (Haryana / Chandigarh)', role: 'Guards plains of Punjab and Jammu border' },
      { name: 'Eastern Command', hq: 'Kolkata (West Bengal - Fort William)', role: 'Guards eastern international borders with China, Myanmar, Bangladesh' },
      { name: 'Southern Command', hq: 'Pune (Maharashtra)', role: 'Oldest command; covers southern and western peninsula' },
      { name: 'Central Command', hq: 'Lucknow (Uttar Pradesh)', role: 'Covers Uttarakhand LAC and central heartland' },
      { name: 'South Western Command', hq: 'Jaipur (Rajasthan)', role: 'Desert sector security along Indo-Pak border' },
      { name: 'Army Training Command (ARTRAC)', hq: 'Shimla (Himachal Pradesh)', role: 'Formulates operational doctrines and training standards' }
    ]
  },
  {
    service: 'Indian Navy',
    totalCommands: 3,
    commands: [
      { name: 'Western Naval Command', hq: 'Mumbai (Maharashtra)', role: 'Commands naval forces in the Arabian Sea; home to aircraft carrier INS Vikramaditya' },
      { name: 'Eastern Naval Command', hq: 'Visakhapatnam (Andhra Pradesh)', role: 'Commands forces in Bay of Bengal; submarine and aircraft carrier base' },
      { name: 'Southern Naval Command', hq: 'Kochi (Kerala)', role: 'Training Command of the Indian Navy' }
    ]
  },
  {
    service: 'Indian Air Force',
    totalCommands: 7,
    commands: [
      { name: 'Western Air Command', hq: 'New Delhi (Subroto Park)', role: 'Most critical operational command covering north-western skies' },
      { name: 'Eastern Air Command', hq: 'Shillong (Meghalaya)', role: 'Guards eastern sector and Brahmaputra valley' },
      { name: 'Central Air Command', hq: 'Prayagraj / Allahabad (UP)', role: 'Central plains air superiority and strike reserves' },
      { name: 'South Western Air Command', hq: 'Gandhinagar (Gujarat)', role: 'Desert and coastline air defense' },
      { name: 'Southern Air Command', hq: 'Thiruvananthapuram (Kerala)', role: 'Indian Ocean maritime air dominance' },
      { name: 'Training Command', hq: 'Bengaluru (Karnataka)', role: 'All IAF pilot and technical flight training' },
      { name: 'Maintenance Command', hq: 'Nagpur (Maharashtra)', role: 'Repair, overhaul and logistics management' }
    ]
  },
  {
    service: 'Joint / Tri-Services Commands',
    totalCommands: 2,
    commands: [
      { name: 'Andaman & Nicobar Command (ANC)', hq: 'Port Blair', role: 'India first unified tri-service theater command safeguarding Malacca Strait chokepoint' },
      { name: 'Strategic Forces Command (SFC)', hq: 'New Delhi', role: 'Operational control over India land, sea and air nuclear assets' }
    ]
  }
];

export const majorMilitaryOperations = [
  {
    year: '1947–48',
    name: 'First Kashmir War',
    nameHi: 'प्रथम कश्मीर युद्ध',
    details: 'Defended Jammu & Kashmir against tribal raiders backed by regular Pakistani soldiers. Battle of Badgam, Shalateng and Naushera. First PVC awarded to Maj Somnath Sharma.'
  },
  {
    year: '1961',
    name: 'Operation Vijay (Goa)',
    nameHi: 'ऑपरेशन विजय (गोवा मुक्ति)',
    details: 'Liberated Goa, Daman, and Diu from 451 years of Portuguese colonial rule through coordinated tri-service swift action.'
  },
  {
    year: '1971',
    name: 'Operation Trident & Operation Python (1971 War)',
    nameHi: 'ऑपरेशन ट्राइडेंट एवं पाइथन',
    details: 'Indian Navy missile boat attack on Karachi harbour on 4-5 Dec 1971 that devastated Pakistani naval ships. Celebrated annually as Indian Navy Day on 4 December.'
  },
  {
    year: '1984',
    name: 'Operation Meghdoot',
    nameHi: 'ऑपरेशन मेघदूत',
    details: 'Indian Army pre-empted Pakistani capture of Siachen Glacier on 13 April 1984, securing all strategic heights along the Saltoro Ridge.'
  },
  {
    year: '1987',
    name: 'Operation Rajiv (Siachen)',
    nameHi: 'ऑपरेशन राजीव',
    details: 'Naib Subedar Bana Singh captured the highest Pakistani bunker at 21,153 feet on the Saltoro ridge, later renamed Bana Post. Awarded Param Vir Chakra.'
  },
  {
    year: '1988',
    name: 'Operation Cactus',
    nameHi: 'ऑपरेशन कैक्टस (मालदीव)',
    details: 'Paratroopers of the Indian Army flew 2,000 km non-stop to Male within 9 hours, successfully foiling a mercenary coup attempt against Maldives President Gayoom.'
  },
  {
    year: '1999',
    name: 'Operation Vijay (Kargil) & Operation Safed Sagar',
    nameHi: 'ऑपरेशन विजय (कारगिल) एवं ऑपरेशन सफेद सागर',
    details: 'Recapture of strategic Himalayan peaks (Tiger Hill, Tololing, Point 4875) infiltrated by Pakistani forces. IAF used Mirage 2000 precision laser bombing. 4 PVCs awarded: Capt Vikram Batra, Lt Manoj Kumar Pandey, Grenadier Yogendra Singh Yadav, Rifleman Sanjay Kumar.'
  },
  {
    year: '2023',
    name: 'Operation Kaveri',
    nameHi: 'ऑपरेशन कावेरी',
    details: 'Evacuation of over 3,800 Indian citizens stranded in war-torn Sudan utilizing IAF C-130J aircraft and naval frigates INS Teg and INS Sumedha.'
  }
];

export const jointMilitaryExercises = [
  { name: 'Yudh Abhyas', country: 'United States', branch: 'Army', type: 'Annual bilateral infantry exercise' },
  { name: 'Vajra Prahar', country: 'United States', branch: 'Special Forces', type: 'Special Forces counter-terror drills' },
  { name: 'Indra', country: 'Russia', branch: 'Tri-Services', type: 'Joint amphibious and tactical maneuvers' },
  { name: 'Varuna', country: 'France', branch: 'Navy', type: 'Blue water naval tactical combat maneuvers' },
  { name: 'Garuda', country: 'France', branch: 'Air Force', type: 'Air-to-air combat exercises with Rafale jets' },
  { name: 'Malabar', country: 'Quad (India, USA, Japan, Australia)', branch: 'Navy', type: 'Advanced multi-carrier naval drills in Indo-Pacific' },
  { name: 'Mitra Shakti', country: 'Sri Lanka', branch: 'Army', type: 'Semi-urban counter-insurgency training' },
  { name: 'Surya Kiran', country: 'Nepal', branch: 'Army', type: 'High altitude mountain warfare and disaster relief' },
  { name: 'Nomadic Elephant', country: 'Mongolia', branch: 'Army', type: 'Counter-terrorism and UN peacekeeping drills' },
  { name: 'Milan', country: 'Multilateral (50+ friendly foreign navies)', branch: 'Navy', type: 'Premier biennial naval congregation at Visakhapatnam' }
];
