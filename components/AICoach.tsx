
import React, { useState, useRef, useEffect } from 'react';
import { getFitnessAdvice } from '../geminiService';
import { Message } from '../types';

interface AICoachProps {
  t: any;
  lang: string;
}

const AICoach: React.FC<AICoachProps> = ({ t, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: t.ai.welcome }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: t.ai.welcome }]);
  }, [lang, t.ai.welcome]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsTyping(true);

    const advice = await getFitnessAdvice(`(User Language: ${lang}) ${userMsg}`);
    
    setIsTyping(false);
    setMessages(prev => [...prev, { role: 'assistant', content: advice }]);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-8 ${t.dir === 'rtl' ? 'left-8' : 'right-8'} z-50 bg-accent hover:bg-red-700 text-white w-16 h-16 rounded-full shadow-2xl flex items-center justify-center group transition-all duration-300 transform hover:scale-110 border-4 border-black`}
      >
        <i className="fas fa-robot text-2xl group-hover:rotate-12 transition-transform"></i>
      </button>

      {isOpen && (
        <div className={`fixed inset-0 md:inset-auto md:bottom-28 ${t.dir === 'rtl' ? 'md:left-8' : 'md:right-8'} z-50 w-full md:w-[450px] md:h-[600px] bg-neutral-900 border border-neutral-800 md:rounded-xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-300`}>
          <div className="bg-black p-6 border-b border-neutral-800 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <i className="fas fa-bolt text-white"></i>
              </div>
              <div>
                <h3 className="font-oswald font-bold text-lg leading-none uppercase">{t.ai.header}</h3>
                <span className="text-[10px] text-accent font-bold tracking-widest uppercase animate-pulse">{t.ai.status}</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-neutral-500 hover:text-white transition-colors">
              <i className="fas fa-times text-xl"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-neutral-950/50">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-4 rounded-lg text-sm leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-accent text-white rounded-tr-none' 
                    : 'bg-neutral-800 text-neutral-300 rounded-tl-none border border-neutral-700'
                }`}>
                  {m.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-neutral-800 p-4 rounded-lg rounded-tl-none flex gap-1">
                  <div className="w-1.5 h-1.5 bg-neutral-500 rounded-full animate-bounce"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-black border-t border-neutral-800">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={t.ai.placeholder}
                className="flex-1 bg-neutral-900 border border-neutral-800 rounded px-4 py-3 text-sm focus:outline-none focus:border-accent transition-colors"
              />
              <button 
                onClick={handleSend}
                disabled={!input.trim() || isTyping}
                className="bg-accent hover:bg-red-700 text-white w-12 rounded flex items-center justify-center transition-colors"
              >
                <i className={`fas ${t.dir === 'rtl' ? 'fa-paper-plane' : 'fa-paper-plane'} ${t.dir === 'rtl' ? 'scale-x-[-1]' : ''}`}></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AICoach;
