import Link from 'next/link';
import { Clock, Users, Star, TrendingUp } from 'lucide-react';
import Button from '@/components/shared/Button';
import coursesData from '@/data/courses.json';

export default function Card() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {coursesData.map((course) => (
        <div
          key={course.id}
          className="bg-white dark:bg-[#24292d] rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
        >
          {/* Course Image */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={course.image}
              alt={course.name}
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
              {course.name}
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
