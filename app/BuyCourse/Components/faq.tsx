"use client"
import { useState, useEffect } from "react";
export default function Faq() {
    const faqs = [
        {
            q: "Are the videos downloadable ?",
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
            q: "How do i Purchase this Course ?",
            a: "Yes, you get lifetime access to all your purchased courses.",
        },
    ];
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <section
            className="scroll-mt-12 pt-18">
            <div className="flex flex-col items-center text-center gap-y-4" >
                <h2 className="text-[28px] ">
                    Frequently Asked Questions
                </h2>
            </div >
            <div className="px-6 flex flex-col gap-8 mt-15">
                {faqs.map((faq, index) => (
                    <div key={index} className=" pb-3">
                        <div
                            className="flex items-center justify-between gap-26 cursor-pointer"
                            onClick={() =>
                                setOpenIndex(openIndex === index ? null : index)
                            }
                        >
                            <p>{faq.q}</p>
                            <p className="text-[29px] text-[#566273]">
                                {openIndex === index ? "−" : "+"}
                            </p>
                        </div>
                        {openIndex === index && (
                            <p className="mt-3 text-md text-gray-500 transition-ease-in duration-600">
                                {faq.a}
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </section >
    )
}