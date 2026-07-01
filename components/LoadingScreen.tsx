'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Props {
  onDone: () => void;
}

const steps = [
  { label: 'INITIALIZING', duration: 500 },
  { label: 'LOADING MODULES', duration: 700 },
  { label: 'ARYAN.EXE', duration: 600 },
  { label: 'ACCESS GRANTED', duration: 500 },
];

export default function LoadingScreen({ onDone }: Props) {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let elapsed = 0;

    const totalDuration = steps.reduce((a, s) => a + s.duration, 0);

    const timer = setInterval(() => {
      elapsed += 50;
      setProgress(Math.min((elapsed / totalDuration) * 100, 100));

      let cumulative = 0;
      for (let i = 0; i < steps.length; i++) {
        cumulative += steps[i].duration;
        if (elapsed < cumulative) {
          setStep(i);
          break;
        }
      }

      if (elapsed >= totalDuration + 300) {
        clearInterval(timer);
        onDone();
      }
    }, 50);

    return () => clearInterval(timer);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#0A0A0A',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        gap: '2rem',
      }}
    >
      {/* Status label */}
      <motion.p
        key={step}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        style={{
          fontFamily: 'var(--font-label)',
          fontSize: '14px',
          letterSpacing: '0.3em',
          color: 'rgba(255,255,255,0.4)',
        }}
      >
        {steps[step].label}
      </motion.p>

      {/* Progress bar */}
      <div style={{ width: '280px', height: '1px', background: 'rgba(255,255,255,0.1)', position: 'relative' }}>
        <motion.div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            background: '#4F7DF3',
            width: `${progress}%`,
            transition: 'width 0.05s linear',
          }}
        />
      </div>

      {/* Main title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: step >= 2 ? 1 : 0 }}
        transition={{ duration: 0.5 }}
        style={{
          fontFamily: 'var(--font-hero)',
          fontSize: 'clamp(40px, 8vw, 80px)',
          color: '#FFFFFF',
          letterSpacing: '0.05em',
        }}
      >
        ARYAN.EXE
      </motion.h1>

      {step >= 3 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{
            fontFamily: 'var(--font-label)',
            fontSize: '13px',
            letterSpacing: '0.4em',
            color: '#4F7DF3',
          }}
        >
          ACCESS GRANTED
        </motion.p>
      )}
    </motion.div>
  );
}
