import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
          <h2 className="text-2xl">
              This is courses page
          </h2>
          <Link href="courses/1">Course 01</Link>
          <Link href="courses/2">Course 02</Link>
          <Link href="courses/3">Course 03</Link>

    </div>
  )
}
