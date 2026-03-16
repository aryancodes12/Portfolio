import { motion } from 'framer-motion';
import { SectionContainer } from './SectionContainer';
import { GlassCard } from './GlassCard';
import { Terminal, Code2, Server, LineChart } from 'lucide-react';

const interests = [
  { name: 'Data Science', icon: <LineChart size={18} className="text-cyan-400" /> },
  { name: 'Software Development', icon: <Code2 size={18} className="text-blue-400" /> },
  { name: 'CLI Tools', icon: <Terminal size={18} className="text-purple-400" /> },
  { name: 'Linux Systems', icon: <Terminal size={18} className="text-green-400" /> },
  { name: 'Backend Development', icon: <Server size={18} className="text-orange-400" /> },
];

const timeline = [
  {
    year: '2026',
    title: 'Data Science & AI focus',
    description: 'Studying Data Science & AI and building projects in Python, R, SQL, and data analysis.'
  },
  {
    year: '2025',
    title: 'Foundation',
    description: 'Started learning Python and programming fundamentals.'
  }
];

export const About = () => {
  return (
    <SectionContainer id="about" title="About Me">
      <div className="grid md:grid-cols-2 gap-12 items-start mt-8">
        
        {/* Left Column: Bio & Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Aryan Gupta is a first-year <strong className="text-purple-400 font-semibold">B.Sc Data Science & AI student</strong> who enjoys learning by building real projects.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              He focuses on understanding systems from the ground up — including Python programming, data analysis, databases, and Linux environments.
            </p>
            
            <GlassCard className="border-l-4 border-l-blue-500 mb-8 bg-blue-900/10">
              <p className="text-xl italic font-medium text-gray-200 m-0">
                "Build <span className="text-purple-400">→</span> Break <span className="text-purple-400">→</span> Fix <span className="text-purple-400">→</span> Learn."
              </p>
            </GlassCard>
            
            <h3 className="text-xl font-bold mb-4 text-white">Current Interests</h3>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest, idx) => (
                <span key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-gray-300 hover:text-white transition-colors cursor-default hover:bg-white/10 border border-gray-700/50">
                  {interest.icon}
                  {interest.name}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right Column: Timeline */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <GlassCard className="relative h-full">
            <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
              <span className="p-2 rounded-lg bg-purple-500/20 text-purple-400">
                <Terminal size={20} />
              </span>
              Learning Journey
            </h3>
            
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-600 before:to-transparent">
              
              {timeline.map((item, idx) => (
                <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  
                  {/* Timeline dot */}
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#0a0a0a] bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)] z-10 text-white font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  
                  {/* Timeline content */}
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass p-5 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 border border-gray-700/50">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="text-lg font-bold text-white">{item.title}</h4>
                      <span className="text-sm font-medium text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded-md">{item.year}</span>
                    </div>
                    <p className="text-gray-400 text-sm">{item.description}</p>
                  </div>
                  
                </div>
              ))}
              
            </div>
          </GlassCard>
        </motion.div>
        
      </div>
    </SectionContainer>
  );
};
