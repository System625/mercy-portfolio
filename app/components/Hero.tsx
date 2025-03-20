'use client';
import Image from 'next/image';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen pt-12 md:pt-20 px-6 md:px-16"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-2xl md:text-4xl font-light text-[#020202]"
            >
              Hello I&apos;am{' '}
              <span className="font-bold">Abani-Elem Mercy Ugonna</span>
            </motion.h1>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-[#094D3E] text-3xl md:text-4xl lg:text-[40px] font-playfair font-medium italic"
            >
              UI/UX Designer
            </motion.h2>
          </div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-[#494848] text-lg max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            I&apos;m a UI/UX designer with an eye for clean details with well organized web
            designs and mobile designs. I specialize in meeting the users satisfaction by
            designing to their expectation and satisfaction.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="flex flex-col items-center md:items-start gap-8"
          >
            <div className="flex flex-col items-center md:items-start w-full max-w-2xl">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="text-gray-700 text-lg flex items-center gap-2 mb-4"
              >
                Let&apos;s work together <Icon icon="ph:hand-waving-light" className="text-2xl" />
              </motion.p>
              <motion.div 
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                className="w-full h-[2px] bg-[#094D3E] origin-left"
              ></motion.div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="bg-[#094D3E] text-white px-8 py-3 rounded hover:bg-[#094D3E]/90 transition-colors flex items-center gap-2 text-lg"
            >
              Download CV <Icon icon="ph:download-simple" className="text-xl" />
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end mb-8 md:mb-0"
        >
          <motion.div 
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-[280px] h-[280px] md:w-[450px] md:h-[450px]"
          >
            <Image
              src="/headshot.png"
              alt="Abani Mercy"
              fill
              priority
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero; 