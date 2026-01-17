import React from 'react'
import Container from '../shared/Container'

export default function TestimonialsSection() {
  return (
    <div>
      <section className="py-20 bg-white dark:bg-[#24292d]">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">What Our Students Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Join thousands of satisfied learners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex Thompson', role: 'Web Developer', text: 'SkillShelf transformed my career. The courses are practical and easy to follow!' },
              { name: 'Maria Garcia', role: 'Data Analyst', text: 'Best investment I made in my education. Highly recommend to everyone!' },
              { name: 'James Wilson', role: 'UX Designer', text: 'The instructors are amazing and the community is very supportive.' }
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-gray-50 dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg hover:shadow-xl transition-all">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-[#f7c32f]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{testimonial.text}</p>
                <div className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</div>
                <div className="text-gray-500 dark:text-gray-400">{testimonial.role}</div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  )
}
