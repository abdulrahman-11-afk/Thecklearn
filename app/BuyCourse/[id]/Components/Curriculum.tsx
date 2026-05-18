"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CourseData } from '@/data/courseData'

export default function Curriculum({ course }: { course: CourseData }) {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="w-full mt-6 md:mt-12">
            <h2 className="text-[17px] md:text-xl font-semibold mb-3">Curriculum</h2>
            {course.curriculum.map((section, index) => (
                <div key={index} className="border-b border-gray-100">
                    <div
                        onClick={() => setOpen(open === index ? null : index)}
                        className="flex justify-between items-center p-3 cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            {open === index
                                ? <FaChevronUp className="flex-shrink-0 text-[11px]" />
                                : <FaChevronDown className="flex-shrink-0 text-[11px]" />}
                            <span className="text-[13px] md:text-sm font-medium truncate">{section.title}</span>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0 ml-2">
                            <span className="text-[11px] text-gray-500 whitespace-nowrap">{section.lectures} lectures</span>
                            <span className="text-[11px] text-gray-500">{section.duration}</span>
                        </div>
                    </div>
                    {open === index && section.lessons.length > 0 && (
                        <ul className="px-8 pb-3 bg-gray-50">
                            {section.lessons.map((lesson, i) => (
                                <li key={i} className="py-2 border-b border-gray-100 last:border-0 text-[12px] md:text-[13px] text-gray-600">
                                    {lesson}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            ))}
        </div>
    );
}