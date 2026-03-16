import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X } from 'lucide-react';

interface CommandOutput {
  id: number;
  text: string | React.ReactNode;
  isCommand: boolean;
}

export const TerminalEasterEgg = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    { id: 0, text: 'Welcome to AryanOS v1.0.0', isCommand: false },
    { id: 1, text: 'Type "help" to see available commands.', isCommand: false }
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle terminal with backtick ` key
      if (e.key === '`') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      
      // Close on escape
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const cmd = input.trim().toLowerCase();
    const newHistory = [...history, { id: Date.now(), text: `visitor@portfolio:~$ ${cmd}`, isCommand: true }];

    let response: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        response = (
          <div className="flex flex-col gap-1 text-cyan-300">
            <span>Available commands:</span>
            <span className="ml-4"><span className="text-yellow-300">about</span>    - Who is Aryan?</span>
            <span className="ml-4"><span className="text-yellow-300">skills</span>   - List tech stack</span>
            <span className="ml-4"><span className="text-yellow-300">projects</span> - View top projects</span>
            <span className="ml-4"><span className="text-yellow-300">clear</span>    - Clear terminal</span>
          </div>
        );
        break;
      case 'about':
        response = "Aryan Gupta is a first-year B.Sc Data Science & AI student learning by building systems.";
        break;
      case 'skills':
        response = "Python, R, SQL, Pandas, Linux, Git, React, Tailwindcss";
        break;
      case 'projects':
        response = "1. Auth System\n2. Hackathon Data Analysis\n3. Internship DB\n4. CLI Task Manager";
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      case 'sudo':
        response = "nice try. This incident will be reported.";
        break;
      default:
        response = `Command not found: ${cmd}`;
    }

    setHistory([...newHistory, { id: Date.now() + 1, text: response, isCommand: false }]);
    setInput('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.95 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="fixed bottom-6 right-6 w-full max-w-md z-50 glass border border-purple-500/30 glow-purple rounded-xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className="bg-black/80 px-4 py-2 flex items-center justify-between border-b border-white/10 cursor-move">
            <div className="flex items-center gap-2">
              <TerminalIcon size={16} className="text-cyan-400" />
              <span className="text-xs font-mono text-gray-300 font-bold tracking-widest">ARYAN_OS</span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          </div>
          
          {/* Terminal Body */}
          <div className="bg-[#0a0a0a]/95 p-4 font-mono text-sm h-64 overflow-y-auto" onClick={() => inputRef.current?.focus()}>
            <div className="flex flex-col gap-2">
              {history.map((item) => (
                <div key={item.id} className={item.isCommand ? 'text-white' : 'text-gray-400 whitespace-pre-wrap'}>
                  {item.text}
                </div>
              ))}
            </div>
            
            <form onSubmit={handleCommand} className="mt-2 flex items-center">
              <span className="text-green-400 mr-2">visitor@portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-grow bg-transparent border-none outline-none text-white font-mono"
                autoComplete="off"
                spellCheck="false"
              />
            </form>
            <div ref={bottomRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
