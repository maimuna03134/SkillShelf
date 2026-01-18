'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { BookOpen, CheckCircle, Clock, TrendingUp } from 'lucide-react';
import coursesData from '@/data/courses.json';

export default function DashboardPage() {
  const { data: session } = useSession();

  // Mock data - in real app, fetch from API
  const stats = {
    totalEnrollments: 0,
    completedCourses: 0,
    inProgressCourses: 0,
    averageProgress: 0
  };

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {session?.user?.role === 'admin' ? 'Admin Dashboard' : 'My Learning Dashboard'}
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          {session?.user?.role === 'admin' 
            ? 'Manage courses and users' 
            : 'Track your progress and achievements'}
        </p>
        {session?.user?.isMock && (
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>Read-Only Mode:</strong> You're using a demo account. You can view all features but cannot make changes.
            </p>
          </div>
        )}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white dark:bg-[#24292d] p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {session?.user?.role === 'admin' ? 'Total Courses' : 'Total Enrollments'}
              </p>
              <p className="text-3xl font-bold text-[#17a2b7] mt-2">
                {session?.user?.role === 'admin' ? coursesData.length : stats.totalEnrollments}
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center">
              <BookOpen className="w-6 h-6 text-[#17a2b7]" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#24292d] p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {session?.user?.role === 'admin' ? 'Total Users' : 'Completed'}
              </p>
              <p className="text-3xl font-bold text-green-600 mt-2">
                {session?.user?.role === 'admin' ? '0' : stats.completedCourses}
              </p>
            </div>
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-6 h-6 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#24292d] p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                {session?.user?.role === 'admin' ? 'Total Enrollments' : 'In Progress'}
              </p>
              <p className="text-3xl font-bold text-purple-600 mt-2">
                {session?.user?.role === 'admin' ? '0' : stats.inProgressCourses}
              </p>
            </div>
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center">
              <Clock className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#24292d] p-6 rounded-xl shadow-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 dark:text-gray-400 text-sm font-medium">
                Avg Progress
              </p>
              <p className="text-3xl font-bold text-[#f7c32f] mt-2">
                {stats.averageProgress}%
              </p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-[#f7c32f]" />
            </div>
          </div>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="bg-white dark:bg-[#24292d] p-8 rounded-xl shadow-lg mb-8">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Welcome back!
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {session?.user?.role === 'admin' 
            ? 'Manage your platform from the sidebar. Add new courses, manage users, and view analytics.'
            : 'You haven\'t enrolled in any courses yet. Start your learning journey today!'}
        </p>
        <Link
          href={session?.user?.role === 'admin' ? '/dashboard/addCourse' : '/courses'}
          className="inline-block px-6 py-3 bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white rounded-lg hover:shadow-lg transition-all font-medium"
        >
          {session?.user?.role === 'admin' ? 'Add New Course' : 'Browse Courses'}
        </Link>
      </div>

      {/* Available Courses Preview */}
      {session?.user?.role !== 'admin' && (
        <div className="bg-white dark:bg-[#24292d] p-6 rounded-xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              Available Courses
            </h3>
            <Link
              href="/courses"
              className="text-[#17a2b7] hover:underline font-medium"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coursesData.slice(0, 3).map((course) => (
              <div
                key={course.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-lg transition-all"
              >
                <img
                  src={course.image}
                  alt={course.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {course.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {course.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#17a2b7]">
                      ${course.price}
                    </span>
                    <Link
                      href={`/courses/${course.slug}`}
                      className="px-4 py-2 bg-[#17a2b7] text-white rounded-lg hover:bg-[#138a9d] transition-colors text-sm font-medium"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
