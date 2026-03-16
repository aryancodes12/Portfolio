import { ParticleBackground } from './components/ParticleBackground';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { TechStack } from './components/TechStack';
import { Projects } from './components/Projects';
import { GitHubStats } from './components/GitHubStats';
import { Contact } from './components/Contact';
import { TerminalEasterEgg } from './components/TerminalEasterEgg';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white selection:bg-purple-500/30 selection:text-purple-200">
      <ParticleBackground />
      
      <main className="relative z-10 w-full">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <GitHubStats />
        <Contact />
      </main>

      <TerminalEasterEgg />
    </div>
  )
}

export default App
