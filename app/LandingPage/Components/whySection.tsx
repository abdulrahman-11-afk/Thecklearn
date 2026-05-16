import Image from "next/image"
export default function Why() {
    return (
        <section className="flex items-center pt-12 justify-center flex-col px-4">
            <div className="flex flex-col items-center text-center gap-y-4">
                <p className="md:text-[28px] text-[19px] font-semibold">
                    Why Learn with
                    <span className="text-[#FF6B00]"> TheckLearn</span>
                </p>
                <p className="text-[#6F6A6A] md:text-[16px] text-[12px]">
                    Choose from variety of courses and learning path
                    <br />
                    Enroll and Kickstart your Tech Career
                </p>
            </div>
            <div className="flex flex-col gap-8 mt-12 w-full max-w-[1140px]">
                <div className="flex items-center justify-center flex-wrap gap-6">
                    <div className="bg-[#F8F9FA] hover:scale-[1.03] hover:shadow-lg hover:bg-gray-200 duration-300 w-full sm:w-[350px] rounded-2xl h-[256px] px-8 flex flex-col justify-center">
                        <p className="text-[18px] md:text-[20px] font-semibold">
                            Learn Smarter, Not Harder
                        </p>
                        <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-[#6F6A6A]">
                            Hours of meticulously designed courses, created and taught by industry-leading professionals.
                        </p>
                    </div>
                    <div className="w-full sm:w-[350px] rounded-2xl h-[256px] overflow-hidden">
                        <Image
                            src="/laptop.png"
                            alt="laptop"
                            width={350}
                            height={256}
                            className="w-full h-full object-cover hover:scale-[1.03] duration-300 rounded-2xl"
                        />
                    </div>
                    <div className="bg-[#F8F9FA] hover:shadow-lg hover:scale-[1.03] hover:bg-gray-200 duration-300 w-full sm:w-[350px] rounded-2xl h-[256px] px-8 flex flex-col justify-center">
                        <p className="text-[18px] md:text-[20px] font-semibold">
                            Learn Smarter, Not Harder
                        </p>
                        <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-[#6F6A6A]">
                            Hours of meticulously designed courses, created and taught by industry-leading professionals.
                        </p>
                    </div>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-6">
                    <div className="w-full sm:w-[350px] rounded-2xl h-[256px] overflow-hidden">
                        <Image
                            src="/image2.png"
                            alt="image2"
                            width={350}
                            height={256}
                            className="w-full h-full object-cover hover:scale-[1.03] duration-300 rounded-2xl"
                        />
                    </div>
                    <div className="bg-[#F8F9FA] hover:scale-[1.03] hover:shadow-lg hover:bg-gray-200 duration-300 w-full sm:w-[350px] rounded-2xl h-[256px] px-8 flex flex-col justify-center">
                        <p className="text-[18px] md:text-[20px] font-semibold">
                            Learn Smarter, Not Harder
                        </p>
                        <p className="mt-3 text-[14px] md:text-[15px] leading-relaxed text-[#6F6A6A]">
                            Hours of meticulously designed courses, created and taught by industry-leading professionals.
                        </p>
                    </div>
                    <div className="w-full sm:w-[350px] rounded-2xl h-[256px] overflow-hidden">
                        <Image
                            src="/image3.png"
                            alt="image3"
                            width={350}
                            height={256}
                            className="w-full h-full object-cover hover:scale-[1.03] duration-300 rounded-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}