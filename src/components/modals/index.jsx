import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from "react-icons/fi";

const Modal = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(true);
    const overlayVariants = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                duration: 0.3,
                delayChildren: 0.4
            }
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
                duration: 0.3,
                delay: 0.4
            }
        }
    };

    return (
        <AnimatePresence>
            {modalIsOpen ? <motion.div
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={overlayVariants}
                className='fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-[#00000050] w-screen h-screen z-40'>
                <motion.div
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100vh" }}
                    transition={{ duration: 0.5 }}
                    className='absolute bg-white h-1/2 w-1/2 rounded-lg shadow-lg border border-slate-400 z-50 flex flex-col items-center justify-between'>
                    <div className="border-b border-slate-400 w-full p-4 flex items-center justify-between">
                        <p className='text-xl font-semibold'>{props.heading}</p>
                        <FiX className='scale-150 cursor-pointer' onClick={() => setModalIsOpen(false)} />
                    </div>
                    {props.children}
                    <div className="border-t border-slate-400 w-full p-4 flex items-center justify-center">
                        <button className='bg-sl text-white p-3 rounded-xl hover:bg-s' onClick={() => setModalIsOpen(false)}>{props.buttonText}</button>
                    </div>
                </motion.div>
            </motion.div> : null}

        </AnimatePresence>
    )
}

export default Modal
