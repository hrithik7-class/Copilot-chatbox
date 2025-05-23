import React from 'react'
import { ArrowUp, PanelLeft } from 'lucide-react';
import { Link } from 'react-router-dom';


export const AiCopilotDesh = ({toggleTab}) => {
  return (
   <>
      <div className=' relative
        mx-auto mt-[3px]   bg-gradient-to-b from-[#fdfdff] via-[#e0dee5]  to-[#ebc9d5] mb-0   border-purple-200'>
        {/* header content */}
        <div className="flex border-b border-gray-400">
          <button className={`flex-1 py-3 md:text-sm text-xs font-medium text-blue-600 border-b-2
             border-blue-600 relative bottom-0 transition-all duration-300 ease-in-out `}>
            AI Copilot
          </button>
          <button onClick={()=>toggleTab('details')}
           className="flex-1 py-3 md:text-sm text-xs font-medium text-gray-500 hover:text-gray-700">
            Details
          </button>
          <button className="p-3 text-black hover:text-gray-700">
           <Link to='/overview'> <PanelLeft icon="chevron-down w-3 h-3  size-4"   /> </Link>
          </button>
        </div>
        {/* main content */}
        <div className='flex flex-col h-96 items-center justify-center my-auto'>
          <div className="p-2">
            <img src='/logo.png' alt='AI Copilot ' className='size-6' />
          </div>

          {/* Greeting message */}
          <h1 className="text-xl font-semibold text-gray-800">Hi, I'm Fin AI Copilot</h1>
          <p className="text-sm text-gray-500 ">
            Ask me anything about this conversation.
          </p>
        </div>

        <div className=' p-2 relative  '>
          <p className='lg:text-sm sm:text-[11px] text-[9px] mt-[59px] text-gray-500 p-2 bg-gray-100 rounded-md w-1/2 text-center 
            font-medium mb-14'><span className='font-semibold text-black'>
              Suggested </span> 💸 How do I get a refund?</p>
          <div className='flex items-center justify-center'>
            <input type="text" className='p-2 bg-gray-100  rounded-md w-full  font-medium  ' placeholder='Ask me question...' />
            <ArrowUp className='absolute right-5 bottom-4 text-gray-500 hover:cursor-pointer' />
          </div>
        </div>

      </div>
   
   </>
  )
}
