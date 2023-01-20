import { FaTrello } from 'react-icons/fa';
import StatusTag from '../../tags/status-tag';
import UserCircle from '../../user-picture';

const UpdatesCard = (props) => {
    return (
        <div className='h-24 mx-5 py-5 flex'>
            <div className='h-full flex items-start justify-center'>
                <UserCircle buttonClassName="scale-150 cursor-default" />
            </div>
            <div className='px-5 flex flex-col justify-between items-start text-sm space-y-4'>
                <p className='font-light text-sm'>Hamza <StatusTag text="completed" color="bg-green-500" /> the task <StatusTag text="Website Design" color="bg-blue-700" />.</p>
                <div className='bg-violet-500 py-1 px-2 rounded-md flex space-x-2 items-center'>
                    <FaTrello className='text-white' />
                    <p className='text-white font-semibold text-xs'>{props.project}</p>
                </div>
            </div>
            <div className='grow flex items-start justify-end'>
                <p className='text-sm font-extralight'>a day ago.</p>
            </div>
        </div>
    )
}

export default UpdatesCard
