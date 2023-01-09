import React from 'react'
import { BsFillStarFill } from 'react-icons/bs'
import {NavLink} from "react-router-dom"


function DishCard({ name, src, profile }) {
    return (

        <div class="container max-w-4xl px-6 py-2 mx-auto bg-white  ">
            {/* <h1 class="text-4xl font-semibold text-center text-gray-800 dark:text-white">Frequently asked questions</h1> */}

            <div class="mt-4 space-y-8 relative rounded-3xl shadow-2xl ">
                <div class="border-2 ">
                    <div class="flex items-center justify-between w-full p-8 h-80 bg-[url('/1.jpg')] rounded-t-3xl">
                        {/* <img src={src} className='h-80 object-cover filter brightness-75 rounded-full lg:rounded-3xl'/> */}

                    </div>

                    <hr class="border-gray-200 dark:border-gray-700" />



                    <div className='ml-8 mt-5 flex'>
                        <h1 class=" text-black text-xl font-bold mb-1 flex ">{name}
                        </h1>
                        <div className='items-center justify-end  text-yellow-500 flex ml-4'><p className='font-bold mr-1'>4.2 </p><BsFillStarFill className='' /></div>
                        <div className='ml-10'>
                        <NavLink  to="/buydish">
                        <button class="group relative w-24  xs:w-32  ss:w-32 sm:w-42  h-auto md:w-48 overflow-hidden rounded-lg bg-white text-lg shadow ">
                            <div class="absolute inset-0 w-3 bg-[#C5F0A4]  transition-all duration-[250ms] ease-out group-hover:w-full"></div>
                            <span class="relative text-black group-hover:text-white group-hover:font-bold">Buy</span>
                        </button>
                        </NavLink>
                        </div>
                    </div>
                    <p class="ml-6 mb-2 p-2 text-sm text-gray-500 dark:text-gray-300">
                        100/- for one
                    </p>



                </div>
            </div>

        </div>


    )
}

export default DishCard