import React from 'react'

export default async function CourseDetailsPage  ({ params }){
    
    const { slug } = await params;
    console.log(slug)
    return <div>this is course details page {slug}</div>;
}
