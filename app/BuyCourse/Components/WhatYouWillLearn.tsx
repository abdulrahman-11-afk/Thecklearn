import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

export default function WhatYouWillLearn() {
    return (
        <section>
            <h2 className="text-2xl font-semibold mb-4">
                What you will Learn
            </h2>
            <ul className="grid grid-cols-2 gap-2 text-[14px] text-[#555]">
                <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B00]" />
                    <li>Understand the core building blocks of the web:<br /> HTML, CSS, and JavaScript, and how they work together.</li>
                </div>
                <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B00]" />
                    <li>Structure web pages using semantic HTML <br />elements to
                        improve accessibility and SEO.</li>
                </div>
                <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B00]" />
                    <li>Style websites with CSS, including layout techniques <br />
                        (Flexbox, Grid), responsive design, and custom animations.</li>
                </div>
                <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B00]" />
                    <li>Write clean, efficient JavaScript to add interactivity<br />
                        and dynamic behavior to websites.</li>
                </div>
                <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B00]" />
                    <li>Style websites with CSS, including layout techniques <br />
                        (Flexbox, Grid), responsive design, and custom animations.</li>
                </div>
                <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B00]" />
                    <li>Write clean, efficient JavaScript to add interactivity<br /> and dynamic behavior to websites.</li>
                </div>
                <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B00]" />
                    <li>Style websites with CSS, including layout techniques <br />
                        (Flexbox, Grid), responsive design, and custom animations.</li>
                </div>
                <div className="flex items-start gap-3">
                    <FaCircleCheck className="text-[#FF6B00]" />
                    <li>Write clean, efficient JavaScript to add interactivity<br /> and dynamic behavior to websites.</li>
                </div>
            </ul>
        </section>
    )
}
