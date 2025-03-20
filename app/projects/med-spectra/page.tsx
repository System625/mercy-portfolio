'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { playfair, roboto } from '../../fonts';

export default function MedSpectraProject() {
  const images = [
    {
      src: '/project-1/dashboard-overview.png',
      alt: 'Dashboard Overview',
      title: 'Dashboard Overview',
      description: 'The main dashboard provides a comprehensive view of patient information and key metrics.'
    },
    {
      src: '/project-1/patient-dashboard.png',
      alt: 'Patient Dashboard',
      title: 'Patient Dashboard',
      description: 'Detailed patient information and medical history in an organized layout.'
    },
    {
      src: '/project-1/analytics.png',
      alt: 'Analytics Dashboard',
      title: 'Analytics Dashboard',
      description: 'Advanced analytics and data visualization for patient trends and insights.'
    },
    {
      src: '/project-1/ai-destection.png',
      alt: 'AI Detection',
      title: 'AI Detection Interface',
      description: 'AI-powered detection system for enhanced diagnostic accuracy.'
    },
    {
      src: '/project-1/image-viewer.png',
      alt: 'Image Viewer',
      title: 'Medical Image Viewer',
      description: 'Specialized medical image viewer for detailed examination and analysis.'
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
              MED SPECTRA
            </h1>
            <p className={`${roboto.className} text-lg md:text-xl text-[#494848] max-w-3xl mx-auto`}>
              Med Spectra is a comprehensive healthcare platform designed to streamline patient care 
              and enhance medical professionals&apos; workflow. The project focuses on creating an 
              intuitive interface that combines powerful functionality with ease of use.
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
                    className="object-cover"
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