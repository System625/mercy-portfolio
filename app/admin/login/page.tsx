'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { playfair, roboto } from '../../fonts';
import { toast } from 'sonner';
import Cookies from 'js-cookie';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const formData = new FormData(e.currentTarget);
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
      // Simple credential check
      if (username === 'admin' && password === 'mercy2024') {
        // Set cookie
        Cookies.set('admin_token', 'admin_authenticated', { expires: 7 }); // Expires in 7 days
        toast.success('Login successful');
        router.push('/admin');
        router.refresh();
      } else {
        toast.error('Invalid credentials');
      }
    } catch (error: unknown) {
      console.error('Login error:', error);
      toast.error('An error occurred during login');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md space-y-8 bg-white p-8 rounded-lg shadow-lg"
      >
        <div className="text-center">
          <h2 className={`${playfair.className} text-3xl font-bold text-[#094D3E]`}>
            Admin Login
          </h2>
          <p className={`${roboto.className} mt-2 text-gray-600`}>
            Please sign in to access the admin dashboard
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="username" className={`${roboto.className} block text-sm font-medium text-gray-700`}>
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#094D3E]"
              />
            </div>
            <div>
              <label htmlFor="password" className={`${roboto.className} block text-sm font-medium text-gray-700`}>
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="mt-1 w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-[#094D3E]"
              />
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isLoading}
            className={`w-full py-3 rounded transition-colors flex items-center justify-center ${
              isLoading ? 'bg-[#094D3E]/50 cursor-not-allowed' : 'bg-[#094D3E] hover:bg-[#094D3E]/90'
            } text-white`}
          >
            {isLoading ? 'Signing in...' : 'Sign in'}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
} 