import { ArrowUpRight, BookCheck, Bookmark, ChevronDown, ChevronUp, ListPlus, PanelRight, PersonStanding, Plus, Shapes, SquareArrowOutUpRight, Users } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export const DetailsDesh = ({toggleTab}) => {
   const [isLinksOpen, setIsLinksOpen] = useState(true);
    const [isUserDataOpen, setIsUserDataOpen] = useState(false);
    const [isConversationAttributesOpen, setIsConversationAttributesOpen] = useState(false);
    const [isCompanyDetailsOpen, setIsCompanyDetailsOpen] = useState(false);
    const [isSalesforceOpen, setIsSalesforceOpen] = useState(false);
    const [isStripeOpen, setIsStripeOpen] = useState(false);
    const [isJiraOpen, setIsJiraOpen] = useState(false);
  return (
   <>
    <div className="  mt-[2px] border-l   ">
        {/* Header with tabs and timestamp */}
        <div className="flex flex-col">

          {/* Tabs */}
          <div className="flex border-b border-purple-200 ">
            <button onClick={()=> toggleTab('AiCopilotDesh')}
            className="flex-1 py-3 text-sm font-medium text-gray-500  hover:text-gray-700">
              Copilot
            </button>
            <button className={`flex-1 py-3 text-sm font-medium text-blue-700 border-b-2  border-blue-700
              bottom-0 transition-all duration-300 ease-in-out `}>
              Details
            </button>
            <button className="p-1 text-black hover:text-gray-700">
                <SquareArrowOutUpRight icon="chevron-down w-2 h-3  "/>            
            </button>
            <button className="p-1 text-black hover:text-gray-700 ">
               <Link to='/overview'><PanelRight icon="chevron-down w-3 h-3  "/></Link>    
            </button>
          </div>
        </div>

        {/* Main content area */}
        <div className="">
          {/* Assignee Section */}
          <div className="mb-3 font-bold p-2">
            <p className=" md:text-sm text-xs font-medium text-gray-500 uppercase  mx-3 ">Assignee</p>
            <div className="flex items-center mt-2">
               
             
              <div className="w-5 h-5 bg-gray-200 rounded-full mr-2">
                 <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center ">
               {<PersonStanding className='w-4 h-4 text-gray-600 '/>}
              </div>
              </div>
              <p className=" text-xs text-gray-700">Brian Byrne</p>
            </div>
            <div className="flex items-center mt-2">
              <div className="w-5 h-5 bg-gray-200 rounded-full mr-2 flex items-center justify-center">
                {<Users className='w-4 h-4 text-gray-600 '/>}
              </div>
              <p className=" text-xs text-gray-700">Unassigned</p>
            </div>
          </div>

          {/* Links Section */}
          <div className="mb-2 font-bold p-2 ">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsLinksOpen(!isLinksOpen)}
            >
              <p className="text-xs font-medium text-gray-500 uppercase">Links</p>
              {<ChevronUp className={`w-4 h-4  text-gray-500 transform ${isLinksOpen ? 'rotate-180' : ''}`}> /</ChevronUp>}
            </div>
            {isLinksOpen && (
              <div className="mt-1">
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">
                    {<ListPlus className='w-4 h-4 text-gray-600 mr-2' />}
                    <p className="md:text-sm text-xs text-gray-700">Tracker ticket</p>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">
                    {<Plus className='w-4 h-4 text-gray-600 mr-2' />}
                  </button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">

                    {<BookCheck className='w-4 h-4 text-gray-600 mr-2' />}
                    <p className="md:text-sm text-xs text-gray-700">Back-office tickets</p>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">

                    {<Plus className='w-4 h-4 text-gray-600 mr-2' />}
                  </button>
                </div>
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center">

                    {<ArrowUpRight className='w-4 h-4 text-gray-600 mr-2' />}
                    <p className="md:text-sm text-xs text-gray-700">Side conversations</p>
                  </div>
                  <button className="text-gray-500 hover:text-gray-700">

                    {<Plus className='w-4 h-4 text-gray-600 mr-2' />}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* User Data Section */}
          <div className="mb-2 border-t border-gray-200 py-2  ">
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={() => setIsUserDataOpen(!isUserDataOpen)}
            >
              <p className="md:text-sm text-xs  text-gray-700 uppercase font-bold  mx-2">User Data</p>
              {<ChevronDown className={`w-4 h-4  mx-3 text-gray-500 transform ${isUserDataOpen ? 'rotate-180' : ''}`}> /</ChevronDown>}
            </div>
          </div>

          {/* Conversation Attributes Section */}
          <div className="mb-2  border-gray-200 py-2 border-t">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsConversationAttributesOpen(!isConversationAttributesOpen)}
            >
              <p className="md:text-sm text-xs font-bold text-gray-700 uppercase  mx-3">Conversation Attributes</p>

              {<ChevronUp className={`w-4 h-4  mx-3 text-gray-500 transform ${isConversationAttributesOpen ? 'rotate-180' : ''}`}> /</ChevronUp>}
            </div>
          </div>

          {/* Company Details Section */}
          <div className="mb-2  border-gray-200 py-2  border-t">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsCompanyDetailsOpen(!isCompanyDetailsOpen)}
            >
              <p className="md:text-sm text-xs  text-gray-700 uppercase font-bold  mx-3">Company Details</p>
              {<ChevronUp className={`w-4 h-4  mx-3 text-gray-500 transform ${isCompanyDetailsOpen ? 'rotate-180' : ''}`}> /</ChevronUp>}
            </div>
          </div>

          {/* Salesforce Section */}
          <div className="mb-2  border-gray-200 py-2 border-t">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsSalesforceOpen(!isSalesforceOpen)}
            >
              <p className="md:text-sm text-xs text-gray-700 uppercase font-bold  mx-3">Salesforce</p>
              {<ChevronUp className={`w-4 h-4  mx-3 text-gray-500 transform ${isSalesforceOpen ? 'rotate-180' : ''}`}> /</ChevronUp>}

            </div>
          </div>

          {/* Stripe Section */}
          <div className="mb-2  border-gray-200 py-2 border-t">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => setIsStripeOpen(!isStripeOpen)}
            >
              <p className="md:text-sm text-xs  text-gray-700 uppercase font-bold  mx-3">Stripe</p>

              {<ChevronUp className={`w-4 h-4  mx-3 text-gray-500 transform ${isStripeOpen ? 'rotate-180' : ''}`}> /</ChevronUp>}

            </div>
          </div>

          {/* Jira for Tickets Section */}
          <div className="mb-2  border-gray-200 py-2 border-t " >
            <div
              className="flex justify-between items-center cursor-pointer "
              onClick={() => setIsJiraOpen(!isJiraOpen)}
            >
              <p className="md:text-sm text-xs  text-gray-700 uppercase font-bold  mx-3">Jira for Tickets</p>

              {<ChevronUp className={`w-4 h-4  mx-3 text-gray-500 transform ${isJiraOpen ? 'rotate-180' : ''}`}> /</ChevronUp>}

            </div>
          </div>
        </div>

        {/* Bottom action bar */}
        <div className=' mt-12'>
          <div className='flex justify-between items-center'>
            <div className='flex justify-start' >
              <Shapes className='w-4 h-4 text-gray-600   ml-2 font-bold'/>
            <h3 className='text-gray-600 font-bold text-xs ml-[2px]'>Edit apps</h3>
            </div>
            <div className=' p-[11px] bg-blue-700 rounded-full mr-2 mb-[2px]'>
              <Bookmark className='w-4 h-4 text-white fill-white font-bold'/>
              
            </div>

          </div>



        </div>

      </div>
   </>
  )
}
