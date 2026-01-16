import React from 'react';
import Link from 'next/link';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import Button from '../shared/Button';

export default function LoginForm({ 
  formData, 
  error, 
  isLoading, 
  showPassword, 
  onSubmit, 
  onChange, 
  onTogglePassword 
}) {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#1a1d23] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors">
      <div className="max-w-md w-full">
        <div className="bg-white dark:bg-[#24292d] rounded-2xl shadow-xl p-8 transition-colors">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-[#17a2b7] rounded-xl flex items-center justify-center mx-auto mb-4">
              <Lock className="text-white" size={32} />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Welcome Back</h2>
            <p className="text-gray-600 dark:text-gray-400">Sign in to continue your learning journey</p>
          </div>

          <form onSubmit={onSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 px-4 py-3 rounded-lg">
                <p className="text-sm font-medium">{error}</p>
              </div>
            )}

            <div className="bg-[#17a2b7]/10 border border-[#17a2b7]/30 text-[#24292d] dark:text-gray-300 px-4 py-3 rounded-lg">
              <p className="text-sm font-medium mb-2">Demo Credentials:</p>
              <p className="text-sm">Admin: admin@skillshelf.com / admin123</p>
              <p className="text-sm">User: user@skillshelf.com / user123</p>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={onChange}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none transition-all text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={onChange}
                  className="w-full pl-10 pr-12 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none transition-all text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={onTogglePassword}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#17a2b7] focus:ring-[#17a2b7] border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <Link href="/forgot-password" className="font-semibold text-[#17a2b7] hover:text-[#f7c32f]">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              variant="solid"
              size="lg"
              disabled={isLoading}
              className="w-full"
            >
              {isLoading ? 'Signing In...' : 'Sign In'}
            </Button>
          </form>

          <p className="mt-8 text-center text-gray-600 dark:text-gray-400">
            Don&apos;t have an account?{' '}
            <Link href="/register" className="font-semibold text-[#17a2b7] hover:text-[#f7c32f]">
              Sign up for free
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
