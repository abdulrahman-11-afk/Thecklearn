import React from 'react'

export default function HeroSection() {
    return (
        <section className="pt-28 md:pt-32 pb-12 mb-6 md:mb-12 bg-[#F8F9FA] px-5 md:px-12 flex flex-col gap-4">
            <h1 className="text-[22px] md:text-[30px] font-semibold leading-snug">
                Complete Html, Css, Javascript Course{" "}
                <br className="hidden md:block" />
                Frontend Web Development Course.
            </h1>
            <p className="text-[#6F6A6A] text-[14px] md:text-[16px]">
                A course by <span className="underline">Oluwasegun Peter</span>
            </p>
            <div className="flex flex-wrap items-center gap-3 w-full md:w-[540px] text-[12px] min-h-[60px] md:h-[70px] px-4 py-3 rounded-xl bg-white shadow-sm">
                <div className="bg-[#FFE6E6] text-[#FE1010] w-[90px] md:w-[100px] h-[34px] md:h-[36px] flex items-center justify-center rounded-md">
                    <p className="font-semibold text-[11px] md:text-[12px]">Hot and New</p>
                </div>
                <div className="bg-[#E8FFE8] text-[#20D013] w-[76px] md:w-[100px] h-[34px] md:h-[36px] flex items-center justify-center rounded-md">
                    <p className="font-semibold text-[11px] md:text-[12px]">English</p>
                </div>
                <p className="text-[11px] md:text-[12px]">99% Positive Reviews</p>
                <p className="text-[11px] md:text-[12px]">100 students</p>
            </div>
        </section>
    )
}