'use client'
import React from 'react';
import {openModal,closeModal} from '../../redux/features/modal/logInModalSlice';
import { useAppSelector, useAppDispatch } from '../../app/hooks'

type LoginModalProps = {
    
};

const LoginModal:React.FC<LoginModalProps> = () => {
    const dispatch = useAppDispatch()
    
    return (
        <div className='z-10 bg-white absolute flex flex-col p-4 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg'>
            <div className='flex justify-end mb-5'><button className='rounded-full bg-black text-white px-2 cursor-pointer' onClick={()=>dispatch(closeModal())}>X</button></div>
            
           <form className='flex flex-col gap-2'>
               <h4 className='text-center tracking-tight font-bold text-lg'>Signup</h4>
               <input placeholder='username' type='text' className='rounded-sm border border-gray-200 p-2'/>
               <input placeholder='password' type='password' className='rounded-sm border border-gray-200 p-2'/>
               <button type='submit' className='p-2 bg-blue-500 text-white rounded-lg px-2 py-2'>Submit</button>
           </form>
           
        </div>
        
    )
}
export default LoginModal;