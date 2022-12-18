import React from 'react'
import Card from '../card'
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useMemo } from 'react';
import { cardHolderCSS } from './componentCSS';

const CardHolder = (props) => {
    const headingGradient = ["from-fuchsia-400 to-pink-600", "from-blue-300 to-indigo-500", "from-green-300 to-blue-300", "from-red-400 to-amber-400", "from-pink-400 to-blue-400", "from-orange-300 to-amber-600"];
    const randomIndex = useMemo(() => Math.floor(Math.random() * headingGradient.length), [headingGradient.length]);

    const dragItem = useRef();
    const dragOverItem = useRef();

    const onDragStart = (position, e, boardIndex) => {
        dragItem.current = { cardIndex: position, boardIndex: boardIndex };
        e.target.classList.add("opacity-50");
    };

    const onDragEnter = (position, e, boardIndex) => {
        dragOverItem.current = { cardIndex: position, boardIndex: boardIndex };
        if (boardIndex === dragItem.current?.boardIndex) {
            if (e.target.id) e.target.classList.add("animate-pulse");
            else e.target.closest(`#card-${position}`).classList.add("animate-pulse");
        }
    };

    const onDragLeave = (e, position, boardIndex) => {
        if (boardIndex === dragItem.current?.boardIndex) {
            if (e.target.id) e.target.classList.remove("animate-pulse");
            else e.target.closest(`#card-${position}`).classList.remove("animate-pulse");
        }
    };

    const onDragOver = (e, boardIndex) => {
        e.preventDefault();
        if (boardIndex === dragItem.current?.boardIndex) {
            if (e.target.id) {
                if (![...e.target.classList].includes("animate-pulse")) e.target.classList.add("animate-pulse");
            } else {
                if (![...e.target.closest(`#card-${dragOverItem.current.cardIndex}`)?.classList]?.includes("animate-pulse")) e.target.closest(`#card-${dragOverItem.current.cardIndex}`).classList.add("animate-pulse");
            }
        }
    };

    const onDragEnd = (e) => {
        if ([...e.target.classList].includes("opacity-50")) e.target.classList.remove("opacity-50");
        if (dragItem.current?.boardIndex === dragOverItem.current?.boardIndex) {
            const tempData = [...props.data[props.index].cards];
            const dragContent = tempData[dragItem.current.cardIndex];
            tempData.splice(dragItem.current.cardIndex, 1);
            tempData.splice(dragOverItem.current.cardIndex, 0, dragContent);
            dragItem.current = null;
            dragOverItem.current = null;
            const tempObject = props.data;
            tempObject[props.index].cards = tempData;
            props.changeData([...tempObject]);
        }
    };

    const onDrop = (e, position) => {
        if (e.target.id) {
            e.target.classList.remove("animate-pulse");
        } else {
            e.target.closest(`#card-${position}`).classList.remove("animate-pulse");
        }
    };

    const btnClickHandler = (e) => props.triggerModal(e);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 400 }} transition={{ duration: 1 }} id={`board-${props.index}`} className={cardHolderCSS()}>
            <div className={`w-full h-1 rounded-t bg-gradient-to-r ${headingGradient[randomIndex]} `}></div>
            <div className="w-11/12 justify-self-center flex items-center justify-between">
                <h1 className="text-lg text-gray-500">{props.title}</h1>
                <button>
                    <FiX className='text-gray-500' onClick={(e) => props.removeBoard(props.index, e)} />
                </button>
            </div>
            <div className="space-y-3 w-full h-[80%] flex flex-col items-center overflow-y-scroll">
                <AnimatePresence>
                    {props.card?.map((value, i) => <Card key={i} participants={value.participants} onBtnClick={btnClickHandler} boardIndex={props.index} index={i} text={value.text} piority={value.piority} dragStart={onDragStart} dragEnter={onDragEnter} dragLeave={onDragLeave} dragEnd={onDragEnd} dragOver={onDragOver} drop={onDrop} />)}
                </AnimatePresence>
            </div>
            <div className="absolute bottom-0 w-full h-10 flex items-center justify-center bg-violet-100 z-40">
                <button className="p-3 flex items-center text-gray-400 hover:text-gray-500 justify-between space-x-2" onClick={props.addTaskHandler}><span>Add Task</span> <AiOutlinePlusCircle className='scale-125' /></button>
            </div>
        </motion.div>
    )
}

export default CardHolder
