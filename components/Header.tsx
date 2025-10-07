import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';
import { MenuIcon, XIcon } from './IconComponents';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const NavLinks: React.FC = () => (
    <>
      {NAV_LINKS.map((link: NavLink) => (
        <a
          key={link.name}
          href={link.href}
          onClick={(e) => handleLinkClick(e, link.href)}
          className="px-4 py-2 text-sm font-medium text-brand-gray-200 hover:text-brand-blue transition-colors duration-300"
        >
          {link.name}
        </a>
      ))}
    </>
  );

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-gray-800/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold tracking-wider text-white">
          ZATHEK
        </a>
        <nav className="hidden md:flex items-center space-x-2">
          <NavLinks />
        </nav>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-brand-gray-800/95 backdrop-blur-sm py-4">
          <nav className="flex flex-col items-center space-y-4">
            <NavLinks />
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
