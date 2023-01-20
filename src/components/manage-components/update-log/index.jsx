import UpdatesCard from "../recent-udpates-card"

const UpdateLog = () => {
    return (
        <div className='h-full w-full flex-col'>
            <div className='w-full h-8 rounded-t-md text-sm bg-gray-50 font-bold border border-gray-500 flex justify-start items-center px-3'><p>18th January, Wednesday, 2023</p></div>
            <div className='grow bg-gray-50 border border-gray-500 border-t-0'>
                <UpdatesCard />
                <hr className='border-t border-gray-400 mx-5' />
                <UpdatesCard />
            </div>
        </div>
    )
}

export default UpdateLog
