import React, { forwardRef, useImperativeHandle, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion';
import { FiX } from "react-icons/fi";

const Modal = forwardRef((props, ref) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    useImperativeHandle(ref, () => ({
        triggerModal() {
            setModalIsOpen(!modalIsOpen);
        }
    }));

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
                onClick={() => setModalIsOpen(false)}
                className='fixed left-0 right-0 top-0 bottom-0 flex items-center justify-center bg-[#00000050] w-screen h-screen z-40'>
                <motion.div
                    initial={{ y: "100vh" }}
                    animate={{ y: 0 }}
                    exit={{ y: "100vh" }}
                    transition={{ duration: 0.5 }}
                    onClick={e => {
                        e.stopPropagation();
                        
                    }}
                    className='absolute bg-white w-3/4 md:w-2/3 rounded-lg shadow-lg border border-slate-400 z-50 flex flex-col items-center justify-between'>
                    <div className="border-b border-slate-400 w-full sm:p-4 p-2 flex items-center justify-between">
                        <p className='lg:text-xl text-base font-semibold'>{props.heading}</p>
                        <FiX className='md:scale-150 cursor-pointer' onClick={() => setModalIsOpen(false)} />
                    </div>
                    {props.children}
                    <div className="border-t border-slate-400 w-full sm:p-4 p-2 flex items-center justify-center">
                        <button className='bg-sl text-white sm:p-3 p-2 rounded-xl hover:bg-s text-sm md:text-base' onClick={props.onSave}>{props.buttonText}</button>
                    </div>
                </motion.div>
            </motion.div> : null}
        </AnimatePresence>
    )
})

export default Modal
