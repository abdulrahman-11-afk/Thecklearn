import { BsCart3 } from "react-icons/bs";
import Image from "next/image";
export default function Aside() {
  return (
    <aside className="bg-white w-[420px] p-6 sticky top-23 rounded-xl shadow-md flex flex-col gap-6">

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
        <button className="w-full bg-[#FF6B00] h-[50px] rounded-lg text-white font-medium hover:opacity-90 transition">Buy Course Now</button>
        <button className="w-full bg-[#FF6B0030] h-[50px] rounded-lg font-medium flex items-center justify-center gap-2"> <BsCart3 className="w-6 h-6" /> Add to Cart</button>
      </div>
      <div className="flex flex-col gap-3 text-sm">
        <h3 className="font-semibold">Course Features</h3>
        <p>70 Lessons (30 hours)</p>
        <p>Lifetime Access</p>
        <p>100 Students</p>
        <p>Certificate: Yes</p>
        <p>Rated: 4.5 </p>
        <p className="text-[#6F6A6A]">Web Development</p>
        <div className="flex items-center gap-4">
          <Image
            src="/Ellipse 21980.png"
            alt="user"
            width={50}
            height={50}
            className="rounded-full border-2 border-white"
          />
          <div>
            <p>Oluwasegun Peter</p>
            <p className="text-[14px] text-[#646464]">Instructor</p>
          </div>
        </div>
      </div>
    </aside>
  )
}