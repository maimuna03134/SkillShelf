'use client';

import React from 'react';
import Container from '@/components/shared/Container';
import Button from '@/components/shared/Button';
import { Star, Users, Clock, TrendingUp, Check, User, Tag } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { useSession } from 'next-auth/react';
import { useState } from 'react';
import coursesData from '@/data/courses.json';

// This component is now client-side, so we handle params directly

export default function CourseDetailsPage({ params }) {
  const { data: session, status } = useSession();
  const [enrolling, setEnrolling] = useState(false);
  const [enrolled, setEnrolled] = useState(false);
  const [courseSlug, setCourseSlug] = useState(null);
  
  // Handle async params
  React.useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      setCourseSlug(resolvedParams.slug);
    };
    getParams();
  }, [params]);
  
  // Get course data
  const course = courseSlug ? coursesData.find(c => c.slug === courseSlug) : null;

  if (courseSlug && !course) {
    notFound();
  }

  if (!courseSlug || !course) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-[#1a1d23] flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#17a2b7]"></div>
      </div>
    );
  }

  const handleEnrollment = async () => {
    if (!session) {
      // Redirect to login if not authenticated
      window.location.href = '/login';
      return;
    }

    if (session.user.isMock) {
      alert('Demo users cannot enroll in courses. Please register a real account.');
      return;
    }

    setEnrolling(true);
    
    try {
      // Simulate enrollment API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      setEnrolled(true);
      alert('Successfully enrolled in the course!');
    } catch (error) {
      alert('Enrollment failed. Please try again.');
    } finally {
      setEnrolling(false);
    }
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#1a1d23] transition-colors">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-block bg-white/20 px-4 py-1 rounded-full mb-4">
                <span className="text-sm font-semibold">{course.category}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.name}</h1>
              <p className="text-xl mb-6 text-gray-100">{course.description}</p>
              
              <div className="flex flex-wrap items-center gap-6 mb-6">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-[#f7c32f] fill-[#f7c32f] mr-1" />
                  <span className="font-semibold mr-1">{course.rating}</span>
                  <span className="text-gray-200">({course.students.toLocaleString()} students)</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 mr-2" />
                  <span>{course.level}</span>
                </div>
              </div>

              <div className="flex items-center">
                <User className="w-5 h-5 mr-2" />
                <span>Instructor: <span className="font-semibold">{course.instructor}</span></span>
              </div>
            </div>

            <div className="hidden lg:block">
              <img
                src={course.image}
                alt={course.name}
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* What You&apos;ll Learn */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">What You&apos;ll Learn</h2>
              <div className="bg-white dark:bg-[#24292d] p-8 rounded-xl shadow-lg">
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-1" />
                      <span className="text-gray-700 dark:text-gray-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Course Description */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Course Description</h2>
              <div className="bg-white dark:bg-[#24292d] p-8 rounded-xl shadow-lg">
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  {course.description}
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  Our expert instructor, {course.instructor}, brings years of industry experience and
                  has helped thousands of students achieve their learning goals. The course includes
                  video lectures, downloadable resources, coding exercises, and lifetime access to all materials.
                </p>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  Whether you&apos;re looking to start a new career, enhance your current skills, or build
                  your own projects, this course provides everything you need to succeed.
                </p>
              </div>
            </section>

            {/* Requirements */}
            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Requirements</h2>
              <div className="bg-white dark:bg-[#24292d] p-8 rounded-xl shadow-lg">
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-[#17a2b7] mr-3 text-xl">•</span>
                    <span className="text-gray-700 dark:text-gray-300">A computer with internet connection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#17a2b7] mr-3 text-xl">•</span>
                    <span className="text-gray-700 dark:text-gray-300">No prior experience required - we&apos;ll teach you everything</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#17a2b7] mr-3 text-xl">•</span>
                    <span className="text-gray-700 dark:text-gray-300">Willingness to learn and practice</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-[#24292d] p-8 rounded-xl shadow-lg sticky top-24">
              <div className="mb-6">
                <img
                  src={course.image}
                  alt={course.name}
                  className="rounded-lg w-full h-48 object-cover lg:hidden mb-6"
                />
                <div className="text-center mb-6">
                  <span className="text-4xl font-bold text-[#17a2b7]">${course.price}</span>
                </div>
              </div>

              <Button 
                variant="solid" 
                size="lg" 
                className="w-full mb-4"
                onClick={handleEnrollment}
                disabled={enrolling || enrolled}
              >
                {enrolling ? 'Enrolling...' : enrolled ? 'Enrolled ✓' : 'Enroll Now'}
              </Button>

              {!session && (
                <p className="text-center text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <Link href="/login" className="text-[#17a2b7] hover:underline">
                    Login
                  </Link> or <Link href="/register" className="text-[#17a2b7] hover:underline">
                    Register
                  </Link> to enroll
                </p>
              )}

              {session?.user?.isMock && (
                <p className="text-center text-sm text-yellow-600 dark:text-yellow-400 mb-4">
                  Demo users can view but cannot enroll
                </p>
              )}

              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <User size={20} className="mr-3" />
                    <span>Instructor</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.instructor}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Clock size={20} className="mr-3" />
                    <span>Duration</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.duration}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <TrendingUp size={20} className="mr-3" />
                    <span>Level</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.level}</span>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Users size={20} className="mr-3" />
                    <span>Students</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.students.toLocaleString()}</span>
                </div>

                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Tag size={20} className="mr-3" />
                    <span>Category</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">{course.category}</span>
                </div>
              </div>

              <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-2">
                <p className="flex items-center justify-center">
                  <Check size={16} className="mr-2 text-green-500" />
                  30-Day Money-Back Guarantee
                </p>
                <p className="flex items-center justify-center">
                  <Check size={16} className="mr-2 text-green-500" />
                  Lifetime Access
                </p>
                <p className="flex items-center justify-center">
                  <Check size={16} className="mr-2 text-green-500" />
                  Certificate of Completion
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
