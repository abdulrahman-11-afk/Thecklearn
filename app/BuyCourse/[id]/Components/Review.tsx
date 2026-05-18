import React from 'react'
import Image from 'next/image'
import { CourseData } from '@/data/courseData'

export default function Review({ course }: { course: CourseData }) {
    return (
        <div className="pb-24 md:pb-0">
            <h2 className="text-[17px] md:text-[28px] font-semibold text-center my-8">
                See course top reviews
            </h2>
            <div className="flex flex-col gap-4 md:gap-8">
                {course.reviews.map((review, i) => (
                    <div
                        key={i}
                        className="w-full md:w-[700px] bg-[#F8F9FA] hover:shadow-lg shadow-sm transition-transform duration-300 hover:scale-[1.01] rounded-lg px-4 py-5"
                    >
                        <div className="flex items-center gap-3">
                            <Image
                                src={review.img}
                                alt="user"
                                width={44}
                                height={44}
                                className="rounded-full border-2 border-white flex-shrink-0"
                            />
                            <div>
                                <p className="text-[13px] font-medium">{review.name}</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-[11px] text-gray-400">Ratings</p>
                                    <div className="flex text-[#FF6B00] text-sm">★ ★ ★ ★ ★</div>
                                </div>
                            </div>
                        </div>
                        <p className="pt-3 text-[13px] text-[#555] leading-relaxed">{review.text}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}