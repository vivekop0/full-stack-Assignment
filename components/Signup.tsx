// pages/signup.tsx
"use client"
import React from 'react';
import Image from 'next/image';
import bgImage from '../public/bg.jpeg'
import logo from '../public/icons8-g-100.png'
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { signInWithPopup } from 'firebase/auth';
import { auth, googleAuthProvider } from '@/services/firebase';
import { error } from 'console';

export default function Signup(): JSX.Element {

    const router =useRouter();

    const handleSigninGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, googleAuthProvider);
            console.log(result);
            localStorage.setItem('user', JSON.stringify(result.user));
            // Optionally redirect the user after successful login
            router.push("/dashboard");
        } catch (error) {
            console.error("Authentication Error:", error);
            // Optionally set an error state to display or handle it as needed
        }
    };
    
    return (
        <div className="lg:flex bg-slate-900 w-full min-h-screen">



<div className="relative w-full md:w-1/2 min-h-80">
    <Image
        src={bgImage}
        alt="Decorative background"
        layout="fill"
        objectFit="cover"
        priority
    />
</div>


          
           {/* Signup form section */}
               <div className="w-full md:w-1/2  text-white text-center">



                <div className=''>
                    <div className="md:pt-8 mt-10">

                        <div className='text-center'>
                           <div className='flex justify-center  mb-3'>
                            <Image
                            src={logo}
                           width={30}
                           alt='logo'
                            />

                            
                           </div>
                            <p className='text-sm '>journey to a trillion miles starts from here!!</p>

                        </div>
                        choose a method

                    </div>
                    <div className='flex flex-col justify-center items-center lg:mt-20 px-4'>

                        <div className='block'>

                            <div className='mb-1 mt-2'>
                                <button onClick={handleSigninGoogle} type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-16 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                    Signup with Gmail
                                </button>

                            </div>


                            <button onClick={()=>router.push("/login")} type="button" className="text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-16 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2">
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
                                    <path fill="#4caf50" d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"></path><path fill="#1e88e5" d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"></path><polygon fill="#e53935" points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"></polygon><path fill="#c62828" d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"></path><path fill="#fbc02d" d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"></path>
                                </svg>
                                Signup with Email
                            </button>

                        </div>
                     
                    </div>
                </div>
                <div className='mt-5'>
                <span className="text-sm text-gray-600">Dont have an account?  
                        <Link href={"/signupage"}><span className="text-blue-500 font-semibold text-md" > Register Here</span></Link>
                    </span>
                </div>
                


            </div>
        </div>
    );
}





