import { SectionContainer } from './SectionContainer';
import { GlassCard } from './GlassCard';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Contact = () => {
  return (
    <SectionContainer id="contact" title="Get In Touch">
      <div className="flex justify-center mt-8">
        <GlassCard className="max-w-xl w-full text-center">
          <p className="text-gray-300 mb-8 flex-grow leading-relaxed">
            I'm currently looking for new opportunities, collaborations, and projects to learn from. My inbox is always open.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href="mailto:aryansynthh@gmail.com" 
              className="group flex items-center gap-3 px-6 py-3 rounded-full glass hover:bg-white/10 transition-all border border-gray-700/50 hover:border-blue-500/50 glow-blue text-gray-300 hover:text-white"
            >
              <Mail className="text-cyan-400 group-hover:scale-110 transition-transform" size={20} />
              <span className="font-medium">aryansynthh@gmail.com</span>
            </a>
            
            <div className="flex gap-4">
              <a 
                href="https://linkedin.com/in/aryan-rajesh-gupta-386449360" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full glass hover:bg-white/10 transition-all border border-gray-700/50 hover:border-blue-500/50 glow-blue text-gray-300 hover:text-white group"
              >
                <Linkedin className="text-blue-400 group-hover:scale-110 transition-transform" size={24} />
              </a>
              <a 
                href="https://github.com/aryancodes12" 
                target="_blank" 
                rel="noreferrer"
                className="p-3 rounded-full glass hover:bg-white/10 transition-all border border-gray-700/50 hover:border-purple-500/50 glow-purple text-gray-300 hover:text-white group"
              >
                <Github className="text-purple-400 group-hover:scale-110 transition-transform" size={24} />
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-sm text-gray-500">
            <p>Built with React & Tailwind CSS.</p>
            <p className="mt-1">Press <code className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-purple-400">`</code> for a secret.</p>
          </div>
        </GlassCard>
      </div>
    </SectionContainer>
  );
};
