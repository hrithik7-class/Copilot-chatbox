import  { useState } from 'react';
import {  Bug, ChevronDown, LayoutList, List, Star  } from 'lucide-react';

export const MessageDetailsDesh = () => {


    
  const [selectedItem, setSelectedItem] = useState(null);

    // Sample inbox data
  const inboxItems = [
    {
      id: 1,
      sender: 'Nicola Tesla • Github',
      message: 'Hey! I have a question...',
      time: '45m',
      icon: 'N',
      iconColor: 'bg-blue-500',
      isIconImage: false,
    },
    {
      id: 2,
      sender: 'Ivan • Nike',
      message: 'Hi there, I have a q...',
      time: '30m',
      icon: 'I',
      iconColor: 'bg-red-500',
      isIconImage: false,
    },
    {
      id: 3,
      sender: 'Lead from New York',
      message: 'Good morning, let me...',
      time: '40m',
      icon: 'L',
      iconColor: 'bg-purple-500',
      isIconImage: false,
    },
    {
      id: 4,
      sender: 'Booking API problems',
      message: 'Luis • Small Crafts',
      time: '45m',
      icon: 'bug',
      iconColor: 'bg-gray-700',
      isIconImage: true,
    },
    {
      id: 5,
      sender: 'MIRACLE • Exemplary Bank',
      message: "Hey there, I'm here to...",
      time: '45m',
      icon: 'star',
      iconColor: 'bg-gray-300',
      isIconImage: true,
    },
  ];

    // Handle sorting (placeholder)
  const handleSort = (sortOption) => {
    alert(`Sorting by: ${sortOption}`);

    // Add sorting logic here if needed
  };


  return (
    <>
    <div className="max-w-full min-h-full  bg-white  border-purple-200">
        {/* Header with tabs and timestamp */}
        <div className="flex justify-between items-center p-[10px] border-b border-purple-200">
          <h1 className='text-xl font-bold'>Your inbox</h1>
        </div>
        {/* sort list  */}
          <div className="flex space-x-2 justify-between p-3">
          <button
            className="flex items-center text-sm text-black font-bold px-2 py-1 rounded"
            onClick={() => handleSort('5 Open')}
          >
            5 Open <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          <button
            className="flex items-center text-sm text-black font-bold px-2 py-1 rounded"
            onClick={() => handleSort('Waiting longest')}
          >
            Waiting longest <ChevronDown className="ml-1 w-4 h-4" />
          </button>
        </div>
        {/* inbox items  */}
      <div className="space-y-2">
        {inboxItems.map((item) => (
          <div
            key={item.id}
            className={`flex items-center bg-white p-3 rounded-lg  hover:bg-yellow-200 shadow-sm cursor-pointer ${
              selectedItem === item.id ? 'bg-gray-100' : ''
            }`}
            onClick={() => setSelectedItem(item.id)}
          >
            <div
              className={`w-6 h-6 ${item.iconColor} text-white rounded-full flex items-center justify-center mr-3`}
            >
              {item.isIconImage ? (
                item.icon === 'bug' ? (
                  <Bug className="w-5 h-5" />
                ) : (
                  <Star className="w-5 h-5" />
                )
              ) : (
                <span>{item.icon}</span>
              )}
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium">{item.sender}</p>
              <p className="text-xs text-gray-600 truncate">{item.message}</p>
            </div>
            <div className="text-xs text-gray-500">{item.time}</div>
          </div>
        ))}
 
      </div> 

      <div className=' fixed flex justify-center items-center mt-[132px] p-1 h-9 gap-3 w-24 ml-3  bg-gray-50 rounded-md  shadow-md'>
        <div><List className='size-7  bg-gray-200 p-2 rounded-md cursor-pointer 
        '/></div>
        <div><LayoutList className='size-5 cursor-pointer
        ' /></div>
        </div>

      
      
        </div>
    
    
    </>
  )
}
