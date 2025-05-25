import React from 'react'
import { MessageSquareText, Mail, ChartNoAxesGantt, Info, } from 'lucide-react'

export const OverviewPreviewAnswer = () => {
    return (
        <>
            <div className="flex justify-between items-center mb-6 ">
                <button className="text-gray-600 text-xs font-semibold  transition-colors">PREVIEW ANSWER</button>
                <div className="flex  items-center gap-3 bg-white p-1 rounded-md">
                    <div className="text-gray-500  text-xs cursor-pointer bg-gray-200 p-1 font-semibold
                                 items-center rounded-md transition-colors gap-1 flex"> <MessageSquareText className='size-3' />CHAT</div>
                    <div className="text-gray-500 cursor-pointer text-xs transition-colors font-semibold
                                 items-center gap-1 flex"><Mail className='size-3' /> EMAIL</div>
                </div>
            </div>
            {/* Appointment Card */}

            <div className='flex flex-col gap-3  bg-gradient-to-b to-[#e0b6c5] via-[#edde99] from-[#b7b7db]  md:h-[500px] rounded-t-md  p-2 '>
                <ChartNoAxesGantt className='size-7 bg-gray-200 rounded-md p-1 cursor-pointer' />
                <div className="bg-white w-2/3 md:w-full p-4 rounded-lg shadow-md mt-8">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="font-semibold">Fin • AI Agent</h3>
                        <Info className="text-gray-500 size-5" />
                    </div>
                    <p className="text-gray-600 text-sm ">
                        Your appointment with Dr. Robinson is confirmed for next week, June 18th at 10:00am. If you need to make
                        any changes to your appointment, you can leave a message for the doctor, please do so now.
                    </p>
                </div>
            </div>

        </>
    )
}
