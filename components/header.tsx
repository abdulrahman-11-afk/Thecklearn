import Image from "next/image"
import Link from "next/link"
export default function Header() {
    return (
        <div>
            <header className="flex fixed z-50 items-center justify-between md:px-12 px-5 h-20 w-[100%] left-0 bg-white shadow-[0_1px_4px_-1px_rgba(0,0,0,0.3)]">
                <Link href="/LandingPage"><Image src="/logo1.png" alt="Logo" width={130} height={20} className="md:w-38 md:h-10 w-28 " /></Link>
                <nav className="md:flex hidden items-center  gap-x-6">
                    <Link href="#"><p className="cursor-pointer">Programs</p></Link>
                    <Link href="#"><p className="cursor-pointer">About</p></Link>
                    <Link href="#"><p className="cursor-pointer">Community</p></Link>
                    <Link href="#"><p className="cursor-pointer">Help</p></Link>
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
                   <Link href="/Authentications/SignUp"> <button className="cursor-pointer">Sign Up</button></Link>
                    <button className="bg-[#FF6B00] text-white hover:scale-105 duration-500 transition-transform cursor-pointer w-[80px] h-[37px] text-[15px] rounded-md">
                        Log in
                    </button>
                </div>
            </header>
        </div>
    )
}