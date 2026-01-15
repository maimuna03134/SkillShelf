import React from 'react'

export default function Card() {
  return (
    <div>
          <div className="relative h-48 overflow-hidden">
              <img
                  src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
                  alt='web development'
                  className="w-full h-full object-cover"
              />
              <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                  <span className="text-sm font-semibold text-gray-900">Cloud Computing</span>
              </div>
          </div>

          <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                  AWS Cloud Practitioner Certification
              </h3>
              <p className="text-gray-600 mb-4 line-clamp-2">
                  Complete AWS Cloud training with hands-on labs and projects
              </p>

              <div className="flex items-center mb-4">
                  <div className="flex items-center">
                      <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <span className="ml-1 text-sm font-semibold text-gray-900">4</span>
                  </div>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-sm text-gray-600">11200 students</span>
              </div>

              <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600">30 hours</span>
                  <span className="text-sm text-gray-600">Beginner</span>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                      <span className="text-3xl font-bold text-gray-900">$ 84.99</span>
                  </div>
                  <div className="px-6 py-2 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold">
                      View Details
                  </div>
              </div>
          </div>
    </div>
  )
}
