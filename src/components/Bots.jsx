import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const botTypes = [
  {
    title: "Autonomous LeadGen",
    desc: "ИИ-агент, который самостоятельно ищет клиентов в соцсетях, анализирует их боли и пишет персонализированные офферы.",
    icon: "🚀",
    color: "from-blue-600 to-highlight"
  },
  {
    title: "AI-Commerce OS",
    desc: "Боты-магазины с полноценным AI-консультантом, который доводит клиента от вопроса до оплаты за секунды.",
    icon: "💎",
    color: "from-purple-600 to-aiPurple"
  },
  {
    title: "Enterprise Automation",
    desc: "Сложные системы автоматизации бизнес-процессов: от записи клиентов до полной синхронизации с CRM.",
    icon: "⚙️",
    color: "from-slate-600 to-gray-400"
  }
];

const AgentSimulator = () => {
  const logs = [
    "Initializing AI Agent...",
    "Connecting to LinkedIn API...",
    "Scanning target niche: 'Web Agencies'...",
    "Found 142 potential leads...",
    "Analyzing profile: 'Alex Digital'...",
    "Detected pain point: 'Lack of lead generation'",
    "Generating personalized offer...",
    "Sending message via AI-bridge...",
    "Lead responding... analyzing sentiment...",
    "Meeting scheduled for tomorrow 10:00 AM",
    "Updating CRM database...",
    "Searching for new leads...",
  ];

  const [currentLogIndex, setCurrentLogIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogIndex((prev) => (prev + 1) % logs.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-black rounded-2xl border border-white/10 p-4 font-mono text-xs overflow-hidden h-48 relative group shadow-2xl">
      <div className="flex items-center gap-2 mb-3 border-b border-white/10 pb-2">
        <div className="w-3 h-3 rounded-full bg-red-500/50" />
        <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
        <div className="w-3 h-3 rounded-full bg-green-500/50" />
        <span className="text-gray-500 ml-2 uppercase tracking-tighter">ai_agent_terminal.exe</span>
      </div>
      <div className="space-y-2">
        {logs.slice(0, currentLogIndex + 1).map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`flex gap-2 ${i === currentLogIndex ? "text-highlight" : "text-gray-500"}`}
          >
            <span className="text-gray-600">[{new Date().toLocaleTimeString()}]</span>
            <span>{log}</span>
          </motion.div>
        ))}
      </div>
      <div className="absolute bottom-2 right-4 text-[10px] text-gray-600 animate-pulse">
        System Active: Listening...
      </div>
    </div>
  );
};

const Bots = () => {
  return (
    <section id="боты" className="py-32 px-6 relative bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-6">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-highlight uppercase tracking-widest text-sm mb-4 block"
            >
              Automation
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="text-6xl md:text-8xl font-black vanguard-text"
            >
              Умные <span className="italic font-light text-gray-500">Боты</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 text-lg max-w-sm"
          >
            Создаю инструменты, которые работают, пока вы отдыхаете. Автоматизация, которая реально приносит деньги.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {botTypes.map((bot, idx) => (
              <motion.div
                key={bot.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group relative p-1 rounded-3xl bg-gradient-to-br from-white/10 to-transparent transition-all duration-500 mb-6"
              >
                <div className="bg-aiDark p-8 rounded-[calc(1.5rem-1px)] h-full border border-white/5">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${bot.color} flex items-center justify-center text-3xl mb-6 shadow-lg`}>
                    {bot.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 group-hover:text-highlight transition-colors">{bot.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{bot.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-highlight/20 blur-3xl rounded-full animate-pulse" />
            <AgentSimulator />
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 font-mono italic">
                Real-time LeadGen Engine Simulation v1.0.4
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Bots;
