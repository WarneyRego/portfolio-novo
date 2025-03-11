import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { Briefcase, Building2, Calendar, ArrowRight, ChevronDown, Zap, Award, Clock } from 'lucide-react';

interface Experience {
  year: string;
  company: string;
  title: string;
  description: string;
}

const Timeline = () => {
  const { t } = useTranslation();
  const [expandedItems, setExpandedItems] = useState<number[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const experiences = t('timeline.experiences', { returnObjects: true }) as Experience[];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
        damping: 15,
      },
    },
  };

  
  // Novas variantes de animação
  const pulseVariants = {
    initial: { scale: 1 },
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const shimmerVariants = {
    initial: { backgroundPosition: "0% 0%" },
    animate: {
      backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  const colors = [
    'from-purple-600 via-violet-600 to-indigo-600',
    'from-violet-600 via-purple-600 to-fuchsia-600',
    'from-fuchsia-600 via-purple-600 to-violet-600',
    'from-purple-600 via-fuchsia-600 to-violet-600',
    'from-violet-600 via-purple-600 to-fuchsia-600',
    'from-fuchsia-600 via-violet-600 to-purple-600',
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-28 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="text-center mb-16 sm:mb-20 lg:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block mb-4 sm:mb-6"
          >
            <motion.span 
              className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/5 via-violet-500/5 to-fuchsia-500/5 dark:from-purple-400/10 dark:via-violet-400/10 dark:to-fuchsia-400/10 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-700 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300"
              whileHover={{ 
                scale: 1.02, 
                boxShadow: "0 5px 15px -5px rgba(147, 51, 234, 0.2)" 
              }}
            >
              <motion.span 
                className="mr-2"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                ✨
              </motion.span>
              {t('timeline.subtitle')}
              <motion.span 
                className="ml-2"
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5, delay: 0.5 }}
              >
                ✨
              </motion.span>
            </motion.span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 text-purple-700 dark:text-purple-300 px-4"
          >
            {t('timeline.title')}
          </motion.h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {experiences.map((experience: Experience, index: number) => {
            const isExpanded = expandedItems.includes(index);
            const isHovered = hoveredItem === index;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-8 sm:pl-12 pb-12 sm:pb-16 lg:pb-20 last:pb-0"
              >
                <div className="absolute left-0 top-0 h-full w-[2px] sm:w-[3px]">
                  <motion.div 
                    className={`h-full w-full bg-gradient-to-b ${colors[index]} rounded-full opacity-40 dark:opacity-60 shadow-[0_0_10px_rgba(147,51,234,0.2),0_0_20px_rgba(147,51,234,0.1)] dark:shadow-[0_0_10px_rgba(167,139,250,0.3),0_0_20px_rgba(167,139,250,0.2)]`}
                    animate={{ 
                      opacity: isHovered ? [0.4, 0.7, 0.4] : 0.4,
                      height: isExpanded ? "100%" : "100%"
                    }}
                    transition={{ 
                      opacity: { duration: 1.5, repeat: isHovered ? Infinity : 0 },
                      height: { duration: 0.5 }
                    }}
                  />
                </div>
                
                <motion.div
                  whileHover={{ scale: 1.01, y: -2 }}
                  onHoverStart={() => setHoveredItem(index)}
                  onHoverEnd={() => setHoveredItem(null)}
                  className="relative bg-white/90 dark:bg-gray-900/90 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100/50 dark:border-purple-700/50 group hover:bg-white dark:hover:bg-gray-900"
                >
                  {/* Efeito de brilho no hover */}
                  <motion.div 
                    className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/5 to-violet-500/5 dark:from-purple-400/10 dark:to-violet-400/10 rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-100 transition duration-300"
                    animate={isHovered ? { opacity: [0.05, 0.1, 0.05] } : { opacity: 0 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  
                  <motion.div 
                    className={`absolute -left-10 sm:-left-14 lg:-left-16 top-8 sm:top-10 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-gradient-to-r ${colors[index]} rounded-lg sm:rounded-xl rotate-45 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-500 hover:shadow-2xl`}
                    variants={pulseVariants}
                    initial="initial"
                    animate={isHovered ? "pulse" : "initial"}
                  >
                    <motion.div
                      animate={isHovered ? { rotate: [-45, -135, -45] } : { rotate: -45 }}
                      transition={{ duration: 1.5, repeat: isHovered ? Infinity : 0 }}
                    >
                      <Briefcase className="w-4 sm:w-5 lg:w-6 h-4 sm:h-5 lg:h-6 text-white" />
                    </motion.div>
                  </motion.div>
                  
                  <div className="flex flex-col gap-4 mb-6 sm:mb-8">
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                      <motion.div 
                        className="flex items-center text-purple-700 dark:text-purple-300 gap-2 text-sm font-semibold bg-purple-100/80 dark:bg-purple-900/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-purple-200/80 dark:hover:bg-purple-800/50 transition-colors duration-300"
                        whileHover={{ scale: 1.02, y: -1 }}
                      >
                      
                          <Calendar className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                        <span>{experience.year}</span>
                      </motion.div>
                      <motion.div
                        animate={isHovered ? { x: [0, 5, 0] } : { x: 0 }}
                        transition={{ duration: 1, repeat: isHovered ? Infinity : 0 }}
                      >
                        <ArrowRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-purple-500 dark:text-purple-400" />
                      </motion.div>
                      <motion.div 
                        className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-200 bg-gray-100/80 dark:bg-gray-800/50 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full hover:bg-gray-200/80 dark:hover:bg-gray-700/50 transition-colors duration-300"
                        whileHover={{ scale: 1.05, y: -2 }}
                      >
                   
                          <Building2 className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                        <span className="font-medium">{experience.company}</span>
                      </motion.div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">
                    <motion.h3 
                      className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-700 dark:text-purple-300 drop-shadow-none"
                      animate={isHovered ? { 
                        backgroundPosition: ["0% center", "100% center", "0% center"] 
                      } : { backgroundPosition: "0% center" }}
                      transition={{ duration: 3, repeat: isHovered ? Infinity : 0 }}
                      style={{ backgroundSize: "200% auto" }}
                    >
                      {experience.title}
                    </motion.h3>
                    <motion.button
                      onClick={() => toggleExpand(index)}
                      className="z-10 self-start sm:self-center flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 text-sm font-medium text-purple-700 dark:text-purple-300 bg-purple-100/80 dark:bg-purple-900/50 rounded-full hover:bg-purple-200/80 dark:hover:bg-purple-800/50 transition-all duration-300 whitespace-nowrap"
                      whileHover={{ scale: 1.02, y: -1 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {isExpanded ? 'Ver menos' : 'Saiba mais'}
                      <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.div>
                    </motion.button>
                  </div>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-4 sm:mt-6 overflow-hidden"
                      >
                        <div className="space-y-6">
                          <motion.p 
                            className="text-base sm:text-lg text-gray-700 dark:text-gray-200 leading-relaxed"
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                          >
                            {experience.description}
                          </motion.p>
                          
                          <motion.div 
                            className="flex gap-3 sm:gap-4"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                          >
                            {Array.from({ length: 3 }).map((_, i) => (
                              <motion.div
                                key={i}
                                className={`h-1 sm:h-1.5 rounded-full bg-gradient-to-r ${colors[index]} opacity-30 dark:opacity-50 group-hover:opacity-40 dark:group-hover:opacity-60`}
                                initial={{ width: "4rem" }}
                                animate={{ width: ["4rem", "5rem", "4rem"] }}
                                transition={{ 
                                  duration: 2, 
                                  repeat: Infinity, 
                                  repeatType: "reverse",
                                  delay: i * 0.3
                                }}
                              />
                            ))}
                          </motion.div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;