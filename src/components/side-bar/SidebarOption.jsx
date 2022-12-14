import React from 'react'
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const SidebarOption = ({ item, setActive, index, active, route }) => {
    const makeActive = () => setActive(index);
    return (
        <Link to={`/${route}`}>
            <button className={`w-full h-24 flex items-center justify-center flex-col group ease-in-out duration-150 ${active ? "border-l-8 border-indigo-400 -ml-1" : ""} `} onClick={makeActive}>
                <IconContext.Provider value={{ className: `md:w-1/2 w-1/3 md:h-1/3 h-1/3 ${active ? "text-indigo-400" : "text-gray-300 group-hover:text-gray-400 group-active:text-gray-300"}` }}>
                    {item.icon}
                </IconContext.Provider>
                <div className={`${active ? "text-gray-400" : "text-gray-300 group-hover:text-gray-400 group-active:text-gray-300"} md:block hidden`}>{item.title}</div>
            </button>
        </Link>
    )
}

export default SidebarOption
