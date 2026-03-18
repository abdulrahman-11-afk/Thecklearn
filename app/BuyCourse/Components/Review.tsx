import React from 'react'
import Image from 'next/image'

export default function Review() {
    return (
        <div>
            <div className="flex flex-col items-center my-12 " >
                <h2 className="text-[28px] ">
                    See course top reviews
                </h2>
            </div >
            <div className='flex flex-col gap-8'>
                <div className='w-[700px] h-[204px] bg-[#F8F9FA] rounded-lg px-5 py-8'>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/Ellipse 21981.png"
                            alt="user"
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-white"
                        />
                        <div>
                            <p>Micheal ugo</p>
                            <div className='flex items-center gap-2'>
                                <p>Ratings</p>
                                <div className="flex text-[#FF6B00] text-lg">  ★ ★ ★ ★ ★</div>
                            </div>
                        </div>
                    </div>
                    <p className='pl-14 pt-4'>Ensure your websites work seamlessly across all devices and browsers,<br />
                        applying mobile-first design principles and accessibility best practices.</p>
                </div>
                <div className='w-[700px] h-[204px] bg-[#F8F9FA] rounded-lg px-5 py-8'>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/Ellipse 21980.png"
                            alt="user"
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-white"
                        />
                        <div>
                            <p>Micheal ugo</p>
                            <div className='flex items-center gap-2'>
                                <p>Ratings</p>
                                <div className="flex text-[#FF6B00] text-lg">  ★ ★ ★ ★ ★</div>
                            </div>
                        </div>
                    </div>
                    <p className='pl-14 pt-4'>Ensure your websites work seamlessly across all devices and browsers,<br />
                        applying mobile-first design principles and accessibility best practices.</p>
                </div>
                <div className='w-[700px] h-[204px] bg-[#F8F9FA] rounded-lg px-5 py-8'>
                    <div className="flex items-center gap-4">
                        <Image
                            src="/Ellipse 21982.png"
                            alt="user"
                            width={50}
                            height={50}
                            className="rounded-full border-2 border-white"
                        />
                        <div>
                            <p>Micheal ugo</p>
                            <div className='flex items-center gap-2'>
                                <p>Ratings</p>
                                <div className="flex text-[#FF6B00] text-lg">  ★ ★ ★ ★ ★</div>
                            </div>
                        </div>
                    </div>
                    <p className='pl-14 pt-4'>Ensure your websites work seamlessly across all devices and browsers,<br />
                        applying mobile-first design principles and accessibility best practices.</p>
                </div>
            </div>
        </div>
    )
}
