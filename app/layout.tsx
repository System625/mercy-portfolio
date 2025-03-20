'use client';
import { Toaster } from 'sonner';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Mercy&apos;s Portfolio</title>
        <meta name="description" content="Welcome to Mercy&apos;s Portfolio - Showcasing creative works and professional achievements" />
      </head>
      <body>
        {children}
        <Toaster 
          position="top-right"
          toastOptions={{
            style: {
              background: '#094D3E',
              color: 'white',
              border: 'none',
            },
          }}
        />
      </body>
    </html>
  );
}
