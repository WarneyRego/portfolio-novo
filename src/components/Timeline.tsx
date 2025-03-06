import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Briefcase, Building2, Calendar } from 'lucide-react';

const Timeline = () => {
  const { t } = useTranslation();

  const experiences = t('timeline.experiences', { returnObjects: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 100,
      },
    },
  };

  const colors = [
    'from-purple-500 to-purple-500',
    'from-purple-500 to-purple-500',
    'from-purple-500 to-purple-500',
    'from-purple-500 to-purple-500',
    'from-purple-500 to-purple-500',
    
    'from-purple-500 to-pink-400',
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white/90 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50">
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
            {t('timeline.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          >
            {t('timeline.subtitle')}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience: any, index: number) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 h-full w-1">
                <div className={`h-full w-full bg-gradient-to-b ${colors[index]} rounded-full`} />
              </div>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute -left-12 top-6 w-8 h-8 bg-gradient-to-r ${colors[index]} rounded-full flex items-center justify-center`}>
                  <Briefcase className="w-4 h-4 text-white" />
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div className="flex items-center text-purple-600 gap-2 text-sm font-semibold text-primary mb-2 md:mb-0">
                    <Calendar className="w-4 h-4 text-purple-600" />
                    <span>{experience.year}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Building2 className="w-4 h-4" />
                    <span>{experience.company}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {experience.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Timeline;