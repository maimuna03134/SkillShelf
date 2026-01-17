import React from 'react';
import GoogleButton from '../shared/GoogleButton';

export default function SocialLogin() {
  return (
    <div className="mt-6">
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white dark:bg-[#24292d] text-gray-500 dark:text-gray-400">
            Or continue with
          </span>
        </div>
      </div>

      <div className="mt-6">
        <GoogleButton />
      </div>
    </div>
  );
}
