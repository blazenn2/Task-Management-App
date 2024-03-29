import React from 'react'
import { motion, AnimatePresence } from "framer-motion"
import { BiBuildings } from "react-icons/bi";
import { FiPlus, FiSettings } from "react-icons/fi";
// import useBoardData from "../custom hooks/useBoardData";
import Card from '../components/manage-components/project-card';
import CircularButton from '../components/circular-icon-button';
// import UserCircle from '../components/user-picture';
// import { FaTrello } from 'react-icons/fa';
// import UpdatesCard from '../components/manage-components/recent-udpates-card';
import UpdateLog from '../components/manage-components/update-log';


const Manage = () => {
    // const [boardData, setBoardData] = useBoardData();
    // console.log(boardData);
    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute bottom-0 right-0 flex grow flex-col items-end md:w-[90%] w-10/12 h-screen pt-20 px-6 bg-violet-100 overflow-y-auto">
                <div className="w-full py-5 mb-3 text-3xl text-gray-500 px-3">Manage Your Projects</div>
                <div className='w-full flex items-center justify-center space-x-3 pb-10'>
                    <button className='w-10 h-10 flex items-center justify-center border border-gray-600 rounded-full bg-violet-50'>
                        <BiBuildings className='scale-150 text-gray-600' />
                    </button>
                    <h1 className='font-bold text-2xl'>Blutech Consulting</h1>
                    <button className='w-9 h-9 flex items-center justify-center border border-gray-600 rounded-full bg-violet-50'>
                        <FiSettings className='scale-125 text-gray-600' />
                    </button>
                </div>
                <div className='w-full grow flex justify-between'>
                    <div className='h-full w-[45%] flex flex-col items-start justify-between'>
                        <div className='h-[45%] w-full'>
                            <div className='w-full flex flex-col justify-start space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <h2 className='text-lg font-semibold'>Projects</h2>
                                    <CircularButton icon={<FiPlus className='scale-125 text-gray-500 group-hover:text-gray-50' />} />
                                </div>
                                <div className='border border-slate-400 w-full h-52 rounded-md bg-gray-50 overflow-y-auto'>
                                    <Card />
                                    <Card />
                                    <Card />
                                    <Card />
                                </div>
                            </div>
                        </div>
                        <div className='h-[45%] w-full'>
                            <div className='w-full flex flex-col justify-start space-y-3'>
                                <div className='flex items-center justify-between'>
                                    <h2 className='text-lg font-semibold'>Upcoming Events</h2>
                                    <CircularButton icon={<FiPlus className='scale-125 text-gray-500 group-hover:text-gray-50' />} />
                                </div>
                                <div className='border border-slate-400 w-full h-52 rounded-md bg-gray-50 overflow-y-auto'>
                                    <div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='h-full w-[45%] pb-4'>
                        <div className='w-full flex flex-col justify-start space-y-3 items-start'>
                            <div className='flex items-center justify-between'>
                                <h2 className='text-lg font-semibold'>Recent Updates</h2>
                            </div>
                            <div className='h-[32rem] overflow-y-scroll space-y-5'>
                                <UpdateLog logDate={new Date()} />
                                <UpdateLog logDate={new Date()} />
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Manage
