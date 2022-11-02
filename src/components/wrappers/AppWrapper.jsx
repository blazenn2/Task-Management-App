import React from 'react'
import Navigation from '../navigation'
import SideBar from '../side-bar'
import { Outlet } from 'react-router-dom'

const AppWrapper = (props) => {
    return (
        <div className='h-screen flex flex-wrap grow'>
            <Navigation />
            <SideBar />
            {props.children}
            <Outlet />
        </div>
    )
}

export default AppWrapper
