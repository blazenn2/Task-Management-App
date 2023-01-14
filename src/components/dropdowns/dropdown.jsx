import { useEffect, useRef } from "react";
import { clickSelectHandler, rotateArrowOfButton, toggleDropdownMenu } from "../../utils/functions";
import SelectButton from "./select-button"
import SelectMenu from "./select-menu"
import SelectOption from "./select-option";

const DropDown = (props) => {
    const addCardBtn = useRef();
    const addCardMenu = useRef();

    useEffect(() => {
        if (props.editable !== null) {
            let piority;
            if (props.editable === 0) piority = "Low Piority";
            if (props.editable === 1) piority = "Medium Piority";
            if (props.editable === 2) piority = "High Piority";
            clickSelectHandler(piority, addCardBtn.current);
        };
    }, []);

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
                    props.dropdown.current = e.target.textContent;
                }} />)}
            </SelectMenu>
        </div>
    )
}

export default DropDown
