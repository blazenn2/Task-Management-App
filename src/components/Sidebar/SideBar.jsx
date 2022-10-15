import React, { useState } from 'react'
import IconsData from './IconData'
import SidebarOption from './SidebarOption';
import * as Icons from 'react-icons/io';
import { IconContext } from "react-icons";

const SideBar = () => {
    const [isActive, setIsActive] = useState(null);
    console.log(isActive);
    return (
        <div className='w-[10%] bg-white h-full absolute top-0 z-0 flex flex-col'>
            <div className="bg-indigo-400 min-h-fit w-full flex items-center justify-center">
                <img src="./logo-light.svg" alt="" className='h-6 w-25 m-4 px-4' />
            </div>
            <div className="w-full h-full flex flex-col justify-between">
                <div className="">{IconsData.map((item, index) => <SidebarOption item={item} key={index} index={index} active={(isActive === index ? true : false)} setActive={setIsActive} />)}</div>
                <button className={`w-full h-24 flex items-center justify-center flex-col group ease-in-out duration-150 ${isActive === IconsData.length ? "border-l-8 border-indigo-400 -ml-1" : ""} `} onClick={() => setIsActive(IconsData.length)}>
                    <IconContext.Provider value={{ className: `w-1/2 h-1/3 ${isActive === IconsData.length ? "text-indigo-400" : "text-gray-300 group-hover:text-gray-400 group-active:text-gray-300"}` }}>
                        <Icons.IoIosSettings />
                    </IconContext.Provider>
                    <div className={`${isActive === IconsData.length ? "text-gray-400" : "text-gray-300 group-hover:text-gray-400 group-active:text-gray-300"}`}>Settings</div>
                </button>
            </div>
        </div>
    )
}

export default SideBar
