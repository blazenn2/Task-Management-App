import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaUserAlt } from "react-icons/fa";


const Navigation = () => {
    return (
        <div className='w-full h-14 bg-gradient-to-r from-blue-400 to-indigo-300 flex justify-between'>
            <div className="w-1/3 h-full flex items-center">
                <div className="w-1/3 h-full flex items-center justify-center">
                    {/* <img src="./logo-light.svg" alt="" className='h-5 w-25' /> */}
                </div>
                <div className="w-2/3 h-1/2 flex items-center relative ml-5">
                    <FiSearch className='text-white absolute' />
                    <input type="text" className='focus:outline-none focus:border-none bg-transparent placeholder:text-white placeholder:text-sm text-sm text-white pl-6' placeholder='Search for the task...' />
                </div>
            </div>
            <div className="flex items-center pr-10">
                <div className="text-white pr-2">Hamza Nawab</div>
                <button className="p-3 bg-gray-300 rounded-full"><FaUserAlt className='text-white' /></button>
            </div>
        </div>
    )
}

export default Navigation
