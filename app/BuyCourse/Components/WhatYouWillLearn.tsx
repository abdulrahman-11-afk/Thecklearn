import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

const items = [
    "Understand the core building blocks of the web: HTML, CSS, and JavaScript, and how they work together.",
    "Structure web pages using semantic HTML elements to improve accessibility and SEO.",
    "Style websites with CSS, including layout techniques (Flexbox, Grid), responsive design, and custom animations.",
    "Write clean, efficient JavaScript to add interactivity and dynamic behavior to websites.",
    "Style websites with CSS, including layout techniques (Flexbox, Grid), responsive design, and custom animations.",
    "Write clean, efficient JavaScript to add interactivity and dynamic behavior to websites.",
    "Style websites with CSS, including layout techniques (Flexbox, Grid), responsive design, and custom animations.",
    "Write clean, efficient JavaScript to add interactivity and dynamic behavior to websites.",
]

export default function WhatYouWillLearn() {
    return (
        <section>
            <h2 className="text-[18px] md:text-2xl font-semibold mb-4">
                What you will Learn
            </h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-[13px] md:text-[14px] text-[#555]">
                {items.map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                        <FaCircleCheck className="text-[#FF6B00] flex-shrink-0 mt-[2px]" />
                        <li className="list-none leading-relaxed">{item}</li>
                    </div>
                ))}
            </ul>
        </section>
    )
}