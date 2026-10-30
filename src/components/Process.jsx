import React from "react";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Анализ и Вайб",
    desc: "Погружаюсь в вашу идею, анализирую конкурентов и определяю вектор развития продукта.",
    detail: "На этом этапе мы определяем, какой результат будет считаться успехом."
  },
  {
    number: "02",
    title: "Проектирование",
    desc: "Создаю структуру, логику работы бота или архитектуру сайта. Никакого лишнего шума — только функции.",
    detail: "Прорабатываю путь пользователя (User Flow), чтобы конверсия была максимальной."
  },
  {
    number: "03",
    title: "Реализация",
    desc: "Пишу чистый, современный код с использованием передовых технологий и анимаций.",
    detail: "Работаю итерациями: вы видите прогресс в реальном времени."
  },
  {
    number: "04",
    title: "Запуск и Рост",
    desc: "Деплой на Vercel или сервер, финальное тестирование и передача ключей от вашего бизнеса.",
    detail: "Помогаю с первичной настройкой и даю рекомендации по продвижению."
  }
];

const Process = () => {
  return (
    <section id="процесс" className="py-32 px-6 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col items-center mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-highlight uppercase tracking-widest text-sm mb-4"
          >
            Workflow
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black vanguard-text"
          >
            Как создается <span className="italic font-light text-gray-500">результат</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              className="relative group"
            >
              <div className="text-8xl font-black text-white/5 absolute -top-10 -left-4 group-hover:text-highlight/20 transition-colors duration-500 pointer-events-none">
                {step.number}
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-highlight transition-colors">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed mb-4">{step.desc}</p>
                <p className="text-sm text-gray-600 italic">{step.detail}</p>
              </div>
              <div className="absolute -bottom-4 left-0 w-0 h-1 bg-highlight group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
