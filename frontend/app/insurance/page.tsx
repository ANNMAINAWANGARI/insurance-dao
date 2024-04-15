'use client'
import HomeCard from '@/components/HomeCard';
import React from 'react';
import { usePathname } from 'next/navigation'
import Image from 'next/image';
import People from '../../public/people.png';
import Car from '../../public/car.webp'
import Ins_Body from '../../public/ins_body.png';
import Ins_Buis from '../../public/ins_buis.png';
import Ins_Car from '../../public/ins_car.png';
import Ins_Heart from '../../public/ins_heart.png';
import Footer from '@/components/Footer';
type pageProps = {
    
};

const InsurancePage:React.FC<pageProps> = () => {
    const pathname = usePathname()
    
    return <main  className="flex h-screen flex-col items-center px-10 py-5 bg-white text-black w-full overflow-y-scroll">
        <HomeCard/>
        <div className='flex w-full bg-blue-600 mt-5 p-4 justify-center rounded-lg '>
         <div className='flex flex-col gap-3 text-white lg:pt-10'>
            <h2 className='font-bold text-lg'>Insurance made easy</h2>
            <h1 className='text-4xl tracking-tight font-bold'>Get the easiest Insurance Today</h1>
            <button className='bg-black rounded-lg p-2 w-48'>My Dashboard</button>
         </div>
         <div className=''>
         <Image src={People} alt='People'/>
         </div>
         
        </div>
        <div className='flex w-full p-4  rounded-lg mt-5 flex-col'>
            <div className='flex items-center justify-between tracking-tight w-full font-bold mb-5'>
                <h3 className='text-lg '>Leave the insurance to us.</h3>
                <p className='text-blue-500 cursor-pointer'>See all</p>
            </div>
            <div className='w-full items-center justify-center flex'>
            <div className='grid grid-cols-2  gap-3 w-1/2'>
                <div className='flex items-center p-3 bg-pink-200 rounded-lg '>
                    <div>
                     <Image src={Ins_Car} alt='Auto' />
                    </div>
                    <div className='flex flex-col tracking-tight'>
                        <span className='font-bold'>Car</span>
                        <span>Insurance</span>
                    </div>
                </div>
                <div className='flex items-center p-3 bg-blue-200 rounded-lg'>
                    <div>
                     <Image src={Ins_Heart} alt='Auto' />
                    </div>
                    
                    <div className='flex flex-col tracking-tight'>
                        <span className='font-bold'>Health</span>
                        <span>Insurance</span>
                    </div>
                </div>
                <div className='flex items-center p-3 bg-green-200 rounded-lg'>
                    <div>
                     <Image src={Ins_Buis} alt='Auto' />
                    </div>
                    <div className='flex flex-col tracking-tight'>
                        <span className='font-bold'>Trade</span>
                        <span>Insurance</span>
                    </div>
                </div>
                <div className='flex items-center p-3 bg-gray-300 rounded-lg '>
                    <div>
                     <Image src={Ins_Body} alt='Auto' />
                    </div>
                    <div className='flex flex-col tracking-tight'>
                        <span className='font-bold'>Life</span>
                        <span>Insurance</span>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
    </main>
}
export default InsurancePage;