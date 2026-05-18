import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";
import { CourseData } from '@/data/courseData'

export default function WhatYouWillLearn({ course }: { course: CourseData }) {
    return (
        <section>
            <h2 className="text-[17px] md:text-2xl font-semibold mb-4">What you will Learn</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[13px] md:text-[14px] text-[#555]">
                {course.whatYouWillLearn.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <FaCircleCheck className="text-[#FF6B00] flex-shrink-0 mt-[3px]" />
                        <li className="list-none leading-relaxed">{item}</li>
                    </div>
                ))}
            </ul>
        </section>
    )
}