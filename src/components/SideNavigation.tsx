import React from 'react';
import { motion, Variants } from 'framer-motion';

interface SideNavigationProps {
  sections: string[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const SideNavigation = ({ sections, activeSection, scrollToSection }: SideNavigationProps) => {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <div className="fixed left-6 top-1/2 transform -translate-y-1/2 z-50 hidden md:block">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="flex flex-col gap-6"
      >
        {sections.map((section, index) => (
          <motion.button
            key={section}
            custom={index}
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection(section)}
            className={`w-3 h-3 rounded-full transition-all duration-300 relative group focus:outline-none ${
              activeSection === section
                ? 'bg-purple-600 dark:bg-purple-400 scale-125 shadow-md shadow-purple-500/20'
                : 'bg-gray-300 dark:bg-gray-700 hover:bg-purple-400 dark:hover:bg-purple-600'
            }`}
            aria-label={`Navegar para ${section}`}
          >
            <motion.span 
              className="absolute left-6 top-1/2 -translate-y-1/2 px-2 py-1 rounded bg-white/90 dark:bg-gray-800/90 text-xs font-medium text-gray-800 dark:text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-sm"
              initial={{ opacity: 0, x: -5 }}
              whileHover={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
            >
              {section === 'home' ? 'Início' : 
               section === 'timeline' ? 'Experiência' : 
               section === 'techstack' ? 'Tecnologias' : 
               section === 'projects' ? 'Projetos' : 'Contato'}
            </motion.span>
            {activeSection === section && (
              <motion.span
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0 }}
                animate={{ scale: 1.5 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                style={{ opacity: 0.2 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default SideNavigation; 