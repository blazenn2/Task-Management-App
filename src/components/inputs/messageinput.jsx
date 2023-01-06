import { FiSend } from "react-icons/fi";

const MessageInput = (props) => {
    return (
        <>
            <input className="w-full rounded-3xl outline-none px-4 py-1 border border-gray-400" {...props} ref={props.reference} />
            <button onClick={props.onSubmit}>
                <FiSend className="scale-150 -translate-x-10 text-gray-600 hover:text-gray-700 active:text-gray-500" />
            </button>
        </>
    )
}

export default MessageInput
