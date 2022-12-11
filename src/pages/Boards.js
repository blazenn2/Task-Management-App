import React, { useRef, useState } from 'react'
import CardHolder from '../components/card-holder'
import { motion, AnimatePresence } from "framer-motion"
import Modal from '../components/modals';
import UserSmall from '../components/card/user-small';
import UsernameTag from '../components/tags/username-tag';
import Input from '../components/inputs';
import DropDown from '../components/dropdowns/dropdown';
import MultiSelectDropdown from '../components/dropdowns/multi-select-dropdown';
import { FaPlus } from 'react-icons/fa';


const Boards = () => {
    // Refs for participants
    const participantsModal = useRef();
    const boardNumber = useRef();
    const cardNumber = useRef();

    // Refs for adding board
    const addBoardModal = useRef();
    const boardInput = useRef();

    // Refs for adding a new task
    const addCardModal = useRef();
    const currentBoard = useRef();
    const piority = useRef();
    const taskName = useRef();

    const [boardData, setBoardData] = useState([
        { id: "21jk3j21", title: "Backlog", cards: [{ text: "Company website redesign.", piority: 0, participants: ["Hamza Nawab", "Rahim Nawab"] }, { text: "Mobile app login process prototype.", piority: 1, participants: ["Bruce Wayne"] }, { text: "Onboarding designs.", piority: 2, participants: "Tony Stark" }] },
        { id: "3h5lkhklk", title: "In Process", cards: [{ text: "Research and strategy for upcoming development.", piority: 2, participants: ["Tony Stark"] }, { text: "Account profile flow diagrams.", piority: 1, participants: ["Bruce Wayne", "Tony Stark", "Hamza Nawab"] }, { text: "Slide templates for client pitch project.", piority: 0, participants: ["Hamza Nawab", "Tony Stark"] }, { text: "Review administrator console designs.", piority: 0, participants: "Bruce Wayne" }] },
        { id: "jkl12j4d2", title: "Review", cards: [{ text: "Dashboard layout designs.", piority: 1, participants: ["Rahim Nawab", "Khuzaima Nawab"] }, { text: "Social media posts.", piority: 2, participants: ["Rahim Nawab", "Hamza Nawab", "Khuzaima Nawab", "Bruce Wayne", "Tony Stark"] }, { text: "Shopping cart and product catalog wireframes.", piority: 0, participants: ["Khuzaima Nawab"] }, { text: "End user flow charts.", piority: 1, participants: ["Bruce Wayne", "Rahim Nawab"] }] },
        { id: "h12uhuk12", title: "Complete", cards: [{ text: "Review client spec document and give feedback.", piority: 0, participants: ["Hamza Nawab", "Tony Stark"] }, { text: "Navigation designs.", piority: 1, participants: ["Hamza Nawab"] }, { text: "User profile prototypes.", piority: 2, participants: [] }, { text: "Create style guide based on previous feedback.", piority: 2, participants: ["Rahim Nawab", "Hamza Nawab"] }] },
    ]);
    const [newTaskParticipants, setNewTaskParticipants] = useState([{ name: "Hamza Nawab", checked: false }, { name: "Rahim Nawab", checked: false }, { name: "Khuzaima Nawab", checked: false }, { name: "Tony Stark", checked: false }, { name: "Bruce Wayne", checked: false }]);
    const [addRemoveParticipants, setAddRemoveParticipants] = useState([{ name: "Hamza Nawab", checked: false }, { name: "Rahim Nawab", checked: false }, { name: "Khuzaima Nawab", checked: false }, { name: "Tony Stark", checked: false }, { name: "Bruce Wayne", checked: false }]);
    const [participantsList, setParticipantsList] = useState([]);

    const removeBoardHandler = (index, e) => setBoardData(boardData.filter((_, i) => i !== index));

    // <========= Functions to trigger modals ==========> //
    const triggerParticipantsModal = (e) => {
        participantsModal.current.triggerModal();
        cardNumber.current = e.target.closest(".card").id.split("-")[1];
        boardNumber.current = e.target.closest(".board").id.split("-")[1];
        const participants = boardData[boardNumber.current].cards[cardNumber.current].participants;
        setParticipantsList(participants);
        setAddRemoveParticipants(addRemoveParticipants.map(value => participants.includes(value.name) ? { ...value, checked: true } : { ...value, checked: false }));
    };

    const triggerAddCardModal = (e) => {
        addCardModal.current.triggerModal();
        currentBoard.current = e.target.closest(".board");
    };

    const triggerAddBoardModal = () => addBoardModal.current.triggerModal();

    // <========= Functions performing functionality on saving button =========> //

    // <========= For adding a new board =========> //
    const createNewBoard = () => {
        const obj = { id: Math.random().toString(36).slice(2), title: boardInput.current.value, cards: [] };
        setBoardData([...boardData, obj]);
        addBoardModal.current.triggerModal();
    };

    // <========= For adding a new task =========> //
    const createNewTask = () => {
        const boardIndex = Number(currentBoard.current.id.split("-")[1]);
        const participantsArray = newTaskParticipants.filter(value => value.checked).map(value => value.name);
        const newBoardData = boardData.map((value, i) => {
            if (i === boardIndex) {
                value.cards.push({ text: taskName.current.value, piority: piority.current === "Low Piority" ? 0 : piority.current === "High Piority" ? 2 : 1, participants: participantsArray })
            };
            return value;
        });
        setBoardData(newBoardData);
        setNewTaskParticipants(newTaskParticipants.map(value => {
            value.checked = false;
            return value;
        }));
        addCardModal.current.triggerModal();
    };

    // <========= For adding/removing participants from a task =========> //
    const manuplateParticipants = () => {
        participantsModal.current.triggerModal();
        const participants = addRemoveParticipants.filter(value => value.checked).map(value => value.name);
        setBoardData(boardData.map((value, i) => {
            if (i === Number(boardNumber.current)) {
                value.cards[cardNumber.current].participants = participants;
            }
            return value;
        }));
    };

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute bottom-0 right-0 flex grow flex-col items-end md:w-[90%] w-10/12 h-screen pt-20 px-6 bg-violet-100 overflow-auto">
                {/* Modal of adding/remove participant for specific cards button */}
                <Modal ref={participantsModal} heading="Assign/Dismiss Participants" buttonText="Save changes" onSave={manuplateParticipants}>
                    <div className='flex justify-between grow w-full p-3 space-x-4'>
                        <div className='relative w-1/2 space-y-2'>
                            <h2 className='lg:text-lg md:text-base text-sm font-semibold'>Add/Remove Participants</h2>
                            <MultiSelectDropdown buttonText="Select Participants" state={addRemoveParticipants} setState={setAddRemoveParticipants} />
                            <div className='flex flex-wrap grow max-h-32 overflow-auto'>
                                <AnimatePresence>
                                    {addRemoveParticipants.map((value, i) => value.checked && <UsernameTag state={addRemoveParticipants} setState={setAddRemoveParticipants} key={i} name={value.name} />)}
                                </AnimatePresence>
                            </div>
                        </div>
                        <div className='w-px my-2 bg-slate-400'></div>
                        <div className='w-2/4 flex flex-col space-y-2'>
                            <h3 className='lg:text-lg md:text-base text-sm font-semibold'>Participants List</h3>
                            <div className='border border-slate-500 rounded-md flex flex-col items-center justify-start grow max-h-44 w-full overflow-y-auto'>
                                {participantsList.map((value, i) => <UserSmall key={i} name={value} />)}
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* Modal of adding a new task to the board */}
                <Modal ref={addCardModal} heading="Add a new Task" buttonText="Save Changes" onSave={createNewTask}>
                    <div className='flex justify-between grow p-3 w-full space-x-4'>
                        <div className='flex w-1/2 flex-col space-y-4'>
                            <Input text="Name" reference={taskName} />
                            <div className='w-full flex items-center pl-2 space-x-4 relative'>
                                <span>Piority</span>
                                <DropDown options={["Low Piority", "Medium Piority", "High Piority"]} buttonText="Select Piority" btnCSS="w-40" choosePiority={piority} />
                            </div>
                        </div>
                        <div className='w-px my-2 bg-slate-400'></div>
                        <div className='relative w-1/2 space-y-2 flex flex-col'>
                            <div className='flex items-center space-x-4 w-full'>
                                <span className='lg:text-base md:text-sm text-xs'>Add Participants</span>
                                <div className='w-2/3'>
                                    <MultiSelectDropdown buttonText="Select Participants" state={newTaskParticipants} setState={setNewTaskParticipants} />
                                </div>
                            </div>
                            <div className='flex flex-wrap max-h-20 overflow-auto'>
                                <AnimatePresence>
                                    {newTaskParticipants.map((value, i) => value.checked && <UsernameTag state={newTaskParticipants} setState={setNewTaskParticipants} key={i} name={value.name} />)}
                                </AnimatePresence>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* Modal for adding a new board */}
                <Modal ref={addBoardModal} heading="Add a new Board" buttonText="Save Changes" onSave={createNewBoard}>
                    <div className='flex justify-start items-center w-full grow'>
                        <Input text="Board Name" className="w-[85%]" reference={boardInput} />
                    </div>
                </Modal>
                <div className="w-full py-5 mb-3 text-3xl text-gray-500 px-3">Studio Board</div>
                <div className='flex space-x-4 h-[85%] min-h-[28rem] overflow-x-auto w-full px-3'>
                    <AnimatePresence>
                        {boardData.length > 0 ? boardData.map((value, i) => <CardHolder addTaskHandler={triggerAddCardModal} triggerModal={triggerParticipantsModal} key={value.title} id={value.id} index={i} title={value.title} card={value.cards} removeBoard={removeBoardHandler} changeData={setBoardData} data={boardData} />) : <h1>No boards</h1>}
                    </AnimatePresence>
                </div>
                <div className='fixed bottom-5 right-5 bg-gradient-to-br from-blue-400 to-indigo-300 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:brightness-110 active:brightness-90 z-50' onClick={e => triggerAddBoardModal()}><FaPlus className='text-white scale-150 p-1 md:p-0' /></div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Boards
