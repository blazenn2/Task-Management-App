import React from 'react'
import CardTag from './CardTag'
import { FaPlus } from "react-icons/fa"
import UserCircle from '../user-picture'

const Card = (props) => {
    return (
        <div className='bg-white md:h-32 h-36 w-11/12 rounded-md justify-self-center shadow-sm p-2 flex flex-col justify-between cursor-move' draggable={true} onDragStart={(e) => props.dragStart(props.index, e)} onDragEnter={(e) => props.dragEnter(props.index, e)} onDragLeave={(e) => props.dragLeave(e)} onDragEnd={(e) => props.dragEnd(e)} onDragOver={(e) => props.dragOver(e)} onDrop={(e) => props.drop(e)} >
            <CardTag piority={props.piority} />
            <div className="text-gray-500 lg:text-base md:text-sm text-xs">{props.text}</div>
            <div className="flex justify-end">
                <button className="md:p-2 p-1 m-1 border border-dashed border-gray-400 rounded-full hover:bg-gray-100"><FaPlus className='text-gray-400 p-1 md:p-0' /></button>
                <UserCircle />
            </div>
        </div>
    )
}

export default Card
