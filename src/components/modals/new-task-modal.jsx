import { AnimatePresence } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Modal from '.'
import DropDown from '../dropdowns/dropdown'
import MultiSelectDropdown from '../dropdowns/multi-select-dropdown'
import Input from '../inputs'
import UsernameTag from '../tags/username-tag'

const NewTaskModal = (props) => {
    // console.log("new task modal rendered!");
    const piority = useRef();
    const taskName = useRef();
    const date = useRef();

    const createNewTask = () => {
        const boardIndex = Number(props.data.current.board.id.split("-")[1]);
        const participantsArray = props.newTaskParticipants.filter(value => value.checked).map(value => value.name);
        const newBoardData = props.boardData.map((value, i) => {
            if (i === boardIndex) {
                value.cards.push({ title: taskName.current.value, piority: piority.current === "Low Piority" ? 0 : piority.current === "High Piority" ? 2 : 1, initiatedDate: new Date(date.current.value), participants: participantsArray, chats: [] })
            };
            return value;
        });
        props.setBoardData(newBoardData);
        props.setNewTaskParticipants(props.newTaskParticipants.map(value => {
            value.checked = false;
            return value;
        }));
        props.reference.current.triggerModal();
    };

    const editNewTask = () => {
        const boardIndex = Number(props.data.current.editCard.board);
        // const participantsArray = props.newTaskParticipants.filter(value => value.checked).map(value => value.name);
        const newBoardData = props.boardData.map((value, i) => {
            if (i === boardIndex) {
                value.cards = value.cards.map((card, cardIndex) => {
                    let returnCard = card;
                    if (cardIndex === Number(props.data.current.editCard.card)) {
                        returnCard = { title: taskName.current.value, piority: piority.current === "Low Piority" ? 0 : piority.current === "High Piority" ? 2 : 1, initiatedDate: new Date(date.current.value), participants: card.participants, chats: card.chats }
                    }
                    return returnCard;
                });
            };
            return value;
        });
        props.setBoardData(newBoardData);
        props.setNewTaskParticipants(props.newTaskParticipants.map(value => {
            value.checked = false;
            return value;
        }));
        props.setEditTask({ name: null, date: null, piority: null, participants: null });
        props.reference.current.triggerModal();
    };

    useEffect(() => {
        if (props.editTask.name !== null) {
            taskName.current.value = props.editTask.name;
            date.current.valueAsDate = new Date(Date.UTC(props.editTask.date.getFullYear(), props.editTask.date.getMonth(), props.editTask.date.getDate()));
            piority.current = props.editTask.piority;
        }
    }, [props.editTask])

    return (
        <Modal ref={props.reference} heading={props.editTask.name === null ? 'Add a new Task' : 'Edit Task'} buttonText="Save Changes" className={props.editTask.name !== null && `!w-1/2`} onSave={props.editTask.name !== null ? editNewTask : createNewTask}>
            <div className='flex md:flex-row flex-col justify-between grow p-3 w-full md:space-x-4'>
                <div className={`flex ${props.editTask.name !== null ? "md:w-full" : "md:w-1/2"} w-full flex-col space-y-4`}>
                    <Input labelClassName="p-0 md:p-1" text="Name" reference={taskName} />
                    <Input type="date" labelClassName="p-0 md:p-1" text="Date" reference={date} />
                    <div className='w-full flex items-center md:pl-1 space-x-4 relative'>
                        <span>Piority</span>
                        <DropDown options={["Low Piority", "Medium Piority", "High Piority"]} buttonText="Select Piority" btnCSS="w-40" dropdown={piority} editable={props.editTask.piority} />
                    </div>
                </div>
                {props.editTask.name === null && <>
                    <div className='w-px my-2 bg-slate-400 '></div>
                    <div className='relative md:w-1/2 space-y-2 flex flex-col'>
                        <div className='flex items-center space-x-4 w-full'>
                            <span className=''>Add Participants</span>
                            <div className='w-2/3'>
                                <MultiSelectDropdown btnCSS="sm:w-3/4 md:w-full" buttonText="Select Participants" state={props.newTaskParticipants} setState={props.setNewTaskParticipants} />
                            </div>
                        </div>
                        <div className='flex flex-wrap max-h-20 overflow-auto'>
                            <AnimatePresence>
                                {props.newTaskParticipants.map((value, i) => value.checked && <UsernameTag state={props.newTaskParticipants} setState={props.setNewTaskParticipants} key={i} name={value.name} />)}
                            </AnimatePresence>
                        </div>
                    </div>
                </>}
            </div>
        </Modal>
    )
}
const compare = (prevProps, nextProps) => {
    // console.log(prevProps.editTask, nextProps.editTask)
    return (JSON.stringify(prevProps.participantStateLength) === JSON.stringify(nextProps.participantStateLength) && (JSON.stringify(prevProps.editTask) === JSON.stringify(nextProps.editTask)));
};

export default React.memo(NewTaskModal, compare)
