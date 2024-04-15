"use client"
import HomeCard from "@/components/HomeCard";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { usePathname } from 'next/navigation'


const inter = Inter({ subsets: ["latin"] });


export default function Layout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const pathname = usePathname()
    return (
    <>
      <div className="m-5"><HomeCard/></div>
      
      <div className="flex m-5">
        <div className=' lg:flex-col  lg:h-screen lg:pr-20 lg:p-7 bg-blue-500 rounded-tr-lg text-white hidden lg:flex md:hidden'>
            <ul className='mt-5 flex flex-col gap-8'>
                <li className={`flex gap-2 items-center ${pathname === '/dashboard' ?'text-white bg-black rounded py-2 px-4 font-semibold':'text-black text-md'}`}><Link href='/dashboard' className=''>Dashboard</Link></li>
            </ul>
            <ul className='mt-5 flex flex-col gap-8'>
                <li className={`flex gap-2 items-center ${pathname === '/dashboard/analytics' ?'text-white bg-black rounded py-2 px-4 font-semibold':'text-black text-md'}`}><Link href='/dashboard/analytics' className=''>Analytics</Link></li>
            </ul>
            <ul className='mt-5 flex flex-col gap-8'>
                <li className={`flex gap-2 items-center ${pathname === '/logout' ?'text-white bg-black rounded py-2 px-4 font-semibold':'text-black text-md'}`}><Link href='/logout' className=''>Logout</Link></li>
            </ul>
        </div>
        <div>{children}</div>
      </div>
    </>
    );
  }