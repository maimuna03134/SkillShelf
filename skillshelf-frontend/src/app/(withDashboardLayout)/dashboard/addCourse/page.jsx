'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AddCoursePage() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    instructor: '',
    duration: '',
    level: 'Beginner',
    category: 'Web Development',
    highlights: ['', '', '', '']
  });

  useEffect(() => {
    if (status === 'authenticated' && session?.user?.role !== 'admin') {
      router.push('/dashboard');
    }
  }, [status, session, router]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleHighlightChange = (index, value) => {
    const newHighlights = [...formData.highlights];
    newHighlights[index] = value;
    setFormData({ ...formData, highlights: newHighlights });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if user is mock (read-only)
    if (session?.user?.isMock) {
      setMessage('Read-only mode: Mock users cannot add courses. Please register a real account.');
      return;
    }

    setLoading(true);

    try {
      const courseData = {
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        image: formData.image,
        instructor: formData.instructor,
        duration: formData.duration,
        level: formData.level,
        category: formData.category,
        highlights: formData.highlights.filter(h => h.trim() !== '')
      };

      // Send to Express.js API
      const response = await fetch('https://skillshelf-backend.vercel.app/api/courses', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(courseData)
      });

      if (response.ok) {
        setMessage('Course created successfully!');
        
        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      } else {
        throw new Error('Failed to create course');
      }
    } catch (error) {
      console.error('Error creating course:', error);
      setMessage('Error creating course. Make sure the backend server is running.');
      setLoading(false);
    }
  };

  if (status === 'loading') {
    return null;
  }

  if (!session || session.user.role !== 'admin') {
    return null;
  }

  return (
    <div className="p-6 lg:p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          Add New Course
        </h1>
        <p className="text-gray-600 dark:text-gray-400">
          Create a new course for students
        </p>
        {session.user.isMock && (
          <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
            <p className="text-yellow-800 dark:text-yellow-200 text-sm">
              <strong>Read-Only Mode:</strong> You cannot add courses with a demo account.
            </p>
          </div>
        )}
      </div>

      {/* Message */}
      {message && (
        <div className={`mb-6 p-4 rounded-lg ${
          message.includes('Error') 
            ? 'bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-200' 
            : 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-200'
        }`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="bg-white dark:bg-[#24292d] rounded-xl shadow-lg p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Course Name *
            </label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
              placeholder="Complete Web Development Bootcamp"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Instructor *
            </label>
            <input
              type="text"
              name="instructor"
              required
              value={formData.instructor}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
              placeholder="John Smith"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Description *
          </label>
          <textarea
            name="description"
            required
            value={formData.description}
            onChange={handleChange}
            rows={3}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
            placeholder="Master HTML, CSS, JavaScript, React, Node.js and more"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Price ($) *
            </label>
            <input
              type="number"
              name="price"
              required
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
              placeholder="89.99"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Duration *
            </label>
            <input
              type="text"
              name="duration"
              required
              value={formData.duration}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
              placeholder="40 hours"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
              Level *
            </label>
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
            >
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>All Levels</option>
              <option>Beginner to Advanced</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Category *
          </label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
          >
            <option>Web Development</option>
            <option>Data Science</option>
            <option>Design</option>
            <option>Marketing</option>
            <option>Mobile Development</option>
            <option>Cloud Computing</option>
            <option>Business</option>
            <option>Photography</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Image URL *
          </label>
          <input
            type="url"
            name="image"
            required
            value={formData.image}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
            placeholder="https://images.unsplash.com/..."
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            Course Highlights
          </label>
          {formData.highlights.map((highlight, index) => (
            <input
              key={index}
              type="text"
              value={highlight}
              onChange={(e) => handleHighlightChange(index, e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent mb-3 text-gray-900 dark:text-white bg-white dark:bg-[#1a1d23]"
              placeholder={`Highlight ${index + 1}`}
            />
          ))}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading || session.user.isMock}
            className="flex-1 px-6 py-4 bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Creating Course...' : 'Create Course'}
          </button>
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-4 bg-gray-600 dark:bg-gray-700 text-white rounded-lg font-semibold hover:bg-gray-700 dark:hover:bg-gray-600 transition-all"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
