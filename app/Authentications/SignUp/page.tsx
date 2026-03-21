"use client"
import React, { useState } from 'react'
import Image from 'next/image'
import { FcGoogle } from "react-icons/fc"


export default function Signup() {
    const [mode, setMode] = useState("login")
    return (
        <div className='h-[100vh] w-[100%] flex items-center justify-center'>
            <div className='flex w-[50%] justify-center items-center h-[100vh] flex-col'>
                <div className='flex flex-col gap-6'>
                    <div className='flex flex-col gap-2'>
                        <h2 className='font-bold text-3xl'>
                            {mode === "login" ? "Welcome Back" : "Create Account"}
                        </h2>

                        <p className='text-[#6F6A6A] text-sm'>
                            {mode === "login"
                                ? "Sign in to your TheckLearn account and continue Learning"
                                : "Create an account and start learning today"}
                        </p>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <button type="button" className='flex items-center justify-center gap-2 text-sm w-[350px] h-[45px] rounded-md border border-[#E6E6E6]'> <FcGoogle className='text-lg' />Continue with Google</button>
                        <div className='bg-[#F5F5F5] w-[190px] h-[45px] flex items-center justify-center'>

                            <button
                                type="button"
                                onClick={() => setMode("login")}
                                className={`text-sm rounded-sm h-[30px] w-[85px] ${mode === "login" ? "bg-[#FF6B00] text-white" : "text-[#6F6A6A]"
                                    }`}
                            >
                                Login
                            </button>

                            <button
                                type="button"
                                onClick={() => setMode("register")}
                                className={`text-sm rounded-sm h-[30px] w-[85px] ${mode === "register" ? "bg-[#FF6B00] text-white" : "text-[#6F6A6A]"
                                    }`}
                            >
                                Register
                            </button>

                        </div>
                        {mode === "register" && (
                            <input
                                type='text'
                                placeholder='Full Name'
                                className='w-[350px] h-[40px] pl-3 text-sm rounded-sm border border-[#E6E6E6]'
                            />
                        )}
                        <input type='email' placeholder='Email' className='w-[350px] h-[40px] pl-3 text-sm rounded-sm border border-[#E6E6E6]' />
                        <input type='password' placeholder='Password' className='w-[350px] h-[40px] pl-3 text-sm rounded-sm border border-[#E6E6E6]' />
                        {mode === "register" && (
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                className='w-[350px] h-[40px] pl-3 text-sm rounded-sm border border-[#E6E6E6]'
                            />
                        )}
                    </div>
                    {mode === "login" && (
                        <div className='flex items-center justify-end gap-[6px] text-[#4F4F4F] text-sm'>
                            <input type='checkbox' />
                            <p>Remember me</p>
                        </div>
                    )}
                    <button
                        type="submit"
                        className='flex items-center justify-center gap-2 text-[#FFFFFF] text-sm w-[350px] h-[40px] bg-[#FF6B00] rounded-sm border border-[#E6E6E6]'
                    >
                        {mode === "login" ? "Log     in" : "Create Account"}
                    </button>
                    <p className='text-sm text-[#6F6A6A] flex justify-center pt-5'>
                        Are you a member? <span className='text-[#FF6B00] cursor-pointer'>Log in</span>
                    </p>
                </div>
            </div>
            <div className='w-[50%] h-[100vh] relative'>
                <Image src="/Frame 2147258778.png" alt="user" fill className='object-cover' />
            </div>
        </div>
    )
}