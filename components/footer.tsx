import Image from "next/image"
import Link from "next/link"
export default function Footer() {
    return (
        <footer id="footer" className="bg-[#0C1518] mt-18 py-18 ">
            <div className="flex justify-evenly gap-12">
                <div className="text-white flex flex-col gap-6 ">
                    <p className="text-[32px] ">GET OUR LATEST <br />NEWS AND UPDATES</p>
                    <p className="text-gray-400">Feel free to send us your questions or request a free consultation.</p>
                    <button className="w-[270px] h-[40px] rounded-md text-white bg-[#FF6B00] hover:scale-103 transition duration-500 cursor-pointer flex items-center justify-center">Join our whatsapp community</button>
                </div>
                <nav className="text-[#E6E6E6] text-[14px]">
                    <p className="text-[#8F8E8A] text-[13px]">Quick links</p>
                    <Link href="#programs"><p className="cursor-pointer mt-5">Programs</p></Link>
                    <Link href="#About"><p className="cursor-pointer">About</p></Link>
                    <Link href="#footer"><p className="cursor-pointer">Community</p></Link>
                    <Link href="#faq"><p className="cursor-pointer">Help</p></Link>
                    <p className="cursor-pointer">Contacts</p>
                </nav>
                <div className="text-[#E6E6E6] text-[14px]">
                    <p className="text-[#8F8E8A] text-[13px]">Utility pages</p>
                    <p className="mt-5">Password protected</p>
                    <p>404 not found</p>
                    <p>Style guide </p>
                    <p>Style guide </p>
                    <p>license</p>
                </div>
                <div className="text-[#E6E6E6] text-[14px]">
                    <p className="text-[#8F8E8A] text-[13px]">Contact</p>
                    <p className="mt-5">Thecklearnacademy@gmail.com</p>
                </div>
            </div>
            <div className="text-[#E6E6E6] px-14 py-14">
                <hr />
            </div>
            <div className="flex items-center px-14 justify-between">
                <p className="text-[#8F8E8A] ">Privacy</p>
                <div className="flex items-center justify-evenly w-[160px] h-[40px] bg-[#272725] rounded-md">
                    <Image
                        src="/Social media.png"
                        alt="user"
                        width={50}
                        height={50}
                        className="w-[24px] h-[24px] cursor-pointer"
                    />
                    <Image
                        src="/Social media (1).png"
                        alt="user"
                        width={50}
                        height={50}
                        className="w-[24px] h-[24px] cursor-pointer"
                    />
                    <div className="w-[1px] h-[24px] bg-[#565551]"></div>
                    <Image
                        src="/Social media (2).png"
                        alt="user"
                        width={50}
                        height={50}
                        className="w-[24px] h-[24px] cursor-pointer"
                    />
                </div>
                <p className="text-[#8F8E8A]">© 2023 — Copyright</p>
            </div>
        </footer>

    )
}