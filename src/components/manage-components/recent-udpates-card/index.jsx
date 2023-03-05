import { FaTrello } from 'react-icons/fa';
import StatusTag from '../../tags/status-tag';
import UserCircle from '../../user-picture';

const UpdatesCard = (props) => {
    const diffTime = Math.abs(new Date() - props.date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return (
        <div className='mx-5 py-5 flex'>
            <div className='h-full flex items-start justify-center'>
                <UserCircle buttonClassName="scale-150 cursor-default" />
            </div>
            <div className='px-7 flex flex-col justify-between items-start text-sm space-y-4'>
                {props.statusCode === 0 && <p className='font-light text-sm -mt-2 leading-8'>{props.name} <StatusTag text="completed" color="bg-green-500" /> the task <StatusTag text="Website Design" color="bg-blue-700" />.</p>}
                {props.statusCode === 1 && <p className='font-light text-sm -mt-2 leading-8'>{props.name} <StatusTag text="missed" color="bg-red-500" /> the <StatusTag text="Account Profile flow diagrams" color="bg-blue-700" /> task's deadline .</p>}
                {props.statusCode === 2 && <p className='font-light text-sm -mt-2 leading-8'>{props.name} <StatusTag text="commented" color="bg-gray-400" /> on the thread of task <StatusTag text="Social Media Posts" color="bg-blue-700" />. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quibusdam odio incidunt et laboriosam unde deleniti quisquam ipsam fugit. Aut, explicabo. Quo exercitationem facere repudiandae consequuntur asperiores odit dolorem esse magni.</p>}
                <div className='bg-violet-500 py-1 px-2 rounded-md flex space-x-2 items-center'>
                    <FaTrello className='text-white' />
                    <p className='text-white font-semibold text-xs'>{props.project}</p>
                </div>
            </div>
            <div className='grow flex items-start justify-end'>
                <p className='text-xs font-extralight'>{diffDays === 1 ? "Today" : diffDays === 2 ? "Yesterday" : diffDays <= 6 ? "A few days ago" : "A few weeks ago"}</p>
            </div>
        </div>
    )
}

export default UpdatesCard
