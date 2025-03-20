'use client';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full py-4 px-6 md:px-16 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Icon icon="ph:user-circle-duotone" className="text-[#094D3E] text-5xl" />
          <span className="text-[#094D3E] font-medium text-xl">Abani Mercy Portfolio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-20 text-xl text-[#000000]">
          <Link href="#about" className="hover:text-[#094D3E] transition-colors">
            About Me
          </Link>
          <Link href="#skills" className="hover:text-[#094D3E] transition-colors">
            Skills
          </Link>
          <Link href="#project" className="hover:text-[#094D3E] transition-colors">
            Project
          </Link>
          <Link 
            href="#contact" 
            className="bg-[#094D3E] text-white px-6 py-2 rounded hover:bg-[#094D3E]/90 transition-colors"
          >
            Contact Me
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <button className="md:hidden z-50" onClick={toggleMenu}>
          <Icon 
            icon={isMenuOpen ? "ph:x-bold" : "ph:list-bold"} 
            className="text-[#094D3E] text-2xl"
          />
        </button>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-white z-40 md:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          pt-24 px-6
        `}>
          <div className="flex flex-col items-center gap-8 text-xl">
            <Link 
              href="#about" 
              className="text-[#000000] hover:text-[#094D3E] transition-colors"
              onClick={toggleMenu}
            >
              About Me
            </Link>
            <Link 
              href="#skills" 
              className="text-[#000000] hover:text-[#094D3E] transition-colors"
              onClick={toggleMenu}
            >
              Skills
            </Link>
            <Link 
              href="#project" 
              className="text-[#000000] hover:text-[#094D3E] transition-colors"
              onClick={toggleMenu}
            >
              Project
            </Link>
            <Link 
              href="#contact" 
              className="bg-[#094D3E] text-white px-6 py-2 rounded hover:bg-[#094D3E]/90 transition-colors"
              onClick={toggleMenu}
            >
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 