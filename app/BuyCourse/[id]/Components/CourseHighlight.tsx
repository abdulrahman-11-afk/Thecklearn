import React from 'react'
import { CourseData } from '@/data/courseData'

export default function CourseHighlight({ course }: { course: CourseData }) {
    return (
        <div>
            <h2 className="text-[17px] md:text-2xl font-semibold mb-4">Course Highlight</h2>
            {course.highlights.map((h, i) => (
                <div key={i} className="mb-5">
                    <h3 className="text-[13px] md:text-md font-semibold mb-1">{h.title}</h3>
                    <p className="text-[13px] md:text-[14px] text-[#555] leading-relaxed">{h.body}</p>
                </div>
            ))}
        </div>
    )
}