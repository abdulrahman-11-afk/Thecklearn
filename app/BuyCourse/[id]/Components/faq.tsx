"use client"
import { useState } from "react";
import { CourseData } from '@/data/courseData'

export default function Faq({ course }: { course: CourseData }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="pt-4">
            <h2 className="text-[17px] md:text-[28px] text-center font-semibold mb-6">Frequently Asked Questions</h2>
            <div className="flex flex-col">
                {course.faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 py-4">
                        <div
                            className="flex items-center justify-between gap-4 cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <p className="text-[13px] md:text-[15px] leading-snug">{faq.q}</p>
                            <p className="text-[22px] md:text-[29px] text-[#566273] flex-shrink-0">
                                {openIndex === index ? "−" : "+"}
                            </p>
                        </div>
                        {openIndex === index && (
                            <p className="mt-3 text-[12px] md:text-[14px] text-gray-500 leading-relaxed">
                                {faq.a}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}