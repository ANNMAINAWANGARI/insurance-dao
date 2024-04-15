'use client'

import Footer from "@/components/Footer";
import HomeCard from "@/components/HomeCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center px-10 py-5 bg-white text-black w-full overflow-y-scroll">
      <HomeCard/>
      
      <div className="rounded-lg w-full  bg-cover bg-no-repeat bg-center mt-5 h-5/6 flex items-center justify-center  bg-[linear-gradient(to_right_bottom,rgba(29,32,39,0.7),rgba(3,7,16,0.9)),url('../public/climb.jpg')] tracking-wider" >
        <div className="flex flex-col items-center justify-center text-lg py-20 max-w-2xl mx-auto z-10 ">
          <p className='text-white font-bold tracking-tight flex-wrap lg:text-4xl text-3xl'>Be Inspired but be <span className="text-blue-600">Insured</span>. Buy Insurance In a Smart way with One Click.</p>
          <span className='text-gray-400 pt-3'>We offer you full insurance coverage for you, your loved ones, your business and property.</span>
          <button className="px-4 py-2 rounded-lg border border-blue-600 bg-black text-white tracking-wider">Start now</button>
        </div>
      </div>

      <div className="flex w-full items-center justify-center mt-5   flex-col">
        <h2 className="font-bold tracking-wider text-2xl">Choose a Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-5 gap-5">
          <div className="border-2 border-blue-500 flex flex-col rounded-lg p-4 ">
            <div className="flex flex-col gap-3">
              <p className="text-lg tracking-tighter font-bold">7XTZ <span className="text-gray-600 text-sm font-light">/month</span></p>
              <p className="font-bold">Basic</p>
              <p className="text-gray-500 tracking-tighter underline underline-offset-4 decoration-blue-300">For low budget individual accounts</p>
            </div>
            <div className="flex flex-col gap-3 mt-2 mb-2">
              <p className="font-bold">Low premium</p>
              <p className="font-bold">Customer support</p>
              <p className="text-gray-300">Incentive eligible</p>
              <p className="text-gray-300">Risk Mitigation Services</p>
              <p className="text-gray-300">Comprehensive Coverage</p>
              <p className="text-gray-300">Exclusive Benefits</p>
              <p className="text-gray-300">Can become stakeholder</p>
              <p className="text-gray-300">Legal Assistance</p>
            </div>
            <button className="bg-transparent border border-blue-600 px-8 py-2 rounded-full">Get Started</button>
          </div>
    
          {/**second */}
          <div className="border-2 border-blue-500 flex flex-col rounded-lg p-4 bg-blue-00 ">
            <div className="flex flex-col gap-3">
              <p className="text-lg tracking-tighter font-bold">40XTZ <span className="text-gray-600 text-sm font-light">/month</span></p>
              <p className="font-bold">Enterprise</p>
              <p className="text-gray-500 tracking-tighter underline underline-offset-4 decoration-blue-300">For enterprise budget individual accounts</p>
            </div>
            <div className="flex flex-col gap-3 mt-2 mb-2">
              <p className="font-bold">Low premium</p>
              <p className="font-bold">Customer support</p>
              <p className="font-bold" >Incentive eligible</p>
              <p className="font-bold">Risk Mitigation Services</p>
              <p className="text-gray-300">Comprehensive Coverage</p>
              <p className="text-gray-300">Exclusive Benefits</p>
              <p className="text-gray-300">Can become stakeholder</p>
              <p className="text-gray-300">Legal Assistance</p>
            </div>
            <button className="bg-blue-600 text-white border border-blue-600 px-8 py-2 rounded-full">Get Started</button>
          </div>
          {/**second */}
          {/**third */}
          <div className="border-2 border-blue-500 flex flex-col rounded-lg p-4 ">
            <div className="flex flex-col gap-3">
              <p className="text-lg tracking-tighter font-bold">100XTZ <span className="text-gray-600 text-sm font-light">/month</span></p>
              <p className="font-bold">Premium</p>
              <p className="text-gray-500 tracking-tighter underline underline-offset-4 decoration-blue-300">For premium budget individual accounts</p>
            </div>
            <div className="flex flex-col gap-3 mt-2 mb-2">
              <p className="font-bold">Low premium</p>
              <p className="font-bold">Customer support</p>
              <p className="font-bold">Incentive eligible</p>
              <p className="font-bold">Risk Mitigation Services</p>
              <p className="font-bold">Comprehensive Coverage</p>
              <p className="font-bold">Exclusive Benefits</p>
              <p className="font-bold">Can become stakeholder</p>
              <p className="font-bold">Legal Assistance</p>
            </div>
            <button className="bg-transparent border border-blue-600 px-8 py-2 rounded-full">Get Started</button>
          </div>
          {/**third */}
        </div>
      </div>
      <Footer/>
      

      

     
    </main>
  );
}
