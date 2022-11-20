import { useRef } from "react";
import { rotateArrowOfButton, toggleDropdownMenu } from "../../utils/functions";
import CheckBox from "../inputs/checkbox"
import MultipleSelectButton from "./multiple-select-button"
import MultipleSelectMenu from "./multiple-select-menu"

const MultiSelectDropdown = (props) => {
    const selectMenu = useRef();
    const selectBtn = useRef();

    return (
        <div className="relative">
            <MultipleSelectButton className={props.btnCSS} text={props.buttonText} reference={selectBtn} onClick={e => {
                rotateArrowOfButton(e.target);
                toggleDropdownMenu(selectMenu.current);
            }} />
            <MultipleSelectMenu reference={selectMenu}>
                {props.options.map((option, i) => <CheckBox key={i} text={option} />)}
            </MultipleSelectMenu>
        </div>
    )
}

export default MultiSelectDropdown
