'use client';

import React, { useState, useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home, BookOpen, Info, Mail, HeadphonesIcon, Newspaper, Menu, X, ChevronDown, User, LogOut, LayoutDashboard, Settings } from 'lucide-react';
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

// Helper function to get user from cookies
const getUserFromCookies = () => {
  if (typeof window === 'undefined') return null;
  
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {});

  if (cookies.auth === 'true') {
    return {
      email: cookies.userEmail || '',
      role: cookies.userRole || 'user'
    };
  }
  return null;
};

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [user, setUser] = useState(null);
  const mountedRef = useRef(false);

  useLayoutEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      setUser(getUserFromCookies());
      setIsClient(true);
    }
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLogout = () => {
    // Clear cookies
    document.cookie = "auth=; path=/; max-age=0";
    document.cookie = "userEmail=; path=/; max-age=0";
    document.cookie = "userRole=; path=/; max-age=0";
    
    setUser(null);
    setIsUserMenuOpen(false);
    router.push('/');
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

          {/* Right Side - Theme Toggle & Auth */}
          <div className="hidden lg:flex items-center space-x-3">
            <ThemeToggle />
            
            {!isClient ? (
              // Placeholder to prevent hydration mismatch
              <div className="w-24 h-10" />
            ) : user ? (
              // User Dropdown Menu
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                  className="flex items-center space-x-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <User size={18} className="text-[#17a2b7]" />
                  <span className="text-sm font-medium text-[#24292d] dark:text-white">
                    {user.email.split('@')[0]}
                  </span>
                  <ChevronDown size={16} className="text-gray-600 dark:text-gray-300" />
                </button>

                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-[#24292d] rounded-lg shadow-lg py-2 border border-gray-200 dark:border-gray-700">
                    <div className="px-4 py-2 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-medium text-[#24292d] dark:text-white">{user.email}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user.role}</p>
                    </div>
                    
                    <Link
                      href="/dashboard"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <LayoutDashboard size={18} />
                      <span>Dashboard</span>
                    </Link>
                    
                    <Link
                      href="/settings"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Settings size={18} />
                      <span>Settings</span>
                    </Link>
                    
                    <div className="border-t border-gray-200 dark:border-gray-700 mt-2 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 w-full px-4 py-2 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      >
                        <LogOut size={18} />
                        <span>Logout</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <Button variant="primary" size="md">
                  Sign In
                </Button>
              </Link>
            )}
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
          <div className="lg:hidden pb-4 border-t border-gray-200 dark:border-gray-700 mt-2 pt-4 max-h-[calc(100vh-80px)] overflow-y-auto">
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
              
              {isClient && user ? (
                <>
                  <div className="border-t border-gray-200 dark:border-gray-700 my-2 pt-2">
                    <div className="px-4 py-2 bg-gray-50 dark:bg-gray-700 rounded-lg mb-2">
                      <p className="text-sm font-medium text-[#24292d] dark:text-white">{user.email}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 capitalize">{user.role}</p>
                    </div>
                    
                    <Link
                      href="/dashboard"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#24292d] dark:text-gray-200 hover:text-[#17a2b7] dark:hover:text-[#17a2b7] hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <LayoutDashboard size={20} />
                      <span className="font-medium">Dashboard</span>
                    </Link>
                    
                    <Link
                      href="/settings"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center space-x-3 px-4 py-3 rounded-lg text-[#24292d] dark:text-gray-200 hover:text-[#17a2b7] dark:hover:text-[#17a2b7] hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200"
                    >
                      <Settings size={20} />
                      <span className="font-medium">Settings</span>
                    </Link>
                    
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMobileMenuOpen(false);
                      }}
                      className="flex items-center space-x-3 w-full px-4 py-3 rounded-lg text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-200"
                    >
                      <LogOut size={20} />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                </>
              ) : isClient ? (
                <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="primary" size="md" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                </div>
              ) : null}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
