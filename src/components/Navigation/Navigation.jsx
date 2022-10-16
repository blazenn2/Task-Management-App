import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";


const Navigation = () => {
    return (
        <div className='w-full md:h-14 h-11 bg-gradient-to-r from-blue-400 to-indigo-300 flex justify-between'>
            <div className="w-1/3 h-full flex items-center">
                <div className="w-1/3 h-full flex items-center justify-center">
                    {/* <img src="./logo-light.svg" alt="" className='h-5 w-25' /> */}
                </div>
                <div className="w-2/3 h-1/2 flex items-center relative md:ml-5 ml-3">
                    <FiSearch className='text-white absolute' />
                    <input type="text" className='focus:outline-none focus:border-none bg-transparent placeholder:text-white md:placeholder:text-sm md:text-sm placeholder:text-xs text-xs text-white pl-6' placeholder='Search for the task...' />
                </div>
            </div>
            <div className="flex items-center md:pr-10 pr-5">
                <div className="text-white pr-2 md:text-base text-sm">Hamza Nawab</div>
                <button className="md:p-3 p-1 bg-gray-300 rounded-full"><FaUserAlt className='text-white p-1 md:p-0' /></button>
            </div>
        </div>
    )
}

export default Navigation
