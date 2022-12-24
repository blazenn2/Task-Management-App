import React from 'react'
import CardTag from '../tags/card-tag'
import { FaPlus } from "react-icons/fa"
import UserCircle from '../user-picture'
import { cardCSS } from './componentCSS'
import { motion } from 'framer-motion'
import { FiMessageSquare } from 'react-icons/fi'

const Card = (props) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} id={`card-${props.index}`} className={cardCSS(props.className)} draggable={true} onDragStart={(e) => props.dragStart(props.index, e, props.boardIndex)} onDragEnter={(e) => props.dragEnter(props.index, e, props.boardIndex)} onDragLeave={(e) => props.dragLeave(e, props.index, props.boardIndex)} onDragEnd={(e) => props.dragEnd(e)} onDragOver={(e) => props.dragOver(e, props.boardIndex)} onDrop={(e) => props.drop(e, props.index)} >
            <CardTag piority={props.piority} />
            <div className="text-gray-500 lg:text-base md:text-sm text-xs">{props.text}</div>
            <div className="flex justify-end items-center w-full">
                <div className="hidden lg:block text-xs text-gray-500 grow">12th Dec-22</div>
                <button onClick={e => props.onMsgClick(e)} className="lg:px-3 grow flex items-center justify-start lg:justify-end space-x-2 text-gray-400 hover:text-gray-500 cursor-pointer">
                    <FiMessageSquare className='scale-110' />
                    <span className='text-xs'>1</span>
                </button>
                <button onClick={e => props.onBtnClick(e)} className="md:p-2 p-1 m-1 border border-dashed border-gray-400 rounded-full hover:bg-gray-100"><FaPlus className='text-gray-400 p-1 md:p-0' /></button>
                <div className={`relative block min-h-[2rem] md:min-h-[0rem] h-full ${props.participants.length === 0 ? "" : props.participants.length > 1 ? "lg:w-3/12 w-1/3" : "lg:w-2/12 w-1/4"} `}>
                    {props.participants.length === 1 ? <UserCircle buttonClassName="absolute border-2 border-white left-0 z-20 cursor-default" /> : props.participants.length === 2 ? <><UserCircle buttonClassName="absolute border-2 border-white left-0 z-20 cursor-default" /><UserCircle buttonClassName="absolute border-2 border-white left-3 z-10 cursor-default" /></> : props.participants.length >= 3 ? <><UserCircle buttonClassName="absolute border-2 border-white left-0 z-20 cursor-default" /><UserCircle buttonClassName="absolute border-2 border-white left-3 z-10 cursor-default" /><UserCircle buttonClassName="absolute border-2 border-white left-6 cursor-default" /></> : null}
                </div>
            </div>
        </motion.div>
    )
}

export default Card
