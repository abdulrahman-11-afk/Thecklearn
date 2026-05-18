"use client"
import { useState } from "react";

export default function Faq() {
    const faqs = [
        {
            q: "Are the videos downloadable?",
            a: "Yes! Our courses are designed for beginners and guide you step-by-step to advanced levels.",
        },
        {
            q: "How do I access the course videos and materials?",
            a: "Yes, you will receive a digital certificate after completing your course.",
        },
        {
            q: "How can I obtain my certificate after completing the course?",
            a: "You can deploy using platforms like Vercel, Netlify, or cloud services like AWS and Firebase.",
        },
        {
            q: "How do I Purchase this Course?",
            a: "Yes, you get lifetime access to all your purchased courses.",
        },
    ];

    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        /* extra bottom padding on mobile so the sticky buy bar doesn't cover content */
        <section className="scroll-mt-12 pt-12 pb-24 md:pb-12">
            <div className="flex flex-col items-center text-center gap-y-4">
                <h2 className="text-[20px] md:text-[28px] font-semibold">
                    Frequently Asked Questions
                </h2>
            </div>

            <div className="px-0 md:px-6 flex flex-col gap-0 mt-8">
                {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-gray-100 py-4">
                        <div
                            className="flex items-center justify-between gap-4 cursor-pointer"
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                        >
                            <p className="text-[14px] md:text-[15px] pr-2 leading-snug">{faq.q}</p>
                            <p className="text-[24px] md:text-[29px] text-[#566273] flex-shrink-0">
                                {openIndex === index ? "−" : "+"}
                            </p>
                        </div>
                        {openIndex === index && (
                            <p className="mt-3 text-[13px] md:text-[14px] text-gray-500 leading-relaxed">
                                {faq.a}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}