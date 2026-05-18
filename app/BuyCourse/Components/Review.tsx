import React from 'react'
import Image from 'next/image'

const reviews = [
    { img: "/Ellipse 21981.png", name: "Micheal ugo" },
    { img: "/Ellipse 21980.png", name: "Micheal ugo" },
    { img: "/Ellipse 21982.png", name: "Micheal ugo" },
]

export default function Review() {
    return (
        <div className="pb-24 md:pb-0">
            <div className="flex flex-col items-center my-8 md:my-12">
                <h2 className="text-[20px] md:text-[28px] font-semibold">
                    See course top reviews
                </h2>
            </div>
            <div className="flex flex-col gap-5 md:gap-8">
                {reviews.map((review, i) => (
                    <div
                        key={i}
                        className="w-full md:w-[700px] min-h-[160px] md:min-h-[204px] bg-[#F8F9FA] hover:shadow-lg shadow-sm transition-transform duration-300 hover:scale-[1.01] rounded-lg px-4 md:px-5 py-6 md:py-8"
                    >
                        <div className="flex items-center gap-3 md:gap-4">
                            <Image
                                src={review.img}
                                alt="user"
                                width={50}
                                height={50}
                                className="rounded-full border-2 border-white flex-shrink-0 w-10 h-10 md:w-[50px] md:h-[50px]"
                            />
                            <div>
                                <p className="text-[14px] md:text-[15px] font-medium">{review.name}</p>
                                <div className="flex items-center gap-2">
                                    <p className="text-[12px] text-gray-500">Ratings</p>
                                    <div className="flex text-[#FF6B00] text-sm md:text-lg">★ ★ ★ ★ ★</div>
                                </div>
                            </div>
                        </div>
                        <p className="pl-0 md:pl-14 pt-4 text-[13px] md:text-[14px] text-[#555] leading-relaxed">
                            Ensure your websites work seamlessly across all devices and browsers,
                            applying mobile-first design principles and accessibility best practices.
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}