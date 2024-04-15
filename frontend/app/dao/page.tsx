'use client'
import HomeCard from '@/components/HomeCard';
import React from 'react';

type pageProps = {
    
};

const DAOPage:React.FC<pageProps> = () => {
    
    return (
        <main className="flex h-screen flex-col items-center px-10 py-5 bg-white text-black w-full overflow-y-scroll">
            <HomeCard/>
        </main>
    )
}
export default DAOPage;