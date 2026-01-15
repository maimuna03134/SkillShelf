import Link from 'next/link'
import React from 'react'

export default function () {
  return (
      <Link href="/" className="flex items-center space-x-2 mb-4">
          <div className="w-10 h-10 bg-linear-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="text-2xl font-bold">SkillShelf</span>
      </Link>
  )
}
