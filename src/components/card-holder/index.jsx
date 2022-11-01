import React from 'react'
import Card from '../card'
import { FiX } from "react-icons/fi";

const CardHolder = (props) => {
    const headingGradient = ["from-fuchsia-400 to-pink-600", "from-blue-300 to-indigo-500", "from-green-300 to-blue-300", "from-red-400 to-amber-400", "from-pink-400 to-blue-400", "from-orange-300 to-amber-600"];
    const randomIndex = Math.floor(Math.random() * headingGradient.length);
    return (
        <div className='max-h-full border w-[23%] grid gap-2 shadow-xl pb-2 rounded-md'>
            <div className={`w-full h-1 rounded-t bg-gradient-to-r ${headingGradient[randomIndex]} `}></div>
            <div className="w-11/12 justify-self-center flex items-center justify-between">
                <h1 className="text-lg text-gray-500">{props.title}</h1>
                <button>
                    <FiX className='text-gray-500' />
                </button>
            </div>
            <div className="space-y-3 w-full flex flex-col items-center h-[29rem] overflow-y-scroll">
                {props.card?.map((value, i) => <Card key={i} text={value.text} piority={value.piority} />)}
            </div>
        </div>
    )
}

export default CardHolder
