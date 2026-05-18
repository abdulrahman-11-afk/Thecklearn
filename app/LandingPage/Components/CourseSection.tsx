import Image from "next/image"
import Link from "next/link"
export default function Course() {
   const courses = [
    {
        id: 1,
        image: "/Frame 2147258477.png",
        title: "Complete Html, Css, Javascript Course Frontend Web Development Course.",
        category: "Web Development",
        students: 100,
        instructor: "Peter Ayeni",
        oldPrice: "N50,000",
        price: "N10,000",
        link: "/BuyCourse/web-development"   // ← matches id in courseData.ts
    },
    {
        id: 2,
        image: "/Frame 2147258477 (1).png",
        title: "Complete UI/UX Design Course From Wireframes to World-Class Products.",
        category: "Product Design",
        students: 100,
        instructor: "Oluwasegun",
        oldPrice: "N50,000",
        price: "N30,000",
        link: "/BuyCourse/ui-ux-design"      // ← matches id in courseData.ts
    },
    {
        id: 3,
        image: "/Frame 2147258477 (2).png",
        title: "Complete Data Analytics Course From Raw Data to Powerful Insights.",
        category: "Data Analytics",
        students: 100,
        instructor: "Bidemi",
        oldPrice: "N50,000",
        price: "N30,000",
        link: "/BuyCourse/data-analytics"    // ← matches id in courseData.ts
    }
];
    return (
        <section id="programs" className="scroll-mt-20 min-h-[130vh] bg-[#F8F9FA]">
            <div className="flex flex-col pt-12 items-center text-center gap-y-4 px-4">
                <p className="md:text-[28px] text-[19px]">
                    Our Ready
                    <span className="text-[#FF6B00] font-[Manrope]"> Courses</span>
                </p>
                <p className="text-[#6F6A6A] md:text-[16px] text-[12px]">
                    Choose from variety of courses and learning path
                    <br />
                    Enroll and Kickstart your Tech Career
                </p>
            </div>
            <div className="flex items-center justify-center flex-wrap mt-12 gap-8 px-4">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="w-full sm:w-[85%] md:w-[45%] lg:w-[30%] duration-300 hover:shadow-lg rounded-xl bg-white p-6 gap-y-4 flex flex-col"
                    >
                        <Image
                            src={course.image}
                            alt="course"
                            width={300}
                            height={200}
                            className="w-full h-[200px] object-cover hover:scale-103 duration-300 rounded-lg"
                        />

                        <p className="text-[16px] md:text-[18px] leading-snug">{course.title}</p>

                        <hr />

                        <div className="flex items-center gap-x-4">
                            <div className="flex items-center justify-center gap-x-3 px-3 h-[25px] bg-[#FFD9CD] rounded-2xl">
                                <p className="text-[10px] whitespace-nowrap">{course.category}</p>
                            </div>

                            <div className="flex items-center gap-x-2">
                                <Image
                                    src="/Vector.png"
                                    alt="students"
                                    width={12}
                                    height={12}
                                />
                                <p className="text-[14px]">{course.students}</p>
                            </div>
                        </div>

                        <div className="flex w-full justify-end">
                            <p className="text-[14px] line-through text-gray-400">{course.oldPrice}</p>
                        </div>

                        <div className="flex items-center justify-between flex-wrap gap-2">
                            <p className="text-[14px] md:text-[16px]">{course.instructor}</p>
                            <p className="text-[18px] md:text-[20px] ">{course.price}</p>
                        </div>

                        <Link href={course.link}>
                            <button className="w-full cursor-pointer py-2 border hover:bg-black hover:text-white duration-300 rounded-full text-[14px] md:text-[16px]">
                                View Course
                            </button>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    )
}