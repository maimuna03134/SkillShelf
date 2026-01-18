'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Clock, Users, Star, TrendingUp } from 'lucide-react';
import coursesData from '@/data/courses.json';

export default function MyCoursePage() {
  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    // Mock enrollments - in real app, fetch from API
    // For now, showing empty state
    setEnrollments([]);
  }, []);

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          My Courses
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Continue your learning journey
        </p>
      </div>

      {enrollments.length === 0 ? (
        <div className="bg-white dark:bg-[#24292d] rounded-xl shadow-lg p-12 text-center">
          <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-16 h-16 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            No Courses Yet
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
            Start learning by enrolling in a course
          </p>
          <Link
            href="/courses"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white rounded-lg font-semibold hover:shadow-xl transition-all text-lg"
          >
            Browse Courses
          </Link>
        </div>
      ) : (
        <>
          <div className="mb-8 flex justify-between items-center">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              You are enrolled in{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                {enrollments.length}
              </span>{' '}
              course{enrollments.length !== 1 ? 's' : ''}
            </p>
            <Link
              href="/courses"
              className="px-6 py-3 bg-[#17a2b7] text-white rounded-lg hover:bg-[#138a9d] transition-all font-medium"
            >
              Browse More Courses
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrollments.map((enrollment) => (
              <div
                key={enrollment.id}
                className="bg-white dark:bg-[#24292d] rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={enrollment.course?.image}
                    alt={enrollment.course?.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {enrollment.course?.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                    {enrollment.course?.description}
                  </p>

                  <div className="mb-4">
                    <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                      <span className="font-medium">Progress</span>
                      <span className="font-semibold">{enrollment.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-[#17a2b7] to-[#24292d] h-3 rounded-full transition-all duration-500"
                        style={{ width: `${enrollment.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  <Link
                    href={`/courses/${enrollment.courseId}`}
                    className="block w-full text-center px-4 py-3 bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white rounded-lg font-semibold hover:shadow-lg transition-all"
                  >
                    Continue Learning
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
