import React from 'react'
import Navigation from '../navigation'
import SideBar from '../side-bar'

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
