import React from 'react'
import { FiChevronUp } from "react-icons/fi";

const MultipleSelectButton = (props) => {
    
    return (
        <button onClick={props.onClick} id={props.id} className={`${props.className} border border-slate-400 rounded-md p-2 shadow-md hover:bg-slate-100 flex items-center justify-between space-x-3 relative w-full`}>
            <p>{props.text}</p>
            <FiChevronUp className={`transition-all rotate-180 ${props.arrow}`} />
        </button>
    )
}

export default MultipleSelectButton
