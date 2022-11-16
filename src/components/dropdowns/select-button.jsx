import { multiSelectBtnCSS } from "./componentCSS";
import { FiChevronUp } from "react-icons/fi";

const SelectButton = (props) => {

    return (
        <button onClick={props.onClick} id={props.id} className={multiSelectBtnCSS(props.className)} >
            <p className='text-xs md:text-sm lg:text-base'>{props.text}</p>
            <FiChevronUp className={`transition-all rotate-180 ${props.arrow}`} />
        </button>
    )
}

export default SelectButton
