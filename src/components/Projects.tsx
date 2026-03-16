import { motion } from 'framer-motion';
import { SectionContainer } from './SectionContainer';
import { GlassCard } from './GlassCard';
import { Github, ExternalLink, Lock, Database, Code2, LineChart, CheckSquare } from 'lucide-react';

const projects = [
  {
    title: 'Authentication-System',
    description: 'A modular CLI authentication system repository from aryancodes12. Implements user registration and data persistence.',
    tech: ['Python'],
    icon: <Lock className="text-purple-400" size={24} />,
    githubUrl: 'https://github.com/aryancodes12/Authentication-System'
  },
  {
    title: 'Data-Analysis-in-R',
    description: 'Data analysis portfolio project utilizing R for statistical modeling and data visualization.',
    tech: ['R', 'Data Analysis'],
    icon: <LineChart className="text-cyan-400" size={24} />,
    githubUrl: 'https://github.com/aryancodes12/Data-Analysis-in-R'
  },
  {
    title: 'Task-manager-CLI',
    description: 'A command-line task manager application designed for high-speed terminal-based productivity.',
    tech: ['Python', 'CLI'],
    icon: <CheckSquare className="text-orange-400" size={24} />,
    githubUrl: 'https://github.com/aryancodes12/Task-manager-CLI'
  },
  {
    title: 'Stone-Paper-Scissors',
    description: 'A fun implementation of the classic Rock Paper Scissors game.',
    tech: ['Python'],
    icon: <Code2 className="text-blue-400" size={24} />,
    githubUrl: 'https://github.com/aryancodes12/Stone-Paper-Scissors'
  },
  {
    title: 'Guess-the-number',
    description: 'An interactive console-based number guessing game.',
    tech: ['Python'],
    icon: <Database className="text-green-400" size={24} />,
    githubUrl: 'https://github.com/aryancodes12/Guess-the-number'
  }
];

export const Projects = () => {
  return (
    <SectionContainer id="projects" title="Projects">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <GlassCard hoverEffect={true} className="h-full flex flex-col relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-bl-full -z-10 transition-transform group-hover:scale-110" />
              
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 glass rounded-xl bg-black/40">
                  {project.icon}
                </div>
                <div className="flex gap-2">
                  <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-full hover:bg-white/10">
                    <Github size={18} />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors p-2 glass rounded-full hover:bg-white/10 hidden group-hover:block">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-gray-700/50">
                {project.tech.map((t, tIdx) => (
                  <span key={tIdx} className="text-xs font-mono text-cyan-300 font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  );
};
