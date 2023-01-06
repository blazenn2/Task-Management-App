import UserCircle from "../user-picture"

const CommentCard = (props) => {
    const convertedTime = `${("0" + new Date(props.dateTime).getDate()).slice(-2)}-${new Date(props.dateTime).toLocaleString('default', { month: 'long' }).split("").filter((_, i) => i <= 2).join("")}-${new Date(props.dateTime).getFullYear()} at ${new Date(props.dateTime).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}`;
    return (
        <>
            <div className="w-full flex items-start justify-between space-x-4">
                <UserCircle buttonClassName="cursor-default" />
                <div className="flex flex-col grow bg-slate-100 rounded-md space-y-1 p-2">
                    <p className="text-xs font-bold">{props.name}</p>
                    <p className="text-sm">{props.text}</p>
                    <p className="text-xs text-gray-500">{convertedTime}</p>
                </div>
            </div>
        </>
    )
}

export default CommentCard
