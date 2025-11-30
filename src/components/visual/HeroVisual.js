import React from 'react';
import { motion } from 'framer-motion';
import avatarSrc from '../../Assets/Oluwatosin_Adelaja_2-2.jpg';
import usePrefersReducedMotion from '../../hooks/usePrefersReducedMotion';

function HeroVisual() {
  const circles = Array.from({ length: 6 });
  const reduce = usePrefersReducedMotion();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative h-[380px] md:h-[460px]"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-72 h-72 md:w-96 md:h-96">
          {!reduce && circles.map((_, i) => (
            <motion.span
              key={i}
              className="absolute inset-0 rounded-full border border-brand-purple/30"
              style={{ filter: 'drop-shadow(0 0 6px rgba(168,85,247,0.25))' }}
              animate={{ rotate: 360 }}
              transition={{
                duration: 24 + i * 6,
                repeat: Infinity,
                ease: 'linear'
              }}
            />
          ))}
          {!reduce && (
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-purple/30 via-brand-glow/20 to-brand-pink/30 backdrop-blur-xl"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />
          )}
          <motion.div
            className="absolute inset-6 rounded-full overflow-hidden flex items-center justify-center shadow-glow ring-1 ring-brand-purple/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <img
              src={avatarSrc}
              alt="Professional headshot"
              className="w-full h-full object-cover select-none"
              draggable={false}
              loading="lazy"
            />
            {!reduce && (
              <span className="absolute inset-0 rounded-full bg-gradient-to-br from-brand-purple/20 via-transparent to-brand-pink/30 mix-blend-overlay" />
            )}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default HeroVisual;