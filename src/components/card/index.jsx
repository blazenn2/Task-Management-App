import React from 'react'
import CardTag from '../tags/card-tag'
import { FaPlus } from "react-icons/fa"
import UserCircle from '../user-picture'
import { cardCSS } from './componentCSS'
import { motion } from 'framer-motion'

const Card = (props) => {
    console.log(props)
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} id={`card-${props.index}`} className={cardCSS(props.className)} draggable={true} onDragStart={(e) => props.dragStart(props.index, e, props.boardIndex)} onDragEnter={(e) => props.dragEnter(props.index, e, props.boardIndex)} onDragLeave={(e) => props.dragLeave(e, props.index, props.boardIndex)} onDragEnd={(e) => props.dragEnd(e)} onDragOver={(e) => props.dragOver(e, props.boardIndex)} onDrop={(e) => props.drop(e, props.index)} >
            <CardTag piority={props.piority} />
            <div className="text-gray-500 lg:text-base md:text-sm text-xs">{props.text}</div>
            <div className="flex justify-end w-full">
                <button onClick={e => props.onBtnClick(e)} className="md:p-2 p-1 m-1 border border-dashed border-gray-400 rounded-full hover:bg-gray-100"><FaPlus className='text-gray-400 p-1 md:p-0' /></button>
                <div className='relative w-3/12 h-full'>
                    <UserCircle buttonClassName="absolute border-2 border-white left-0 z-20 cursor-default" />
                    <UserCircle buttonClassName="absolute border-2 border-white left-3 z-10 cursor-default" />
                    <UserCircle buttonClassName="absolute border-2 border-white left-6 cursor-default" />
                </div>
            </div>
        </motion.div>
    )
}

export default Card
