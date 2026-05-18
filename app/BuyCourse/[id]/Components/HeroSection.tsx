import React from 'react'
import { CourseData } from '@/data/courseData'

export default function HeroSection({ course }: { course: CourseData }) {
    return (
        <section className="pt-28 md:pt-32 pb-6 bg-[#F8F9FA] px-5 md:px-12 flex flex-col gap-3">
            <h1 className="text-[20px] md:text-[30px] font-semibold leading-snug">
                {course.title}
            </h1>
            <p className="text-[#6F6A6A] text-[13px] md:text-[16px]">
                A course by <span className="underline">{course.instructor}</span>
            </p>
            <div className="flex flex-wrap items-center gap-2 text-[11px] md:text-[12px] w-fit px-4 py-3 rounded-xl bg-white shadow-sm">
                <div className="bg-[#FFE6E6] text-[#FE1010] px-3 h-[30px] flex items-center rounded-md font-semibold">
                    {course.badge}
                </div>
                <div className="bg-[#E8FFE8] text-[#20D013] px-3 h-[30px] flex items-center rounded-md font-semibold">
                    {course.language}
                </div>
                <p>99% Positive Reviews</p>
                <p>{course.students} students</p>
            </div>
        </section>
    )
}