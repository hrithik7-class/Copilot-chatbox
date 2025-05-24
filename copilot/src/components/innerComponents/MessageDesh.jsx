import React, { useRef, useEffect, useState } from 'react';
import { Star, Phone, MoonStar, HardDriveDownload, Ellipsis, ScrollText, UserCircle2, ChevronDown, MessageSquareText, Zap, Bookmark, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';


export const MessageDesh = () => {
    const chatContainerRef = useRef(null);
    const [fill ,SetFill]=useState(false)
    const [snoose ,SetSnoose]=useState(false)
    
      // Sample messages array
      const messages = [
        { type: 'robot', content: 'Hello, Nikola! How can I assist you today?', time: '25m' },
        { type: 'user', content: 'I have an issue with my recent purchase.', time: '24m' },
        { type: 'robot', content: 'Thanks, passing you to the right team now.', time: '22m' },
        {
          type: 'robot',
          content: (
            <>
              <p>Let me just look into this for you, Nikola.</p>
              <p className="mt-2">
                We understand if your purchase didn’t quite meet your expectations. To help you with a refund, please provide your order ID and proof of purchase.
              </p>
              <p className="mt-2 font-semibold">Just a heads-up:</p>
              <ul className="list-disc pl-4">
                <li>We can only refund orders from the last 60 days.</li>
                <li>Your item must meet our return condition requirements.</li>
              </ul>
              <p className="mt-2">
                Once confirmed, I’ll send you a returns QR code for easy processing.
              </p>
              <p className="mt-2 font-semibold">Thanks for your cooperation!</p>
            </>
          ),
          time: '21m',
          seen: true,
        },
        { type: 'user', content: 'I placed the order over 60 days ago 😢. Could you make an exception, please?', time: '21m' },
        { type: 'robot', content: 'This customer has been waiting for 5 minutes.', time: '16m', isWarning: true },
        { type: 'user', content: 'Please let me know if you can help with the refund.', time: '15m' },
        { type: 'robot', content: 'I’m checking with the team, please hold on a moment.', time: '14m' },
        { type: 'user', content: 'Okay, thank you for checking.', time: '13m' },
        { type: 'robot', content: 'Still working on it, I’ll update you soon!', time: '12m' },
        { type: 'user', content: 'Okay!', time: '12m' },
      ];
    
      // Auto-scroll to the bottom when messages change
      useEffect(() => {
        if (chatContainerRef.current) {
          chatContainerRef.current.scrollTo({
            top: chatContainerRef.current.scrollHeight,
            behavior: 'smooth',
          });
        }
      }, [messages]);
   

      const click = () => {
        SetFill(!fill)
        
  
      }
       const clicks = () => {
        SetSnoose(!snoose)
  
      }
  return (
    <>
     <div className="   bg-white   border-purple-200">
        {/* Navbar Section */}
        <div className="flex items-center justify-between border-b border-purple-200 w-full p-2">
          <div className="md:text-md text-xs font-bold  md:ml-4 ml-1">NikolaTesla</div>
          <div className="flex items-center md:gap-2 md:pr-2 gap-1 pr-1 ">
            <div className="p-1 cursor-pointer size-xs">
              <Star onClick={click} className="md:size-5  sixe-3 transition-colors duration-200 "
              fill={fill ? "#c4c6f6" : "none"} color={fill? '#c4c6f6': "#000000"} />
            </div>
            <div className="bg-[#d8d9f4] p-2 rounded-md cursor-pointer">
              <Ellipsis className="size-3" />
            </div>
            <div className="bg-[#d8d9f4] p-2 rounded-md cursor-pointer text-xs">
             <Link to='/overview'> <ScrollText className="size-3" /> </Link> 
            </div>
            <div className="flex justify-center items-center bg-[#d8d9f4] p-2 rounded-md gap-1 cursor-pointer">
              <Phone className="size-3" />
              <span className="font-semibold text-xs">call</span>
            </div>
            <div onClick={clicks} className={`bg-[#d8d9f4] p-2 rounded-md flex justify-center items-center gap-1 cursor-pointer
               ${snoose ? 'bg-black && text-[#c4c6f6]'  : 'bg-[#d8d9f4] && text-black'} transition-colors  duration-300 `}>
              <MoonStar onClick={clicks} className="size-3  "
               fill={snoose ? "#c4c6f6" : "none"} color={snoose? '#c4c6f6': "#000000"}/>
              <span className="font-semibold text-xs">Snooze</span>
            </div>
            <div className="text-[#d8d9f4] p-2 rounded-md bg-black flex justify-center items-center gap-1 cursor-pointer">
              <HardDriveDownload className="size-3" />
              <span className="font-semibold text-xs">Close</span>
            </div>
          </div>
        </div>


        {/* Chat Section */}
        <div ref={chatContainerRef} className="p-4 space-y-4 h-[480px] overflow-y-auto scroll-smooth scrollbar-hide relative">
          {messages.map((message, index) => (
            <div key={index} className={`flex ${message.type === 'user' ? 'justify-start' : 'justify-end'}`}>
              {message.type === 'user' && (
                <div className="flex flex-col items-center mr-2">
                  <UserCircle2 className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-gray-500 mt-1">{message.time}</span>
                </div>
              )}
              <div
                className={`rounded-lg p-3 max-w-xs ${message.isWarning
                    ? 'bg-yellow-100 text-black'
                    : message.type === 'user'
                      ? 'bg-green-100 text-black'
                      : 'bg-gray-300 text-black'
                  }`}
              >
                {typeof message.content === 'string' ? <p>{message.content}</p> : message.content}
              </div>
              {message.type === 'robot' && (
                <div className="ml-2 flex flex-col items-center">
                  <img src='logo.png' className="w-4 h-4 text-gray-600 " />
                  <span className="text-xs text-gray-500 mt-1">{message.time}</span>
                  {message.seen && <span className="text-xs text-gray-500">Seen</span>}
                </div>
              )}
            </div>
          ))}
        </div>
        {/* CHatting message bar */}
        <div className="bg-white p-4  shadow-2xl  rounded-lg  ml-3 max-w-full  bottom-[65px]  ">
          <div className='flex items-center justify-start gap-1 '>
            <MessageSquareText className='size-4 font-semibold  ' />
            <h3 className='text-sm font-semibold'>Chat</h3>
            <ChevronDown className='size-4 font-semibold' />
          </div>
          <input className='text-xs text-black mt-1  h-6 p-2 font-semibold w-full
           outline-none focus:ring-0' type='text' placeholder='Use XK for Shortcuts'/>
          <div className='flex items-center justify-start mt-4 gap-[4px]'>
            <Zap className='size-4 fill-black font-semibold ' />
            <span className='text-gray-200 text-sm mb-1'>|</span>
            <Bookmark className='size-4 fill-black font-semibold ' />
            <Smile className='size-4 ml-3 font-semibold ' />
            <span className='w-2/3 h-4 p-2 ml-2  outline-none focus:ring-0' />
            <div className='flex items-center justify-start hover:bg-black p-1 rounded-xl hover:text-white  '>
              <h3 className='text-sm font-semibold text-gray-400 ml-3 cursor-pointer hover:text-white ' >Send</h3>
              <span className='text-gray-200 text-sm mb-[2px] ml-1 hover:text-white '>|</span>
              <ChevronDown className='size-4 text-gray-700 ml-1 font-semibold hover:text-white ' />
            </div>
          </div>
        </div>
      </div>
    
    </>

  )
}
