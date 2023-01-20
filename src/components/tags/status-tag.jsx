import { statusTagCSS } from "./componentCSS"


const StatusTag = (props) => {
    return (
        <span className={statusTagCSS(props.color, props.className)}>{props.text}</span>
    )
}

export default StatusTag
