import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-primary">
      {/* Animated Background Blobs */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-highlight opacity-30 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-[600px] h-[600px] bg-aiPurple opacity-30 blur-[120px] rounded-full animate-bounce" style={{ animationDuration: '10s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-highlight/20 blur-[150px] rounded-full" />

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-start">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6"
          >
            <span className="text-highlight font-medium uppercase tracking-widest text-sm">
              Digital Vanguard
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-7xl md:text-9xl font-black vanguard-text mb-8 max-w-5xl"
          >
            Создаю <span className="italic font-light text-gray-400">цифровую</span> мощь вашего бизнеса
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col md:flex-row items-start gap-8"
          >
            <p className="text-lg md:text-2xl text-gray-400 max-w-xl leading-relaxed">
              Разработка премиальных сайтов и автономных ИИ-агентов. 
              Превращаю идеи в высококонверсионные инструменты с вайбом будущего.
            </p>
            
            <motion.a
              href="https://t.me/durovich123"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-highlight text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]"
            >
              Обсудить проект →
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
