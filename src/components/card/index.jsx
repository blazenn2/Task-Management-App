import React from 'react'
import CardTag from '../tags/card-tag'
import { FaPlus } from "react-icons/fa"
import UserCircle from '../user-picture'
import { cardCSS } from './componentCSS'

const Card = (props) => {
    return (
        <div id={`card-${props.index}`} className={cardCSS(props.className)} draggable={true} onDragStart={(e) => props.dragStart(props.index, e, props.boardIndex)} onDragEnter={(e) => props.dragEnter(props.index, e, props.boardIndex)} onDragLeave={(e) => props.dragLeave(e, props.index, props.boardIndex)} onDragEnd={(e) => props.dragEnd(e)} onDragOver={(e) => props.dragOver(e, props.boardIndex)} onDrop={(e) => props.drop(e, props.index)} >
            <CardTag piority={props.piority} />
            <div className="text-gray-500 lg:text-base md:text-sm text-xs">{props.text}</div>
            <div className="flex justify-end">
                <button onClick={props.onBtnClick} className="md:p-2 p-1 m-1 border border-dashed border-gray-400 rounded-full hover:bg-gray-100"><FaPlus className='text-gray-400 p-1 md:p-0' /></button>
                <UserCircle />
            </div>
        </div>
    )
}

export default Card
