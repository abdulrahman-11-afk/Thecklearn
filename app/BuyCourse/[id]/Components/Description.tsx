import React from 'react'
import { CourseData } from '@/data/courseData'

export default function Description({ course }: { course: CourseData }) {
    return (
        <div>
            <h2 className="text-[17px] md:text-2xl font-semibold mb-3">Description</h2>
            <div className="flex text-[13px] md:text-[14px] flex-col gap-4">
                {course.description.map((para, i) => (
                    <p key={i} className="text-[#555] leading-relaxed">{para}</p>
                ))}
            </div>
        </div>
    )
}