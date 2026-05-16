"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FcGoogle } from "react-icons/fc"

export default function Login() {
    return (
        <div className='h-[100vh] w-[100%] flex items-center justify-center'>
            <div className='flex w-[50%] justify-center items-center h-[100vh] flex-col'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-3xl'>Welcome Back</h2>
                        <p className='text-[#6F6A6A] text-sm'>
                            Sign in to your TheckLearn account and continue Learning
                        </p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <button
                            type="button"
                            className='flex items-center justify-center gap-2 text-sm w-[350px] h-[45px] rounded-md border border-[#E6E6E6] hover:bg-black hover:text-white transition duration-300'
                        >
                            <FcGoogle className='text-lg' />
                            Continue with Google
                        </button>
                        <div className='w-[180px] h-[45px] bg-[#F5F5F5] flex items-center justify-center'>
                            <div className='bg-[#FF6B00] text-white text-sm w-[70px] h-[25px] flex items-center'>
                                Login
                            </div>
                            <div>
                                <p>Register</p>
                            </div>
                        </div>
                        <input
                            type='email'
                            placeholder='Email'
                            className='w-[350px] h-[45px] pl-3 text-sm rounded-sm border border-[#E6E6E6]'
                        />
                        <input
                            type='password'
                            placeholder='Password'
                            className='w-[350px] h-[45px] pl-3 text-sm rounded-sm border border-[#E6E6E6]'
                        />
                    </div>

                    <div className='flex items-center justify-end gap-[6px] text-[#4F4F4F] text-sm'>
                        <input type='checkbox' />
                        <p>Remember me</p>
                    </div>

                    <button
                        type="submit"
                        className='flex items-center justify-center gap-2 transition text-[#FFFFFF] text-sm w-[350px] h-[40px] bg-[#FF6B00] rounded-sm border border-[#E6E6E6] hover:opacity-90'
                    >
                        Log in
                    </button>

                    <p className='text-sm text-[#6F6A6A] flex justify-center pt-5'>
                        Don&apos;t have an account?{' '}
                        <Link href="/Authentications/register" className='text-[#FF6B00] cursor-pointer ml-1'>
                            Register
                        </Link>
                    </p>
                </div>
            </div>

            <div className='w-[50%] h-[100vh] relative'>
                <Image
                    src="/Frame 2147258778.png"
                    alt="user"
                    fill
                    className='object-cover'
                />
            </div>
        </div>
    )
}