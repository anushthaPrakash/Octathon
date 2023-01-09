import React from 'react'

function SideBar() {
    return (
        <div
            className="h-full w-screen flex flex-row"
            x-data="{ sidenav: true }"
        >
            <div
                id="sidebar"
                className="bg-white h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
                x-show="sidenav"

            >
                <div class="space-y-6 md:space-y-10 mt-10">
                    <h1 class="block font-bold text-sm md:text-xl text-center">
                        My Profile<span class="text-[#3C6255]">.</span>
                    </h1>
                    <div id="profile" class="space-y-3">
                        <img
                            src="/dpp.png"
                            alt="Avatar user"
                            class="w-10 md:w-16 rounded-full mx-auto"
                        />
                        <div>
                            <h2
                                class="font-medium text-xs md:text-sm text-center text-teal-500"
                            >
                               Anushtha Prakash
                            </h2>
                            <p class="text-xs text-gray-500 text-center">User</p>
                        </div>
                    </div>
                    <div id="menu" class="flex flex-col space-y-2">
                        <a
                            href=""
                            class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#3C6255] hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out"
                        >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                ></path>
                            </svg>
                            <span class="">Your Orders</span>
                        </a>
                        <a
                            href=""
                            class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#3C6255] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"
                                ></path>
                            </svg>
                            <span class="">Your Dishes</span>
                        </a>
                        <a
                            href=""
                            class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#3C6255] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                                <path
                                    fill-rule="evenodd"
                                    d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                            <span class="">Contact Us</span>
                        </a>
                        <a
                            href=""
                            class="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-[#3C6255] hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out"
                        >
                            <svg
                                class="w-6 h-6 fill-current inline-block"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z"
                                ></path>
                                <path
                                    d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z"
                                ></path>
                            </svg>
                            <span class="">Log Out</span>
                        </a>

                    </div>
                </div>
            </div>

        </div>



    )
}

export default SideBar