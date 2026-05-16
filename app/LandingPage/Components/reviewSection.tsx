import Image from "next/image"
export default function Review() {
    return (
        <section className="pt-12 px-4">
            <div className="flex flex-col items-center text-center gap-y-4">
                <p className="text-[22px] md:text-[28px]">
                    Student Success
                    <span className="text-[#FF6B00] font-[Manrope]"> Stories</span>
                </p>
                <p className="text-[#6F6A6A] text-[13px] md:text-[16px]">
                    Real Experiences. Real Results. Discover how Thecklearn Academy
                    has transformed careers and built confidence in tech.
                </p>
            </div>
            <div className="mt-16 flex items-center justify-center gap-8 flex-wrap">
                {[
                    {
                        text: "\"I had zero coding experience before Thecklearn, but the beginner-friendly courses and hands-on projects helped me land a junior frontend developer role within 3 months!\"",
                        name: "Sarah Johnson",
                        role: "Ceo - Tekstart",
                        img: "/Ellipse 21980.png"
                    },
                    {
                        text: "\"The mentorship was top-notch. Having real tech experts guide me through the learning process gave me the confidence I needed to start freelancing as a UI/UX designer.\"",
                        name: "Dan",
                        role: "Freelancer",
                        img: "/Ellipse 21981.png"
                    },
                    {
                        text: "\"Thecklearn doesn't just teach theory. I built real projects that I now showcase in my portfolio. I even got my first remote internship thanks to that!\"",
                        name: "Dora",
                        role: "Designer",
                        img: "/Ellipse 21982.png"
                    },
                    {
                        text: "\"I've tried other online platforms, but Thecklearn stood out with its engaging community and practical teaching style. I now mentor others and feel truly empowered.\"",
                        name: "Frey",
                        role: "Doctor",
                        img: "/Ellipse 21980.png"
                    }
                ].map((review, i) => (
                    <div
                        key={i}
                        className="bg-[#F8F9FA] w-full sm:w-[85%] md:w-[470px] min-h-[280px] rounded-lg hover:shadow-lg shadow-sm transition duration-300 hover:scale-[1.01] px-8 py-8 flex flex-col gap-6 justify-center"
                    >
                        <div className="flex text-[#FFC700] text-lg">★ ★ ★ ★ ★</div>
                        <p className="text-[14px] md:text-[15px] leading-relaxed">{review.text}</p>
                        <div className="flex items-center gap-4">
                            <Image
                                src={review.img}
                                alt="user"
                                width={50}
                                height={50}
                                className="rounded-full border-2 border-white flex-shrink-0"
                            />
                            <div>
                                <p className="font-medium">{review.name}</p>
                                <p className="text-[13px] text-[#646464]">{review.role}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}