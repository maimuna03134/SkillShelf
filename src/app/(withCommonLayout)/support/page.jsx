'use client';

import { useState } from 'react';
import Container from '@/components/shared/Container';
import { Search, BookOpen, MessageCircle, Video, FileText, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export default function SupportPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedFaq, setExpandedFaq] = useState(null);

  const supportCategories = [
    {
      icon: BookOpen,
      title: 'Getting Started',
      description: 'Learn the basics of using SkillShelf',
      articles: 12
    },
    {
      icon: Video,
      title: 'Course Access',
      description: 'Help with enrolling and accessing courses',
      articles: 8
    },
    {
      icon: MessageCircle,
      title: 'Account Management',
      description: 'Manage your profile and settings',
      articles: 15
    },
    {
      icon: FileText,
      title: 'Billing & Payments',
      description: 'Questions about pricing and refunds',
      articles: 10
    }
  ];

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'To enroll in a course, browse our course catalog, select the course you want, and click the "Enroll Now" button. You\'ll need to create an account or log in if you haven\'t already. Once enrolled, you\'ll have immediate access to all course materials.'
    },
    {
      question: 'Can I access courses on mobile devices?',
      answer: 'Yes! SkillShelf is fully responsive and works seamlessly on all devices including smartphones, tablets, and desktop computers. You can learn anywhere, anytime.'
    },
    {
      question: 'What is your refund policy?',
      answer: 'We offer a 30-day money-back guarantee on all courses. If you\'re not satisfied with a course, contact our support team within 30 days of purchase for a full refund, no questions asked.'
    },
    {
      question: 'Do I get a certificate after completing a course?',
      answer: 'Yes! Upon successfully completing a course, you\'ll receive a certificate of completion that you can share on LinkedIn, add to your resume, or showcase in your portfolio.'
    },
    {
      question: 'How long do I have access to a course?',
      answer: 'Once you enroll in a course, you have lifetime access to all course materials, including any future updates. Learn at your own pace without any time pressure.'
    },
    {
      question: 'Can I download course videos for offline viewing?',
      answer: 'Currently, course videos are available for streaming only. However, you can download supplementary materials like PDFs, code files, and resources for offline use.'
    },
    {
      question: 'How do I reset my password?',
      answer: 'Click on "Forgot Password" on the login page, enter your email address, and we\'ll send you a link to reset your password. Follow the instructions in the email to create a new password.'
    },
    {
      question: 'Are there any prerequisites for courses?',
      answer: 'Prerequisites vary by course. Each course page clearly lists any required knowledge or skills. We also indicate the difficulty level (Beginner, Intermediate, Advanced) to help you choose the right course.'
    },
    {
      question: 'Can I switch between courses?',
      answer: 'Absolutely! You can enroll in multiple courses and switch between them anytime. Your progress is saved automatically, so you can pick up right where you left off.'
    },
    {
      question: 'How do I contact an instructor?',
      answer: 'Each course has a Q&A section where you can ask questions directly to the instructor. Instructors typically respond within 24-48 hours. You can also participate in course discussions with other students.'
    }
  ];

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#1a1d23] transition-colors">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">How Can We Help You?</h1>
            <p className="text-xl mb-8">
              Search our knowledge base or browse categories to find answers to your questions.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
              <input
                type="text"
                placeholder="Search for help articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-lg text-gray-900 text-lg focus:ring-2 focus:ring-[#f7c32f] outline-none"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* Support Categories */}
      <Container>
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Browse by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-[#24292d] p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer group"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[#17a2b7] to-[#24292d] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    {category.description}
                  </p>
                  <p className="text-sm text-[#17a2b7] font-semibold">
                    {category.articles} articles
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Container>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-[#24292d] py-16">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
              Frequently Asked Questions
            </h2>
            
            {filteredFaqs.length > 0 ? (
              <div className="space-y-4">
                {filteredFaqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-[#1a1d23] rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex items-center space-x-3">
                        <HelpCircle className="w-5 h-5 text-[#17a2b7] flex-shrink-0" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {faq.question}
                        </span>
                      </div>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div className="px-6 pb-4 pt-2">
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed pl-8">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400 text-lg">
                  No results found for &apos;{searchQuery}&apos;
                </p>
              </div>
            )}
          </div>
        </Container>
      </div>

      {/* Quick Links */}
      <Container>
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Popular Help Topics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <a
              href="#"
              className="bg-white dark:bg-[#24292d] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Creating Your Account
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Step-by-step guide to setting up your SkillShelf account
              </p>
            </a>

            <a
              href="#"
              className="bg-white dark:bg-[#24292d] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Choosing the Right Course
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Tips for selecting courses that match your goals
              </p>
            </a>

            <a
              href="#"
              className="bg-white dark:bg-[#24292d] p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Tracking Your Progress
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Learn how to monitor your learning journey
              </p>
            </a>
          </div>
        </div>
      </Container>

      {/* Contact Support CTA */}
      <div className="bg-gradient-to-r from-[#17a2b7] to-[#24292d] py-16">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <MessageCircle className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">
              Still Need Help?
            </h2>
            <p className="text-xl mb-8">
              Can&apos;t find what you&apos;re looking for? Our support team is here to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-white text-[#17a2b7] rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="mailto:support@skillshelf.com"
                className="px-8 py-4 bg-[#f7c32f] text-[#24292d] rounded-lg font-semibold hover:bg-[#e5b429] transition-colors"
              >
                Email Us
              </a>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
