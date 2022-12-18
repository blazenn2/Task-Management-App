import React, { useState } from 'react'
import IconsData from './IconData'
import SidebarOption from './SidebarOption';
import * as Icons from 'react-icons/io';
import { IconContext } from "react-icons";
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
    let activeLocation = null;
    const location = useLocation();
    if (location.pathname.split("/")[1] && location.pathname.split("/")[1] !== "") IconsData.forEach((value, i) => value.title.toLowerCase() === location.pathname.split("/")[1] && (activeLocation = i))
    const [isActive, setIsActive] = useState(activeLocation);
    return (
        <div className='md:w-[10%] w-2/12 bg-white h-screen md:-translate-y-16 -translate-y-11 z-40 flex flex-col'>
            <div className="bg-indigo-400 w-full flex items-center justify-center" onClick={() => setIsActive(null)}>
                <Link to="/"><img src="./logo-light.svg" alt="" className='h-8 my-4 px-4 hidden md:block cursor-pointer'  /></Link>
                <Link to="/"><img src="./mobile-logo.svg" alt="" className='h-5 m-3 px-3 md:hidden block cursor-pointer'  /></Link>
            </div>
            <div className="w-full h-screen flex flex-col justify-between overflow-auto">
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
