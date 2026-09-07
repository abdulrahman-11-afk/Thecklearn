import Image from "next/image"
import Link from "next/link"
import { FiStar } from "react-icons/fi"
import { BsPeopleFill } from "react-icons/bs"

const courses = [
    {
        id: "ui-ux-design",
        image: "/Frame 2147258477 (1).png",
        title: "Complete Ui/UX Beginners to Master Course",
        category: "UI/UX Design",
        students: 100,
        instructor: "Peter Ayeni",
        oldPrice: "₦50,000",
        price: "₦10,000",
    },
    {
        id: "web-development",
        image: "/Frame 2147258477.png",
        title: "Complete Ui/UX Beginners to Master Course",
        category: "UI/UX Design",
        students: 100,
        instructor: "Peter Ayeni",
        oldPrice: "₦50,000",
        price: "₦10,000",
    },
    {
        id: "data-analytics",
        image: "/Frame 2147258477 (2).png",
        title: "Complete Ui/UX Beginners to Master Course",
        category: "UI/UX Design",
        students: 100,
        instructor: "Peter Ayeni",
        oldPrice: "₦50,000",
        price: "₦10,000",
    },
    {
        id: "ui-ux-design-2",
        image: "/Frame 2147258477 (1).png",
        title: "Complete Ui/UX Beginners to Master Course",
        category: "UI/UX Design",
        students: 100,
        instructor: "Peter Ayeni",
        oldPrice: "₦50,000",
        price: "₦10,000",
    },
    {
        id: "web-development-2",
        image: "/Frame 2147258477.png",
        title: "Complete Ui/UX Beginners to Master Course",
        category: "UI/UX Design",
        students: 100,
        instructor: "Peter Ayeni",
        oldPrice: "₦50,000",
        price: "₦10,000",
    },
    {
        id: "data-analytics-2",
        image: "/Frame 2147258477 (2).png",
        title: "Complete Ui/UX Beginners to Master Course",
        category: "UI/UX Design",
        students: 100,
        instructor: "Peter Ayeni",
        oldPrice: "₦50,000",
        price: "₦10,000",
    },
]

export default function CoursesPage() {
    return (
        <>
            <h1 className="text-[24px] md:text-[28px] font-bold text-gray-900">New Courses</h1>
            <p className="text-[#6F6A6A] text-[14px] mt-1 mb-8">Let's learn something new today!</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                    <div
                        key={course.id}
                        className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
                    >
                        <div className="w-full h-[180px] overflow-hidden">
                            <Image
                                src={course.image}
                                alt={course.title}
                                width={400}
                                height={180}
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                            />
                        </div>

                        <div className="p-5 flex flex-col gap-3 flex-1">
                            <p className="text-[15px] font-semibold text-gray-900 leading-snug">
                                {course.title}
                            </p>

                            <hr className="border-gray-100" />

                            <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1 bg-[#FFD9CD] px-3 h-[26px] rounded-full">
                                    <p className="text-[11px] font-medium text-gray-700 whitespace-nowrap">{course.category}</p>
                                    <FiStar size={10} className="text-gray-500" />
                                </div>
                                <div className="flex items-center gap-1">
                                    <BsPeopleFill size={12} className="text-gray-400" />
                                    <p className="text-[12px] text-gray-500">{course.students}</p>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <p className="text-[12px] text-gray-400 line-through">{course.oldPrice}</p>
                            </div>

                            <div className="flex items-center justify-between">
                                <p className="text-[13px] text-gray-600">{course.instructor}</p>
                                <p className="text-[17px] font-bold text-gray-900">{course.price}</p>
                            </div>

                            <Link href={`/BuyCourse/${course.id}`}>
                                <button className="w-full mt-1 py-2 border border-gray-300 rounded-full text-[13px] font-medium hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer">
                                    Enroll Now
                                </button>
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}