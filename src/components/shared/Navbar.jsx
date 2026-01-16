'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Home, BookOpen, Info, Mail, HeadphonesIcon, Newspaper, Menu, X } from 'lucide-react';
import Container from './Container';
import Logo from './Logo';
import Button from './Button';
import ThemeToggle from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Courses', href: '/courses', icon: BookOpen },
  { name: 'About', href: '/about', icon: Info },
  { name: 'Contact', href: '/contact', icon: Mail },
  { name: 'Support', href: '/support', icon: HeadphonesIcon },
  { name: 'News & Blogs', href: '/news', icon: Newspaper },
];

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-[#1a1d23] shadow-md sticky top-0 z-50 transition-colors duration-200">
      <Container>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo />
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 px-3 py-2 rounded-lg text-[#24292d] dark:text-gray-200 hover:text-[#17a2b7] dark:hover:text-[#17a2b7] hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                >
                  <Icon size={18} />
                  <span className="font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side - Theme Toggle & Sign In Button */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            <Link href="/signin">
              <Button variant="primary" size="md">
                Sign In
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-[#24292d] dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden pb-4 border-t border-gray-200 dark:border-gray-700 mt-2 pt-4">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#24292d] dark:text-gray-200 hover:text-[#17a2b7] dark:hover:text-[#17a2b7] hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                  >
                    <Icon size={20} />
                    <span className="font-medium">{item.name}</span>
                  </Link>
                );
              })}
              <div className="pt-2">
                <Link href="/signin" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button variant="primary" size="md" className="w-full">
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
