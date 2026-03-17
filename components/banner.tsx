"use client"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"
export default function Banner() {
    const [showBanner, setShowBanner] = useState(true);
    return (
        <div className="fixed left-0 top-0 z-50 w-full">
            {/* banner */}
            {showBanner && (
                <div className="bg-[#005082] flex flex-col md:text-[12px] text-[8px] min-h-[52px] text-white items-center justify-center relative">
                    <p className="font-bold">New Month Sale 🎉</p>
                    <p>70% discount on Courses! 1 day 15 hours left</p>

                    <div
                        role="button"
                        aria-label="Close banner"
                        className="absolute right-11 flex items-center cursor-pointer"
                        onClick={() => setShowBanner(false)}
                    >
                        <Image src="/uil_times.png" alt="cancel" width={22} height={22} />
                    </div>
                </div>
            )}
            {/* header */}
            <header className="flex items-center justify-between md:px-12 px-5 h-20 w-[100%] left-0 bg-white shadow-[0_1px_4px_-1px_rgba(0,0,0,0.3)]">
                <Link href="#hero"><Image src="/logo1.png" alt="Logo" width={130} height={20} className="md:w-38 md:h-10 w-28 " /></Link>
                <nav className="md:flex hidden items-center  gap-x-6">
                    <Link href="#programs"><p className="cursor-pointer">Programs</p></Link>
                    <Link href="#About"><p className="cursor-pointer">About</p></Link>
                    <Link href="#footer"><p className="cursor-pointer">Community</p></Link>
                    <Link href="#faq"><p className="cursor-pointer">Help</p></Link>
                </nav>
                <p className="md:hidden flex text-black text-3xl">☰</p>
                <div className="md:flex hidden items-center gap-x-4">
                    <Image
                        src="/mdi-light_cart.png"
                        alt="cancel"
                        width={35}
                        height={35}
                        className="cursor-pointer"
                    />
                    <button className="cursor-pointer">Sign Up</button>
                    <button className="bg-[#FF6B00] text-white hover:scale-105 duration-500 transition-transform cursor-pointer w-[80px] h-[37px] text-[15px] rounded-md">
                        Log in
                    </button>
                </div>
            </header>
        </div>

    )
}