'use client'
import Link from 'next/link';
import React, { useState } from 'react';
import { usePathname } from 'next/navigation'
import { useAppSelector, useAppDispatch } from '../app/hooks'
import {openModal,closeModal} from '../redux/features/modal/logInModalSlice'
import {login,logout,loggedInStatus} from '../redux/features/login/loggedInSlice'


type HomeCardProps = {
    
};


const HomeCard:React.FC<HomeCardProps> = () => {
  const loggedIn = useAppSelector((state) => state.loggedIn.loggedIn)
  const logInModalState = useAppSelector((state)=>state.logInModalState.logInModalState)

  const dispatch = useAppDispatch()
  const pathname = usePathname()
 
  
    
    return (
        <div className='w-full flex flex-col'>
          <div className='bg-black w-full p-4 rounded-lg text-white'>
            <header className='flex items-center justify-between'>
                <ul className='flex items-center justify-between gap-5 font-bold tracking-wider'>
                    
                    <Link className= {` cursor-pointer hover:underline-offset-8 hover:underline hover:decoration-white hover:text-blue-600 ${pathname === '/' ? 'underline decoration-white text-blue-600 decoration-2 underline-offset-8':''}`} href='/'>Home</Link>
                    <Link className= {` cursor-pointer hover:underline-offset-8 hover:underline hover:decoration-white hover:text-blue-600 ${pathname === '/insurance' ? 'underline decoration-white text-blue-600 decoration-2 underline-offset-8':''}`} href='/insurance'>Insurance</Link>
                    <Link className= {` cursor-pointer hover:underline-offset-8 hover:underline hover:decoration-white hover:text-blue-600 ${pathname === '/dao' ? 'underline decoration-white text-blue-600 decoration-2 underline-offset-8':''}`} href='/dao'>DAO</Link>
                    <Link className= {` cursor-pointer hover:underline-offset-8 hover:underline hover:decoration-white hover:text-blue-600 ${pathname === '/dashboard' ? 'underline decoration-white text-blue-600 decoration-2 underline-offset-8':''}`} href='/dashboard'>Dashboard</Link>
                </ul>
                <div className='font-bold'>
                  <Link href='/'>InsuranceDAO</Link>
                </div>
                <button className='bg-blue-600 rounded p-2 text-white text-sm' onClick={()=>dispatch(openModal())}>Signup</button>
            </header>
          </div>
          

        </div>
    )
}
export default HomeCard;