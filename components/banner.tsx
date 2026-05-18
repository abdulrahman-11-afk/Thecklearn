"use client"
import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

export default function Banner() {
    const [showBanner, setShowBanner] = useState(true);
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="fixed left-0 top-0 z-50 w-full">
            {showBanner && (
                <div className="bg-[#005082] flex flex-col md:text-[12px] text-[8px] min-h-[52px] text-white items-center justify-center relative px-10">
                    <p className="font-bold">New Month Sale 🎉</p>
                    <p>70% discount on Courses! 1 day 15 hours left</p>
                    <div
                        role="button"
                        aria-label="Close banner"
                        className="absolute right-4 md:right-11 flex items-center cursor-pointer"
                        onClick={() => setShowBanner(false)}
                    >
                        <Image src="/uil_times.png" alt="cancel" width={22} height={22} />
                    </div>
                </div>
            )}

            <header className="flex items-center justify-between md:px-12 px-5 h-20 w-full bg-white shadow-[0_1px_4px_-1px_rgba(0,0,0,0.3)]">
                <Link href="#hero">
                    <Image src="/logo1.png" alt="Logo" width={130} height={20} className="md:w-38 md:h-10 w-28" />
                </Link>

                <nav className="md:flex hidden items-center gap-x-6">
                    <Link href="#programs"><p className="cursor-pointer hover:text-[#FF6B00] transition-colors">Programs</p></Link>
                    <Link href="#About"><p className="cursor-pointer hover:text-[#FF6B00] transition-colors">About</p></Link>
                    <Link href="#footer"><p className="cursor-pointer hover:text-[#FF6B00] transition-colors">Community</p></Link>
                    <Link href="#faq"><p className="cursor-pointer hover:text-[#FF6B00] transition-colors">Help</p></Link>
                </nav>

                <div className="md:flex hidden items-center gap-x-4">
                     <Link href="/Authentications/register"> <button className="cursor-pointer">Sign Up</button></Link>
                    <Link href="/Authentications/Login"> <button className="bg-[#FF6B00] text-white hover:scale-105 duration-500 transition-transform cursor-pointer w-[80px] h-[37px] text-[15px] rounded-md">
                        Log in
                    </button></Link>
                </div>


                <button
                    className="md:hidden text-black text-3xl leading-none cursor-pointer"
                    aria-label="Toggle menu"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? "✕" : "☰"}
                </button>
            </header>

            <div
                className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
                    menuOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
                }`}
            >
                <nav className="flex flex-col border-t border-gray-100">
                    <Link href="#programs" onClick={() => setMenuOpen(false)}>
                        <p className="px-6 py-4 text-[15px] border-b border-gray-100 hover:text-[#FF6B00] hover:bg-gray-50 transition-colors cursor-pointer">Programs</p>
                    </Link>
                    <Link href="#About" onClick={() => setMenuOpen(false)}>
                        <p className="px-6 py-4 text-[15px] border-b border-gray-100 hover:text-[#FF6B00] hover:bg-gray-50 transition-colors cursor-pointer">About</p>
                    </Link>
                    <Link href="#footer" onClick={() => setMenuOpen(false)}>
                        <p className="px-6 py-4 text-[15px] border-b border-gray-100 hover:text-[#FF6B00] hover:bg-gray-50 transition-colors cursor-pointer">Community</p>
                    </Link>
                    <Link href="#faq" onClick={() => setMenuOpen(false)}>
                        <p className="px-6 py-4 text-[15px] border-b border-gray-100 hover:text-[#FF6B00] hover:bg-gray-50 transition-colors cursor-pointer">Help</p>
                    </Link>
                </nav>
                <div className="flex items-center gap-4 px-6 py-5">
                     <Link href="/Authentications/register"> <button className="cursor-pointer">Sign Up</button></Link>
                    <Link href="/Authentications/Login"> <button className="bg-[#FF6B00] text-white hover:scale-105 duration-500 transition-transform cursor-pointer w-[80px] h-[37px] text-[15px] rounded-md">
                        Log in
                    </button></Link>
                </div>
            </div>
        </div>
    )
}