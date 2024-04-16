'use client'
import HomeCard from '@/components/HomeCard';
import Link from 'next/link';
import React from 'react';
import { FaChevronDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";

type pageProps = {
    
};

const DAOPage:React.FC<pageProps> = () => {
    
    return (
        <main className="flex h-screen flex-col px-10 py-5 bg-white text-black w-full overflow-y-scroll">
            <HomeCard/>
            <div className='flex items-center  w-full  text-white rounded-lg mt-5 lg:justify-around flex-wrap justify-between'>
                <div className='flex flex-col gap-2 bg-black p-6 rounded-lg'>
                    <h2 className='text-gray-400'>Total Proposals Created</h2>
                    <h4 className='font-bold'>645</h4>
                    <p><span className='font-bold text-2xl'>.</span> Last updated: 1 min ago</p>
                </div>
                {/* second */}
                <div className='flex flex-col gap-2 text-white bg-black rounded-lg p-6 border border-black'>
                    <h2 className='text-gray-400'>Approved Proposals</h2>
                    <h4 className='font-bold'>510</h4>
                    <p><span className='font-bold text-2xl'>.</span> Last updated: 1 min ago</p>
                </div>
                {/* third */}
                <div className='flex flex-col gap-2 bg-black rounded-lg p-6'>
                    <h2 className='text-gray-400'>Rejected Proposals</h2>
                    <h4 className='font-bold'>113</h4>
                    <p><span className='font-bold text-2xl'>.</span> Last updated: 1 min ago</p>
                </div>
                {/* fourth */}
                <div className='flex flex-col gap-2 bg-black rounded-lg p-6 border border-black text-white'>
                    <h2 className='text-gray-400'>My Proposals</h2>
                    <h4  className='font-bold'>10</h4>
                    <Link href='/dashboard' className=' text-center py-1 rounded-sm text-white border border-blue-500'>View</Link>
                </div>
            </div>
            <div className='w-full bg-gray-100 flex flex-col rounded-lg px-4 py-6 my-5'>
                <div className='flex items-center justify-between gap-6'>
                    <div className='flex items-center text-black bg-white p-2 rounded-sm gap-2 grow'>
                        <CiSearch className='font-bold text-lg'/>
                        <input placeholder='Search for a proposal' className='outline-none w-full' type='text'/>
                    </div>
                    
                    <div className='flex items-center gap-2'>
                        <p className='text-gray-400'>Filter</p>
                        <div className='flex items-center gap-2 border border-gray-700 px-2 rounded-lg'>Recent proposals <FaChevronDown/></div>
                    </div>
                    <div className='flex items-center gap-2'>
                        <p className='text-gray-400'>Sort</p>
                        <div className='flex items-center gap-2 border border-gray-700 px-2 rounded-lg'>Ascending <FaChevronDown/></div>
                    </div>
                    <button className='bg-blue-500 p-3 rounded-sm text-white'> + Create a Proposal</button>
                </div>
                <table className='w-full bg-white mt-5 border-gray-100 rounded-lg '>
                    <thead className='text-black '>
                        <tr className='p-4 bg-black text-white'>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Proposal</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Status</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Time Left</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Total Votes</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Votes for</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Votes against</th>
                            <th className='p-3 text-sm font-semibold tracking-wide text-left'>Votes</th>
                        </tr>
                    </thead>
                    <tbody className='font-semibold'>
                        <tr>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>Health Claim</td>
                          <td className='p-3 text-sm text-gray-700'>
                            <span className='bg-yellow-600 px-2 text-sm font-medium rounded-lg bg-opacity-50 tracking-wider text-yellow-800 '>Ongoing</span>
                          </td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>2hrs 16min</td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>10,002</td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>3,034</td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>1,345</td>
                          <td className='p-3 text-sm text-gray-700'>
                            <span className='flex items-center font-bold text-lg gap-3'>
                                <BiLike className='text-green-500'/>
                                <BiDislike className='text-red-500'/>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>MEV Attack Claim</td>
                          <td className='p-3 text-sm text-gray-700'>
                            <span className='bg-red-600 px-2 text-sm font-medium rounded-lg bg-opacity-50 tracking-wider text-red-800 '>Cancelled</span>
                          </td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>2hrs 16min</td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>10,002</td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>3,034</td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>1,345</td>
                          <td className='p-3 text-sm text-gray-700'>
                            <span className='flex items-center font-bold text-lg gap-3'>
                                <BiLike className='text-green-500'/>
                                <BiDislike className='text-red-500'/>
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>Auto Claim</td>
                          <td className='p-3 text-sm text-gray-700'>
                            <span className='bg-green-600 px-2 text-sm font-medium rounded-lg bg-opacity-50 tracking-wider text-green-800 '>Successful</span>
                          </td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>2hrs 16min</td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>10,002</td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>3,034</td>
                          <td className='p-3 text-xs text-gray-700 tracking-wider'>1,345</td>
                          <td className='p-3 text-sm text-gray-700'>
                            <span className='flex items-center font-bold text-lg gap-3'>
                                <BiLike className='text-green-500'/>
                                <BiDislike className='text-red-500'/>
                            </span>
                          </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}
export default DAOPage;