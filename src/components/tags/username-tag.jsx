import { FiX } from "react-icons/fi";
import { usernameTagCSS } from "./componentCSS";
import { removeTag } from "../../utils/functions";
import { motion } from "framer-motion";

const UsernameTag = (props) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className={usernameTagCSS(props.className)}>
            <p>{props.name}</p>
            <button>
                <FiX onClick={e => removeTag(props.state, props.setState, props.name)} />
            </button>
        </motion.div>
    )
}

export default UsernameTag
