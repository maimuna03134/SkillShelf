import React from 'react'
import Container from '../shared/Container'

export default function FeaturesSection() {
  return (
    <div>
      <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Why Choose SkillShelf?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Everything you need to succeed in your learning journey</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className=" dark:bg-[#24292d] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-[#17a2b7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Instructors</h3>
              <p className="text-gray-600 dark:text-gray-400">Learn from industry professionals with years of real-world experience</p>
            </div>

            <div className=" dark:bg-[#24292d] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Practical Projects</h3>
              <p className="text-gray-600 dark:text-gray-400">Build real-world projects to showcase in your portfolio</p>
            </div>

            <div className="bg-white dark:bg-[#24292d] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-pink-600 dark:text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Lifetime Access</h3>
              <p className="text-gray-600 dark:text-gray-400">Learn at your own pace with unlimited access to course materials</p>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
