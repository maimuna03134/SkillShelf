
import Link from 'next/link'
import React from 'react'
import Card from './_components/Card'
import Container from '@/components/shared/Container'

export default function page() {
    return (
        <main className='min-h-screen'>
            <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
                <Container>
                    <h1 className="text-5xl font-bold mb-4">Explore Our Courses</h1>
                    <p className="text-xl">Discover the perfect course to advance your career</p>
                </Container>
            </div>
            <Container>
                <div className="mb-8">
                    <p className="text-gray-600 text-lg">
                        Showing <span className="font-semibold text-gray-900">10</span> courses
                    </p>
                </div>

                <div>
                    <Card/>
                </div>
            </Container>
        </main>
    )
}
