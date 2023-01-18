import React from 'react';
// import * as Icons from 'react-icons/fi';

const CircularButton = (props) => {

    return (
        <div>
            <button className={`${props.className} w-8 h-8 bg-gray-50 border border-gray-600 hover:border-slate-500 hover:bg-slate-500 group rounded-full flex items-center justify-center transition-all duration-100 message-clip`}>
                {props.icon}
            </button>
        </div>
    )
}

export default CircularButton
