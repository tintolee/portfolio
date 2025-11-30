import React from 'react';
import { motion } from 'framer-motion';
import avatarSrc from '../../Assets/Oluwatosin_Adelaja_2-2.jpg';

/*
  Avatar component: displays a professional headshot with:
  - Neutral, non-identifying alt text per accessibility/privacy guidance
  - Responsive sizing
  - Subtle animated entrance & hover accent
  - Optional future enhancement: swap to <picture> with WebP sources
*/
function Avatar({ size = 'lg', className = '' }) {
  const sizes = {
    sm: 'w-24 h-24',
    md: 'w-32 h-32',
    lg: 'w-40 h-40',
    xl: 'w-52 h-52'
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`relative inline-block ${sizes[size]} ${className}`}
    >
      <img
        src={avatarSrc}
        alt="Professional headshot"
        loading="lazy"
        className="object-cover w-full h-full rounded-2xl border border-white/10 shadow-soft hover:shadow-glow transition"
      />
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
    </motion.div>
  );
}

export default Avatar;
