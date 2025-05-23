import { MessageDetailsDesh } from '../components/innerComponents/MessageDetailsDesh';
import { MessageDesh } from '../components/innerComponents/MessageDesh';
import { DetailsDesh } from '../components/innerComponents/DetailsDesh';
import { useState } from 'react';
import { AiCopilotDesh } from '../components/innerComponents/AiCopilotDesh';

export const Deshboard = () => {
  
  const [show, setShow] = useState('AiCopilotDesh');

const toggleTab=(toggleTab)=>{
  setShow(toggleTab);
}

  return (
    <div className="min-h-screen  bg-[#c4c6f6]   flex items-center mx-auto justify-center "> 
      <div className='bg-white w-[1280px] mx-auto flex pt-3 pl-2 rounded-r-md rounded-l '>

        {/* Left Section (25%) - Inbox Sidebar */}
        <div className='lg:w-[25%] md:w-[35%] hidden sm:block  min-h-full ' >
          <MessageDetailsDesh  />
        </div>

         {/* Middle Section (45%) - Chat Area */}
        <div className='lg:w-[45%] sm:w-[65%]  w-[100%]  min-h-full'>
          <MessageDesh/>
        </div>
        
        {/* right Section (30%) - Chat Area */}
        <div className='lg:w-[30%]  hidden lg:block min-h-full   '>
        {/* <AiCopilotDesh/> */}
        {show === 'AiCopilotDesh'? (<AiCopilotDesh   toggleTab={toggleTab} />):(<DetailsDesh     toggleTab={toggleTab} />)}

        </div>

      </div>
    </div>
  );
};
