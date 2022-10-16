import React from 'react'
import CardTag from './CardTag'
import { FaUserAlt, FaPlus } from "react-icons/fa"

const Card = () => {
    return (
        <div className='bg-white h-32 w-11/12 rounded-md justify-self-center shadow-sm px-2 flex flex-col justify-around'>
            <CardTag />
            <div className="text-gray-500">Company website redesign</div>
            <div className="flex justify-end">
                <button className="md:p-2 p-1 m-1 border border-dashed border-gray-400 rounded-full hover:bg-gray-100"><FaPlus className='text-gray-400 p-1 md:p-0' /></button>
                <button className="md:p-2 p-1 m-1 bg-gray-300 rounded-full"><FaUserAlt className='text-white p-1 md:p-0' /></button>
            </div>
        </div>
    )
}

export default Card
