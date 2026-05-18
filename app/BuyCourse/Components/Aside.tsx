import { BsCart3 } from "react-icons/bs";
import Image from "next/image";

export default function Aside() {
    return (
        <>
            {/* Desktop aside — hidden on mobile */}
            <aside className="hidden md:flex bg-white w-[420px] p-6 sticky top-23 rounded-xl shadow-md flex-col gap-6">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[32px] font-semibold">₦15,000</h1>
                        <p className="text-[#6F6A6A]">NGN</p>
                    </div>
                    <div className="text-[#6F6A6A] text-sm flex items-center gap-3">
                        <p>70% Disc</p>
                        <p className="line-through">₦50,000</p>
                    </div>
                </div>
                <div className="flex flex-col gap-3">
                    <button className="w-full bg-[#FF6B00] h-[50px] rounded-lg text-white font-medium hover:opacity-90 transition">
                        Buy Course Now
                    </button>
                    <button className="w-full bg-[#FF6B0030] h-[50px] rounded-lg font-medium flex items-center justify-center gap-2">
                        <BsCart3 className="w-6 h-6" /> Add to Cart
                    </button>
                </div>
                <div className="flex flex-col gap-3 text-sm">
                    <h3 className="font-semibold">Course Features</h3>
                    <p>70 Lessons (30 hours)</p>
                    <p>Lifetime Access</p>
                    <p>100 Students</p>
                    <p>Certificate: Yes</p>
                    <p>Rated: 4.5</p>
                    <p className="text-[#6F6A6A]">Web Development</p>
                    <div className="flex items-center gap-4">
                        <Image src="/Ellipse 21980.png" alt="user" width={50} height={50} className="rounded-full border-2 border-white" />
                        <div>
                            <p>Oluwasegun Peter</p>
                            <p className="text-[14px] text-[#646464]">Instructor</p>
                        </div>
                    </div>
                </div>
            </aside>

            {/* Mobile sticky bottom bar */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 shadow-[0_-2px_12px_rgba(0,0,0,0.08)] z-40 px-4 py-3 flex items-center justify-between gap-3">
                <div>
                    <div className="flex items-center gap-1">
                        <span className="text-[20px] font-bold">₦15,000</span>
                        <span className="text-[11px] text-[#6F6A6A]">NGN</span>
                    </div>
                    <p className="text-[11px] text-[#6F6A6A] line-through">₦50,000</p>
                </div>
                <div className="flex gap-2 flex-1 justify-end">
                    <button className="flex items-center justify-center gap-1 bg-[#FF6B0020] text-[#FF6B00] h-[44px] px-4 rounded-lg text-[13px] font-medium">
                        <BsCart3 className="w-5 h-5" />
                    </button>
                    <button className="bg-[#FF6B00] text-white h-[44px] px-6 rounded-lg text-[14px] font-medium hover:opacity-90 transition flex-1 max-w-[180px]">
                        Buy Course Now
                    </button>
                </div>
            </div>
        </>
    )
}