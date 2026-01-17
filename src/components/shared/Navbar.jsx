'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/react';
import { Home, BookOpen, Info, Mail, HeadphonesIcon, Menu, X, ChevronDown, User, LogOut, LayoutDashboard, Settings } from 'lucide-react';
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

];

export default function Navbar() {
  const { data: session, status } = useSession();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-[#24292d] shadow-md sticky top-0 z-50 transition-colors">
      <Container>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-1 text-gray-700 dark:text-gray-300 hover:text-[#17a2b7] dark:hover:text-[#17a2b7] transition-colors font-medium"
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side - Theme Toggle & Auth */}
          <div className="hidden md:flex items-center space-x-4">
            <ThemeToggle />
            
            {status === 'loading' ? (
              <div className="w-8 h-8 border-2 border-[#17a2b7] border-t-transparent rounded-full animate-spin"></div>
            ) : session ? (
              <div className="relative">
                <button
                  onClick={toggleUserMenu}
                  className="flex items-center space-x-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  <User size={20} className="text-[#17a2b7]" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">
                    {session.user.name || session.user.email}
                  </span>
                  <ChevronDown size={16} className="text-gray-500" />
                </button>

                {/* User Dropdown Menu */}
                {isUserMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-[#24292d] rounded-lg shadow-lg py-2 border border-gray-200 dark:border-gray-700">
                    <Link
                      href="/dashboard"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <LayoutDashboard size={18} />
                      <span>Dashboard</span>
                    </Link>
                    <Link
                      href="/dashboard/myProfile"
                      onClick={() => setIsUserMenuOpen(false)}
                      className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <Settings size={18} />
                      <span>Settings</span>
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center space-x-2 w-full px-4 py-2 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <LogOut size={18} />
                      <span>Logout</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/login">
                <Button variant="solid" size="md">
                  Sign In
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 dark:text-gray-300 p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 dark:border-gray-700 max-h-[calc(100vh-4rem)] overflow-y-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </Link>
              );
            })}

            <div className="border-t border-gray-200 dark:border-gray-700 mt-4 pt-4">
              {status === 'loading' ? (
                <div className="flex justify-center py-4">
                  <div className="w-8 h-8 border-2 border-[#17a2b7] border-t-transparent rounded-full animate-spin"></div>
                </div>
              ) : session ? (
                <>
                  <div className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400">
                    {session.user.email}
                  </div>
                  <Link
                    href="/dashboard"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <LayoutDashboard size={20} />
                    <span>Dashboard</span>
                  </Link>
                  <Link
                    href="/dashboard/myProfile"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center space-x-2 px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <Settings size={20} />
                    <span>Settings</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex items-center space-x-2 w-full px-4 py-3 text-red-600 dark:text-red-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                  >
                    <LogOut size={20} />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <div className="px-4">
                  <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="solid" size="md" className="w-full">
                      Sign In
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
