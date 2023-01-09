import { AnimatePresence } from 'framer-motion'
import React, { useRef } from 'react'
import Modal from '.'
import DropDown from '../dropdowns/dropdown'
import MultiSelectDropdown from '../dropdowns/multi-select-dropdown'
import Input from '../inputs'
import UsernameTag from '../tags/username-tag'

const NewTaskModal = (props) => {
    console.log("new task modal rendered!");
    const piority = useRef();
    const taskName = useRef();

    const createNewTask = () => {
        const boardIndex = Number(props.data.current.board.id.split("-")[1]);
        const participantsArray = props.newTaskParticipants.filter(value => value.checked).map(value => value.name);
        const newBoardData = props.boardData.map((value, i) => {
            if (i === boardIndex) {
                value.cards.push({ title: taskName.current.value, piority: piority.current === "Low Piority" ? 0 : piority.current === "High Piority" ? 2 : 1, participants: participantsArray, chats: [] })
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

    return (
        <Modal ref={props.reference} heading="Add a new Task" buttonText="Save Changes" onSave={createNewTask}>
            <div className='flex md:flex-row flex-col justify-between grow p-3 w-full md:space-x-4'>
                <div className='flex md:w-1/2 w-full flex-col space-y-4'>
                    <Input labelClassName="p-0 md:p-1" text="Name" reference={taskName} />
                    <div className='w-full flex items-center md:pl-1 space-x-4 relative'>
                        <span>Piority</span>
                        <DropDown options={["Low Piority", "Medium Piority", "High Piority"]} buttonText="Select Piority" btnCSS="w-40" choosePiority={piority} />
                    </div>
                </div>
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
            </div>
        </Modal>
    )
}
const compare = (prevProps, nextProps) => {
    return JSON.stringify(prevProps.participantStateLength) === JSON.stringify(nextProps.participantStateLength);
};

export default React.memo(NewTaskModal, compare)
