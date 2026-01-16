'use client';

import { useState } from 'react';
import Container from '@/components/shared/Container';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setSubmitMessage('Thank you for contacting us! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
    
    setTimeout(() => setSubmitMessage(''), 5000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@skillshelf.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 9am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Learning Street, Education City, EC 12345',
      description: 'Come say hello at our office'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      content: 'Monday - Friday: 9:00 AM - 6:00 PM',
      description: 'Weekend: Closed'
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#1a1d23] transition-colors">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl leading-relaxed">
              Have questions about our courses or need assistance? We're here to help. 
              Reach out to us and we'll respond as soon as possible.
            </p>
          </div>
        </Container>
      </div>

      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Send Us a Message
              </h2>
              
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                  {submitMessage}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none bg-white dark:bg-[#24292d] text-gray-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none bg-white dark:bg-[#24292d] text-gray-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none bg-white dark:bg-[#24292d] text-gray-900 dark:text-white"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#17a2b7] focus:border-transparent outline-none bg-white dark:bg-[#24292d] text-gray-900 dark:text-white resize-none"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#17a2b7] to-[#24292d] text-white rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Contact Information
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Choose your preferred way to reach us. We&apos;re available through multiple channels 
                to ensure you get the help you need.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div
                      key={index}
                      className="bg-white dark:bg-[#24292d] p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#17a2b7] to-[#24292d] rounded-lg flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                            {info.title}
                          </h3>
                          <p className="text-[#17a2b7] font-semibold mb-1">
                            {info.content}
                          </p>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {info.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Map Placeholder */}
              <div className="mt-8 bg-white dark:bg-[#24292d] p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  Find Us on Map
                </h3>
                <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* FAQ Section */}
      <div className="bg-white dark:bg-[#24292d] py-16">
        <Container>
          <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-gray-50 dark:bg-[#1a1d23] p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                How quickly will I receive a response?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                We typically respond to all inquiries within 24 hours during business days. 
                For urgent matters, please call us directly.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#1a1d23] p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Can I schedule a call with your team?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Yes! Mention your preferred time in the message, and we&apos;ll arrange a call 
                to discuss your needs in detail.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-[#1a1d23] p-6 rounded-lg">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Do you offer support in multiple languages?
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Currently, we provide support in English. We&apos;re working on expanding our 
                language support to serve our global community better.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}
