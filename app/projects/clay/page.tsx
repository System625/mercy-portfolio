'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { playfair, roboto } from '../../fonts';

export default function ClayProject() {
  const image = {
    src: '/project-3/clay-dashboard.png',
    alt: 'CLAY Dashboard',
    title: 'CLAY Dashboard Interface',
    description: 'A precise recreation of the CLAY dashboard interface, demonstrating meticulous attention to detail in spacing, layout, and visual elements. This project showcases the ability to replicate complex designs with perfect accuracy.'
  };

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
              CLAY DASHBOARD
            </h1>
            <p className={`${roboto.className} text-lg md:text-xl text-[#494848] max-w-3xl mx-auto`}>
              A detailed recreation project that demonstrates precision in UI design. This project 
              focused on exact replication of the original CLAY dashboard, emphasizing the importance 
              of pixel-perfect design and attention to spacing details.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <h3 className={`${playfair.className} text-2xl text-[#094D3E] mb-4 text-center`}>
              Key Achievements
            </h3>
            <ul className={`${roboto.className} text-[#494848] space-y-3 list-disc pl-6`}>
              <li>Pixel-perfect recreation of the original CLAY dashboard interface</li>
              <li>Meticulous attention to spacing and alignment details</li>
              <li>Accurate reproduction of visual hierarchy and design elements</li>
              <li>Enhanced understanding of precise UI implementation techniques</li>
            </ul>
          </motion.div>
        </div>
      </main>
    </div>
  );
} 