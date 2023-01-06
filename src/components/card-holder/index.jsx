import React, { memo } from 'react'
import Card from '../card'
import { FiCornerRightDown, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useMemo } from 'react';
import { cardHolderCSS } from './componentCSS';
import { newBoardCardDragOver, newBoardCardDragLeave, newBoardCardDrop } from '../../utils/drag-events';
// import useBoardData from '../../custom hooks/useBoardData';

const CardHolder = (props) => {
    console.log("Card holder renders!")
    // const [boardData, setBoardData] = useBoardData();
    // console.log(boardData);

    const headingGradient = ["from-fuchsia-400 to-pink-600", "from-blue-300 to-indigo-500", "from-green-300 to-blue-300", "from-red-400 to-amber-400", "from-pink-400 to-blue-400", "from-orange-300 to-amber-600"];
    const randomIndex = useMemo(() => Math.floor(Math.random() * headingGradient.length), [headingGradient.length]);

    const dragItem = useRef();
    const dragOverItem = useRef();
    const cardTransferFlag = useRef();

    const btnClickHandler = (e) => props.triggerModal(e);

    const msgClickHandler = (e) => props.comments(e);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 400 }} transition={{ duration: 1 }} id={`board-${props.index}`} className={cardHolderCSS()}>
            <div className={`w-full min-h-[0.25rem] rounded-t bg-gradient-to-r ${headingGradient[randomIndex]} `}></div>
            <div className="w-11/12 justify-self-center flex items-center justify-between">
                <h1 className="text-lg text-gray-500">{props.title}</h1>
                <button>
                    <FiX className='text-gray-500' onClick={(e) => props.removeBoard(props.index, e)} />
                </button>
            </div>
            <div className="card-drop !mt-0 h-0 flex opacity-0 p-0 items-center justify-around w-4/5 animate-bounce border border-gray-500 rounded-md shadow-md transition-all ease-in-out" draggable={true} onDrop={e => newBoardCardDrop(e, props.index, props.data, props.changeData)} onDragOver={e => newBoardCardDragOver(e, cardTransferFlag, dragItem, dragOverItem)} onDragLeave={e => newBoardCardDragLeave(e)}>
                <p className='text-gray-700 h-0 md:text-base text-xs'>Place Your Card Here</p>
                <FiCornerRightDown className='text-gray-700 md:scale-110 scale-90 h-0' />
            </div>
            <div className="space-y-3 w-full h-[80%] flex flex-col items-center overflow-y-scroll">
                <AnimatePresence>
                    {props.card?.map((value, i) => <Card key={i} chatCount={value.chats.length} onMsgClick={msgClickHandler} date={value.initiatedDate} participants={value.participants} onBtnClick={btnClickHandler} boardIndex={props.index} boardData={props.data} changeBoardData={props.changeData} index={i} text={value.title} piority={value.piority} dragItem={dragItem} dragOverItem={dragOverItem} cardTransferFlag={cardTransferFlag} />)}
                </AnimatePresence>
            </div>
            <div className="absolute bottom-0 w-full h-10 flex items-center justify-center bg-violet-100 z-30">
                <button className="p-3 flex items-center text-gray-400 hover:text-gray-500 justify-between space-x-2" onClick={props.addTaskHandler}><span>Add Task</span> <AiOutlinePlusCircle className='scale-125' /></button>
            </div>
        </motion.div>
    )
}

const compare = (prevProps, nextProps) => {
    // console.log(prevProps)
    // const prevParticipants = prevProps.card.reduce((accum, currValue) => Number(accum) + Number(currValue.participants.length), 0);
    // const nextParticipants = nextProps.card.reduce((accum, currValue) => Number(accum) + Number(currValue.participants.length), 0);
    // console.log(prevParticipants, nextParticipants)
    console.log(prevProps, nextProps)
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default memo(CardHolder, compare);
