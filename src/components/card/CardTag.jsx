import { cardTagCSS } from './TagCSS'

const CardTag = (props) => {
    return (
        <div className={cardTagCSS(props.piority)}>{props.piority === 0 ? "Low Piority" : (props.piority === 1 ? "Medium Piority" : "High Piority")}</div>
    )
}

export default CardTag
