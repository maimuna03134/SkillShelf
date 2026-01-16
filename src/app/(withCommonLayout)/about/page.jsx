import Container from '@/components/shared/Container';
import { Target, Users, Award, TrendingUp, BookOpen, Globe } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const stats = [
    { icon: BookOpen, value: '500+', label: 'Courses Available' },
    { icon: Users, value: '50K+', label: 'Active Learners' },
    { icon: Award, value: '95%', label: 'Success Rate' },
    { icon: Globe, value: '120+', label: 'Countries Reached' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To make quality education accessible to everyone, everywhere. We believe learning should be flexible, affordable, and tailored to individual needs.'
    },
    {
      icon: TrendingUp,
      title: 'Our Vision',
      description: 'To become the leading platform where learners discover their potential and achieve their career goals through skill-based education.'
    },
    {
      icon: Users,
      title: 'Our Community',
      description: 'A diverse community of learners, instructors, and industry experts working together to share knowledge and grow together.'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#1a1d23] transition-colors">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">About SkillShelf</h1>
            <p className="text-xl leading-relaxed">
              SkillShelf is your gateway to mastering new skills and advancing your career. 
              We connect passionate learners with expert instructors to create transformative 
              learning experiences.
            </p>
          </div>
        </Container>
      </div>

      {/* Stats Section */}
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-[#17a2b7] rounded-full mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* Values Section */}
      <div className="bg-white dark:bg-[#24292d] py-16">
        <Container>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            What Drives Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#17a2b7] to-[#24292d] rounded-full mb-6">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </div>

      {/* Story Section */}
      <Container>
        <div className="py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Our Story
            </h2>
            <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                SkillShelf was founded with a simple belief: everyone deserves access to quality 
                education that can transform their career and life. We started as a small team of 
                educators and technologists who saw the gap between traditional education and the 
                rapidly evolving job market.
              </p>
              <p>
                Today, we&apos;ve grown into a thriving platform that serves thousands of learners 
                worldwide. Our courses are designed by industry experts and cover everything from 
                web development and data science to design and digital marketing.
              </p>
              <p>
                What sets us apart is our commitment to practical, hands-on learning. Every course 
                includes real-world projects, interactive exercises, and direct access to instructors 
                who are passionate about helping you succeed.
              </p>
            </div>
          </div>
        </div>
      </Container>

      {/* Why Choose Us Section */}
      <div className="bg-white dark:bg-[#24292d] py-16">
        <Container>
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Why Choose SkillShelf
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#17a2b7] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Expert Instructors
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Learn from industry leaders with years of real-world experience in their fields.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#17a2b7] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Flexible Learning
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Study at your own pace, on any device, whenever and wherever you want.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#17a2b7] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Practical Projects
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Build real-world projects that you can showcase in your portfolio.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-[#17a2b7] rounded-lg flex items-center justify-center">
                <span className="text-white text-xl font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Lifetime Access
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Get unlimited access to course materials and updates forever.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <Container>
        <div className="py-16">
          <div className="bg-gradient-to-r from-[#17a2b7] to-[#24292d] rounded-2xl p-12 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of learners who are already advancing their careers with SkillShelf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/courses"
                className="px-8 py-4 bg-white text-[#17a2b7] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Browse Courses
              </Link>
              <Link
                href="/register"
                className="px-8 py-4 bg-[#f7c32f] text-[#24292d] rounded-lg font-semibold hover:bg-[#e5b429] transition-colors"
              >
                Sign Up Free
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
