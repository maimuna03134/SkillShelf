import React from 'react'
import Container from '../shared/Container'

export default function StatsSection() {
  return (
    <div>
      <section className="py-20  dark:bg-[#24292d]">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-[#17a2b7] mb-2">50K+</div>
              <div className="text-xl text-gray-600 dark:text-gray-400">Active Students</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">200+</div>
              <div className="text-xl text-gray-600 dark:text-gray-400">Expert Courses</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-pink-600 dark:text-pink-400 mb-2">95%</div>
              <div className="text-xl text-gray-600 dark:text-gray-400">Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-[#f7c32f] mb-2">24/7</div>
              <div className="text-xl text-gray-600 dark:text-gray-400">Support</div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  )
}
