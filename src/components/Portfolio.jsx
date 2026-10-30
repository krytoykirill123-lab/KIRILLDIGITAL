import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: "ai-agency",
    title: "AI Agency Landing",
    category: "Web Experience",
    desc: "Концепт сайта с гипер-персонализацией контента на базе ИИ под каждого посетителя.",
    fullDesc: "Разработка инновационного лендинга, который меняет свои заголовки и предложения в зависимости от профиля посетителя. Используется анализ поведения в реальном времени для повышения конверсии в 3 раза.",
    stack: ["React", "Framer Motion", "OpenAI"],
    preview: (
      <div className="w-full h-full bg-[#020617] p-4 flex flex-col gap-2 overflow-hidden">
        <div className="w-full h-4 bg-white/10 rounded-full mb-2" />
        <div className="w-3/4 h-8 bg-blue-500/40 rounded-lg mb-2 animate-pulse" />
        <div className="grid grid-cols-2 gap-2">
          <div className="h-12 bg-white/5 rounded-md" />
          <div className="h-12 bg-white/5 rounded-md" />
        </div>
        <div className="mt-auto w-full h-6 bg-blue-500/20 rounded-full" />
      </div>
    )
  },
  {
    id: "crypto-bot",
    title: "Crypto Bot Ecosystem",
    category: "Bot Dev",
    desc: "Сложная система ботов для управления крипто-активами с AI-аналитикой.",
    fullDesc: "Экосистема ботов для Telegram, которая автоматически анализирует рыночные тренды, уведомляет о сигналах на покупку/продажу и позволяет управлять кошельком через чат.",
    stack: ["Node.js", "Telegram API", "Python"],
    preview: (
      <div className="w-full h-full bg-[#0f172a] p-3 flex flex-col gap-2 overflow-hidden font-mono text-[8px]">
        <div className="bg-white/10 p-2 rounded-lg self-start max-w-[80%] text-gray-400">
          Analyzing BTC/USDT...
        </div>
        <div className="bg-blue-500/20 p-2 rounded-lg self-end max-w-[80%] text-white text-right">
          Buy signal detected!
        </div>
        <div className="bg-white/10 p-2 rounded-lg self-start max-w-[80%] text-gray-400">
          Executing trade...
        </div>
      </div>
    )
  },
  {
    id: "brand-store",
    title: "Futuristic Brand Store",
    category: "E-commerce",
    desc: "Магазин нового поколения с иммерсивным UX и плавными переходами.",
    fullDesc: "Создание интернет-магазина с использованием Three.js для отображения товаров в 3D. Фокус на минимализме и идеальной скорости загрузки даже при тяжелом контенте.",
    stack: ["Three.js", "React", "Vercel"],
    preview: (
      <div className="w-full h-full bg-white p-2 flex flex-col gap-2 overflow-hidden">
        <div className="w-full h-4 bg-gray-200 rounded-full mb-2" />
        <div className="flex gap-2 justify-center">
          <div className="w-12 h-12 bg-gray-100 rounded-full" />
          <div className="w-12 h-12 bg-gray-100 rounded-full" />
          <div className="w-12 h-12 bg-gray-100 rounded-full" />
        </div>
        <div className="w-full h-16 bg-gray-100 rounded-lg mt-2" />
      </div>
    )
  },
  {
    id: "ai-support",
    title: "AI Support System",
    category: "AI Automation",
    desc: "Система поддержки клиентов, способная решать 90% запросов без человека.",
    fullDesc: "Интеграция GPT-4 в клиентский сервис компании. Бот обучается на базе знаний компании и отвечает клиентам мгновенно, имитируя стиль общения бренда.",
    stack: ["GPT-4", "LangChain", "Python"],
    preview: (
      <div className="w-full h-full bg-[#020617] p-3 flex flex-col gap-2 overflow-hidden">
        <div className="w-full h-3 bg-white/10 rounded-full mb-2" />
        <div className="space-y-2">
          <div className="w-full h-2 bg-white/5 rounded-full" />
          <div className="w-5/6 h-2 bg-white/5 rounded-full" />
          <div className="w-4/6 h-2 bg-blue-500/30 rounded-full animate-pulse" />
        </div>
      </div>
    )
  }
];

const Portfolio = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="портфолио" className="py-32 px-6 bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-highlight uppercase tracking-widest text-sm mb-4"
          >
            Case Studies
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black vanguard-text"
          >
            Мои <span className="italic font-light text-gray-500">Работы</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              onClick={() => setSelectedProject(project)}
              className="group relative overflow-hidden rounded-3xl bg-aiDark aspect-video cursor-pointer border border-white/5 shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-aiDark to-primary group-hover:scale-110 transition-transform duration-700" />

              <AnimatePresence>
                {hoveredId === project.id && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 z-20 p-6 flex items-center justify-center bg-black/60 backdrop-blur-sm"
                  >
                    <div className="w-full max-w-xs aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/30 bg-black transform rotate-2 group-hover:rotate-0 transition-transform duration-500">
                      {project.preview}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="absolute inset-0 p-8 flex flex-col justify-end z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="text-highlight text-xs uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {project.category}
                </span>
                <h3 className="text-3xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 mb-4">
                  {project.desc}
                </p>
                <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                  <div className="flex gap-2">
                    {project.stack.map(s => (
                      <span key={s} className="text-[10px] px-2 py-1 rounded-full bg-white/10 border border-white/20 text-gray-300">
                        {s}
                      </span>
                    ))}
                  </div>
                  <div className="w-8 h-8 rounded-full bg-highlight flex items-center justify-center text-white transition-transform group-hover:scale-110">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </div>
                </div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-highlight scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[1000] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-aiDark border border-white/10 p-8 md:p-12 rounded-[40px] max-w-4xl w-full relative overflow-hidden shadow-2xl"
              >
                <div className="absolute top-0 right-0 w-64 h-64 bg-highlight/10 blur-[100px] rounded-full -mr-20 -mt-20" />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex-1">
                      <span className="text-highlight uppercase tracking-widest text-xs mb-2 block">{selectedProject.category}</span>
                      <h2 className="text-4xl md:text-6xl font-black vanguard-text">{selectedProject.title}</h2>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-white"
                    >
                      ✕
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-6">
                      <p className="text-xl text-gray-300 leading-relaxed">
                        {selectedProject.fullDesc}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.stack.map(s => (
                          <span key={s} className="px-3 py-1 rounded-full bg-highlight/10 border border-highlight/20 text-highlight text-sm">
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black shadow-inner">
                      {selectedProject.preview}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <a
                      href="https://t.me/durovich123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-highlight text-white px-12 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] hover:scale-105"
                    >
                      Заказать такой проект →
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-20 text-center">
          <p className="text-gray-500 italic">
            В данный момент расширяю портфолио новыми кейсами. Скоро здесь появятся новые шедевры.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
