import Link from 'next/link';
import { Clock, Users, Star, TrendingUp } from 'lucide-react';
import Button from '@/components/shared/Button';

// Mock course data - replace with actual data from API/database
const courses = [
  {
    id: 1,
    title: 'Complete Web Development Bootcamp',
    description: 'Master HTML, CSS, JavaScript, React, Node.js and more in this comprehensive course',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop',
    rating: 4.8,
    students: 15420,
    duration: '45 hours',
    level: 'Beginner',
    price: 89.99,
    slug: 'web-development-bootcamp'
  },
  {
    id: 2,
    title: 'AWS Cloud Practitioner Certification',
    description: 'Complete AWS Cloud training with hands-on labs and projects',
    category: 'Cloud Computing',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop',
    rating: 4.7,
    students: 11200,
    duration: '30 hours',
    level: 'Intermediate',
    price: 84.99,
    slug: 'aws-cloud-practitioner'
  },
  {
    id: 3,
    title: 'Python for Data Science',
    description: 'Learn Python programming and data analysis with pandas, numpy, and matplotlib',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop',
    rating: 4.9,
    students: 18750,
    duration: '40 hours',
    level: 'Beginner',
    price: 94.99,
    slug: 'python-data-science'
  },
  {
    id: 4,
    title: 'UI/UX Design Masterclass',
    description: 'Master user interface and user experience design with Figma and Adobe XD',
    category: 'Design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop',
    rating: 4.6,
    students: 9340,
    duration: '25 hours',
    level: 'Beginner',
    price: 79.99,
    slug: 'ui-ux-design'
  },
  {
    id: 5,
    title: 'Machine Learning A-Z',
    description: 'Learn to create Machine Learning algorithms in Python and R from industry experts',
    category: 'AI & ML',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=600&fit=crop',
    rating: 4.8,
    students: 21500,
    duration: '50 hours',
    level: 'Advanced',
    price: 99.99,
    slug: 'machine-learning-az'
  },
  {
    id: 6,
    title: 'Digital Marketing Complete Course',
    description: 'Master SEO, social media marketing, email marketing, and Google Ads',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
    rating: 4.5,
    students: 12800,
    duration: '35 hours',
    level: 'Beginner',
    price: 74.99,
    slug: 'digital-marketing'
  },
];

export default function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div
          key={course.id}
          className="bg-white dark:bg-[#24292d] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          {/* Course Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute top-4 right-4 bg-white dark:bg-[#24292d] px-3 py-1 rounded-full shadow-md">
              <span className="text-sm font-semibold text-[#17a2b7]">{course.category}</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>

          {/* Course Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-[#17a2b7] transition-colors">
              {course.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
              {course.description}
            </p>

            {/* Rating and Students */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-[#f7c32f] fill-[#f7c32f]" />
                <span className="ml-1 text-sm font-semibold text-gray-900 dark:text-white">{course.rating}</span>
              </div>
              <span className="mx-2 text-gray-400">•</span>
              <Users className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-sm text-gray-600 dark:text-gray-400">{course.students.toLocaleString()}</span>
            </div>

            {/* Duration and Level */}
            <div className="flex items-center justify-between mb-4 text-sm">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <Clock size={16} />
                <span className="ml-1">{course.duration}</span>
              </div>
              <div className="flex items-center">
                <TrendingUp size={16} className="text-[#17a2b7]" />
                <span className="ml-1 text-gray-600 dark:text-gray-400">{course.level}</span>
              </div>
            </div>

            {/* Price and CTA */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div>
                <span className="text-3xl font-bold text-[#17a2b7]">${course.price}</span>
              </div>
              <Link href={`/courses/${course.slug}`}>
                <Button variant="solid" size="sm">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
