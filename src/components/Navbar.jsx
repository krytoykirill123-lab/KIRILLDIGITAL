import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-xl font-black tracking-tighter"
      >
        KIRILL.<span className="text-highlight">DIGITAL</span>
      </motion.div>
      
      <div className="hidden md:flex gap-12 text-sm font-medium uppercase tracking-widest">
        {["Услуги", "Портфолио", "Процесс", "Контакты"].map((item, idx) => (
          <motion.a 
            key={item}
            href={`#${item.toLowerCase()}`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            className="hover:text-highlight transition-colors relative group"
          >
            {item}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-highlight transition-all group-hover:w-full" />
          </motion.a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
