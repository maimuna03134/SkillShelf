import React from 'react'
import Link from 'next/link'
import Container from '../shared/Container'

export default function CategoriesSection() {
  return (
    <div>
      <section className="py-20 bg-gray-50 dark:bg-[#1a1a1a]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Popular Categories</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Explore courses across various domains</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Web Development', 'Data Science', 'Design', 'Marketing', 'Mobile Dev', 'Cloud Computing', 'Business', 'Photography'].map((category) => (
              <Link key={category} href="/courses" className="bg-white dark:bg-[#24292d] p-6 rounded-xl shadow-md hover:shadow-xl transition-all text-center group">
                <div className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-[#17a2b7] transition-colors">{category}</div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
