'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { castellar, playfair, roboto } from '../fonts';
import { BackgroundBeams } from "../../components/ui/background-beams";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  index: number;
  isReversed?: boolean;
  projectLink?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  image,   
  isReversed,
  projectLink 
}) => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-16 items-center`}
    >
      <div className="w-full md:w-1/2">
        <Image
          src={image}
          alt={title}
          width={720}
          height={413}
          className="w-full h-auto rounded-lg"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className={`${playfair.className} text-[#094D3E] text-3xl md:text-4xl font-extrabold mb-4`}>
          {title}
        </h3>
        <p className={`${roboto.className} text-[#494848] mb-6 text-sm md:text-xl`}>
          {description}
        </p>
        {projectLink ? (
          <Link href={projectLink}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`${roboto.className} bg-[#094D3E] text-white px-6 py-2 rounded hover:bg-[#094D3E]/90 transition-colors cursor-pointer`}
            >
              Click Here
            </motion.button>
          </Link>
        ) : (
          <button
            className={`${roboto.className} bg-[#094D3E] text-white px-6 py-2 rounded hover:bg-[#094D3E]/90 transition-colors opacity-50 cursor-not-allowed`}
            disabled
          >
            Coming Soon
          </button>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'MED SPECTRA',
      description: 'Here is Med Spectra, a healthcare platform I designed to help doctors efficiently analyze patient information and manage care. It streamlines workflows, enhances diagnosis accuracy, and improves patient outcomes through an intuitive and user-friendly interface.',
      image: '/project-1.png',
      projectLink: '/projects/med-spectra'
    },
    {
      title: 'WISE DASHBOARD',
      description: 'This WISE dashboard redesign focuses on improving the user interface while preserving core functionality. I enhanced the layout, visual hierarchy, and usability to create a more modern and user-friendly design.',
      image: '/project-2.png',
      projectLink: '/projects/wise-dashboard'
    },
    {
      title: 'CLAY',
      description: 'I redesigned the CLAY screen, replicating the original look exactly. This process helped me refine my ability to work on spacing by relying on visual judgment, improving my attention to detail and precision.',
      image: '/project-3.png',
      projectLink: '/projects/clay'
    },
  ];

  return (
    <section className="relative py-20 overflow-hidden" id="project">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <h2 className={`${castellar.className} text-[#094D3E] text-4xl font-playfair text-center mb-16`}>
          MY PROJECT
        </h2>
        <div className="space-y-20 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              index={index}
              title={project.title}
              description={project.description}
              image={project.image}
              projectLink={project.projectLink}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
      <BackgroundBeams />
    </section>
  );
};

export default Projects; 