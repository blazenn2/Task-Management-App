import { selectMenuCSS } from "./componentCSS"

const SelectMenu = (props) => {
    return (
        <div className={selectMenuCSS(props.className)} id={props.id} onClick={props.onClick} ref={props.reference}>
            {props.children}
        </div>
    )
}

export default SelectMenu
