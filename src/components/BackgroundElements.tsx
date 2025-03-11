import React from 'react';
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const BackgroundElements = () => {
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
  
  const pulseAnimation = {
    initial: { scale: 1, opacity: 0.8 },
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.8, 1, 0.8],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  
  const floatAnimation = {
    initial: { y: 0 },
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <>
      {/* Background grid com máscara de gradiente */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] dark:opacity-30 pointer-events-none" />
      
      {/* Elementos decorativos de fundo com posição fixa */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.2, 0.3, 0.2],
            rotate: [0, 5, 0, -5, 0]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-gradient-to-br from-purple-500/20 via-violet-500/20 to-fuchsia-500/20 dark:from-purple-600/15 dark:via-violet-600/15 dark:to-fuchsia-600/15 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.25, 0.2],
            rotate: [0, -5, 0, 5, 0]
          }}
          transition={{ 
            duration: 10, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-60 sm:w-80 md:w-96 h-60 sm:h-80 md:h-96 bg-gradient-to-tr from-violet-500/20 via-purple-500/20 to-indigo-500/20 dark:from-violet-600/15 dark:via-purple-600/15 dark:to-indigo-600/15 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.15, 1],
            opacity: [0.15, 0.25, 0.15],
            x: [0, 20, 0, -20, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute top-1/4 left-1/4 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-r from-fuchsia-500/20 to-pink-500/20 dark:from-fuchsia-600/15 dark:to-pink-600/15 rounded-full blur-3xl" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.15, 0.2, 0.15],
            y: [0, 20, 0, -20, 0]
          }}
          transition={{ 
            duration: 14, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 h-40 sm:h-60 bg-gradient-to-l from-indigo-500/20 to-blue-500/20 dark:from-indigo-600/15 dark:to-blue-600/15 rounded-full blur-3xl" 
        />
        
        {/* Novos elementos decorativos */}
        <motion.div
          variants={rotateAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-1/3 right-1/3 w-32 sm:w-40 h-32 sm:h-40 opacity-10 dark:opacity-5 pointer-events-none"
          style={{ 
            background: "radial-gradient(circle, transparent 30%, rgba(147, 51, 234, 0.3) 70%)",
            borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%",
          }}
        />
        
        <motion.div
          variants={rotateAnimation}
          initial="initial"
          animate="animate"
          className="absolute bottom-1/3 left-1/3 w-40 sm:w-60 h-40 sm:h-60 opacity-10 dark:opacity-5 pointer-events-none"
          style={{ 
            background: "radial-gradient(circle, transparent 30%, rgba(139, 92, 246, 0.3) 70%)",
            borderRadius: "63% 37% 30% 70% / 50% 45% 55% 50%",
            rotate: 180
          }}
        />
        
        {/* Novos elementos flutuantes */}
        <motion.div
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-[15%] right-[20%] w-3 h-3 sm:w-4 sm:h-4 bg-purple-400/30 dark:bg-purple-300/30 rounded-full backdrop-blur-sm"
        />
        
        <motion.div
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 1 }}
          className="absolute top-[40%] left-[15%] w-2 h-2 sm:w-3 sm:h-3 bg-violet-400/30 dark:bg-violet-300/30 rounded-full backdrop-blur-sm"
        />
        
        <motion.div
          variants={floatAnimation}
          initial="initial"
          animate="animate"
          transition={{ delay: 2 }}
          className="absolute bottom-[30%] right-[25%] w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-fuchsia-400/30 dark:bg-fuchsia-300/30 rounded-full backdrop-blur-sm"
        />
        
        {/* Elemento de destaque pulsante */}
        <motion.div
          variants={pulseAnimation}
          initial="initial"
          animate="animate"
          className="absolute top-[60%] left-[60%] w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-400/40 to-violet-400/40 dark:from-purple-300/40 dark:to-violet-300/40 rounded-full backdrop-blur-sm"
        />
      </div>
      
      {/* Efeito de ruído sutil para o tema escuro */}
      <div className="fixed inset-0 bg-[url('/noise.png')] bg-repeat opacity-0 dark:opacity-[0.03] mix-blend-overlay pointer-events-none"></div>
      
      {/* Efeito de brilho no topo para o tema escuro */}
      <div className="fixed top-0 left-0 right-0 h-[300px] sm:h-[500px] bg-gradient-to-b from-transparent via-transparent to-transparent dark:from-purple-900/10 dark:via-purple-800/5 dark:to-transparent opacity-0 dark:opacity-100 pointer-events-none"></div>
      
      {/* Efeito de brilho no rodapé para o tema escuro */}
      <div className="fixed bottom-0 left-0 right-0 h-[200px] sm:h-[300px] bg-gradient-to-t from-transparent via-transparent to-transparent dark:from-violet-900/10 dark:via-violet-800/5 dark:to-transparent opacity-0 dark:opacity-100 pointer-events-none"></div>
      
      <ParticlesBackground />
    </>
  );
};

export default BackgroundElements; 