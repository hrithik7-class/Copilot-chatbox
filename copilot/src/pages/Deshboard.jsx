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



//max-w-6xl mx-auto flex flex-wrap items-center justify-between p-4 h-20

  return (
    <div className=" relative bg-white  "> 
      <div className=' flex  '>

        {/* Left Section (25%) - Inbox Sidebar */}
        <div className='lg:w-[25%] md:w-[35%] hidden sm:block  min-h-full ' >
          <MessageDetailsDesh  />
        </div>

         {/* Middle Section (45%) - Chat Area */}
        <div className='lg:w-[45%] sm:w-[65%]  w-full  min-h-full'>
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
