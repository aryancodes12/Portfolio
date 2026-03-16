import type { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  id: string;
  title?: string;
  children: ReactNode;
  className?: string;
}

export const SectionContainer = ({ id, title, children, className = '' }: SectionProps) => {
  return (
    <section id={id} className={`py-16 min-h-screen flex flex-col justify-center relative z-10 ${className}`}>
      <div className="max-w-6xl mx-auto px-4 w-full">
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 mb-4 inline-block">
              {title}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] rounded-full" />
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
};
