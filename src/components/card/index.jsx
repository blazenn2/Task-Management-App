import React from 'react'
import CardTag from './CardTag'
import { FaPlus } from "react-icons/fa"
import UserCircle from '../user-picture'

const Card = (props) => {
    return (
        <div className='bg-white h-32 w-11/12 rounded-md justify-self-center shadow-sm p-2 flex flex-col justify-around'>
            <CardTag piority={props.piority} />
            <div className="text-gray-500">{props.text}</div>
            <div className="flex justify-end">
                <button className="md:p-2 p-1 m-1 border border-dashed border-gray-400 rounded-full hover:bg-gray-100"><FaPlus className='text-gray-400 p-1 md:p-0' /></button>
                <UserCircle />
            </div>
        </div>
    )
}

export default Card
