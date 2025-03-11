import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

// Importando ícones específicos da biblioteca React Icons
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDocker, FaAws, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiNextdotjs, SiFirebase, SiTailwindcss } from 'react-icons/si';

const TechStack = () => {
  const { t } = useTranslation();
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  // Definindo a interface para o objeto de tecnologia
  interface Technology {
    icon: JSX.Element;
    key: string;
    color: string;
    bgColor: string;
    borderColor: string;
  }

  const technologies: Technology[] = [
    {
      icon: <div className="flex items-center">
              <FaHtml5 className="w-7 h-7 md:w-8 md:h-8 mr-1 text-orange-500" />
              <FaCss3Alt className="w-7 h-7 md:w-8 md:h-8 text-blue-500" />
            </div>,
      key: 'htmlCss',
      color: 'from-orange-500 to-blue-500',
      bgColor: 'bg-gradient-to-br from-orange-500/10 to-blue-500/10',
      borderColor: 'border-orange-300 dark:border-orange-700',
    },
    {
      icon: <FaJs className="w-8 h-8 md:w-10 md:h-10 text-yellow-400" />,
      key: 'javascript',
      color: 'from-yellow-400 to-yellow-600',
      bgColor: 'bg-gradient-to-br from-yellow-400/10 to-yellow-600/10',
      borderColor: 'border-yellow-300 dark:border-yellow-700',
    },
    {
      icon: <SiTypescript className="w-7 h-7 md:w-9 md:h-9 text-blue-500" />,
      key: 'typescript',
      color: 'from-blue-400 to-blue-600',
      bgColor: 'bg-gradient-to-br from-blue-400/10 to-blue-600/10',
      borderColor: 'border-blue-300 dark:border-blue-700',
    },
    {
      icon: <FaReact className="w-8 h-8 md:w-10 md:h-10 text-cyan-400" />,
      key: 'react',
      color: 'from-cyan-400 to-cyan-600',
      bgColor: 'bg-gradient-to-br from-cyan-400/10 to-cyan-600/10',
      borderColor: 'border-cyan-300 dark:border-cyan-700',
    },
    {
      icon: <SiNextdotjs className="w-8 h-8 md:w-10 md:h-10 text-gray-800 dark:text-gray-200" />,
      key: 'nextjs',
      color: 'from-gray-600 to-gray-800',
      bgColor: 'bg-gradient-to-br from-gray-600/10 to-gray-800/10',
      borderColor: 'border-gray-300 dark:border-gray-700',
    },
    {
      icon: <SiFirebase className="w-7 h-7 md:w-9 md:h-9 text-amber-500" />,
      key: 'firebase',
      color: 'from-amber-500 to-orange-600',
      bgColor: 'bg-gradient-to-br from-amber-500/10 to-orange-600/10',
      borderColor: 'border-amber-300 dark:border-amber-700',
    },
    {
      icon: <SiTailwindcss className="w-8 h-8 md:w-10 md:h-10 text-teal-500" />,
      key: 'tailwind',
      color: 'from-teal-400 to-teal-600',
      bgColor: 'bg-gradient-to-br from-teal-400/10 to-teal-600/10',
      borderColor: 'border-teal-300 dark:border-teal-700',
    },
    {
      icon: <FaFigma className="w-7 h-7 md:w-9 md:h-9 text-purple-500" />,
      key: 'figma',
      color: 'from-purple-400 to-purple-600',
      bgColor: 'bg-gradient-to-br from-purple-400/10 to-purple-600/10',
      borderColor: 'border-purple-300 dark:border-purple-700',
    },
    {
      icon: <FaDocker className="w-8 h-8 md:w-10 md:h-10 text-blue-400" />,
      key: 'docker',
      color: 'from-blue-400 to-blue-300',
      bgColor: 'bg-gradient-to-br from-blue-400/10 to-blue-300/10',
      borderColor: 'border-blue-300 dark:border-blue-700',
    },
    {
      icon: <FaAws className="w-8 h-8 md:w-10 md:h-10 text-orange-500" />,
      key: 'aws',
      color: 'from-orange-600 to-orange-300',
      bgColor: 'bg-gradient-to-br from-orange-600/10 to-orange-300/10',
      borderColor: 'border-orange-300 dark:border-orange-700',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    },
  };
  
  const checkmarkVariants = {
    initial: { scale: 0, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15
      }
    },
    exit: { 
      scale: 0, 
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };



  return (
    <section className="py-16 sm:py-20 lg:py-28 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-4 sm:px-6 relative z-10"
      >
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-block mb-4 sm:mb-6"
          >
            <span className="px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-semibold bg-gradient-to-r from-purple-500/5 via-violet-500/5 to-fuchsia-500/5 dark:from-purple-400/10 dark:via-violet-400/10 dark:to-fuchsia-400/10 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-700 hover:shadow-lg hover:border-purple-300 dark:hover:border-purple-500 transition-all duration-300">
              <motion.span 
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                className="inline-block mr-2"
              >
                🛠️
              </motion.span>
              {t('techStack.subtitle')}
              <motion.span 
                animate={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
                className="inline-block ml-2"
              >
                🛠️
              </motion.span>
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-700 via-violet-700 to-fuchsia-700 dark:from-purple-300 dark:via-violet-300 dark:to-fuchsia-300 drop-shadow-sm px-4"
          >
            {t('techStack.title')}
          </motion.h2>
          
      
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {technologies.map((tech) => (
            <motion.div
              key={tech.key}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 200, damping: 15 }
              }}
              className="group"
              onMouseEnter={() => setHoveredTech(tech.key)}
              onMouseLeave={() => setHoveredTech(null)}
            >
              <div className={`bg-white/80 dark:bg-gray-900/80 rounded-2xl p-6 h-full border ${tech.borderColor} hover:bg-white dark:hover:bg-gray-900 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden`}>
                {/* Gradiente de fundo no hover */}
                <div className={`absolute inset-0 ${tech.bgColor} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`} />
                
                {/* Círculo decorativo */}
                <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-r ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full blur-md`} />
                
                <div className="flex flex-col items-center text-center space-y-4 relative z-10">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full p-3 group-hover:scale-110 transition-all duration-300 border ${tech.borderColor} shadow-sm overflow-hidden`}>
                    <motion.div 
                      className="flex items-center justify-center w-full h-full"
                      whileHover={{ rotate: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.3,
                        ease: "easeInOut"
                      }}
                    >
                      {tech.icon}
                    </motion.div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-200 mb-1 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors duration-300">
                      {t(`techStack.technologies.${tech.key}.name`)}
                    </h3>
                  </div>
                  
                  {/* Checkmark indicador */}
                  <AnimatePresence>
                    {hoveredTech === tech.key && (
                      <motion.div
                        className="absolute top-2 right-2"
                        variants={checkmarkVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                      >
                        <CheckCircle className={`w-5 h-5 text-gradient bg-gradient-to-r ${tech.color} bg-clip-text text-transparent`} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TechStack;