"use client"
import { useState, useEffect } from "react";
export default function Faq(){
     const faqs = [
        {
            q: "Are the courses beginner-friendly?",
            a: "Yes! Our courses are designed for beginners and guide you step-by-step to advanced levels.",
        },
        {
            q: "Will I get a certificate after completing a course?",
            a: "Yes, you will receive a digital certificate after completing your course.",
        },
        {
            q: "How do I deploy a model once it’s ready?",
            a: "You can deploy using platforms like Vercel, Netlify, or cloud services like AWS and Firebase.",
        },
        {
            q: "Can I access the courses anytime?",
            a: "Yes, you get lifetime access to all your purchased courses.",
        },
        {
            q: "How do I pay for a course?",
            a: "You can pay using debit cards, bank transfers, and supported online payment platforms.",
        },
    ];
      const [openIndex, setOpenIndex] = useState<number | null>(null);
    return (
        <div>
             <div id="faq" className="scroll-mt-12 pt-18">
                <div className="flex flex-col items-center text-center gap-y-4">
                    <p className="text-[28px] ">
                        Still Curious? Let’s Clear
                        <span className="text-[#FF6B00]  font-[Manrope]"> Things Up.</span>
                    </p>
                    <p className="text-[#6F6A6A]">
                        From how courses work to what’s included — here are answers to the most<br /> common questions about learning with Thecklearn.
                    </p>
                </div>
                <div className="px-50 flex flex-col gap-8 mt-15">
                    {faqs.map((faq, index) => (
                        <div key={index} className=" pb-4">
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
            </div>
        </div>
    )
}