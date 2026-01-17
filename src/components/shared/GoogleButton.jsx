'use client';

import { signIn } from 'next-auth/react';
import { useState } from 'react';
import { FcGoogle } from "react-icons/fc";

export default function GoogleButton({ className = '' }) {
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleSignIn = async () => {
    setIsLoading(true);
    try {
      await signIn('google', { 
        callbackUrl: '/dashboard',
        redirect: true 
      });
    } catch (error) {
      console.error('Google sign in error:', error);
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleGoogleSignIn}
      disabled={isLoading}
      className={`w-full flex items-center justify-center space-x-3 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-[#24292d] hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      {isLoading ? (
        <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
      ) : (
          <FcGoogle className="w-5 h-5" />
      )}
      <span className="text-gray-700 dark:text-gray-300 font-medium">
        {isLoading ? 'Signing in...' : ' Google'}
      </span>
    </button>
  );
}