import React from 'react'
import { FiSearch } from "react-icons/fi";
import UserCircle from '../user-picture';


const Navigation = () => {
    return (
        <div className='w-full md:min-h-[4rem] min-h-[2.75rem] bg-gradient-to-r from-blue-400 to-indigo-300 flex justify-between z-30'>
            <div className="md:w-1/3 md:pl-0 w-1/2 pl-5 h-full flex items-center">
                <div className="w-1/3 h-full flex items-center justify-center">
                    {/* <img src="./logo-light.svg" alt="" className='h-5 w-25' /> */}
                </div>
                <div className="w-2/3 h-1/2 flex items-center relative md:ml-5 ml-3">
                    <FiSearch className='text-white absolute' />
                    <input type="text" className='focus:outline-none focus:border-none bg-transparent placeholder:text-white md:placeholder:text-sm md:text-sm placeholder:text-xs text-xs text-white pl-6' placeholder='Search for the task...' />
                </div>
            </div>
            <div className="flex items-center md:pr-10 pr-5">
                <div className="text-white pr-2 md:text-base md:visible invisible">Hamza Nawab</div>
                <UserCircle />
            </div>
        </div>
    )
}

export default Navigation
