"use client"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { IoGridOutline } from "react-icons/io5"
import { RiCalendarTodoLine } from "react-icons/ri"
import { FiBookmark, FiFileText, FiBell, FiSearch, FiChevronDown } from "react-icons/fi"

const navItems = [
    { label: "Dashboard", icon: <IoGridOutline size={18} />, href: "/Dashboard" },
    { label: "Courses", icon: <RiCalendarTodoLine size={18} />, href: "/Dashboard/Courses" },
    { label: "Wishlist", icon: <FiBookmark size={18} />, href: "/Dashboard/Wishlist" },
    { label: "Notes", icon: <FiFileText size={18} />, href: "/Dashboard/Notes" },
]

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    return (
        <div className="flex min-h-screen bg-[#F5F5F5]">

            <aside className="hidden md:flex flex-col w-[200px] min-h-screen bg-white border-r border-gray-100 pt-6 pb-10 fixed left-0 top-0 z-40">

                <div className="px-6 mb-10">
                    <Link href="/">
                        <Image src="/logo1.png" alt="TheckLearn" width={130} height={30} className="w-32" />
                    </Link>
                </div>

                <nav className="flex flex-col gap-1 px-3">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href
                        return (
                            <Link key={item.label} href={item.href}>
                                <div className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[14px] font-medium transition-colors cursor-pointer
                                    ${isActive
                                        ? "bg-[#FF6B00] text-white"
                                        : "text-[#6F6A6A] hover:bg-gray-100 hover:text-black"
                                    }`}>
                                    {item.icon}
                                    {item.label}
                                </div>
                            </Link>
                        )
                    })}
                </nav>
            </aside>

            <div className="flex-1 md:ml-[200px] flex flex-col">

                <header className="sticky top-0 z-30 bg-white border-b border-gray-100 h-[64px] flex items-center justify-between px-6 md:px-10">
                    <div className="flex items-center gap-3 bg-[#F5F5F5] border border-[#FF6B00] rounded-full px-4 h-[40px] w-full max-w-[420px]">
                        <FiSearch className="text-gray-400 flex-shrink-0" size={16} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-transparent outline-none text-[14px] w-full text-gray-700 placeholder:text-gray-400"
                        />
                    </div>

                    <div className="flex items-center gap-4 ml-6 flex-shrink-0">
                        <button className="relative w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 transition">
                            <FiBell size={20} className="text-gray-600" />
                            <span className="absolute top-1 right-1 w-2 h-2 bg-[#FF6B00] rounded-full" />
                        </button>
                        <div className="flex items-center gap-2 cursor-pointer">
                            <div className="w-9 h-9 rounded-full overflow-hidden bg-gray-200">
                                <Image src="/Ellipse 21980.png" alt="user" width={36} height={36} className="w-full h-full object-cover" />
                            </div>
                            <span className="text-[14px] font-medium text-gray-800 hidden sm:block">Harsh</span>
                            <FiChevronDown size={16} className="text-gray-500 hidden sm:block" />
                        </div>
                    </div>
                </header>
                <main className="flex-1 px-6 md:px-10 py-8">
                    {children}
                </main>
            </div>
        </div>
    )
}