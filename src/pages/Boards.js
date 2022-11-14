import React, { useRef, useState } from 'react'
import CardHolder from '../components/card-holder'
import { motion, AnimatePresence } from "framer-motion"
import Modal from '../components/modals';
import MultipleSelectButton from '../components/dropdowns/MultipleSelectButton';
import MultipleSelectMenu from '../components/dropdowns/MultipleSelectMenu';
import CheckBox from '../components/inputs/checkbox';
import { rotateArrowOfButton, toggleDropdownMenu } from '../utils/functions';
import UserSmall from '../components/card/user-small';
import UsernameTag from '../components/tags/username-tag';

const Boards = () => {
    const modalRef = useRef();
    const participantsMenu = useRef();
    const [boardData, setBoardData] = useState([
        { id: "21jk3j21", title: "Backlog", cards: [{ text: "Company website redesign.", piority: 0 }, { text: "Mobile app login process prototype.", piority: 1 }, { text: "Onboarding designs.", piority: 2 }] },
        { id: "3h5lkhklk", title: "In Process", cards: [{ text: "Research and strategy for upcoming development.", piority: 2 }, { text: "Account profile flow diagrams.", piority: 1 }, { text: "Slide templates for client pitch project.", piority: 0 }, { text: "Review administrator console designs.", piority: 0 }] },
        { id: "jkl12j4d2", title: "Review", cards: [{ text: "Dashboard layout designs.", piority: 1 }, { text: "Social media posts.", piority: 2 }, { text: "Shopping cart and product catalog wireframes.", piority: 0 }, { text: "End user flow charts.", piority: 1 }] },
        { id: "h12uhuk12", title: "Complete", cards: [{ text: "Review client spec document and give feedback.", piority: 0 }, { text: "Navigation designs.", piority: 1 }, { text: "User profile prototypes.", piority: 2 }, { text: "Create style guide based on previous feedback.", piority: 2 }] },
    ]);

    const removeBoardHandler = (index, e) => {
        setBoardData(boardData.filter((_, i) => i !== index));
        // e.target.closest(`#board${index}`).style.opacity = 0;
        setTimeout(() => { setBoardData(boardData.filter((_, i) => i !== index)) }, 200);
    };

    const triggerModal = () => modalRef.current.triggerModal();

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }} className="absolute bottom-0 right-0 flex grow flex-col items-end md:w-[90%] w-10/12 h-screen pt-20 px-6 bg-violet-100 overflow-auto">
                <Modal ref={modalRef} heading="Assign/Dismiss Participants" buttonText={"Save changes"}>
                    <div className='flex justify-between grow w-full p-3 space-x-4'>
                        <div className='relative w-1/2 space-y-2'>
                            <h2 className='lg:text-lg md:text-base text-sm font-semibold'>Add/Remove Participants</h2>
                            <MultipleSelectButton text="Select Participants" onClick={e => {
                                rotateArrowOfButton(e);
                                toggleDropdownMenu(participantsMenu.current);
                            }} />
                            <MultipleSelectMenu reference={participantsMenu}>
                                <CheckBox text="Hamza Nawab" />
                                <CheckBox text="Hamza Nawab" />
                                <CheckBox text="Hamza Nawab" />
                                <CheckBox text="Hamza Nawab" />
                                <CheckBox text="Hamza Nawab" />
                                <CheckBox text="Hamza Nawab" />
                                <CheckBox text="Hamza Nawab" />
                                <CheckBox text="Hamza Nawab" />
                                <CheckBox text="Hamza Nawab" />
                                <CheckBox text="Hamza Nawab" />
                            </MultipleSelectMenu>
                            <div className='flex flex-wrap grow max-h-32 overflow-auto'>
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                                <UsernameTag name="Hamza Nawab" />
                            </div>
                        </div>
                        <div className='w-px my-2 bg-slate-400'></div>
                        <div className='w-2/4 flex flex-col space-y-2'>
                            <h3 className='lg:text-lg md:text-base text-sm font-semibold'>Participants List</h3>
                            <div className='border border-slate-500 rounded-md flex flex-col items-center justify-start grow max-h-44 w-full overflow-y-auto'>
                                <UserSmall name="James Malfoy" />
                                <UserSmall name="James Malfoy" />
                                <UserSmall name="James Malfoy" />
                                <UserSmall name="James Malfoy" />
                                <UserSmall name="James Malfoy" />
                                <UserSmall name="James Malfoy" />
                                <UserSmall name="James Malfoy" />
                                <UserSmall name="James Malfoy" />
                                <UserSmall name="James Malfoy" />
                                <UserSmall name="James Malfoy" />
                            </div>
                        </div>
                    </div>
                </Modal>
                <div className="w-full py-5 mb-3 text-3xl text-gray-500 px-3">Studio Board</div>
                <div className='flex space-x-4 h-[85%] min-h-[28rem] overflow-y-auto w-full px-3'>
                    <AnimatePresence>
                        {boardData.length > 0 ? boardData.map((value, i) => <CardHolder triggerModal={triggerModal} key={value.title} id={value.id} index={i} title={value.title} card={value.cards} removeBoard={removeBoardHandler} changeData={setBoardData} data={boardData} />) : <h1>No boards</h1>}
                    </AnimatePresence>
                </div>

            </motion.div>
        </AnimatePresence>
    )
}

export default Boards
