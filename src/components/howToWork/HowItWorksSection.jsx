import React from 'react'
import Container from '../shared/Container'

export default function HowItWorksSection() {
  return (
    <div>
          <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a]">
              <Container>
                  <div className="text-center mb-16">
                      <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h2>
                      <p className="text-xl text-gray-600 dark:text-gray-400">Start learning in three simple steps</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                      <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#17a2b7] to-[#24292d] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">1</div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Browse Courses</h3>
                          <p className="text-gray-600 dark:text-gray-400">Explore our extensive library of courses across various categories</p>
                      </div>
                      <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#24292d] to-[#f7c32f] rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold">2</div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Enroll & Learn</h3>
                          <p className="text-gray-600 dark:text-gray-400">Choose your course and start learning at your own pace</p>
                      </div>
                      <div className="text-center">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#f7c32f] to-[#17a2b7] rounded-full flex items-center justify-center mx-auto mb-6 text-[#24292d] text-3xl font-bold">3</div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Get Certified</h3>
                          <p className="text-gray-600 dark:text-gray-400">Complete the course and earn your certificate of completion</p>
                      </div>
                  </div>
              </Container>
          </section>
    </div>
  )
}
