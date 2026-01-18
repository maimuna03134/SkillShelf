'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { Search, Filter, X, Clock, Users, Star, TrendingUp } from 'lucide-react';
import coursesData from '@/data/courses.json';

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [priceRange, setPriceRange] = useState('All');

  // Get unique categories and levels
  const categories = ['All', ...new Set(coursesData.map(course => course.category))];
  const levels = ['All', ...new Set(coursesData.map(course => course.level))];

  // Filter courses based on search and filters
  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => {
      // Search filter
      const matchesSearch = 
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

      // Category filter
      const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;

      // Level filter
      const matchesLevel = selectedLevel === 'All' || course.level === selectedLevel;

      // Price filter
      let matchesPrice = true;
      if (priceRange === 'Free') {
        matchesPrice = course.price === 0;
      } else if (priceRange === 'Under $50') {
        matchesPrice = course.price > 0 && course.price < 50;
      } else if (priceRange === '$50-$100') {
        matchesPrice = course.price >= 50 && course.price <= 100;
      } else if (priceRange === 'Over $100') {
        matchesPrice = course.price > 100;
      }

      return matchesSearch && matchesCategory && matchesLevel && matchesPrice;
    });
  }, [searchQuery, selectedCategory, selectedLevel, priceRange]);

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('All');
    setSelectedLevel('All');
    setPriceRange('All');
  };

  const hasActiveFilters = searchQuery || selectedCategory !== 'All' || selectedLevel !== 'All' || priceRange !== 'All';

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
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-4">
              <div className="w-full md:w-auto">
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  Showing <span className="font-semibold text-[#17a2b7]">{filteredCourses.length}</span> of <span className="font-semibold">{coursesData.length}</span> courses
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                {/* Search Bar */}
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="text"
                    placeholder="Search courses..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none bg-white dark:bg-[#24292d] text-gray-900 dark:text-white"
                  />
                </div>

                {/* Filter Button */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center space-x-2 px-4 py-2 border rounded-lg transition-colors ${
                    showFilters || hasActiveFilters
                      ? 'bg-[#17a2b7] text-white border-[#17a2b7]'
                      : 'border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                  }`}
                >
                  <Filter size={20} />
                  <span>Filter</span>
                  {hasActiveFilters && !showFilters && (
                    <span className="ml-1 px-2 py-0.5 bg-white text-[#17a2b7] rounded-full text-xs font-semibold">
                      Active
                    </span>
                  )}
                </button>
              </div>
            </div>

            {/* Filter Panel */}
            {showFilters && (
              <div className="bg-white dark:bg-[#24292d] rounded-lg shadow-lg p-6 mb-6 border border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Filters</h3>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className="text-sm text-[#17a2b7] hover:underline flex items-center space-x-1"
                    >
                      <X size={16} />
                      <span>Clear All</span>
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Category Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Category
                    </label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none bg-white dark:bg-[#1a1d23] text-gray-900 dark:text-white"
                    >
                      {categories.map(category => (
                        <option key={category} value={category}>{category}</option>
                      ))}
                    </select>
                  </div>

                  {/* Level Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Level
                    </label>
                    <select
                      value={selectedLevel}
                      onChange={(e) => setSelectedLevel(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none bg-white dark:bg-[#1a1d23] text-gray-900 dark:text-white"
                    >
                      {levels.map(level => (
                        <option key={level} value={level}>{level}</option>
                      ))}
                    </select>
                  </div>

                  {/* Price Filter */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Price Range
                    </label>
                    <select
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none bg-white dark:bg-[#1a1d23] text-gray-900 dark:text-white"
                    >
                      <option value="All">All Prices</option>
                      <option value="Free">Free</option>
                      <option value="Under $50">Under $50</option>
                      <option value="$50-$100">$50 - $100</option>
                      <option value="Over $100">Over $100</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {/* Active Filters Tags */}
            {hasActiveFilters && (
              <div className="flex flex-wrap gap-2 mb-4">
                {searchQuery && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-[#17a2b7] text-white rounded-full text-sm">
                    <span>Search: "{searchQuery}"</span>
                    <button onClick={() => setSearchQuery('')} className="hover:bg-white/20 rounded-full p-0.5">
                      <X size={14} />
                    </button>
                  </span>
                )}
                {selectedCategory !== 'All' && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-[#17a2b7] text-white rounded-full text-sm">
                    <span>Category: {selectedCategory}</span>
                    <button onClick={() => setSelectedCategory('All')} className="hover:bg-white/20 rounded-full p-0.5">
                      <X size={14} />
                    </button>
                  </span>
                )}
                {selectedLevel !== 'All' && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-[#17a2b7] text-white rounded-full text-sm">
                    <span>Level: {selectedLevel}</span>
                    <button onClick={() => setSelectedLevel('All')} className="hover:bg-white/20 rounded-full p-0.5">
                      <X size={14} />
                    </button>
                  </span>
                )}
                {priceRange !== 'All' && (
                  <span className="inline-flex items-center space-x-1 px-3 py-1 bg-[#17a2b7] text-white rounded-full text-sm">
                    <span>Price: {priceRange}</span>
                    <button onClick={() => setPriceRange('All')} className="hover:bg-white/20 rounded-full p-0.5">
                      <X size={14} />
                    </button>
                  </span>
                )}
              </div>
            )}
          </div>

          {/* Courses Grid */}
          {filteredCourses.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="bg-white dark:bg-[#24292d] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-white dark:bg-[#24292d] px-3 py-1 rounded-full shadow-md">
                      <span className="text-sm font-semibold text-[#17a2b7]">{course.category}</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Course Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#17a2b7] transition-colors">
                      {course.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                      {course.description}
                    </p>

                    {/* Rating and Students */}
                    <div className="flex items-center mb-4">
                      <div className="flex items-center">
                        <Star className="w-5 h-5 text-[#f7c32f] fill-[#f7c32f]" />
                        <span className="ml-1 text-sm font-semibold text-gray-900 dark:text-white">{course.rating}</span>
                      </div>
                      <span className="mx-2 text-gray-400">•</span>
                      <Users className="w-4 h-4 text-gray-400" />
                      <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">{course.students.toLocaleString()}</span>
                    </div>

                    {/* Duration and Level */}
                    <div className="flex items-center justify-between mb-4 text-sm">
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Clock size={16} />
                        <span className="ml-1">{course.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <TrendingUp size={16} className="text-[#17a2b7]" />
                        <span className="ml-1 text-gray-600 dark:text-gray-400">{course.level}</span>
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                      <div>
                        <span className="text-3xl font-bold text-[#17a2b7]">${course.price}</span>
                      </div>
                      <Link href={`/courses/${course.slug}`}>
                        <Button variant="solid" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-16 h-16 text-gray-400" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                No Courses Found
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
                Try adjusting your search or filters
              </p>
              <button
                onClick={clearFilters}
                className="px-6 py-3 bg-[#17a2b7] text-white rounded-lg hover:bg-[#138a9d] transition-colors font-medium"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </Container>
    </main>
  );
}
