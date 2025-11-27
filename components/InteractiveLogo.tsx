import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export const InteractiveLogo: React.FC<InteractiveLogoProps> = ({ 
  size = 120, 
  className = "",
  showText = true
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Globe paths (longitude/latitude lines)
  const globeLines = [
    "M100 20 C 60 20 20 60 20 100 S 60 180 100 180 S 180 140 180 100 S 140 20 100 20", // Outer circle
    "M100 20 C 120 40 130 70 130 100 C 130 130 120 160 100 180", // Right meridian
    "M100 20 C 80 40 70 70 70 100 C 70 130 80 160 100 180", // Left meridian
    "M25 80 Q 100 110 175 80", // Lat 1
    "M25 120 Q 100 150 175 120", // Lat 2
  ];

  return (
    <div 
      className={`relative flex flex-col items-center justify-center ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setIsClicked(false); }}
      onClick={() => setIsClicked(!isClicked)}
      style={{ cursor: 'pointer' }}
    >
      <motion.svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {/* Definition for gradients */}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#c5a059" />
            <stop offset="50%" stopColor="#eecf8a" />
            <stop offset="100%" stopColor="#c5a059" />
          </linearGradient>
        </defs>

        {/* Outer Rotating Ring - Resembles a compass or seal */}
        <motion.g
          style={{ originX: '100px', originY: '100px' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="100" cy="100" r="90" stroke="url(#goldGradient)" strokeWidth="2" fill="none" strokeDasharray="5, 5" />
        </motion.g>
        
        {/* Secondary Ring - Only spins on hover */}
        <motion.g
           style={{ originX: '100px', originY: '100px' }}
           variants={{
             initial: { rotate: 0, scale: 1 },
             hover: { rotate: -180, scale: 1.05 }
           }}
           transition={{ duration: 1.5, type: 'spring' }}
        >
             <circle cx="100" cy="100" r="82" stroke="#0f172a" strokeWidth="1" fill="none" />
        </motion.g>

        {/* The Globe Structure */}
        <motion.g 
          style={{ originX: '100px', originY: '100px' }}
          variants={{
            initial: { scale: 1 },
            hover: { scale: 0.95 }
          }}
        >
          {globeLines.map((d, i) => (
            <motion.path
              key={i}
              d={d}
              fill="none"
              stroke={isClicked ? "#c5a059" : "#0f172a"}
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: i * 0.1 }}
            />
          ))}
        </motion.g>

        {/* The Stylized 'E' / Checkmark in the Center */}
        <motion.path
          d="M75 100 L 95 125 L 135 75" // Checkmark shape
          fill="none"
          stroke="#c5a059"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          variants={{
            initial: { pathLength: 0, opacity: 0, y: 0 },
            hover: { pathLength: 1, opacity: 1, y: -5 }
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Airplane flying around */}
        <motion.g
           animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
           transition={{ duration: 3, ease: "easeInOut", repeat: Infinity }}
           style={{ originX: '100px', originY: '100px' }}
        >
           <motion.path 
             d="M100 10 L 105 25 L 100 20 L 95 25 Z" 
             fill="#0f172a"
             variants={{
                initial: { opacity: 0 },
                hover: { opacity: 1 }
             }}
           />
        </motion.g>

        {/* "Approved" Stamp Effect on Click */}
        <motion.g
          initial={{ opacity: 0, scale: 2, rotate: -20 }}
          animate={isClicked ? { opacity: 1, scale: 1, rotate: -10 } : { opacity: 0, scale: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
           <rect x="50" y="80" width="100" height="40" rx="4" stroke="#c5a059" strokeWidth="3" fill="rgba(255,255,255,0.9)" />
           <text x="100" y="105" textAnchor="middle" fill="#c5a059" fontSize="14" fontWeight="bold" fontFamily="serif">ELITE APPROVED</text>
        </motion.g>

      </motion.svg>
      
      {showText && (
        <div className="mt-2 text-center">
            <h1 className="font-serif text-2xl font-bold text-elite-navy tracking-widest uppercase">Elite</h1>
            <p className="font-sans text-xs text-elite-gold font-bold tracking-[0.2em]">VISA CONSULTANTS</p>
        </div>
      )}
    </div>
  );
};