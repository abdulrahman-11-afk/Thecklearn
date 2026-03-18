import React from 'react'

export default function HeroSection() {
    return (
        <section className="pt-32 pb-12 mb-12 bg-[#F8F9FA] px-12 flex flex-col gap-4">
            <h1 className="text-[30px] font-semibold leading-snug">
                Complete Html, Css, Javascript Course <br />
                Frontend Web Development Course.
            </h1>
            <p className="text-[#6F6A6A]">
                A course by <span className="underline">Oluwasegun Peter</span>
            </p>
            <div className="flex items-center gap-4 w-[540px] text-[12px] h-[70px] pl-4 rounded-xl bg-white shadow-sm">          <div className="bg-[#FFE6E6] text-[#FE1010] w-[100px] h-[36px] flex items-center justify-center rounded-md">
                <p className="font-semibold">Hot and New</p>
            </div>
                <div className="bg-[#E8FFE8] text-[#20D013] w-[100px] h-[36px] flex items-center justify-center rounded-md">
                    <p className="font-semibold">English</p>
                </div>
                <p>%99 Positive Reviews</p>
                <p>100 students</p>
            </div>
        </section>
    )
}
