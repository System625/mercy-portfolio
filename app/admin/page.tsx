'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { playfair, roboto } from '../fonts';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Icon } from '@iconify/react';
import Cookies from 'js-cookie';

interface Submission {
  id: number;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}

export default function AdminDashboard() {
  const router = useRouter();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is authenticated
    const authToken = Cookies.get('admin_token');
    if (!authToken) {
      router.push('/admin/login');
      return;
    }

    const fetchSubmissions = async () => {
      try {
        const response = await fetch('/api/submissions');
        if (!response.ok) {
          throw new Error('Failed to fetch submissions');
        }
        const data = await response.json();
        setSubmissions(data.submissions);
        toast.success('Submissions loaded successfully');
      } catch (error) {
        toast.error('Error loading submissions');
        console.error('Error:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSubmissions();
  }, [router]);

  const handleSignOut = () => {
    Cookies.remove('admin_token');
    router.push('/admin/login');
    toast.success('Signed out successfully');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Icon icon="eos-icons:loading" className="text-4xl text-[#094D3E] animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`${playfair.className} text-3xl md:text-4xl text-[#094D3E]`}
          >
            Contact Form Submissions
          </motion.h1>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSignOut}
            className="bg-[#094D3E] text-white px-4 py-2 rounded hover:bg-[#094D3E]/90 transition-colors"
          >
            Sign Out
          </motion.button>
        </div>

        <div className="grid gap-6">
          {submissions.length === 0 ? (
            <p className={`${roboto.className} text-gray-500`}>No submissions yet.</p>
          ) : (
            submissions.map((submission, index) => (
              <motion.div
                key={submission.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="grid gap-2">
                  <div className="flex justify-between items-start">
                    <h2 className={`${roboto.className} font-medium text-xl`}>{submission.name}</h2>
                    <time className="text-sm text-gray-500">
                      {new Date(submission.timestamp).toLocaleDateString()}
                    </time>
                  </div>
                  <p className="text-[#094D3E]">{submission.email}</p>
                  <p className="mt-2 text-gray-700">{submission.message}</p>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </div>
  );
} 