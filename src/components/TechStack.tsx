import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import {
  Code2,
  Figma,
  FileJson,
  Flame,
  Globe,
  Palette,
  Server,
  Zap,
  Package,
  Cloud,
} from 'lucide-react';

const TechStack = () => {
  const { t } = useTranslation();

  const technologies = [
    {
      icon: <Globe className="w-8 h-8" />,
      key: 'htmlCss',
      color: 'from-orange-500 to-pink-500',
    },
    {
      icon: <FileJson className="w-8 h-8" />,
      key: 'javascript',
      color: 'from-yellow-400 to-yellow-600',
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      key: 'typescript',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: <Zap className="w-8 h-8" />,
      key: 'react',
      color: 'from-cyan-400 to-cyan-600',
    },
    {
      icon: <Server className="w-8 h-8" />,
      key: 'nextjs',
      color: 'from-gray-600 to-gray-800',
    },
    {
      icon: <Flame className="w-8 h-8" />,
      key: 'firebase',
      color: 'from-amber-500 to-orange-600',
    },
    {
      icon: <Palette className="w-8 h-8" />,
      key: 'tailwind',
      color: 'from-teal-400 to-teal-600',
    },
    {
      icon: <Figma className="w-8 h-8" />,
      key: 'figma',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: <Package className="w-8 h-8" />,
      key: 'docker',
      color: 'from-blue-400 to-blue-300',
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      key: 'aws',
      color: 'from-orange-600 to-orange-300',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white/50 dark:from-gray-900/50 dark:to-gray-800/50">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="container mx-auto px-4"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('techStack.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t('techStack.subtitle')}
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {technologies.map((tech) => (
            <motion.div
              key={tech.key}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl blur-xl -z-10" />
              <div className={`bg-gradient-to-r ${tech.color} p-[2px] rounded-2xl`}>
                <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 h-full">
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-20 blur-lg" />
                      <div className="relative text-primary dark:text-white transform transition-transform group-hover:scale-110 duration-300">
                        {tech.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                        {t(`techStack.technologies.${tech.key}.name`)}
                      </h3>
                     
                    </div>
                  </div>
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