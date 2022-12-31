import React, { memo } from 'react'
import Card from '../card'
import { FiCornerRightDown, FiX } from "react-icons/fi";
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { useMemo } from 'react';
import { cardHolderCSS } from './componentCSS';

const CardHolder = (props) => {
    console.log("Card holder rendered!");
    const headingGradient = ["from-fuchsia-400 to-pink-600", "from-blue-300 to-indigo-500", "from-green-300 to-blue-300", "from-red-400 to-amber-400", "from-pink-400 to-blue-400", "from-orange-300 to-amber-600"];
    const randomIndex = useMemo(() => Math.floor(Math.random() * headingGradient.length), [headingGradient.length]);

    const dragItem = useRef();
    const dragOverItem = useRef();
    const cardTransferFlag = useRef();

    const onDragStart = (position, e, boardIndex) => {
        [...document.querySelectorAll(".card-drop")].forEach(value => {
            value.classList.add("opacity-100", "h-10", "px-3", "py-2");
            value.classList.remove("opacity-0", "h-0", "p-0", "!mt-0");
            [...value.children].forEach(val => val.classList.remove("h-0"));
        });
        dragItem.current = { cardIndex: position, boardIndex: boardIndex };
        e.target.classList.add("!opacity-50");
        e.dataTransfer.setData('text/html', `${position}:${boardIndex}`);
    };

    const onDragEnter = (position, e, boardIndex) => {
        cardTransferFlag.current = false;
        dragOverItem.current = { cardIndex: position, boardIndex: boardIndex };
        if (boardIndex === dragItem.current?.boardIndex) {
            if (e.target.id) e.target.classList.add("motion-safe:animate-pulse");
            else e.target.closest(`#card-${position}`).classList.add("motion-safe:animate-pulse");
        }
    };

    const onDragLeave = (e, position, boardIndex) => {
        if (boardIndex === dragItem.current?.boardIndex) {
            if (e.target.id) e.target.classList.remove("motion-safe:animate-pulse");
            else e.target.closest(`#card-${position}`).classList.remove("motion-safe:animate-pulse");
        }
    };

    const onDragOver = (e, boardIndex) => {
        cardTransferFlag.current = false;
        e.preventDefault();
        if (boardIndex === dragItem.current?.boardIndex) {
            if (e.target.id) {
                if (![...e.target.classList].includes("motion-safe:animate-pulse")) e.target.classList.add("motion-safe:animate-pulse");
            } else {
                if (![...e.target.closest(`#card-${dragOverItem.current.cardIndex}`)?.classList]?.includes("motion-safe:animate-pulse")) e.target.closest(`#card-${dragOverItem.current.cardIndex}`).classList.add("motion-safe:animate-pulse");
            }
        }
    };

    const onDragEnd = (e) => {
        [...document.querySelectorAll(".card-drop")].forEach(value => {
            value.classList.remove("opacity-100", "h-10", "px-3", "py-2");
            value.classList.add("opacity-0", "h-0", "p-0", "!mt-0");
            [...value.children].forEach(val => val.classList.add("h-0"));
        });
        if ([...e.target.classList].includes("!opacity-50")) e.target.classList.remove("!opacity-50");
    };

    const onDrop = (e, position) => {
        if (e.target.id) {
            e.target.classList.remove("motion-safe:animate-pulse");
        } else {
            e.target.closest(`#card-${position}`).classList.remove("motion-safe:animate-pulse");
        }

        if (dragItem.current?.boardIndex === dragOverItem.current?.boardIndex && dragItem.current?.cardIndex !== dragOverItem.current?.cardIndex && cardTransferFlag.current === false) {
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

    const btnClickHandler = (e) => props.triggerModal(e);

    const msgClickHandler = (e) => props.comments(e);

    const newBoardCardDragOver = (e) => {
        cardTransferFlag.current = true;
        console.log(dragItem.current, dragOverItem.current, cardTransferFlag.current)
        e.target.closest(".card-drop").classList.add("bg-violet-200")
        e.stopPropagation();
        e.preventDefault();
    }

    const newBoardCardDragLeave = (e) => {
        e.target.closest(".card-drop").classList.remove("bg-violet-200");
    };

    const newBoardCardDrop = (e) => {
        e.target.closest(".card-drop").classList.remove("bg-violet-200");
        const [card, board] = e.dataTransfer.getData("text/html").split(":");
        if (Number(board) !== props.index) {
            const taskData = props.data;
            const newTaskData = taskData.map((value, i) => i === Number(props.index) ? { ...value, cards: [props.data[board].cards[card], ...value.cards] } : Number(board) === i ? { ...value, cards: value.cards.filter((_, ind) => ind !== Number(card)) } : value);
            props.changeData(newTaskData);
        }
    }

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0, y: 400 }} transition={{ duration: 1 }} id={`board-${props.index}`} className={cardHolderCSS()}>
            <div className={`w-full min-h-[0.25rem] rounded-t bg-gradient-to-r ${headingGradient[randomIndex]} `}></div>
            <div className="w-11/12 justify-self-center flex items-center justify-between">
                <h1 className="text-lg text-gray-500">{props.title}</h1>
                <button>
                    <FiX className='text-gray-500' onClick={(e) => props.removeBoard(props.index, e)} />
                </button>
            </div>
            <div className="card-drop !mt-0 h-0 flex opacity-0 p-0 items-center justify-around w-4/5 animate-bounce border border-gray-500 rounded-md shadow-md transition-all ease-in-out" draggable={true} onDrop={newBoardCardDrop} onDragOver={newBoardCardDragOver} onDragLeave={newBoardCardDragLeave}>
                <p className='text-gray-700 h-0 md:text-base text-xs'>Place Your Card Here</p>
                <FiCornerRightDown className='text-gray-700 md:scale-110 scale-90 h-0' />
            </div>
            <div className="space-y-3 w-full h-[80%] flex flex-col items-center overflow-y-scroll">
                <AnimatePresence>
                    {props.card?.map((value, i) => <Card key={i} onMsgClick={msgClickHandler} date={value.initiatedDate} participants={value.participants} onBtnClick={btnClickHandler} boardIndex={props.index} index={i} text={value.text} piority={value.piority} dragStart={onDragStart} dragEnter={onDragEnter} dragLeave={onDragLeave} dragEnd={onDragEnd} dragOver={onDragOver} drop={onDrop} />)}
                </AnimatePresence>
            </div>
            <div className="absolute bottom-0 w-full h-10 flex items-center justify-center bg-violet-100 z-30">
                <button className="p-3 flex items-center text-gray-400 hover:text-gray-500 justify-between space-x-2" onClick={props.addTaskHandler}><span>Add Task</span> <AiOutlinePlusCircle className='scale-125' /></button>
            </div>
        </motion.div>
    )
}

export default memo(CardHolder)
