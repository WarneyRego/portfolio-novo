import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Moon, Sun } from 'lucide-react';
import ParticlesBackground from './components/ParticlesBackground';
import Timeline from './components/Timeline';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LanguageToggle from './components/LanguageToggle';

function App() {
  const { t } = useTranslation();
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-neutral-200 dark:bg-gray-900 transition-colors duration-300">
      <ParticlesBackground />
      
      <div className="relative z-10">
        <nav className="fixed left-0 z-50 top-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold text-gray-900 dark:text-white"
            >
              Warney Rego<span className="text-[#9D00FF]">.</span>
            </motion.div>
            <div className="flex items-center gap-4">
              <LanguageToggle />
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {darkMode ? <Sun className="w-5 h-5 text-white" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 pt-32">
          <section className="min-h-[calc(100vh-8rem)] flex flex-col justify-center items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="text-5xl md:text-7xl font-bold  text-gray-900 dark:text-[#F5F5F5] mb-6">
                {t('greeting')}
              </h2>
              <div className="text-xl md:text-2xl text-gray-600 dark:text-[#B0B0B0]">
                <TypeAnimation
                  sequence={[
                    t('role.webDev'),
                    2000,
                    t('role.react'),
                    2000,
                    t('role.uiDesigner'),
                    2000,
                    
                  ]}
                  repeat={Infinity}
                  wrapper="span"
                />
              </div>
            </motion.div>
          </section>

          <Timeline />
          <TechStack />
          <Projects />
          <Contact />
        </main>
      </div>
    </div>
  );
}

export default App;