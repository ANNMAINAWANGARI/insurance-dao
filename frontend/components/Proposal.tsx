'use client'
import React from 'react';

type ProposalProps = {
    
};

const Proposal:React.FC<ProposalProps> = () => {
    
    return <div className='flex flex-col border rounded-lg border-blue-500 p-3'>
        <div className='flex items-center justify-between'>
            <div className='flex flex-col tracking-tighter gap-1'>
                <h2>Defi Claim Proposal</h2>
                <h1 className='font-bold text-lg'>Proposal to fund 200XTZ</h1>
                <p className='text-gray-400'>Proposer<span className='text-black'> chris</span></p>
            </div>
            <div className='border border-blue-500 rounded-lg px-2'>5d 9h 55m left</div>
        </div>
        <div className='flex items-center justify-between mt-8'>
            <div className='flex flex-col gap-1 basis-4/5'>
                <h1 className='font-bold tracking-tighter'>Description</h1>
                <p className='text-gray-400'>Claiming 100XTZ for a medical emergency.</p>
            </div>
            <div className='flex flex-col gap-3  basis-1/5'>
                <div className='flex flex-col'>
                    <h1>Yes: 5K votes</h1>
                    <div className='w-full bg-gray-300 rounded-full h-4'>
                        <div className='h-full bg-blue-500 rounded-full' style={{width:'60%'}}></div>
                    </div>
                </div>
                <div className='flex flex-col'>
                <h1>Yes: 5K votes</h1>
                    <div className='w-full bg-gray-300 rounded-full h-4'>
                        <div className='h-full bg-red-500 rounded-full' style={{width:'40%'}}></div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex items-center'></div>
    </div>
}
export default Proposal;