import React from 'react';

type FooterProps = {
    
};

const Footer:React.FC<FooterProps> = () => {
    
    return <div className='flex items-center bg-black flex-col py-10 w-full rounded-lg mt-5'>
        <h1 className='text-blue-600 font-bold text-2xl pb-5'>Subscribe for newsletter, offers and articles</h1>
        <p className='text-gray-500 pb-5'>We offer health, auto and trade insurance. Please check out the insurance page to know more and begin your journey with us.</p>
        <div className='flex gap-2'>
            <input type='email' placeholder='Email Address' className='rounded px-4 py-2'/>
            <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>Sign up here</button>
        </div>
    </div>
}

export default Footer;