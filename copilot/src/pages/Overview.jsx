import {
    PanelLeft, BookOpenText, ChevronDown, Smile, Handshake, Plus,
    BookText, Lightbulb, AlignLeft, AlignCenter, AlignRight
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { OverviewPreviewAnswer } from '../components/innerComponents/OverviewPreviewAnswer'

export const Overview = () => {
    return (
        <div className='min-h-screen bg-[#c4c6f6]
             flex items-center justify-center '>
            <div className='mx-auto    sm:rounded-sm  lg:max-w-7xl md:max-w-4xl max-w-full  bg-white  min-h-screen '>
                {/* navbar */} 
                <div className='flex-col justify-start items-center border-b md:p-3 p-1 border-gray-300 min-h-full'>

                    <div className='flex  md:w-full  items-center justify-center'>
                        <div className='flex items-center  gap-1  md:w-[95%] w-[75%] '>
                            <Link to='/'> <PanelLeft className='size-6 text-black hover:text-gray-700' /> </Link>
                            <h1 className='text-lg font-bold text-black'>Overview</h1>
                        </div>
                        <div className='flex justify-center items-center bg-gray-300 p-1 gap-1 rounded-md '>
                            <BookOpenText className='size-4 text-black' />
                            <h3 className='text-black md:text-sm  text-xs font-semibold mb-1'>Learn</h3>
                            <ChevronDown className='size-4 cursor-pointer text-black' />
                        </div>
                    </div>
                    <div className='flex md:ml-1 ml-6  items-center justify-start md:gap-10 gap-3 mt-7 w-full  '>
                        <button className='text-blue-600   relative md:text-sm font-semibold  text-xs'>Add Content</button>
                        <button className='text-black hover:text-blue-500 md:text-sm  text-xs  font-semibold'>Personalize</button>
                        <button className='text-black hover:text-blue-500 md:text-sm  text-xs font-semibold'>Optimize</button>
                    </div>
                </div>

                <div className='md:flex '>
                    <div className='p-3 lg:w-2/3 md:w-1/2 max-w-full  '>
                        <div className="mb-5">
                            <h2 className="text-md font-bold ">Fin's tone</h2>
                            <p className="text-gray-600 mb-6">Choose how Fin should sound when it speaks to customers.</p>
                            <div className="grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1 md:border md:rounded-sm  md:w-full w-[95%] mx-auto ">

                                {/* Standard Tone */}
                                <div className="p-4 border rounded-l-lg flex-col items-center  hover:bg-gray-200 
                                transition-colors cursor-pointer">
                                    <div className='text-black  gap-2 flex items-center justify-start'>
                                        <img src='logo.png' className='size-5' />
                                        <h3 className='font-semibold text-black'>STANDARD</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm font-semibold mt-1">Informal yet professional, factual, and clear</p>
                                </div>

                                {/* Matter-of-Fact Tone */}
                                <div className="p-4 border hover:rounded-md flex-col items-center  hover:bg-gray-200
                                 transition-colors cursor-pointer">
                                    <div className='text-black  gap-2 flex items-center justify-start'>
                                        <Lightbulb className='size-5' />
                                        <h3 className='font-semibold text-black'>MATTER-OF-FACT</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm font-semibold mt-1">Clear and honest, but never harsh</p>
                                </div>

                                {/* Professional Tone */}

                                <div className="p-4 border rounded-r-lg flex-col items-center  hover:bg-gray-200
                                 transition-colors cursor-pointer">
                                    <div className='text-black  gap-2 flex items-center justify-start'>
                                        <BookText className='size-5' />
                                        <h3 className='font-semibold text-black'>PROFESSIONAL</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm font-semibold mt-1">Informative, respectful, yet empathetic</p>
                                </div>

                                {/* Friendly Tone */}
                                <div className="p-4 border rounded-l-lg flex-col items-center  hover:bg-gray-200 
                                transition-colors cursor-pointer">
                                    <div className='text-black  gap-2 flex items-center justify-start'>
                                        <Handshake className='size-5' />
                                        <h3 className='font-semibold text-black'>FRIENDLY</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm font-semibold mt-1">Enthusiastic, but not overly familiar</p>
                                </div>

                                {/* Playful Tone */}
                                <div className="p-4 border hover:rounded-md flex-col items-center  hover:bg-gray-200 
                                transition-colors cursor-pointer">
                                    <div className='text-black  gap-2 flex items-center justify-start'>
                                        <Smile className='size-5' />
                                        <h3 className='font-semibold text-black'>PLAYFUL</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm font-semibold mt-1">Fun and friendly, without sarcasm or cringe</p>
                                </div>

                                {/* Custom Tone */}
                                <div className="p-4 border rounded-r-lg flex-col items-center  hover:bg-gray-200 
                                transition-colors cursor-pointer">
                                    <div className='text-black  gap-2 flex items-center justify-start'>
                                        <Plus className='size-5' />
                                        <h3 className='font-semibold text-black'>CUSTOM</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm font-semibold mt-1">Choose your own tone settings for Fin</p>
                                </div>
                            </div>
                        </div>

                        <div className='w-full flex-col mx-auto'>
                            <h2 className="text-md font-bold mb-2">Fin's answer length</h2>
                            <p className="text-gray-600 mb-4">Choose the length of Fin's answers</p>
                            <div className=" flex   border-l-0 md:w-[100%] w-full justify-start items-center">

                                <button className=" w-1/3  px-3 lg:py-2  md:py-1 hover:rounded-md border rounded-l-md 
                                 text-gray-600 lg:text-md md:text-sm hover:bg-gray-300  flex items-center gap-1 transition-colors">
                                    <AlignLeft className='lg:size-6 md:size-0' /> Succinct</button>
                                <button className=" w-1/3 px-3 lg:py-2  md:py-1 border hover:rounded-md  hover:bg-gray-300
                                  text-gray-600 lg:text-md md:text-sm flex items-center gap-1 ">
                                    <AlignCenter className='lg:size-6 md:size-0 ' /> STANDARD</button>
                                <button className=" w-1/3 px-2 lg:py-2  md:py-1 lg:text-md md:text-sm hover:rounded-md border rounded-r-md
                                 text-gray-600 hover:bg-gray-300 flex items-center gap-1 transition-colors">
                                    <AlignRight className='lg:size-6 md:size-0' /> Comprehensive</button>
                            </div>
                        </div>
                    </div>

                    <div className=" lg:w-1/3  md:w-1/2  max-w-full  p-3 border-l bg-gray-200 min-h-full md:h-[660px] rounded-br-md">
                        <OverviewPreviewAnswer />

                    </div>
                </div>
            </div>
        </div>
    )
}

