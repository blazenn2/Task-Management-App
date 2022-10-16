import React from 'react'
import CardHolder from '../components/CardHolder/CardHolder';

const Boards = () => {
    console.log("Boards");
    return (
        <div className="absolute right-0 w-[90%] h-full py-3 px-6 bg-violet-100">
            <div className="w-full py-5 mb-3 text-3xl text-gray-500">Studio Board</div>
            <div className='flex flex-wrap items-start justify-between'>
                <CardHolder />
                <CardHolder />
                <CardHolder />
                <CardHolder />
            </div>
        </div>
    )
}

export default Boards
