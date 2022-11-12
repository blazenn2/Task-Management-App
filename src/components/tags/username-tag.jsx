import { FiX } from "react-icons/fi";
import { usernameTagCSS } from "./componentCSS";

const UsernameTag = (props) => {
    return (
        <div className={usernameTagCSS(props.className)}>
            <p>{props.name}</p>
            <button>
                <FiX onClick={props.onClose} />
            </button>
        </div>
    )
}

export default UsernameTag
