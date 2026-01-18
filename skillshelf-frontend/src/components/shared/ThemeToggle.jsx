'use client';

import React, { useLayoutEffect, useState, useRef } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');
  const [isClient, setIsClient] = useState(false);
  const mountedRef = useRef(false);

  useLayoutEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      const savedTheme = localStorage.getItem('theme') || 'light';
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
      setIsClient(true);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!isClient) {
    return (
      <div className="p-2 w-9 h-9" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-[#24292d] dark:text-gray-200" />
      ) : (
        <Sun size={20} className="text-gray-200" />
      )}
    </button>
  );
}
