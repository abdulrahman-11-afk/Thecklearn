"use client"
import { useEffect, useState } from "react"
import Image from "next/image"

const slides = ["/slide1.png", "/slide 2.jpg", "/slide3.jpg", "/slide4.jpg"]
export default function Carousel() {
    const [current, setCurrent] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) =>
                prev === slides.length - 1 ? 0 : prev + 1
            )
        }, 3000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="flex items-center pt-10 pt:mt-0 md:mx-0 mx-4 flex-col gap-4 ">
            <div className="relative md:w-[620px] w-full md:mx-auto overflow-hidden rounded-xl">
                {/* Image */}
                <div
                    className="flex transition-transform  duration-500 ease-in-out"
                    style={{ transform: `translateX(-${current * 100}%)` }}
                >
                    {slides.map((src, index) => (
                        <div key={index} className="min-w-full">
                            <Image
                                src={src}
                                alt={`Slide ${index + 1}`}
                                width={1000}
                                height={400}
                                className="w-[620px] h-[300px] md:h-[380px] rounded-xl object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
            <div className="md:-translate-x-1/2 flex gap-2">
                {slides.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full transition ${current === index
                            ? "bg-orange-500"
                            : "bg-gray-300"
                            }`}
                    />
                ))}
            </div>

        </div>
    )
}