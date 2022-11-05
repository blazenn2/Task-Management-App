import React from 'react'
import Card from '../card'
import { FiX } from "react-icons/fi";
import { AnimatePresence, motion } from 'framer-motion';
import { useRef } from 'react';

const CardHolder = (props) => {
    const headingGradient = ["from-fuchsia-400 to-pink-600", "from-blue-300 to-indigo-500", "from-green-300 to-blue-300", "from-red-400 to-amber-400", "from-pink-400 to-blue-400", "from-orange-300 to-amber-600"];
    const randomIndex = Math.floor(Math.random() * headingGradient.length);

    const dragItem = useRef();
    const dragOverItem = useRef();

    const onDragStart = (position) => {
        dragItem.current = position;
    };

    const onDragEnter = (position) => {
        dragOverItem.current = position;
    };

    const onDrop = () => {
        const tempData = [...props.data[props.index].cards];
        const dragContent = tempData[dragItem.current];
        tempData.splice(dragItem.current, 1);
        tempData.splice(dragOverItem.current, 0, dragContent);
        dragItem.current = null;
        dragOverItem.current = null;
        const tempObject = props.data;
        tempObject[props.index].cards = tempData;
        props.changeData([...tempObject]);
    };

    return (
        <AnimatePresence>
            <motion.div key={props.index} initial={{ y: 200, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 200, opacity: 0 }} transition={{ duration: 0.5 }} id={`board${props.index}`} className='border md:min-w-[17rem] min-w-[12rem] flex flex-col justify-start items-center space-y-3 shadow-md pb-2 rounded-md h-[95%] transition-all'>
                <div className={`w-full h-1 rounded-t bg-gradient-to-r ${headingGradient[randomIndex]} `}></div>
                <div className="w-11/12 justify-self-center flex items-center justify-between">
                    <h1 className="text-lg text-gray-500">{props.title}</h1>
                    <button>
                        <FiX className='text-gray-500' onClick={(e) => props.removeBoard(props.index, e)} />
                    </button>
                </div>
                <div className="space-y-3 w-full h-[95%] flex flex-col items-center overflow-y-scroll">
                    {props.card?.map((value, i) => <Card key={i} index={i} text={value.text} piority={value.piority} dragStart={onDragStart} dragEnter={onDragEnter} drop={onDrop} />)}
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default CardHolder
