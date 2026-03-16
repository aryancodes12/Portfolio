import { motion } from 'framer-motion';
import { SectionContainer } from './SectionContainer';
import { GlassCard } from './GlassCard';
import { Code2, BarChart3, Database, Wrench } from 'lucide-react';

const techCategories = [
  {
    title: 'Programming',
    icon: <Code2 className="text-purple-400 mb-4" size={32} />,
    skills: ['Python', 'R'],
    glowClass: 'glow-purple'
  },
  {
    title: 'Data Analysis',
    icon: <BarChart3 className="text-blue-400 mb-4" size={32} />,
    skills: ['Excel', 'Pandas', 'Matplotlib', 'Seaborn'],
    glowClass: 'glow-blue'
  },
  {
    title: 'Databases',
    icon: <Database className="text-cyan-400 mb-4" size={32} />,
    skills: ['MySQL'],
    glowClass: 'glow-cyan'
  },
  {
    title: 'Tools & Environment',
    icon: <Wrench className="text-green-400 mb-4" size={32} />,
    skills: ['Linux (Arch / EndeavourOS)', 'Git', 'GitHub', 'VS Code'],
    glowClass: 'shadow-[0_0_20px_rgba(74,222,128,0.5)]'
  }
];

const learningTopics = [
  { topic: 'Python (CLI & Advanced)', progress: 95, color: 'bg-yellow-400' },
  { topic: 'Data Analysis (R & Pandas)', progress: 85, color: 'bg-blue-400' },
  { topic: 'Algorithms & Problem Solving', progress: 80, color: 'bg-orange-500' },
  { topic: 'Git & Version Control', progress: 75, color: 'bg-purple-400' },
  { topic: 'Linux Environments', progress: 65, color: 'bg-green-400' }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { x: -30, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: { type: "spring" as const, stiffness: 100 }
  }
};

export const TechStack = () => {
  return (
    <SectionContainer id="skills" title="Tech Stack">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {techCategories.map((category, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <GlassCard hoverEffect={true} className={`h-full border-t-2 border-t-transparent hover:border-t-purple-500`}>
              <div className="flex flex-col items-center text-center">
                <div className={`p-4 rounded-full bg-black/50 mb-4 ${category.glowClass}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-6">{category.title}</h3>
                
                <div className="flex flex-wrap justify-center gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span 
                      key={sIdx}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-sm text-gray-300 hover:text-white hover:bg-white/10 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <div className="mt-20">
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-8 inline-block">
          Currently Learning
        </h3>
        
        <div className="grid md:grid-cols-2 gap-8">
          <GlassCard hoverEffect={true} className="border border-purple-500/20 hover:border-purple-500/50 transition-colors">
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {learningTopics.map((item, idx) => (
                <motion.div key={idx} variants={itemVariants} className="space-y-2 group">
                  <div className="flex justify-between text-sm font-medium">
                    <span className="text-gray-300 group-hover:text-white transition-colors">{item.topic}</span>
                    <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors">{item.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden relative">
                    <div className="absolute inset-0 bg-white/5" />
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, delay: 0.3 + idx * 0.1, type: "spring", stiffness: 50 }}
                      className={`h-full ${item.color} shadow-[0_0_15px_currentColor] opacity-90 relative overflow-hidden`}
                    >
                       <motion.div 
                         animate={{ x: ["-100%", "100%"] }}
                         transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                         className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                       />
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </GlassCard>

          <div className="flex items-center justify-center p-8 group">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative w-full aspect-square max-w-sm rounded-full border border-gray-700/50 flex items-center justify-center glow-blue glass animation-spin-slow group-hover:border-blue-500/50 transition-colors duration-500"
            >
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                className="absolute w-[85%] h-[85%] rounded-full border-2 border-dashed border-purple-500/30 flex items-center justify-center group-hover:border-purple-500/60 transition-colors"
              >
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
                  className="absolute w-[70%] h-[70%] rounded-full border-t-2 border-l-2 border-cyan-500/40 glow-cyan group-hover:border-cyan-400 group-hover:glow-blue transition-all"
                />
              </motion.div>
              
              <motion.div 
                whileHover={{ scale: 1.1 }}
                className="text-center z-10 glass p-8 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-[0_0_30px_rgba(124,58,237,0.2)] group-hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-shadow duration-500 relative overflow-hidden cursor-default"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-2 relative z-10">
                  Growth Mindset
                </h3>
                <p className="text-gray-300 text-sm font-medium relative z-10">Always expanding.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};
