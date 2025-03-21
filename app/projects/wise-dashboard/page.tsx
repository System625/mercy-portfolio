'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { playfair, roboto } from '../../fonts';

export default function WiseDashboardProject() {
  const images = [
    {
      src: '/project-2/wise-dashboard.png',
      alt: 'WISE Dashboard Main View',
      title: 'Main Dashboard Interface',
      description: 'The redesigned main dashboard interface features an improved layout with enhanced visual hierarchy and modern design elements.'
    },
    {
      src: '/project-2/alternate-dashboard.png',
      alt: 'Alternative Dashboard View',
      title: 'Alternative Dashboard Layout',
      description: 'An alternate view of the dashboard showcasing different data visualization methods and layout options for improved user experience.'
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
              WISE DASHBOARD
            </h1>
            <p className={`${roboto.className} text-lg md:text-xl text-[#494848] max-w-3xl mx-auto`}>
              A comprehensive dashboard redesign project focused on enhancing user experience 
              through improved visual hierarchy, modern design elements, and intuitive data 
              visualization. The redesign maintains core functionality while introducing a 
              fresh, user-friendly interface.
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
                <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-contain"
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
        </div>
      </main>
    </div>
  );
} 