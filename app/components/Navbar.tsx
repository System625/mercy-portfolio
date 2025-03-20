'use client';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      const offset = target.offsetTop - 100; // Subtract header height + some padding
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <nav className="w-full py-4 px-6 lg:px-16 bg-white z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Icon icon="ph:user-circle-duotone" className="text-[#094D3E] text-5xl" />
          <span className="text-[#094D3E] font-medium text-xl">Abani Mercy Portfolio</span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-20 text-xl text-[#000000]">
          <a 
            href="#about" 
            onClick={(e) => handleScroll(e, 'about')}
            className="hover:text-[#094D3E] transition-colors cursor-pointer"
          >
            About Me
          </a>
          <a 
            href="#skills" 
            onClick={(e) => handleScroll(e, 'skills')}
            className="hover:text-[#094D3E] transition-colors cursor-pointer"
          >
            Skills
          </a>
          <a 
            href="#project" 
            onClick={(e) => handleScroll(e, 'project')}
            className="hover:text-[#094D3E] transition-colors cursor-pointer"
          >
            Project
          </a>
          <a 
            href="#contact" 
            onClick={(e) => handleScroll(e, 'contact')}
            className="bg-[#094D3E] text-white px-6 py-2 rounded hover:bg-[#094D3E]/90 transition-colors cursor-pointer"
          >
            Contact Me
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <button className="lg:hidden z-50" onClick={toggleMenu}>
          <Icon 
            icon={isMenuOpen ? "ph:x-bold" : "ph:list-bold"} 
            className="text-[#094D3E] text-2xl"
          />
        </button>

        {/* Mobile Menu */}
        <div className={`
          fixed inset-0 bg-white z-40 lg:hidden
          transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          pt-24 px-6
        `}>
          <div className="flex flex-col items-center gap-8 text-xl">
            <a 
              href="#about" 
              onClick={(e) => handleScroll(e, 'about')}
              className="text-[#000000] hover:text-[#094D3E] transition-colors cursor-pointer"
            >
              About Me
            </a>
            <a 
              href="#skills" 
              onClick={(e) => handleScroll(e, 'skills')}
              className="text-[#000000] hover:text-[#094D3E] transition-colors cursor-pointer"
            >
              Skills
            </a>
            <a 
              href="#project" 
              onClick={(e) => handleScroll(e, 'project')}
              className="text-[#000000] hover:text-[#094D3E] transition-colors cursor-pointer"
            >
              Project
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleScroll(e, 'contact')}
              className="bg-[#094D3E] text-white px-6 py-2 rounded hover:bg-[#094D3E]/90 transition-colors cursor-pointer"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 