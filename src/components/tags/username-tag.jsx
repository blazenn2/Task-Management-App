import { FiX } from "react-icons/fi";
import { usernameTagCSS } from "./componentCSS";
import { removeTag } from "../../utils/functions";

const UsernameTag = (props) => {
    return (
        <div className={usernameTagCSS(props.className)}>
            <p>{props.name}</p>
            <button>
                <FiX onClick={e => removeTag(props.state, props.setState, props.name)} />
            </button>
        </div>
    )
}

export default UsernameTag
