import { multiSelectMenuCSS } from "./componentCSS"

const MultipleSelectMenu = (props) => {
    return (
        <div className={multiSelectMenuCSS(props.className)} id={props.id} ref={props.reference}>
            {props.children}
        </div>
    )
}

export default MultipleSelectMenu
