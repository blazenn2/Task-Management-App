const CheckBox = (props) => {
    return (
        <label className="flex items-center cursor-pointer space-x-4 w-full hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500 p-2">
            <input type={"checkbox"} id={props.id} name={props.name} value={props.value} disabled={props.disabled} onClick={props.onClick} defaultChecked={props.defaultChecked} className={`${props.className} w-4 h-4 rounded-md disabled:bg-gray-500 disabled:cursor-not-allowed`} />
            <span>{props.text}</span>
        </label>
    )
}

export default CheckBox
