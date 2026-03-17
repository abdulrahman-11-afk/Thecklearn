import Image from "next/image"
export default function Why() {
    return (
        <section className="flex items-center  pt-12 justify-center flex-col">
            <div className="flex flex-col items-center text-center gap-y-4">
                <p className="md:text-[28px] text-[19px] font-semibold ">
                    Why Learn with
                    <span className="text-[#FF6B00]"> TheckLearn</span>
                </p>
                <p className="text-[#6F6A6A] md:text-[16px] text-[12px]">
                    Choose from variety of courses and learning path
                    <br />
                    Enroll and Kickstart your Tech Career
                </p>
            </div>
            <div className="flex flex-col gap-8  mt-15">
                <div className="flex items-center flex-wrap gap-x-8">
                    <div className="bg-[#F8F9FA] hover:scale-103 hover:shadow-lg hover:bg-gray-200 duration-400 w-[350px] rounded-2xl h-[256px] pl-10 flex flex-col justify-center">
                        <p className="text-[20px] font-semibold">
                            Learn Smarter, Not Harder
                        </p>
                        <p className="mt-3">
                            Hours of meticulously designed courses,
                            <br />
                            created and taught by industry-leading <br />
                            professionals.
                        </p>
                    </div>
                    <div className="w-[350px] rounded-2xl h-[256px]">
                        <Image
                            src="/laptop.png"
                            alt="user"
                            width={300}
                            height={200}
                            className="w-full hover:scale-103 duration-400"
                        />
                    </div>
                    <div className="bg-[#F8F9FA] hover:shadow-lg hover:scale-103 hover:bg-gray-200 duration-400 w-[350px] rounded-2xl h-[256px] pl-10 flex flex-col justify-center">
                        <p className="text-[20px] font-semibold">
                            Learn Smarter, Not Harder
                        </p>
                        <p className="mt-3">
                            Hours of meticulously designed courses,
                            <br />
                            created and taught by industry-leading <br />
                            professionals.
                        </p>
                    </div>
                </div>
                <div className="flex items-center flex-wrap gap-x-8">
                    <div className="w-[350px] rounded-2xl h-[256px]">
                        <Image
                            src="/image2.png"
                            alt="user"
                            width={300}
                            height={200}
                            className="w-full hover:scale-103 duration-400"
                        />
                    </div>
                    <div className="bg-[#F8F9FA] hover:scale-103 hover:shadow-lg hover:bg-gray-200 duration-400 w-[350px] rounded-2xl h-[256px] pl-10 flex flex-col justify-center">
                        <p className="text-[20px] font-semibold">
                            Learn Smarter, Not Harder
                        </p>
                        <p className="mt-3">
                            Hours of meticulously designed courses,
                            <br />
                            created and taught by industry-leading <br />
                            professionals.
                        </p>
                    </div>
                    <div className="w-[350px] rounded-2xl h-[256px]">
                        <Image
                            src="/image3.png"
                            alt="user"
                            width={300}
                            height={200}
                            className="w-full hover:scale-103 duration-400"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}