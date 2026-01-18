'use client';

import { BookOpen } from 'lucide-react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1a1d23] flex items-center justify-center transition-colors">
      <div className="text-center">
        {/* Animated Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-20 h-20 bg-[#17a2b7] rounded-xl flex items-center justify-center animate-pulse">
              <BookOpen className="text-white" size={40} />
            </div>
            <div className="absolute inset-0 w-20 h-20 border-4 border-[#17a2b7] rounded-xl animate-ping opacity-75"></div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Loading SkillShelf
        </h2>
        <p className="text-gray-600 dark:text-gray-400">
          Please wait while we prepare your content...
        </p>

        {/* Loading Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#17a2b7] to-[#f7c32f] rounded-full loading-bar"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
