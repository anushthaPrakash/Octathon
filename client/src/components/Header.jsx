import React from 'react'
import { BsSearch } from "react-icons/bs"

function Header() {
    return (
        <div className='sticky top-0 z-50 bg-[#C5F0A4] flex items-center p-2 lg:px-5 shadow-md '>
            <div className="flex items-center ml-3 " >
                <img src='./logo.png' className='h-10' />

            </div>
            <div className='flex justify-center flex-grow '>
                <div className='flex space-x-6 md:space-x-2'>
                    <div className="flex 
                 items-center rounded-full bg-gray-100 p-2 ">
                        <BsSearch />
                        <input
                            className="hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink"
                            type="text"
                            placeholder="Enter Location" />
                        <div className='border-l-2 border-[#3C6255]  pl-4 pr-4 '><span className='text-gray-500'>IIT Ropar, Rupanagar , Punjab</span></div>
                    </div>


                </div>
            </div>
            <div className='flex items-center sm:space-x-2 justify-end'>
            <p className='font-semibold pr-3 whitespace-nowrap text-[#3C6255]'>Anushtha Prakash</p>
            <img src='./dpp.png' className='h-10 w-10 rounded-full cursor-pointer' />
            </div>
        </div>
    )
}

export default Header