import Image from "next/image";
import { BsCart3 } from "react-icons/bs";
import { CourseData } from '@/data/courseData'

export default function Aside({ course }: { course: CourseData }) {
    const card = (
        <div className="flex flex-col gap-5 ">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <h2 className="text-[28px] md:text-[32px] font-bold">{course.price}</h2>
                    <span className="text-[#6F6A6A] text-sm">NGN</span>
                </div>
                <div className="text-[#6F6A6A] text-sm flex items-center gap-2">
                    <span>{course.discount} Disc</span>
                    <span className="line-through">{course.oldPrice}</span>
                </div>
            </div>
            <div className="flex flex-col gap-3">
                <button className="w-full bg-[#FF6B00] h-[48px] rounded-lg text-white font-medium hover:opacity-90 transition">
                    Buy Course Now
                </button>
            </div>
            <div className="flex flex-col gap-2 text-[13px] md:text-sm">
                <p className="font-semibold text-[14px]">Course Features</p>
                <p>{course.lessons} Lessons ({course.hours} hours)</p>
                <p>Lifetime Access</p>
                <p>{course.students} Students</p>
                <p>Certificate: Yes</p>
                <p>Rated: {course.rating}</p>
                <p className="text-[#6F6A6A]">{course.category}</p>
                <div className="flex items-center gap-3 mt-1">
                    <Image
                        src={course.instructorImg}
                        alt="instructor"
                        width={50}
                        height={50}
                        className="rounded-full border-2 border-white flex-shrink-0"
                    />
                    <div>
                        <p className="font-medium">{course.instructor}</p>
                        <p className="text-[12px] text-[#646464]">{course.instructorTitle}</p>
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <>
            <div className="bg-white rounded-xl shadow-md p-5  md:hidden">
                {card}
            </div>

            <aside className="hidden md:block bg-white w-[420px] p-6 sticky top-24 self-start rounded-xl shadow-md flex-shrink-0">
                {card}
            </aside>
        </>
    )
}