'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { playfair, roboto } from '../../fonts';

export default function KiraProject() {
  const images = [
    {
      src: '/project-3/task.png',
      alt: 'Kira Desktop View',
      title: 'Desktop Interface',
      description: 'A clean and intuitive desktop interface that provides a comprehensive view of all tasks and boards, making it easy to manage multiple projects simultaneously.'
    },
    {
      src: '/project-3/mobile.png',
      alt: 'Kira Mobile View',
      title: 'Mobile Experience',
      description: 'A responsive mobile design that maintains full functionality while adapting perfectly to smaller screens, ensuring productivity on the go.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Back button */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-6 left-6 z-50"
      >
        <Link 
          href="/#project"
          className="flex items-center gap-2 text-[#094D3E] hover:text-[#094D3E]/80 transition-colors"
        >
          <Icon icon="famicons:arrow-undo" className="text-2xl text-[#094d3E]" />
          <span className={`${roboto.className}`}>Back to Projects</span>
        </Link>
      </motion.div>

      <main className="pt-24 px-6 md:px-16 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className={`${playfair.className} text-4xl md:text-5xl text-[#094D3E] mb-6`}>
              KIRA KANBAN BOARD
            </h1>
            <p className={`${roboto.className} text-lg md:text-xl text-[#494848] max-w-3xl mx-auto`}>
              A modern task management solution that combines the efficiency of Kanban methodology 
              with an elegant, user-friendly interface. This project showcases my ability to create 
              intuitive, responsive designs that enhance productivity and team collaboration.
            </p>
          </motion.div>

          <div className="space-y-20">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="space-y-6"
              >
                <div className={`relative w-full overflow-hidden rounded-lg shadow-lg ${
                  image.src.includes('mobile') ? 'max-w-sm mx-auto aspect-[9/19]' : 'aspect-video'
                }`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className={`${image.src.includes('mobile') ? 'object-contain' : 'object-cover'}`}
                    quality={100}
                  />
                </div>
                <div className="text-center max-w-3xl mx-auto">
                  <h2 className={`${playfair.className} text-2xl md:text-3xl text-[#094D3E] mb-3`}>
                    {image.title}
                  </h2>
                  <p className={`${roboto.className} text-[#494848] text-lg`}>
                    {image.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-20 max-w-3xl mx-auto"
          >
            <h3 className={`${playfair.className} text-2xl text-[#094D3E] mb-4 text-center`}>
              Key Features
            </h3>
            <ul className={`${roboto.className} text-[#494848] space-y-3 list-disc pl-6`}>
              <li>Intuitive drag-and-drop interface for easy task management</li>
              <li>Responsive design that works seamlessly across all devices</li>
              <li>Real-time updates and collaboration features</li>
              <li>Customizable boards and columns for flexible workflow management</li>
              <li>Clean, modern UI with attention to visual hierarchy and usability</li>
              <li>Efficient task filtering and search capabilities</li>
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 