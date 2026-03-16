import { Typewriter } from 'react-simple-typewriter';
import { motion } from 'framer-motion';
import { Github, Mail, ChevronRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative z-10 px-4 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400">
              Aryan Gupta
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-xl md:text-3xl font-medium text-gray-300 mb-8 h-12"
        >
          <span className="mr-2">&gt;</span>
          <Typewriter
            words={[
              'Data Science & AI Student',
              'Python Developer',
              'Linux Enthusiast',
              'Building Projects Daily'
            ]}
            loop={true}
            cursor
            cursorStyle='_'
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12"
        >
          "I learn by building systems, analyzing data, and exploring how software works."
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-6"
        >
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-purple-600/20 text-purple-300 rounded-full font-semibold overflow-hidden border border-purple-500/30 hover:bg-purple-600/30 hover:border-purple-400 hover:text-white transition-all duration-300 glow-purple flex items-center gap-2"
          >
            <span className="relative z-10">View Projects</span>
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 glass rounded-full font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all border border-gray-700/50 flex items-center gap-2"
          >
            <Github size={18} />
            GitHub
          </a>
          
          <a
            href="#contact"
            className="px-8 py-3 glass rounded-full font-semibold text-gray-300 hover:text-white hover:bg-white/10 transition-all border border-gray-700/50 flex items-center gap-2"
          >
            <Mail size={18} />
            Contact
          </a>
        </motion.div>
      </div>
    </section>
  );
};
