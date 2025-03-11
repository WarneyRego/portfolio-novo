import React from 'react';
import { motion, MotionValue, useAnimation } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Mail, Download, Github, Linkedin, Star, ArrowRight, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

interface HeaderProps {
  headerOpacity: MotionValue<number>;
  headerY: MotionValue<number>;
  scrollToSection: (sectionId: string) => void;
}

const Header = ({ headerOpacity, headerY, scrollToSection }: HeaderProps) => {
  const { t } = useTranslation();
  const controls = useAnimation();
  
  useEffect(() => {
    controls.start({
      scale: [1, 1.02, 1],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut" }
    });
  }, [controls]);
  
  const floatingAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
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
  
  const glowAnimation = {
    initial: { opacity: 0.5 },
    animate: {
      opacity: [0.5, 0.8, 0.5],
      filter: ["blur(3px)", "blur(2px)", "blur(3px)"],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const rotateAnimation = {
    initial: { rotate: 0 },
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <header id="home" className="min-h-screen w-full flex items-center justify-center pt-16 scroll-mt-16 overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          variants={glowAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"
        />
        <motion.div 
          variants={glowAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-violet-500/10 dark:bg-violet-400/5 rounded-full blur-3xl"
        />
      </div>
      
      <motion.div 
        style={{ opacity: headerOpacity, y: headerY }}
        className="container mx-auto px-4 py-16 sm:py-24 text-center relative z-10"
      >
        {/* Estrelas decorativas ao redor do título */}
        <div className="relative inline-block">
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            className="absolute -top-6 sm:-top-10 -left-4 sm:-left-10"
          >
            <Star className="w-3.5 h-3.5 sm:w-6 sm:h-6 text-purple-400/70 dark:text-purple-300/70 filter drop-shadow-md" />
          </motion.div>
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
            className="absolute -top-3 sm:-top-5 -right-4 sm:-right-10"
          >
            <Star className="w-2.5 h-2.5 sm:w-4 sm:h-4 text-violet-400/70 dark:text-violet-300/70 filter drop-shadow-md" />
          </motion.div>
          <motion.div
            variants={floatingAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 1 }}
            className="absolute -bottom-3 sm:-bottom-5 -left-3 sm:-left-8"
          >
            <Star className="w-3 h-3 sm:w-5 sm:h-5 text-fuchsia-400/70 dark:text-fuchsia-300/70 filter drop-shadow-md" />
          </motion.div>
          
          {/* Novo elemento decorativo - Sparkles */}
          <motion.div
            variants={rotateAnimation}
            initial="initial"
            animate="animate"
            className="absolute top-1/2 -right-8 sm:-right-12"
          >
            <Sparkles className="w-3 h-3 sm:w-5 sm:h-5 text-amber-400/60 dark:text-amber-300/60 filter drop-shadow-md" />
          </motion.div>
          
          <motion.div
            animate={{
              opacity: [0.95, 1, 0.95]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="rounded-3xl p-1"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900 dark:text-white tracking-tight"
            >
              {t('greeting')} <br />
              <motion.span 
                className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 dark:from-purple-400 dark:via-violet-400 dark:to-fuchsia-400"
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
                <TypeAnimation
                  sequence={[
                    t('role.webDev'),
                    2000,
                    t('role.react'),
                    2000,
                    t('role.uiDesigner'),
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </motion.span>
            </motion.h1>
          </motion.div>
        </div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12"
        >
          <motion.a
            variants={fadeInUp}
            custom={0}
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
            className="group px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-purple-600 via-violet-600 to-fuchsia-600 hover:from-purple-700 hover:via-violet-700 hover:to-fuchsia-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-violet-500/20"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.5 }}
            />
            <Mail className="w-4 h-4 group-hover:scale-110 transition-transform relative z-10" />
            <span className="relative z-10 text-sm sm:text-base">{t('contact.cta')}</span>
            <ArrowRight className="w-0 h-4 opacity-0 group-hover:w-4 group-hover:opacity-100 transition-all duration-300 relative z-10" />
            
            {/* Efeito de brilho no botão */}
            <motion.span 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
              initial={{ x: '-100%', opacity: 0 }}
              whileHover={{ x: '100%', opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            />
          </motion.a>
 
        </motion.div>
        
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex justify-center gap-4 sm:gap-6"
        >
          <motion.a 
            variants={fadeInUp}
            custom={2}
            href="https://github.com/WarneyRego" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 duration-300 border border-transparent hover:border-purple-200 dark:hover:border-purple-800/30"
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
            variants={fadeInUp}
            custom={3}
            href="https://www.linkedin.com/in/warney-rego-6b260b34b/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 sm:p-3 bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-full text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-white dark:hover:bg-gray-800 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 duration-300 border border-transparent hover:border-purple-200 dark:hover:border-purple-800/30"
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
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header; 