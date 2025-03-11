import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Sparkles, Heart, Star } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface FooterProps {
  sections: string[];
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

const Footer = ({ sections, activeSection, scrollToSection }: FooterProps) => {
  const { t } = useTranslation();
  
  const fadeInUp = {
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
  
  const pulseAnimation = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const shimmerAnimation = {
    initial: { backgroundPosition: "0% 0%" },
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <footer className="py-8 sm:py-12 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-t border-purple-100/50 dark:border-purple-700/50 w-full overflow-hidden">
      {/* Elementos decorativos */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 dark:via-purple-400/20 to-transparent"></div>
      <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-purple-50/10 dark:from-purple-900/10 to-transparent pointer-events-none"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <motion.h2 
              className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 dark:from-purple-400 dark:via-violet-400 dark:to-fuchsia-400 mb-2"
              whileHover={{ scale: 1.05 }}
              animate={{ 
                backgroundPosition: ['0% center', '100% center', '0% center'],
              }}
              transition={{ 
                duration: 8, 
                repeat: Infinity,
                ease: "linear" 
              }}
              style={{ backgroundSize: '200% auto' }}
            >
              Warney Rego<span className="text-[#9D00FF]">.</span>
            </motion.h2>
            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">© {new Date().getFullYear()} {t('copyright')}</p>
         
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
              <motion.a 
                href="https://github.com/WarneyRego" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-md hover:-translate-y-1 duration-300 border border-transparent hover:border-purple-200 dark:hover:border-purple-800/30"
                aria-label="GitHub"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
                <motion.span 
                  className="absolute inset-0 rounded-full border-2 border-purple-400/40 dark:border-purple-300/40"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/warney-rego-6b260b34b/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-1.5 sm:p-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-md hover:-translate-y-1 duration-300 border border-transparent hover:border-purple-200 dark:hover:border-purple-800/30"
                aria-label="LinkedIn"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                <motion.span 
                  className="absolute inset-0 rounded-full border-2 border-purple-400/40 dark:border-purple-300/40"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.a>
              <motion.a 
                href="mailto:email@example.com"
                className="p-1.5 sm:p-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-md hover:-translate-y-1 duration-300 border border-transparent hover:border-purple-200 dark:hover:border-purple-800/30"
                aria-label="Email"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                <motion.span 
                  className="absolute inset-0 rounded-full border-2 border-purple-400/40 dark:border-purple-300/40"
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileHover={{ scale: 1.2, opacity: 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.a>
            </div>
            <motion.a 
              href="mailto:email@example.com"
              className="text-sm sm:text-base text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 transition-colors flex items-center gap-2 group"
              whileHover={{ scale: 1.05, x: 5 }}
            >
              <Mail className="w-3 h-3 sm:w-4 sm:h-4 group-hover:text-purple-500 dark:group-hover:text-purple-400 transition-colors" />
              <span className="relative">
                WarneyDev@gmail.com
                <motion.span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-400 dark:to-violet-400 group-hover:w-full transition-all duration-300"
                />
              </span>
            </motion.a>
          </div>
        </div>
        
        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
            {sections.map((section, index) => (
              <motion.a 
                key={section}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                href={`#${section}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(section);
                }}
                className={`hover:text-purple-600 dark:hover:text-purple-400 transition-colors relative ${
                  activeSection === section ? 'text-purple-600 dark:text-purple-400 font-medium' : ''
                }`}
                whileHover={{ scale: 1.1 }}
              >
                {section === 'home' ? 'Início' : 
                 section === 'timeline' ? 'Experiência' : 
                 section === 'techstack' ? 'Tecnologias' : 
                 section === 'projects' ? 'Projetos' : 'Contato'}
                 
                {activeSection === section && (
                  <motion.span 
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-violet-500 dark:from-purple-400 dark:to-violet-400"
                    layoutId="activeSection"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.a>
            ))}
          </div>
          
          {/* Estrelas decorativas */}
          <div className="relative mt-6 pt-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex justify-center gap-2 sm:gap-3 opacity-40 dark:opacity-30"
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ 
                    duration: 2 + i * 0.5, 
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                >
                  <Star className="w-2 h-2 sm:w-3 sm:h-3 text-purple-400 dark:text-purple-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 