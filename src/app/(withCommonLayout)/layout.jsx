
import Footer from '@/components/shared/Footer'
import Navbar from '@/components/shared/Navbar'
import React from 'react'

export default function HomeLayout({ children }) {
    return (
        <div>
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}
