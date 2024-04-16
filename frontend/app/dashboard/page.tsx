'use client'
import HomeCard from '@/components/HomeCard';
import Proposal from '@/components/Proposal';
import React from 'react';
import { CiShare2 } from "react-icons/ci";

type pageProps = {
    
};

const DashboardPage:React.FC<pageProps> = () => {
    const [dashboardFetch,setDashboardFetch] = React.useState<string>('Proposals')
    
    return (
        <main className="flex  flex-col px-10 py-5 text-black w-full ">
            {/* <div className='w-full relative bg-black h-40 rounded-lg'>
                <div className='absolute rounded-full left-6 top-2 border border-blue-400 h-24 w-24'></div>
                <CiShare2 className='absolute top-2 right-2 text-white text-2xl' />
            </div> */}
            <div className='flex items-center gap-10 w-full justify-center  text-lg'>
                <p className={`cursor-pointer ${dashboardFetch ==='Proposals' ?'text-blue-500 font-bold tracking-tighter':'text-black'}`} onClick={()=>setDashboardFetch('Proposals')}>My Proposals</p>
                <p className={`cursor-pointer ${dashboardFetch ==='Claims' ?'text-blue-500 font-bold tracking-tighter':'text-black'}`} onClick={()=>setDashboardFetch('Claims')}>My Claims</p>
                <p className={`cursor-pointer ${dashboardFetch ==='Fund' ?'text-blue-500 font-bold tracking-tighter':'text-black'}`} onClick={()=>setDashboardFetch('Fund')}>Fund-DAO</p>
            </div>
            <div className='flex flex-col gap-3'>
                <Proposal/>
                <Proposal/>
                <Proposal/>
            </div>
            
        </main>
    )
}
export default DashboardPage;