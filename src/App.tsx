import React, { useEffect, useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence, useScroll, useTransform, Variants, useMotionValue, useSpring } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Moon, Sun, ChevronDown, Github, Linkedin, Mail, ExternalLink, Download, Code, Sparkles, ArrowRight, Star, Zap } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import Timeline from './components/Timeline';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LanguageToggle from './components/LanguageToggle';
import CustomCursor from './components/CustomCursor';
import BackgroundElements from './components/BackgroundElements';
import SideNavigation from './components/SideNavigation';
import Header from './components/Header';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

// Definição das seções para navegação
const sections = ['home', 'techstack', 'timeline', 'projects', 'contact'];

// Variantes de animação
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

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

// Adicionando novas variantes de animação
const floatingAnimation: Variants = {
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

const pulseAnimation: Variants = {
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

const rotateAnimation: Variants = {
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

const shimmerAnimation: Variants = {
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

function App() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState('home');
  const observerRef = useRef<IntersectionObserver | null>(null);
  const { scrollYProgress } = useScroll();
  const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 0.1], [0, -20]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothMouseX = useSpring(mouseX, { damping: 50, stiffness: 400 });
  const smoothMouseY = useSpring(mouseY, { damping: 50, stiffness: 400 });
  
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  
  useEffect(() => {
    const sectionElements = sections.map(id => document.getElementById(id));
    
    const options = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.3, // 30% da seção visível para considerá-la ativa
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersect, options);
    
    sectionElements.forEach(section => {
      if (section && observerRef.current) {
        observerRef.current.observe(section);
      }
    });

    return () => {
      if (observerRef.current) {
        sectionElements.forEach(section => {
          if (section && observerRef.current) {
            observerRef.current.unobserve(section);
          }
        });
      }
    };
  }, []);

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

  // Função para navegar para uma seção com scroll suave
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setActiveSection(sectionId);
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-b from-white via-purple-50/20 to-white dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300 relative">
      {/* Elementos de fundo e efeitos visuais */}
      <BackgroundElements />
      
      {/* Cursor personalizado */}
      <CustomCursor />
      
      <div className="relative z-10 w-full">
        {/* Botões flutuantes */}
        <div className="fixed top-4 sm:top-6 right-4 sm:right-6 z-50 flex items-center gap-2 sm:gap-3">
          <LanguageToggle />
          <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        {/* Navegação lateral */}
        <SideNavigation 
          sections={sections} 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />
        
        {/* Cabeçalho */}
        <Header 
          headerOpacity={headerOpacity} 
          headerY={headerY} 
          scrollToSection={scrollToSection} 
        />
        
        {/* Conteúdo principal */}
        <main className="w-full overflow-hidden">
          <section id="techstack" className="scroll-mt-16 w-full">
            <TechStack />
          </section>
          <section id="timeline" className="scroll-mt-16 w-full">
            <Timeline />
          </section>
          <section id="projects" className="scroll-mt-16 w-full">
            <Projects />
          </section>
          <section id="contact" className="scroll-mt-16 w-full">
            <Contact />
          </section>
        </main>
        
        {/* Rodapé */}
        <Footer 
          sections={sections} 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />
      </div>
    </div>
  );
}

export default App;