import React from 'react'

const MultipleSelectMenu = (props) => {
    return (
        <div className={`border border-slate-400 rounded-md w-full absolute overflow-auto shadow-md transition-all duration-500 mt-2`} id={props.id} ref={props.ref} style={{ height: "0", opacity: 0 }}>
            {props.children}
        </div>
    )
}

export default MultipleSelectMenu
