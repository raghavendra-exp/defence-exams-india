import React, { useState } from 'react';
import { 
  Zap, 
  Clock, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Breadcrumb } from '../components/Breadcrumb';

interface SpeedLabPageProps {
  onNavigate: (routeId: string, params?: Record<string, string>) => void;
}

export const SpeedLabPage: React.FC<SpeedLabPageProps> = ({ onNavigate }) => {
  const { lang, t } = useLanguage();

  const shortcutModules = [
    {
      title: 'Time & Work: LCM Efficiency Method vs Fraction Algebra',
      titleHi: 'समय एवं कार्य: ल.स.प. दक्षता विधि बनाम पारंपरिक भिन्न विधि',
      subject: 'Arithmetic',
      examTag: 'CDS, AFCAT, Agniveer Army/Navy, Coast Guard',
      problem: 'A can complete a project in 15 days and B in 20 days. If they work together, in how many days will the project finish?',
      problemHi: 'A किसी कार्य को 15 दिनों में तथा B 20 दिनों में समाप्त कर सकता है। दोनों मिलकर कितने दिनों में कार्य पूर्ण करेंगे?',
      normalMethod: [
        '1. Find 1 day work of A: 1/15',
        '2. Find 1 day work of B: 1/20',
        '3. Add fractions: 1/15 + 1/20 = (4 + 3)/60 = 7/60',
        '4. Invert to get total days: 60/7 = 8.57 days (High chance of fraction calculation errors under pressure)'
      ],
      shortcutMethod: [
        '1. Assume Total Work = LCM of (15, 20) = 60 units.',
        '2. Daily efficiency: A = 60 / 15 = 4 units/day; B = 60 / 20 = 3 units/day.',
        '3. Combined daily speed = 4 + 3 = 7 units/day.',
        '4. Total days = 60 / 7 = 8 4/7 days. (Completed mentally within 5 seconds!)'
      ],
      speedGain: '70% Faster Execution'
    },
    {
      title: 'Average Speed: Harmonic Mean vs Total Distance Equation',
      titleHi: 'औसत चाल: हरात्मक माध्य शॉर्टकट',
      subject: 'Arithmetic & Speed',
      examTag: 'AFCAT, CDS, Agniveer, Navik GD',
      problem: 'An aircraft flies from Delhi to Leh at 400 km/h and returns at 600 km/h. What is the average speed of the round trip?',
      problemHi: 'एक विमान दिल्ली से लेह 400 किमी/घंटा की गति से जाता है तथा 600 किमी/घंटा की गति से लौटता है। पूरी यात्रा की औसत चाल क्या है?',
      normalMethod: [
        '1. Let distance be d km.',
        '2. Forward time t1 = d/400; Return time t2 = d/600.',
        '3. Total time = (3d + 2d)/1200 = 5d/1200 = d/240.',
        '4. Average speed = 2d / (d/240) = 480 km/h. (Requires multiple algebraic cancellations)'
      ],
      shortcutMethod: [
        '1. Direct Harmonic Mean for two equal distances: V_avg = (2 * v1 * v2) / (v1 + v2)',
        '2. V_avg = (2 * 400 * 600) / (400 + 600) = 480,000 / 1000 = 480 km/h.',
        '3. Instant calculation with zero risk of distance variables.'
      ],
      speedGain: '80% Faster Execution'
    },
    {
      title: 'Trigonometry: Triple Angle Product Identity',
      titleHi: 'त्रिकोणमिति: sin(x) sin(60-x) sin(60+x) सर्वसमिका',
      subject: 'Higher Mathematics',
      examTag: 'UPSC NDA Paper I, Navy SSR, Airforce Science',
      problem: 'Find the exact value of sin 20° · sin 40° · sin 80°.',
      problemHi: 'sin 20° · sin 40° · sin 80° का सटीक मान ज्ञात कीजिए।',
      normalMethod: [
        '1. Multiply and divide by 2: (1/2) [2 sin 40° sin 20°] sin 80°',
        '2. Use 2 sin A sin B = cos(A-B) - cos(A+B): (1/2) [cos 20° - cos 60°] sin 80°',
        '3. Expand again with cos 60° = 1/2 and apply 2 sin A cos B formulas.',
        '4. Takes 2 to 3 minutes of rigorous trigonometric manipulation.'
      ],
      shortcutMethod: [
        '1. Identify standard form: sin θ · sin(60° - θ) · sin(60° + θ) = (1/4) sin 3θ for θ = 20°.',
        '2. Answer = (1/4) sin(3 * 20°) = (1/4) sin 60° = (1/4) * (sqrt(3)/2) = sqrt(3) / 8.',
        '3. Solved in 6 seconds.'
      ],
      speedGain: '90% Faster Execution'
    }
  ];

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: 'Defence Exams', labelHi: 'रक्षा परीक्षाएं', routeId: 'dashboard' },
          { label: 'Speed & Shortcut Lab', labelHi: 'स्पीड एवं शॉर्टकट', routeId: 'speed-lab' }
        ]}
        onNavigate={onNavigate}
      />

      {/* Header Banner */}
      <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-slate-800 to-amber-950 text-white p-6 sm:p-8 shadow-xl border border-amber-500/20">
        <div className="max-w-2xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-400/30">
            <Zap className="h-3.5 w-3.5" />
            <span>{lang === 'hi' ? 'समय प्रबंधन एवं तीव्र समाधान' : 'Rapid Problem Solving & Speed Drills'}</span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-black">
            {lang === 'hi' ? 'डिफेंस परीक्षा स्पीड एवं शॉर्टकट लैब' : 'Defence Exam Speed & Shortcut Lab'}
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {lang === 'hi' 
              ? 'पारंपरिक विधि बनाम शॉर्टकट तकनीक की प्रत्यक्ष तुलना। कभी भी ऐसा शॉर्टकट न अपनाएं जो गलत उत्तर दे।'
              : 'Direct side-by-side comparison of normal algebraic methods vs authentic verified shortcuts for competitive speed.'}
          </p>
        </div>
      </div>

      {/* Shortcut Modules List */}
      <div className="space-y-6">
        {shortcutModules.map((item, idx) => (
          <div
            key={idx}
            className="rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 shadow-xs space-y-4 text-xs"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 dark:border-slate-800 pb-3">
              <div>
                <span className="px-2 py-0.5 rounded text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300">
                  {item.subject}
                </span>
                <h2 className="text-base font-extrabold text-slate-900 dark:text-white mt-1">
                  {lang === 'hi' ? item.titleHi : item.title}
                </h2>
                <div className="text-xs text-slate-400 mt-0.5">Relevant for: {item.examTag}</div>
              </div>

              <span className="px-3 py-1 rounded-full font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 shrink-0 text-center">
                {item.speedGain}
              </span>
            </div>

            {/* Problem Statement */}
            <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60 space-y-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase">Sample Exam Problem:</span>
              <p className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">
                {lang === 'hi' ? item.problemHi : item.problem}
              </p>
            </div>

            {/* Comparison Side-by-Side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Normal Method */}
              <div className="p-4 rounded-2xl bg-red-50/50 dark:bg-red-950/20 border border-red-200 dark:border-red-900/40 space-y-2">
                <span className="font-extrabold text-red-900 dark:text-red-300 text-xs block">
                  Conventional Method (Slow & Error Prone):
                </span>
                <ul className="space-y-1.5 text-slate-600 dark:text-slate-300 text-[11px] leading-relaxed">
                  {item.normalMethod.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ul>
              </div>

              {/* Shortcut Method */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/40 space-y-2">
                <span className="font-extrabold text-emerald-900 dark:text-emerald-300 text-xs flex items-center gap-1.5">
                  <Sparkles className="h-4 w-4 text-emerald-600" />
                  <span>Defence Master Shortcut (Lightning Fast):</span>
                </span>
                <ul className="space-y-1.5 text-slate-700 dark:text-slate-200 text-[11px] leading-relaxed font-medium">
                  {item.shortcutMethod.map((step, sIdx) => (
                    <li key={sIdx}>{step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
