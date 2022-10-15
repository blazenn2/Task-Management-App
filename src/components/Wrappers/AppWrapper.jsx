import React from 'react'
import Navigation from '../Navigation/Navigation'
import SideBar from '../Sidebar/SideBar'

const AppWrapper = (props) => {
    return (
        <div className='h-screen'>
            <Navigation />
            <SideBar />
            {props.children}
        </div>
    )
}

export default AppWrapper
