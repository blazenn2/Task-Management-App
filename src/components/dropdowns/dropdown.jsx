import { useRef } from "react";
import { clickSelectHandler, rotateArrowOfButton, toggleDropdownMenu } from "../../utils/functions";
import SelectButton from "./select-button"
import SelectMenu from "./select-menu"
import SelectOption from "./select-option";

const DropDown = (props) => {
    const addCardBtn = useRef();
    const addCardMenu = useRef();

    return (
        <div className='relative'>
            <SelectButton className={props.btnCSS} text={props.buttonText} onClick={e => {
                rotateArrowOfButton(e.target);
                toggleDropdownMenu(addCardMenu.current);
            }} reference={addCardBtn} />
            <SelectMenu reference={addCardMenu}>
                {props.options.map((option, i) => <SelectOption key={i} text={option} onClick={e => {
                    clickSelectHandler(e.target, addCardBtn.current);
                    toggleDropdownMenu(addCardMenu.current);
                    rotateArrowOfButton(addCardBtn.current);
                }} />)}
            </SelectMenu>
        </div>
    )
}

export default DropDown
