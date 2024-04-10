'use client'
import HomeCard from '@/components/HomeCard';
import React from 'react';
import { usePathname } from 'next/navigation'

type pageProps = {
    
};

const InsurancePage:React.FC<pageProps> = () => {
    const pathname = usePathname()
    
    return <main  className="flex h-screen flex-col items-center px-10 py-5 bg-white text-black w-full overflow-y-scroll">
        <HomeCard/>
    </main>
}
export default InsurancePage;