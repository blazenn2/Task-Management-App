import { inputLabelCSS, inputCSS } from "./componentCSS"

const Input = (props) => {
    return (
        <label className={inputLabelCSS(props.labelClassName)}>
            <span className="cursor-pointer flex grow">{props.text}</span>
            <input type={props.type ? props.type : "text"} className={inputCSS(props.className)} id={props.id} placeholder={props.placeholder} value={props.value} ref={props.reference} onChange={props.onChange} disabled={props.disabled} required={props.required} />
        </label>
    )
}

export default Input
