import Link from 'next/link';
import { BookOpen, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import Container from './Container';

export default function Footer() {
    return (
        <footer className="bg-[#24292d] dark:bg-[#1a1d23] text-white mt-20 transition-colors">
            <Container>
                <div className="py-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* About Section */}
                        <div>
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 bg-[#17a2b7] rounded-lg flex items-center justify-center">
                                    <BookOpen className="text-white" size={24} />
                                </div>
                                <span className="text-2xl font-bold">SkillShelf</span>
                            </div>
                            <p className="text-gray-400 dark:text-gray-500 mb-4">
                                Empowering learners worldwide with quality online courses and skills development.
                            </p>
                            <div className="space-y-2 text-sm text-gray-400 dark:text-gray-500">
                                <div className="flex items-center space-x-2">
                                    <Mail size={16} className="text-[#17a2b7]" />
                                    <span>info@skillshelf.com</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <Phone size={16} className="text-[#17a2b7]" />
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <MapPin size={16} className="text-[#17a2b7]" />
                                    <span>123 Learning St, Education City</span>
                                </div>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                        Home
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/courses" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                        Courses
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/about" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/contact" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                        Contact
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/news" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                        News & Blogs
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Support */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
                            <ul className="space-y-2">
                                <li>
                                    <Link href="/support" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                        Help Center
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/faq" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                        FAQ
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/terms" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                        Terms of Service
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/privacy" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                        Privacy Policy
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/refund" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                        Refund Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Connect */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-white">Connect With Us</h3>
                            <p className="text-gray-400 dark:text-gray-500 mb-4 text-sm">
                                Follow us on social media for updates and news.
                            </p>
                            <div className="flex space-x-3">
                                <a 
                                    href="#" 
                                    className="w-10 h-10 bg-gray-700 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b7] transition-colors"
                                    aria-label="Facebook"
                                >
                                    <Facebook size={18} />
                                </a>
                                <a 
                                    href="#" 
                                    className="w-10 h-10 bg-gray-700 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b7] transition-colors"
                                    aria-label="Twitter"
                                >
                                    <Twitter size={18} />
                                </a>
                                <a 
                                    href="#" 
                                    className="w-10 h-10 bg-gray-700 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b7] transition-colors"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin size={18} />
                                </a>
                                <a 
                                    href="#" 
                                    className="w-10 h-10 bg-gray-700 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b7] transition-colors"
                                    aria-label="Instagram"
                                >
                                    <Instagram size={18} />
                                </a>
                                <a 
                                    href="#" 
                                    className="w-10 h-10 bg-gray-700 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-[#17a2b7] transition-colors"
                                    aria-label="YouTube"
                                >
                                    <Youtube size={18} />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-700 dark:border-gray-800 mt-8 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                            <p className="text-gray-400 dark:text-gray-500 text-sm text-center md:text-left">
                                &copy; {new Date().getFullYear()} SkillShelf. All rights reserved.
                            </p>
                            <div className="flex space-x-6 text-sm">
                                <Link href="/sitemap" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                    Sitemap
                                </Link>
                                <Link href="/accessibility" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                    Accessibility
                                </Link>
                                <Link href="/cookies" className="text-gray-400 dark:text-gray-500 hover:text-[#17a2b7] transition-colors">
                                    Cookie Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </footer>
    );
}
