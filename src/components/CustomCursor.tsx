import React, { useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 25, stiffness: 800 });
  const smoothMouseY = useSpring(mouseY, { damping: 25, stiffness: 800 });
  
  // Efeito para rastrear a posição do mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mouseX, mouseY]);
  
  // Efeito para aplicar a classe que esconde o cursor padrão
  useEffect(() => {
    // Adiciona a classe ao body para esconder o cursor padrão em telas maiores
    document.body.classList.add('custom-cursor');
    
    return () => {
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  return (
    <>
      {/* Cursor personalizado que segue o mouse */}
      <motion.div 
        className="fixed w-6 h-6 rounded-full bg-purple-500/30 dark:bg-purple-400/30 pointer-events-none z-50 hidden md:block"
        style={{ 
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
      />
      
      {/* Cursor de foco para elementos interativos */}
      <motion.div 
        className="fixed w-10 h-10 rounded-full border-2 border-purple-500/50 dark:border-purple-400/50 pointer-events-none z-50 hidden md:block"
        style={{ 
          x: smoothMouseX,
          y: smoothMouseY,
          translateX: "-50%",
          translateY: "-50%"
        }}
        animate={{
          scale: [0.5, 1.2, 0.5],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 2
        }}
      />
    </>
  );
};

export default CustomCursor; 