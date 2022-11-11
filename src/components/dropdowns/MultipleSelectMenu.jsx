import React from 'react'

const MultipleSelectMenu = (props) => {
    return (
        <div className={`border border-slate-400 rounded-sm w-full absolute overflow-auto shadow-md transition-all duration-300 mt-1 z-50 bg-white opacity-0 h-0  ${props.className}`} id={props.id} ref={props.reference}>
            {props.children}
        </div>
    )
}

export default MultipleSelectMenu
