import Image from "next/image"
import Link from "next/link"
export default function About() {
    return (
        <section id="About" className="scroll-mt-20 pt-16 px-4 md:px-14">
            <div className="flex justify-center">
                <p className="text-[22px] md:text-[28px]">
                    About <span className="text-[#FF6B00]">us</span>
                </p>
            </div>
            <div className="flex flex-col md:flex-row items-center pt-10 md:pt-14 gap-4 md:justify-between">
                <div className="w-full md:w-auto flex justify-center">
                    <Image
                        src="/Frame 2147258487.png"
                        alt="about us"
                        width={300}
                        height={200}
                        className="w-full max-w-[580px] md:w-[620px] min-h-[300px] md:min-h-[500px] object-cover rounded-xl"
                    />
                </div>
                <div className="flex flex-col gap-6 md:gap-0 md:h-[450px] md:mb-10 md:justify-between max-w-[560px]">
                    <p className="text-[20px] md:text-[28px] font-semibold leading-snug">
                        More Than a Skill. It's a Career Built with Confidence.
                    </p>
                    <p className="text-[#6F6A6A] text-[14px] md:text-[15px] leading-relaxed">
                        At TheckLearn Academy, we believe that quality tech education
                        should be accessible, practical, and empowering for everyone —
                        regardless of background or experience. Our mission is to equip
                        the next generation of tech professionals with the skills, confidence,
                        and community support they need to thrive in today's digital world.
                    </p>
                    <div className="flex flex-col sm:flex-row items-start text-[#6F6A6A] gap-6">
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-x-4">
                                <Image src="/Vector (1).png" alt="" width={20} height={20} className="mt-1 flex-shrink-0" />
                                <p>Industry-relevant skills, not theory</p>
                            </div>
                            <div className="flex items-start gap-x-4">
                                <Image src="/Vector (1).png" alt="" width={20} height={20} className="mt-1 flex-shrink-0" />
                                <p>Build Skills While Building Friendships</p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-start gap-x-4">
                                <Image src="/Vector (1).png" alt="" width={20} height={20} className="mt-1 flex-shrink-0" />
                                <p>Join a supportive learning community</p>
                            </div>
                            <div className="flex items-start gap-x-4">
                                <Image src="/Vector (1).png" alt="" width={20} height={20} className="mt-1 flex-shrink-0" />
                                <p>Affordable, flexible payment options</p>
                            </div>
                        </div>
                    </div>
                    <Link href="/Authentications/register">
                    <button className="w-[136px] flex items-center justify-center text-white hover:scale-105 duration-500 cursor-pointer rounded-sm h-[42px] bg-[#FF6B00]">
                        Get Started
                    </button></Link>
                </div>
            </div>
        </section>
    )
}