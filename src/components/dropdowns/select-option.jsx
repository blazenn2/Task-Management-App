const SelectOption = (props) => {
    return (
        <div className='flex items-center cursor-pointer md:space-x-4 space-x-2 w-full hover:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500 md:p-2 p-1' onClick={props.onClick}>
            {props.text}
        </div>
    )
}

export default SelectOption
