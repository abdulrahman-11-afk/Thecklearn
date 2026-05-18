import Image from "next/image"
import Link from "next/link"
export default function Footer() {
    return (
        <footer id="footer" className="bg-[#0C1518] mt-18 py-16">
            <div className="flex flex-col items-center text-center md:flex-row md:items-start md:text-left md:justify-evenly md:gap-12 gap-10 px-6 ">
                <div className="text-white flex flex-col gap-5 items-center md:items-start max-w-[300px]">
                    <p className="text-[24px] md:text-[28px] leading-tight">
                        GET OUR LATEST <br />NEWS AND UPDATES
                    </p>
                    <p className="text-gray-400 text-[13px]">
                        Feel free to send us your questions or request a free consultation.
                    </p>
                    <button className="w-[220px] h-[40px] rounded-md text-white text-[13px] bg-[#FF6B00] hover:scale-105 transition duration-500 cursor-pointer flex items-center justify-center">
                        Join Our Whatsapp Community
                    </button>
                </div>

                <nav className="text-[#E6E6E6] text-[14px] flex flex-col items-center md:items-start gap-1">
                    <p className="text-[#8F8E8A] text-[11px] tracking-widest uppercase mb-3">Quick Links</p>
                    <Link href="#programs"><p className="cursor-pointer hover:text-[#FF6B00] transition-colors">Programs</p></Link>
                    <Link href="#About"><p className="cursor-pointer hover:text-[#FF6B00] transition-colors">About</p></Link>
                    <Link href="#footer"><p className="cursor-pointer hover:text-[#FF6B00] transition-colors">Community</p></Link>
                    <Link href="#faq"><p className="cursor-pointer hover:text-[#FF6B00] transition-colors">Help</p></Link>
                    <p className="cursor-pointer hover:text-[#FF6B00] transition-colors">Contacts</p>
                </nav>

                <div className="text-[#E6E6E6] text-[14px] flex flex-col items-center md:items-start gap-1">
                    <p className="text-[#8F8E8A] text-[11px] tracking-widest uppercase mb-3">Utility Pages</p>
                    <p>Password protected</p>
                    <p>404 not found</p>
                    <p>Style guide</p>
                    <p>Style guide</p>
                    <p>license</p>
                </div>

                <div className="text-[#E6E6E6] text-[14px] flex flex-col items-center md:items-start gap-1">
                    <p className="text-[#8F8E8A] text-[11px] tracking-widest uppercase mb-3">Contact</p>
                    <p>Thecklearnacademy@gmail.com</p>
                </div>
            </div>

            <div className="text-[#E6E6E6] px-6 md:px-14 py-10">
                <hr className="border-[#2a2a2a]" />
            </div>

            <div className="flex flex-col items-center gap-4 md:flex-row md:justify-between px-6 md:px-14">
                <p className="text-[#8F8E8A] text-[13px]">Privacy</p>
                <div className="flex items-center justify-evenly w-[140px] h-[40px] bg-[#272725] rounded-md">
                    <Image
                        src="/Social media.png"
                        alt="whatsapp"
                        width={50}
                        height={50}
                        className="w-[22px] h-[22px] cursor-pointer"
                    />
                    <Image
                        src="/Social media (1).png"
                        alt="telegram"
                        width={50}
                        height={50}
                        className="w-[22px] h-[22px] cursor-pointer"
                    />
                    <div className="w-[1px] h-[22px] bg-[#565551]"></div>
                    <Image
                        src="/Social media (2).png"
                        alt="youtube"
                        width={50}
                        height={50}
                        className="w-[22px] h-[22px] cursor-pointer"
                    />
                </div>
                <p className="text-[#8F8E8A] text-[13px]">© 2023 — Copyright</p>
            </div>
        </footer>
    )
}