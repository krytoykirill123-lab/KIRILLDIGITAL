import React from "react";
import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section id="контакты" className="py-32 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-highlight opacity-10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="bg-gradient-to-b from-gray-900 to-black border border-white/10 p-12 md:p-24 rounded-[4rem] text-center relative overflow-hidden group"
        >
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-black vanguard-text mb-8"
          >
            Готовы создать <br />
            <span className="italic font-light text-gray-500">что-то великое?</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-2xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Хватит использовать обычные инструменты. Пора внедрить ИИ и премиальный дизайн в ваш бизнес.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col md:flex-row items-center justify-center gap-6"
          >
            <motion.a 
              href="https://t.me/your_username" 
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,62,0,0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-highlight text-white px-12 py-5 rounded-full font-bold text-xl transition-all flex items-center gap-3"
            >
              Написать в Telegram
              <span className="text-2xl">→</span>
            </motion.a>
            
            <span className="text-gray-600 text-sm uppercase tracking-widest font-medium">
              Ответ в течение 24 часов
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
