import React from 'react'
import { CourseData } from '@/data/courseData'

export default function Video({ course }: { course: CourseData }) {
    return (
        <section className="w-full">
            <video
                className="w-full h-[220px] sm:h-[320px] md:min-h-[400px] rounded-xl md:rounded-2xl shadow-lg object-cover"
                controls
            >
                <source src={course.videoSrc} type="video/mp4" />
            </video>
        </section>
    )
}