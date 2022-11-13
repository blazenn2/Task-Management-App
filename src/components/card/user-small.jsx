import UserCircle from "../user-picture"
import { userSmallCSS } from "./componentCSS"

const UserSmall = (props) => {
    return (
        <div className={userSmallCSS(props.className)}>
            <UserCircle buttonClassName="cursor-default" />
            <p className="text-xs md:text-sm lg:text-base w-full">{props.name}</p>
        </div>
    )
}

export default UserSmall
