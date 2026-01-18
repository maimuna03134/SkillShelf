import Link from 'next/link'
import React from 'react'
import Container from '../shared/Container'

export default function HeroSection() {
  return (
    <div>
          <section className="bg-linear-to-r from-[#17a2b7] to-[#24292d] text-white py-20">
              <Container>
                  <div className="text-center">
                      <h1 className="text-5xl md:text-6xl font-bold mb-6">
                          Unlock Your Potential with SkillShelf
                      </h1>
                      <p className="text-xl md:text-2xl mb-8 text-gray-100">
                          Learn from industry experts and master in-demand skills
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                          <Link href="/courses" className="px-8 py-4 bg-white text-[#17a2b7] rounded-lg font-semibold hover:bg-[#f7c32f] hover:text-[#24292d] transition-all text-lg shadow-lg hover:shadow-xl">
                              Explore Courses
                          </Link>
                          <Link href="/register" className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-[#17a2b7] transition-all text-lg">
                              Get Started Free
                          </Link>
                      </div>
                  </div>
              </Container>
          </section>
    </div>
  )
}
