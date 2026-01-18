import Link from 'next/link';
import { Home, Search, ArrowLeft } from 'lucide-react';
import Button from '@/components/shared/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#1a1d23] flex items-center justify-center px-4 transition-colors">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#17a2b7] mb-4">404</h1>
          <div className="w-32 h-1 bg-[#f7c32f] mx-auto rounded-full"></div>
        </div>

        {/* Error Message */}
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
          Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button variant="solid" size="lg" className="flex items-center space-x-2">
              <Home size={20} />
              <span>Back to Home</span>
            </Button>
          </Link>
          
          <Link href="/courses">
            <Button variant="primary" size="lg" className="flex items-center space-x-2">
              <Search size={20} />
              <span>Browse Courses</span>
            </Button>
          </Link>
        </div>

        {/* Helpful Links */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            Here are some helpful links instead:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-[#17a2b7] hover:text-[#f7c32f] transition-colors">
              About Us
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/contact" className="text-[#17a2b7] hover:text-[#f7c32f] transition-colors">
              Contact
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/support" className="text-[#17a2b7] hover:text-[#f7c32f] transition-colors">
              Support
            </Link>
            <span className="text-gray-400">•</span>
            <Link href="/news" className="text-[#17a2b7] hover:text-[#f7c32f] transition-colors">
              News & Blogs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
