import React from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "LITE",
    price: "от 5 000 ₽",
    desc: "Идеальный старт для вашего присутствия в сети",
    features: ["Готовый шаблон", "Базовая настройка", "Срок: 3-5 дней", "1 страница"],
    color: "text-gray-400",
    border: "border-white/10",
    bg: "bg-white/5",
    glow: "group-hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
  },
  {
    name: "PRO",
    price: "от 15 000 ₽",
    desc: "Полноценное бизнес-решение для роста продаж",
    features: ["Индивидуальный дизайн", "Оптимизация SEO", "Интеграция с CRM", "До 5 страниц"],
    color: "text-white",
    border: "border-highlight/50",
    bg: "bg-highlight/10",
    glow: "group-hover:shadow-[0_0_50px_rgba(59,130,246,0.3)]"
  },
  {
    name: "ELITE",
    price: "от 30 000 ₽",
    desc: "Цифровой шедевр с индивидуальным UX/UI под ключ",
    features: ["Эксклюзивный дизайн", "Сложные анимации", "Полная автоматизация", "Безлимитные страницы"],
    color: "text-highlight",
    border: "border-aiPurple/50",
    bg: "bg-gradient-to-b from-aiPurple/20 via-highlight/10 to-transparent",
    glow: "group-hover:shadow-[0_0_70px_rgba(139,92,246,0.4)]"
  }
];

const Services = () => {
  return (
    <section id="услуги" className="py-32 px-6 relative">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-highlight uppercase tracking-widest text-sm mb-4"
          >
            Тарифы
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black vanguard-text"
          >
            Выберите свой <span className="italic font-light text-gray-500">уровень</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              whileHover={{ y: -10 }}
              className={`group relative p-8 rounded-3xl border ${plan.border} ${plan.bg} ${plan.glow} transition-all duration-500 backdrop-blur-sm`}
            >
              <div className="flex justify-between items-start mb-8">
                <h3 className={`text-3xl font-black ${plan.color}`}>{plan.name}</h3>
                <span className="text-sm opacity-50 uppercase tracking-tighter">Plan</span>
              </div>

              <div className="mb-8">
                <div className="text-4xl font-bold mb-2">{plan.price}</div>
                <p className="text-gray-400 text-sm">{plan.desc}</p>
              </div>

              <ul className="space-y-4 mb-12">
                {plan.features.map((feat, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-300 text-sm">
                    <span className="w-1.5 h-1.5 bg-highlight rounded-full" />
                    {feat}
                  </li>
                ))}
              </ul>

              <motion.a
                href="https://t.me/durovich123"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block text-center py-4 rounded-xl font-bold transition-all duration-300 ${
                  plan.name === "PRO"
                  ? "bg-highlight text-white shadow-[0_0_20px_rgba(59,130,246,0.6)] border border-white/20"
                  : "bg-white/10 text-white hover:bg-white/20 border border-white/5"
                }`}
              >
                Выбрать {plan.name}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
