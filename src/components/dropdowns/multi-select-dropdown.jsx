import { useRef } from "react";
import { rotateArrowOfButton, toggleDropdownMenu } from "../../utils/functions";
import CheckBox from "../inputs/checkbox"
import MultipleSelectButton from "./multiple-select-button"
import MultipleSelectMenu from "./multiple-select-menu"
import { addRemoveParticipants } from "../../utils/functions";

const MultiSelectDropdown = (props) => {
    const selectMenu = useRef();
    const selectBtn = useRef();

    return (
        <div className="relative w-full">
            <MultipleSelectButton className={props.btnCSS} text={props.buttonText} reference={selectBtn} onClick={e => {
                rotateArrowOfButton(e.target);
                toggleDropdownMenu(selectMenu.current);
            }} />
            <MultipleSelectMenu reference={selectMenu}>
                {props.options.map((option, i) => <CheckBox key={i} onClick={e => addRemoveParticipants(e.target.checked, e.target.value, props.state, props.setState) }  value={option} text={option} />)}
            </MultipleSelectMenu>
        </div>
    )
}

export default MultiSelectDropdown
