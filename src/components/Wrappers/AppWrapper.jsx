import React from 'react'
import Navigation from '../Navigation/Navigation'

const AppWrapper = (props) => {
    return (
        <div>
            <Navigation />
            {props.children}
        </div>
    )
}

export default AppWrapper
