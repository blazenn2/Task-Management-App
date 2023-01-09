import React, { useCallback, useRef, useState } from 'react'
import CardHolder from '../components/card-holder'
import { motion, AnimatePresence } from "framer-motion"
import { FaPlus } from 'react-icons/fa';
import useBoardData from '../custom hooks/useBoardData';
import CommentModal from '../components/modals/comment-modal';
import ParticipantsModal from '../components/modals/participants-modal';
import NewTaskModal from '../components/modals/new-task-modal';
import NewBoardModal from '../components/modals/new-board-modal';


const Boards = () => {
    // Data for this component
    const data = useRef({ participant: { board: null, card: null }, board: null });

    // Refs for participants
    const participantsModal = useRef();

    // Refs for adding board
    const addBoardModal = useRef();

    // Refs for adding a new task
    const addCardModal = useRef();

    // Refs for comments
    const commentModal = useRef();

    // Custom hooks
    const [boardData, setBoardData, chatLength, participantLength] = useBoardData();

    // console.log(participantLength)

    // States for manuplating participants
    const [newTaskParticipants, setNewTaskParticipants] = useState([{ name: "Hamza Nawab", checked: false }, { name: "Rahim Nawab", checked: false }, { name: "Khuzaima Nawab", checked: false }, { name: "Tony Stark", checked: false }, { name: "Bruce Wayne", checked: false }]);
    const [addRemoveParticipants, setAddRemoveParticipants] = useState([{ name: "Hamza Nawab", checked: false }, { name: "Rahim Nawab", checked: false }, { name: "Khuzaima Nawab", checked: false }, { name: "Tony Stark", checked: false }, { name: "Bruce Wayne", checked: false }]);
    const [participantsList, setParticipantsList] = useState([]);

    const participantStateLength = newTaskParticipants.filter(value => value.checked).length;

    // States for comment card
    const [commentCard, setCommentCard] = useState({ card: 0, board: 0 });

    const removeBoardHandler = (index, e) => setBoardData(boardData.filter((_, i) => i !== index));

    // <========= Functions to trigger modals ==========> //
    const triggerCommentsModal = useCallback((e) => {
        const element = e.target.closest(".card");
        const card = Number(element.id.split("-")[1]);
        const board = Number(element.closest(".board").id.split("-")[1]);
        setCommentCard({ card: card, board: board });
        commentModal.current.triggerModal();
    }, []);

    const triggerParticipantsModal = useCallback((e) => {
        participantsModal.current.triggerModal();
        data.current.participant = { board: e.target.closest(".board").id.split("-")[1], card: e.target.closest(".card").id.split("-")[1] }
        const participants = boardData[data.current.participant.board].cards[data.current.participant.card].participants;
        setParticipantsList(participants);
        setAddRemoveParticipants(addRemoveParticipants.map(value => participants.includes(value.name) ? { ...value, checked: true } : { ...value, checked: false }));
    }, [addRemoveParticipants, boardData]);

    const triggerAddCardModal = useCallback((e) => {
        addCardModal.current.triggerModal();
        data.current.board = e.target.closest(".board");
    }, []);

    const triggerAddBoardModal = useCallback(() => addBoardModal.current.triggerModal(), []);

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute bottom-0 right-0 flex grow flex-col items-end md:w-[90%] w-10/12 h-screen pt-20 px-6 bg-violet-100 overflow-auto">
                {/* Modal of comments */}
                <CommentModal reference={commentModal} onSave={() => commentModal.current.triggerModal()} commentCard={commentCard} boardData={boardData} setBoardData={setBoardData} chatLength={chatLength} />
                {/* Modal of adding/remove participant for specific cards button */}
                <ParticipantsModal reference={participantsModal} data={data} participantsList={participantsList} addRemoveParticipants={addRemoveParticipants} setAddRemoveParticipants={setAddRemoveParticipants} setBoardData={setBoardData} boardData={boardData} />
                {/* Modal of adding a new task to the board */}
                <NewTaskModal reference={addCardModal} newTaskParticipants={newTaskParticipants} setNewTaskParticipants={setNewTaskParticipants} data={data} boardData={boardData} setBoardData={setBoardData} participantStateLength={participantStateLength} />
                {/* Modal for adding a new board */}
                <NewBoardModal reference={addBoardModal} boardData={boardData} setBoardData={setBoardData} />
                <div className="w-full py-5 mb-3 text-3xl text-gray-500 px-3">Studio Board</div>
                <div className='flex space-x-4 h-[85%] min-h-[28rem] overflow-x-auto w-full px-3'>
                    <AnimatePresence>
                        {boardData?.length > 0 ? boardData.map((value, i) => <CardHolder cardLength={value.cards.length} chatLength={chatLength[i]} participantCount={participantLength[i]} comments={triggerCommentsModal} addTaskHandler={triggerAddCardModal} triggerModal={triggerParticipantsModal} key={value.title} id={value.id} index={i} title={value.title} card={value.cards} removeBoard={removeBoardHandler} changeData={setBoardData} data={boardData} />) : <h1>No boards</h1>}
                    </AnimatePresence>
                </div>
                <div className='fixed bottom-5 right-5 bg-gradient-to-br from-blue-400 to-indigo-300 w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center hover:brightness-110 active:brightness-90 z-50' onClick={e => triggerAddBoardModal()}><FaPlus className='text-white scale-150 p-1 md:p-0' /></div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Boards
