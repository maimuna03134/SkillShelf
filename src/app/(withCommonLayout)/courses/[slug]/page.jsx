import Container from '@/components/Container';
import React from 'react'

export default async function CourseDetailsPage({ params }) {

    const { slug } = await params;
    console.log(slug)

    const course = [
        {
            "id": 6,
            "name": "AWS Cloud Practitioner Certification",
            "description": "Complete AWS Cloud training with hands-on labs and projects",
            "price": 84.99,
            "image": "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
            "instructor": "Robert Wilson",
            "duration": "30 hours",
            "level": "Beginner",
            "students": 11200,
            "rating": 4.9,
            "category": "Cloud Computing",
            "highlights": [
                "AWS certification prep",
                "Hands-on labs",
                "Cloud architecture",
                "Practice exams included"
            ]
        }
    ]
    return (

        <main className="min-h-screen ">
            <div className="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-block bg-white/20 px-4 py-2 rounded-full mb-4">
                                <span className="text-sm font-semibold">Cloud Computing</span>
                            </div>
                            <h1 className="text-5xl font-bold mb-6">AWS Cloud Practitioner Certification</h1>
                            <p className="text-xl mb-6">Complete AWS Cloud training with hands-on labs and projects</p>

                            <div className="flex items-center space-x-6 mb-6">
                                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="ml-2 text-lg font-semibold">4 Rating</span>
                                </div>
                                <div className="flex items-center">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span className="ml-2 text-lg">11200 Students</span>
                                </div>
                            </div>

                            <div className="flex items-center space-x-4">
                                <span className="text-5xl font-bold">$ 84.99</span>
                                <button
                                    // onClick={handleEnroll}
                                    className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-xl transition-all text-lg"
                                >
                                    Enroll Now
                                </button>
                            </div>
                        </div>

                        <div className="relative">
                            <img
                                src='https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop'
                                alt=''
                                className="w-full h-96 object-cover rounded-xl shadow-2xl"
                            />
                        </div>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <section className="mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">What You'll Learn</h2>
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                {/* <ul className="space-y-4">
                                    {course.highlights.map((highlight, index) => (
                                        <li key={index} className="flex items-start">
                                            <svg className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-lg text-gray-700">{highlight}</span>
                                        </li>
                                    ))}
                                </ul> */}

                                <ul className='space-y-4'>
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-lg text-gray-700">AWS certification prep,</span>
                                        
                                        
                                    </li>
                                   
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-lg text-gray-700">AWS certification prep,</span>
                                        
                                        
                                    </li>
                                   
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-lg text-gray-700">AWS certification prep,</span>
                                        
                                        
                                    </li>
                                   
                                    <li className="flex items-start">
                                        <svg className="w-6 h-6 text-green-500 mr-3 shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-lg text-gray-700">AWS certification prep,</span>
                                        
                                        
                                    </li>
                                   
                                </ul>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Course Description</h2>
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    This comprehensive course is designed to take you from beginner to advanced level.
                                    You'll learn through hands-on projects and real-world examples that will prepare you
                                    for a successful career in 11240.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Our expert instructor, {course.instructor}, brings years of industry experience and
                                    has helped thousands of students achieve their learning goals. The course includes
                                    video lectures, downloadable resources, coding exercises, and lifetime access to all materials.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Whether you're looking to start a new career, enhance your current skills, or build
                                    your own projects, this course provides everything you need to succeed.
                                </p>
                            </div>
                        </section>

                        <section className="mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">Requirements</h2>
                            <div className="bg-white p-8 rounded-xl shadow-lg">
                                <ul className="space-y-3">
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-3">•</span>
                                        <span className="text-lg text-gray-700">A computer with internet connection</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-3">•</span>
                                        <span className="text-lg text-gray-700">No prior experience required - we'll teach you everything</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-600 mr-3">•</span>
                                        <span className="text-lg text-gray-700">Willingness to learn and practice</span>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>

                    <div className="lg:col-span-1">
                        <div className="bg-white p-8 rounded-xl shadow-lg sticky top-24">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Course Details</h3>

                            <div className="space-y-6">
                                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                        <span className="text-gray-700">Instructor</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">Robert Wilson</span>
                                </div>

                                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span className="text-gray-700">Duration</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">30 hours</span>
                                </div>

                                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                        </svg>
                                        <span className="text-gray-700">Level</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">Beginner</span>
                                </div>

                                <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                        <span className="text-gray-700">Students</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">11240</span>
                                </div>

                                <div className="flex items-center justify-between pb-4">
                                    <div className="flex items-center">
                                        <svg className="w-6 h-6 text-gray-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                                        </svg>
                                        <span className="text-gray-700">Category</span>
                                    </div>
                                    <span className="font-semibold text-gray-900">Cloud Computing</span>
                                </div>
                            </div>

                            <button
                                // onClick={handleEnroll}
                                className="w-full mt-8 px-8 py-4 bg-linear-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-xl transition-all text-lg"
                            >
                                Enroll Now - $ 84.99
                            </button>

                            <div className="mt-6 text-center text-sm text-gray-600">
                                <p>30-Day Money-Back Guarantee</p>
                                <p className="mt-2">Lifetime Access</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </main>
    )

}
