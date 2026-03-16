import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard = ({ children, className = '', hoverEffect = false }: GlassCardProps) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -5 } : {}}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`glass rounded-2xl p-6 ${hoverEffect ? 'glass-hover cursor-pointer transition-all duration-300' : ''} ${className}`}
    >
      {children}
    </motion.div>
  );
};
