import React, { useState, useEffect } from 'react';
import { Menu, X, Home, User, ShoppingBag, Mail, Shirt } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', icon: Home, href: '#home' },
    { name: 'About', icon: User, href: '#about' },
    { name: 'Collection', icon: Shirt, href: '#collection' },
    { name: 'Shop', icon: ShoppingBag, href: '#shop' },
    { name: 'Contact', icon: Mail, href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-out ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <div
                className={`font-light text-2xl tracking-wider transition-colors duration-500 ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
              >
                ARSENIC
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-12">
                {menuItems.map((item) => (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className={`group relative font-light text-sm tracking-wide transition-all duration-500 ease-out hover:scale-105 ${
                      isScrolled
                        ? 'text-gray-700 hover:text-black'
                        : 'text-white/90 hover:text-white'
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-500 group-hover:w-full ${
                        isScrolled ? 'bg-black' : 'bg-white'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 transition-colors duration-500 ${
                  isScrolled
                    ? 'text-black hover:text-gray-700'
                    : 'text-white hover:text-white/80'
                }`}
              >
                {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-out ${
            isMobileMenuOpen
              ? 'max-h-80 opacity-100'
              : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="px-6 pt-4 pb-6 space-y-4 bg-white/95 backdrop-blur-xl border-t border-gray-200">
            {menuItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left font-light text-gray-700 hover:text-black transition-colors duration-300 py-2"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;