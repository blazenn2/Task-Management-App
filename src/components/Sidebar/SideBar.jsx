import React, { useState } from 'react'
import IconsData from './IconData'
import SidebarOption from './SidebarOption';
import * as Icons from 'react-icons/io';
import { IconContext } from "react-icons";
import { Link } from 'react-router-dom';

const SideBar = () => {
    const [isActive, setIsActive] = useState(null);
    return (
        <div className='w-[10%] bg-white h-full absolute top-0 z-0 flex flex-col'>
            <div className="bg-indigo-400 min-h-fit w-full flex items-center justify-center">
                <Link to="/"><img src="./logo-light.svg" alt="" className='h-6 w-25 my-4 px-4 hidden md:block cursor-pointer' onClick={() => setIsActive(null)} /></Link>
                <Link to="/"><img src="./mobile-logo.svg" alt="" className='h-5 w-25 m-3 px-3 md:hidden block cursor-pointer' onClick={() => setIsActive(null)} /></Link>
            </div>
            <div className="w-full h-full flex flex-col justify-between">
                <div className="">{IconsData.map((item, index) => <SidebarOption item={item} key={index} index={index} active={(isActive === index ? true : false)} setActive={setIsActive} route={item.title.toLowerCase()} />)}</div>
                <Link to="/settings">
                    <button className={`w-full h-24 flex items-center justify-center flex-col group ease-in-out duration-150 ${isActive === IconsData.length ? "md:border-l-8 border-l-2 border-indigo-400 -ml-1" : ""} `} onClick={() => setIsActive(IconsData.length)}>
                        <IconContext.Provider value={{ className: `w-1/2 h-1/3 ${isActive === IconsData.length ? "text-indigo-400" : "text-gray-300 group-hover:text-gray-400 group-active:text-gray-300"}` }}>
                            <Icons.IoIosSettings />
                        </IconContext.Provider>
                        <div className={`${isActive === IconsData.length ? "text-gray-400" : "text-gray-300 group-hover:text-gray-400 group-active:text-gray-300"} md:block hidden`}>Settings</div>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default SideBar
