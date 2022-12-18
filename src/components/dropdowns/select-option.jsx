import { selectOptionCSS } from "./componentCSS"

const SelectOption = (props) => {
    return (
        <div className={selectOptionCSS(props.className)} onClick={props.onClick}>
            {props.text}
        </div>
    )
}

export default SelectOption
