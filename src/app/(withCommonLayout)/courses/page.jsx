import Link from 'next/link';
import React from 'react';
import Card from './_components/Card';
import Container from '@/components/shared/Container';
import { Search, Filter } from 'lucide-react';

export default function CoursesPage() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#1a1d23] transition-colors">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white py-16">
        <Container>
          <h1 className="text-5xl font-bold mb-4">Explore Our Courses</h1>
          <p className="text-xl">Discover the perfect course to advance your career</p>
        </Container>
      </div>

      <Container>
        <div className="py-8">
          {/* Search and Filter Section */}
          <div className="mb-8 flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-auto">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                Showing <span className="font-semibold text-[#17a2b7]">6</span> courses
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              {/* Search Bar */}
              <div className="relative flex-1 md:w-64">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search courses..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none bg-white dark:bg-[#24292d] text-gray-900 dark:text-white"
                />
              </div>

              {/* Filter Button */}
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300">
                <Filter size={20} />
                <span>Filter</span>
              </button>
            </div>
          </div>

          {/* Courses Grid */}
          <div>
            <Card />
          </div>
        </div>
      </Container>
    </main>
  );
}
