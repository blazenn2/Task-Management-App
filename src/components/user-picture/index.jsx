import { FaUserAlt } from "react-icons/fa"
import {buttonStyle, iconStyle} from './element-styles'

const UserCircle = (props) => {
    return (
        <button className={buttonStyle(props.buttonClassName)}><FaUserAlt className={iconStyle(props.iconClassName)} /></button>
    )
}

export default UserCircle