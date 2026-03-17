import Image from "next/image"
import Carousel from "./CarouselSection"
export default function Herosection() {
    return (
        <section>
            <div id="hero" className="md:flex md:flex-row flex-col scroll-mt-40 md:mx-12 flex items-center justify-between pt-36">
                <div className="flex gap-2 md:gap-y-7 flex-col">
                    <p className="md:text-[37px] text-[24px] md:text-left text-center md:leading-[45px]">
                        A Smarter Way to Learn Tech.
                        <br />
                        Practical, Guided, and <br />
                        <span className="text-[#FF6B00] font-DM Sans">Career-Ready.</span>
                    </p>
                    <p className="text-[#6F6A6A] md:text-left md:text-[16px] text-[11px] text-center ">
                        TheckLearn empowers curious minds across the globe with in-
                        <br />
                        demand tech skills, hands-on learning, and access to expert <br />
                        mentors.
                    </p>
                    <div className="flex items-center md:justify-start justify-center gap-2  md:gap-x-4">
                        <button className="md:w-[130px] w-[80px] md:h-[40px] h-[30px] hover:scale-105 duration-500 cursor-pointer text-white rounded-md bg-[#FF6B00] md:text-[16px] text-[10px]">
                            Get started
                        </button>
                        <button className="border hover:bg-black hover:text-white cursor-pointer duration-500  border-[#6F6A6A] md:text-[16px] text-[12px]  text-[#6F6A6A] md:w-[200px] w-[140px] rounded-sm h-[30px] md:h-[40px]">
                            Speak with an Advisor
                        </button>
                    </div>
                    <div className="flex items-center md:justify-start justify-center gap-2 md:gap-4">
                        <div className="flex -space-x-3">
                            <Image
                                src="/Ellipse 21980.png"
                                alt="user"
                                width={40}
                                height={40}
                                className="rounded-full md:w-10 md:h-10 w-8 h-8 border-2 border-white"
                            />
                            <Image
                                src="/Ellipse 21981.png"
                                alt="user"
                                width={40}
                                height={40}
                                className="rounded-full md:w-10 md:h-10 w-8 h-8 border-2 border-white"
                            />
                            <Image
                                src="/Ellipse 21982.png"
                                alt="user"
                                width={40}
                                height={40}
                                className="rounded-full md:w-10 md:h-10 w-8 h-8 border-2 border-white"
                            />
                            <Image
                                src="/Ellipse 21983.png"
                                alt="user"
                                width={40}
                                height={40}
                                className="rounded-full md:w-10 md:h-10 w-8 h-8 border-2 border-white"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex text-orange-500 text-md md:text-lg">★★★★★</div>
                            <p className="text-gray-500 text-[10px] md:text-sm">
                                500+ Students trained Globally
                            </p>
                        </div>
                    </div>
                </div>
                <div >
                    <Carousel />
                </div>
            </div>
        </section>
    )
}