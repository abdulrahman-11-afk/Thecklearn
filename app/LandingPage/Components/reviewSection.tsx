import Image from "next/image"
export default function Review() {
    return (
        <section className="pt-12">
            <div className="flex flex-col items-center text-center gap-y-4">
                <p className="text-[28px] ">
                    Student Success
                    <span className="text-[#FF6B00]  font-[Manrope]"> Stories</span>
                </p>
                <p className="text-[#6F6A6A]">
                    Real Experiences. Real Results. Discover how Thecklearn Academy<br /> has transformed careers and built confidence in tech.
                </p>
            </div>
            <div className="mt-16 flex items-center justify-center gap-10 flex-wrap">
                <div className="bg-[#F8F9FA] w-[470px] hover:shadow-lg h-[320px] rounded-lg shadow-sm transition duration-400 hover:scale-101 pl-8 flex flex-col gap-6 justify-center">
                    <div className="flex text-[#FFC700] text-lg">★ ★ ★ ★ ★</div>
                    <p>"I had zero coding experience before<br /> Thecklearn, but the beginner-friendly <br />courses and hands-on projects helped me <br /> land a junior frontend developer role within 3 <br />months!"</p>
                    <div className="flex items-center pl-8 gap-4">
                        <Image
                            src="/Ellipse 21980.png"
                            alt="user"
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-white"
                        />
                        <div>
                            <p>Sarah Johnson</p>
                            <p className="text-[14px] text-[#646464]">Ceo - Tekstart</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F8F9FA] w-[470px] h-[320px] rounded-lg hover:shadow-lg shadow-sm transition-transform duration-400 hover:scale-101 pl-8 flex flex-col gap-6 justify-center">
                    <div className="flex text-[#FFC700] text-lg">★ ★ ★ ★ ★</div>
                    <p>"The mentorship was top-notch. Having real<br /> tech experts guide me through the learning<br /> process gave me the confidence I needed to<br /> start freelancing as a UI/UX designer."</p>
                    <div className="flex items-center pl-8 gap-4">
                        <Image
                            src="/Ellipse 21981.png"
                            alt="user"
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-white"
                        />
                        <div>
                            <p>Dan</p>
                            <p className="text-[14px] text-[#646464]">Freelancer</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F8F9FA] w-[470px] h-[320px] rounded-lg hover:shadow-lg shadow-sm transition-transform duration-400 hover:scale-101 pl-8 flex flex-col gap-6 justify-center">
                    <div className="flex text-[#FFC700] text-lg">★ ★ ★ ★ ★</div>
                    <p>Thecklearn doesn’t just teach theory. I built <br />real projects that I now showcase in my <br /> portfolio. I even got my first remote internship <br /> thanks to that!"</p>
                    <div className="flex items-center pl-8 gap-4">
                        <Image
                            src="/Ellipse 21982.png"
                            alt="user"
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-white"
                        />
                        <div>
                            <p>Dora</p>
                            <p className="text-[14px] text-[#646464]">Designer</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#F8F9FA] w-[470px] h-[320px] rounded-lg hover:shadow-lg shadow-sm transition-transform duration-400 hover:scale-101 pl-8 flex flex-col gap-6 justify-center">
                    <div className="flex text-[#FFC700] text-lg">★ ★ ★ ★ ★</div>
                    <p>"I’ve tried other online platforms, but <br />Thecklearn stood out with its engaging<br /> community and practical teaching style. I now<br /> mentor others and feel truly empowered."</p>
                    <div className="flex items-center pl-8 gap-4">
                        <Image
                            src="/Ellipse 21980.png"
                            alt="user"
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-white"
                        />
                        <div>
                            <p>Frey</p>
                            <p className="text-[14px] text-[#646464]">Doctor</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}