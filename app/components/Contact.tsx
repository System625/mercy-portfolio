'use client';
import { Icon } from '@iconify/react';
import { useState, FormEvent } from 'react';
import { playfair, roboto, castellar } from '../fonts';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      toast.success('Message sent successfully! I will get back to you soon.', {
        style: {
          background: '#094D3E',
          color: '#fff',
        },
      });
      
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : 'Failed to send message', {
        style: {
          background: '#dc2626',
          color: '#fff',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-20 overflow-hidden border-t-2 border-gray-300" 
      id="contact"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`${castellar.className} text-2xl md:text-4xl text-[#094D3E] text-center mb-4`}
        >
          CONTACT ME
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`${roboto.className} text-center text-2xl text-[#494848] mb-12`}
        >
          You can always connect with me at any time, I&apos;m here to bring your idea to live.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className={`${playfair.className} text-2xl md:text-3xl font-semibold`}>
              Abani-Elem Mercy Ugonna
            </h3>
            
            <div className="space-y-4">
              <div className={`${roboto.className} flex items-center gap-2`}>
                <Icon icon="ph:phone" className="text-2xl text-[#094D3E]" />
                <span>09069092768</span>
              </div>
              <div className={`${roboto.className} flex items-center gap-2`}>
                <Icon icon="ph:envelope" className="text-2xl text-[#094D3E]" />
                <span>abanielemmercyugonna@gmail.com</span>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4 pt-4"
            >
              <a href="https://x.com/AbaniMercy" className="text-[#094D3E] hover:text-[#094D3E]/80">
                <Icon icon="line-md:twitter-x" className="text-2xl" />
              </a>
              <a href="https://www.facebook.com/mercy.abani.58?mibextid=LQQJ4d" className="text-[#094D3E] hover:text-[#094D3E]/80">
                <Icon icon="ic:baseline-facebook" className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/abani-mercy-10b281357/" className="text-[#094D3E] hover:text-[#094D3E]/80">
                <Icon icon="mdi:linkedin" className="text-2xl" />
              </a>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            onSubmit={handleSubmit} 
            className="space-y-6"
          >
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                disabled={isSubmitting}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#094D3E] disabled:opacity-50"
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                disabled={isSubmitting}
                className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#094D3E] disabled:opacity-50"
              />
            </div>
            <textarea
              placeholder="Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              disabled={isSubmitting}
              rows={6}
              className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:border-[#094D3E] disabled:opacity-50"
            />
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 rounded transition-colors flex items-center justify-center gap-2 cursor-pointer ${
                isSubmitting ? 'bg-[#094D3E]/50 cursor-not-allowed' : 'bg-[#094D3E] hover:bg-[#094D3E]/90'
              } text-white`}
            >
              {isSubmitting ? (
                <>
                  <Icon icon="eos-icons:loading" className="text-xl animate-spin" />
                  Sending...
                </>
              ) : (
                'Send'
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>

      <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center mt-20 text-sm text-gray-600"
      >
        © 2025 Abani Mercy. All rights reserved.
      </motion.footer>
    </motion.section>
  );
};

export default Contact; 