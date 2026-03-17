import Image from "next/image"
export default function About() {
    return (
        <section id="About" className="scroll-mt-20 pt-18">
            <div className="flex justify-center">
                <p className="text-[28px]">
                    About <span className="text-[#FF6B00]">us</span>
                </p>
            </div>
            <div className="flex items-center pt-14 px-14 justify-between">
                <div>
                    <Image
                        src="/Frame 2147258487.png"
                        alt="user"
                        width={300}
                        height={200}
                        className="w-[620px] min-h-[500px] "
                    />
                </div>
                <div className=" h-[450px] flex mb-10 flex-col justify-between" >
                    <p className="text-[28px]">More Than a Skill. It's a Career Built with <br />Confidence.</p>
                    <p className="text-[#6F6A6A]">At TheckLearn Academy, we believe that quality tech education <br />
                        should be accessible, practical, and empowering for everyone — <br />
                        regardless of background or experience. Our mission is to equip <br />
                        the next generation of tech professionals with the skills, confidence,<br />
                        and community support they need to thrive in today’s digital world.</p>
                    <div className="flex items-center text-[#6F6A6A] gap-9">
                        <div className="flex flex-col justify-center gap-4">
                            <div className="flex items-center gap-x-6">
                                <Image
                                    src="/Vector (1).png"
                                    alt="user"
                                    width={20}
                                    height={20}
                                    className=""
                                />
                                <p>Industry-relevant skills,<br /> not theory</p>
                            </div>
                            <div className="flex items-center gap-x-6">
                                <Image
                                    src="/Vector (1).png"
                                    alt="user"
                                    width={20}
                                    height={20}
                                    className=""
                                />
                                <p>Build Skills While Building <br />Friendships</p>
                            </div>
                        </div>
                        <div className="flex flex-col justify-center gap-4">
                            <div className="flex items-center gap-x-6">
                                <Image
                                    src="/Vector (1).png"
                                    alt="user"
                                    width={20}
                                    height={20}
                                    className=""
                                />
                                <p>Join a supportive learning <br />community</p>
                            </div>
                            <div className="flex items-center gap-x-6">
                                <Image
                                    src="/Vector (1).png"
                                    alt="user"
                                    width={20}
                                    height={20}
                                    className=""
                                />
                                Affordable, flexible payment<br /> options
                            </div>
                        </div>
                    </div>
                    <button className="w-[136px] flex items-center justify-center text-white hover:scale-105 duration-500 cursor-pointer rounded-sm h-[42px] bg-[#FF6B00]">Get Started</button>
                </div>
            </div>
        </section>
    )
}