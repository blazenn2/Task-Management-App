import { FiInfo, FiSettings, FiTrello } from "react-icons/fi";
import { TiWarningOutline } from "react-icons/ti";

const Card = () => {
    return (
        <div className='w-full flex h-1/3 hover:bg-slate-500 group transition-all duration-75'>
            <div className='h-full w-[10%] flex items-center justify-center'>
                <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center"><FiTrello className='scale-150 text-gray-500' /></button>
            </div>
            <div className='h-full flex flex-col items-start justify-center'>
                <h3 className='font-medium group-hover:text-white'>Artilytics</h3>
                <p className="text-xs group-hover:text-white">Started Date: 12/01/2022</p>
                <p className="text-xs group-hover:text-white">Expected End Date: 12/01/2022</p>
            </div>
            <div className="h-full grow flex items-center justify-center group-hover:invisible animate-pulse">
                <div className="px-4 flex items-center justify-center">
                    <TiWarningOutline className="scale-150 text-red-700" />
                </div>
                <p className="text-red-700 text-sm font-semibold">Time exceeded!</p>
            </div>
            <div className="h-full w-[10%] flex items-center justify-center">
                <button><FiSettings className="scale-150 text-gray-50" /></button>
            </div>
            <div className="h-full w-[10%] flex items-center justify-center">
                <button><FiInfo className="scale-150 text-gray-50" /></button>
            </div>
        </div>
    )
}

export default Card
