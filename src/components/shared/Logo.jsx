import Link from 'next/link';
import React from 'react';
import { BookOpen } from 'lucide-react';

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="w-10 h-10 bg-[#17a2b7] rounded-lg flex items-center justify-center">
        <BookOpen className="text-white" size={24} />
      </div>
      <span className="text-xl md:text-2xl font-bold text-[#24292d]">SkillShelf</span>
    </Link>
  );
}
