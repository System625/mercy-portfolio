'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SkillCardProps {
  icon: string;
  title: string;
  description: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 * index }}
      className="relative flex flex-col items-center p-8"
      id='skills'
    >
      {/* Border patterns */}
      {index !== 1 ? (
        // First and third cards: top borders spanning both corners
        <>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + (0.2 * index) }}
            className="absolute top-0 left-0"
          >
            <div className="w-[148px] h-[70px] border-t-2 border-l-2 border-white"></div>
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + (0.2 * index) }}
            className="absolute top-0 right-0"
          >
            <div className="w-[148px] h-[70px] border-t-2 border-r-2 border-white"></div>
          </motion.div>
        </>
      ) : (
        // Middle card: bottom borders spanning both corners
        <>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + (0.2 * index) }}
            className="absolute bottom-0 left-0"
          >
            <div className="w-[148px] h-[70px] border-b-2 border-l-2 border-white"></div>
          </motion.div>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 + (0.2 * index) }}
            className="absolute bottom-0 right-0"
          >
            <div className="w-[148px] h-[70px] border-b-2 border-r-2 border-white"></div>
          </motion.div>
        </>
      )}
      
      <motion.div 
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 + (0.2 * index) }}
        className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6"
      >
        <Image
          src={icon}
          alt={`${title} icon`}
          width={32}
          height={32}
        />
      </motion.div>
      <motion.h3 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 + (0.2 * index) }}
        className="text-white text-xl font-semibold mb-4"
      >
        {title}
      </motion.h3>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 + (0.2 * index) }}
        className="text-white/80 text-center mb-6"
      >
        {description}
      </motion.p>     
    </motion.div>
  );
};

const Skills = () => {
  const skills = [
    {
      icon: '/icons/ui-ux.svg',
      title: 'UI/UX Design',
      description: 'A process of creating digital products that are visually appealing, user-friendly, and functional.',
    },
    {
      icon: '/icons/app-design.svg',
      title: 'Application Design',
      description: 'A process of creating the structure, user interface and overall user experience of a software application.',
    },
    {
      icon: '/icons/web-design.svg',
      title: 'Web Design',
      description: 'A process of creating the visual look, layout, and functionality of websites.',
    },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="bg-[#094D3E] py-20"
    >
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-white text-4xl font-semibold text-center mb-16"
        >
          SKILLS
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              index={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills; 