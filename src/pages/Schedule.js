import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react';
import { FiChevronDown, FiChevronLeft, FiChevronRight } from "react-icons/fi"

const Schedule = () => {
    console.log("Schedule just rendered!");
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const daysName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const date = new Date();
    const [calendar, setCalendar] = useState([]);
    const [month, setMonth] = useState(date.getMonth());
    const [year, setYear] = useState(date.getFullYear());

    const getDaysOfMonth = (month, year) => {
        const days = [];
        const daysInMonth = new Date(year, month, 0).getDate();

        // Loop to add dates to calendar
        for (let i = 1; i <= daysInMonth; i++) {
            const day = new Date(`${month.toString().length === 1 ? "0" + month.toString() : month}/${i.toString().length === 1 ? "0" + i.toString() : i}/${year}`).toLocaleDateString("ENG", { weekday: 'long' });
            if (day !== "Sunday" && i === 1) {
                const prevSunday = daysName.indexOf(day) - daysName.indexOf("Sunday");
                // Loop that will add dates that are overlapping with the first week of the month
                for (let j = prevSunday - 1; j >= 0; j--) {
                    const d = new Date(year, month - 1, 0);
                    d.setDate(d.getDate() - j);
                    const day = d.toLocaleDateString("ENG", { weekday: 'long' });
                    const date = d.getDate().toString().length === 1 ? "0" + d.getDate().toString() : d.getDate().toString();
                    const dateAndDay = { date: date, day: day, isOutOfMonth: true };
                    days.push(dateAndDay)
                };
            };
            const dateAndDay = { date: `${i.toString().length === 1 ? "0" + i.toString() : i}`, day: day };
            days.push(dateAndDay);
        };

        // A check with a loop that will add all dates that are overlapping the last week of the month
        if (days.length !== 35) {
            for (let i = 1; i <= (35 - days.length); i++) {
                const d = new Date(year, month, i);
                const day = d.toLocaleDateString("ENG", { weekday: 'long' });
                const date = d.getDate().toString().length === 1 ? "0" + d.getDate().toString() : d.getDate().toString();
                const dateAndDay = { date: date, day: day, isOutOfMonth: true };
                days.push(dateAndDay);
            }
        }
        setCalendar(days);
    };

    useEffect(() => {
        getDaysOfMonth(month + 1, year);
    }, [])

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute bottom-0 right-0 flex grow flex-col items-end md:w-[90%] w-10/12 h-screen pt-20 px-6 bg-violet-100 overflow-y-auto">
                <div className="w-full py-5 mb-3 text-3xl text-gray-500 px-3">Calendar</div>
                <div className='w-full h-full mb-3 bg-violet-50 shadow-2xl rounded-2xl flex flex-col overflow-auto'>
                    <div className='bg-violet-100 h-20 m-5 rounded-xl shadow-md text-xl text-gray-600 flex items-center px-10 justify-between'>
                        <button><FiChevronLeft className='scale-150 text-gray-600' /></button>
                        <div className='flex items-center justify-between space-x-3'>
                            <span className='text-center h-1/2 font-medium text-2xl uppercase'>{`${monthNames[month]} ${year}`}</span>
                            <input type="date" className="" />
                            <button className=''><FiChevronDown /></button>
                        </div>
                        <button><FiChevronRight className='scale-150 text-gray-600 outline-none' /></button>
                    </div>
                    <div className='w-full grid grid-cols-7 gap-1'>
                        {daysName.map(days => <div className='justify-self-end text-lg font-semibold uppercase p-2'>{days.substring(0, 3)}</div>)}
                    </div>
                    <div className='h-full w-full'>
                        <div className='w-full h-full grid grid-cols-7 grid-rows-5 justify-items-stretch items-stretch gap-1'>
                            {calendar.map(day => {
                                if (day.isOutOfMonth) {
                                    return <div className='justify-self-end text-xl text-slate-300 p-2'>{day.date}</div>
                                }
                                return <div className='justify-self-end text-xl text-gray-500 p-2'>{day.date}</div>
                            })}

                            {/* <div className='justify-self-end'>02</div> */}
                        </div>
                    </div>
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Schedule
