import React from 'react'
import Card from '../Card/Card'
import { FiX } from "react-icons/fi";

const CardHolder = () => {
    return (
        <div className='border w-[23%] grid gap-2 shadow-xl pb-2 rounded-md'>
            <div className="w-full h-1 rounded-t bg-gradient-to-r from-fuchsia-500 to-pink-500"></div>
            <div className="w-11/12 justify-self-center flex items-center justify-between">
                <h1 className="text-lg text-gray-500">Backlog</h1>
                <button>
                    <FiX className='text-gray-500' />
                </button>
            </div>
            <Card />
        </div>
    )
}

export default CardHolder
