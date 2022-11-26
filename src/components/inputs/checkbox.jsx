import { checkboxLabelCSS, checkboxInputCSS } from "./componentCSS"

const CheckBox = (props) => {
    return (
        <label className={checkboxLabelCSS(props.className)}>
            <input type={"checkbox"} id={props.id} checked={props.checked} onChange={props.onChange} name={props.name} value={props.value} disabled={props.disabled} onClick={props.onClick}  className={checkboxInputCSS(props.className)} />
            <span className="lg:text-base md:text-sm text-xs">{props.text}</span>
        </label>
    )
}

export default CheckBox
