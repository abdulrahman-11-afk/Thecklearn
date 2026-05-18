"use client";
import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Curriculum() {
    const [open, setOpen] = useState<number | null>(null);

    const sections = [
        {
            title: "Getting Started",
            lectures: 4,
            duration: "12m",
            lessons: [
                "What's Webflow?",
                "Sign up in Webflow",
                "Webflow Terms & Conditions",
                "Teaser of Webflow",
                "Practice Project",
            ],
        },
        { title: "Secret of Good Design", lectures: 4, duration: "12m", lessons: [] },
        { title: "Design Like an Artist", lectures: 4, duration: "12m", lessons: [] },
        {
            title: "Web Development (Webflow)",
            lectures: 4,
            duration: "12m",
            lessons: [
                "What's Webflow?",
                "Sign up in Webflow",
                "Webflow Terms & Conditions",
                "Teaser of Webflow",
                "Practice Project",
            ],
        },
        { title: "Secrets of Making Money Freelancing", lectures: 4, duration: "12m", lessons: [] },
        { title: "Advanced", lectures: 4, duration: "12m", lessons: [] },
    ];

    const toggle = (index: number) => {
        setOpen(open === index ? null : index);
    };

    return (
        <div className="w-full md:max-w-3xl mt-8 md:mt-12">
            <h2 className="text-lg md:text-xl font-semibold mb-4">Curriculum</h2>

            {sections.map((section, index) => (
                <div key={index} className="border-b border-gray-100">
                    <div
                        onClick={() => toggle(index)}
                        className="flex justify-between items-center p-3 md:p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    >
                        <div className="flex items-center gap-3 flex-1 min-w-0">
                            {open === index ? <FaChevronUp className="flex-shrink-0 text-[12px]" /> : <FaChevronDown className="flex-shrink-0 text-[12px]" />}
                            <span className="text-sm font-medium truncate">{section.title}</span>
                        </div>
                        <div className="flex items-center gap-2 md:gap-3 flex-shrink-0 ml-2">
                            <span className="text-[11px] md:text-xs text-gray-500 whitespace-nowrap">
                                {section.lectures} lectures
                            </span>
                            <span className="text-[11px] md:text-xs text-gray-500">
                                {section.duration}
                            </span>
                        </div>
                    </div>

                    {open === index && section.lessons.length > 0 && (
                        <ul className="px-8 md:px-10 pb-4 text-sm text-gray-600 bg-gray-50">
                            {section.lessons.map((lesson, i) => (
                                <li key={i} className="py-2 border-b border-gray-100 last:border-0 text-[13px] md:text-[14px]">
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