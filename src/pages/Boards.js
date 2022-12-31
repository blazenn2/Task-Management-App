import React, { useCallback, useRef, useState } from 'react'
import CardHolder from '../components/card-holder'
import { motion, AnimatePresence } from "framer-motion"
import Modal from '../components/modals';
import UserSmall from '../components/card/user-small';
import UsernameTag from '../components/tags/username-tag';
import Input from '../components/inputs';
import MessageInput from '../components/inputs/messageinput';
import DropDown from '../components/dropdowns/dropdown';
import MultiSelectDropdown from '../components/dropdowns/multi-select-dropdown';
import { FaPlus } from 'react-icons/fa';
import useBoardData from '../custom hooks/useBoardData';
import UserCircle from '../components/user-picture';
import CommentCard from '../components/card/comment-card';


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

    // Refs for comments
    const commentModal = useRef();
    // const commentCard = useRef({ card: 0, board: 0 });

    const [boardData, setBoardData] = useBoardData();

    const [newTaskParticipants, setNewTaskParticipants] = useState([{ name: "Hamza Nawab", checked: false }, { name: "Rahim Nawab", checked: false }, { name: "Khuzaima Nawab", checked: false }, { name: "Tony Stark", checked: false }, { name: "Bruce Wayne", checked: false }]);
    const [addRemoveParticipants, setAddRemoveParticipants] = useState([{ name: "Hamza Nawab", checked: false }, { name: "Rahim Nawab", checked: false }, { name: "Khuzaima Nawab", checked: false }, { name: "Tony Stark", checked: false }, { name: "Bruce Wayne", checked: false }]);
    const [participantsList, setParticipantsList] = useState([]);
    const [commentCard, setCommentCard] = useState({ card: 0, board: 0 });

    const removeBoardHandler = (index, e) => setBoardData(boardData.filter((_, i) => i !== index));

    // <========= Functions to trigger modals ==========> //
    const triggerCommentsModal = useCallback((e) => {
        const element = e.target.closest(".card");
        const card = Number(element.id.split("-")[1]);
        const board = Number(element.closest(".board").id.split("-")[1]);
        // commentCard.current = { card: card, board: board };
        setCommentCard(prevItem => ({ card: card, board: board }));
        console.log(commentCard.current);
        commentModal.current.triggerModal();
    }, [commentCard])

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
                {/* Modal of comments */}
                <Modal ref={commentModal} heading="Comments" buttonText="Close" onSave={() => commentModal.current.triggerModal()}>
                    <div className='w-full flex flex-col items-center justify-center space-y-2 py-3'>
                        <div className='w-11/12 rounded-md space-y-1'>
                            <p><span className='font-bold'>Task:</span> This is a new world :D</p>
                            <p><span className='font-bold'>Details:</span> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        </div>
                        <hr className='bg-gray-300 w-[95%]' />
                        <div className='w-8/12'>
                            <div className='max-h-80 space-y-2 overflow-y-auto mb-4'>
                                {boardData && boardData[commentCard.board]?.cards[commentCard.card].chats?.map((chat, i) => <CommentCard key={i} name={chat.name} dateTime={chat.dateTime} text={chat.text} />)}
                            </div>
                            <div className='w-full flex items-center justify-between space-x-2'>
                                <UserCircle buttonClassName="cursor-default" />
                                <MessageInput placeholder="Enter your comment ..." type="text" />
                            </div>
                        </div>
                    </div>
                </Modal>
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
                                    <MultiSelectDropdown btnCSS="sm:w-3/4 md:w-full" buttonText="Select Participants" state={newTaskParticipants} setState={setNewTaskParticipants} />
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
                    <div className='flex justify-start items-center w-full grow px-4'>
                        <Input text="Board Name" className="w-[85%]" reference={boardInput} />
                    </div>
                </Modal>
                <div className="w-full py-5 mb-3 text-3xl text-gray-500 px-3">Studio Board</div>
                <div className='flex space-x-4 h-[85%] min-h-[28rem] overflow-x-auto w-full px-3'>
                    <AnimatePresence>
                        {boardData?.length > 0 ? boardData.map((value, i) => <CardHolder comments={triggerCommentsModal} addTaskHandler={triggerAddCardModal} triggerModal={triggerParticipantsModal} key={value.title} id={value.id} index={i} title={value.title} card={value.cards} removeBoard={removeBoardHandler} changeData={setBoardData} data={boardData} />) : <h1>No boards</h1>}
                    </AnimatePresence>
                </div>
                <div className='fixed bottom-5 right-5 bg-gradient-to-br from-blue-400 to-indigo-300 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:brightness-110 active:brightness-90 z-50' onClick={e => triggerAddBoardModal()}><FaPlus className='text-white scale-150 p-1 md:p-0' /></div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Boards
