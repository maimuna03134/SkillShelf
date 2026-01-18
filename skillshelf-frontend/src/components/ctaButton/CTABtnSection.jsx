import Link from 'next/link'
import React from 'react'
import Button from '../shared/Button'
import Container from '../shared/Container'

export default function CTABtnSection() {
  return (
    <div>
          <section className="py-20 bg-linear-to-r from-[#17a2b7] to-[#24292d] text-white">
        <Container className={'text-center>'}>
                  <h2 className="text-4xl font-bold mb-6">Ready to Start Learning?</h2>
                  <p className="text-xl mb-8">Join thousands of students already learning on SkillShelf</p>
                  <Button>
            <Link href="/courses" className=' text-secondary dark:text-white'>
                      Browse All Courses
                  </Link> 
                  </Button>
                 
      </Container>
          </section>
    </div>
  )
}
