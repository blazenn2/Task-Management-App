import UpdatesCard from "../recent-udpates-card"

const UpdateLog = (props) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const formattedDate = `${props.logDate.getDate()} ${months[props.logDate.getMonth()]}, ${days[props.logDate.getDay()]}, ${props.logDate.getFullYear()}`;
    return (
        <div className='w-full flex-col'>
            <div className='w-full h-8 rounded-t-md text-sm bg-gray-50 font-bold border border-gray-500 flex justify-start items-center px-3'><p>{formattedDate}</p></div>
            <div className='grow bg-gray-50 border border-gray-500 border-t-0'>
                <UpdatesCard project="Artilytics" name="Hamza Nawab" statusCode={1} date={new Date()} />
                <hr className='border-t border-gray-400 mx-5' />
                <UpdatesCard project="Artilytics" name="Bruce Wayne" statusCode={0} date={new Date()} />
                <hr className='border-t border-gray-400 mx-5' />
                <UpdatesCard project="Artilytics" name="Tony Stark" statusCode={2} date={new Date()} />
            </div>
        </div>
    )
}

export default UpdateLog
