import React from 'react'
import { motion, AnimatePresence } from "framer-motion"

const Manage = () => {

    return (
        <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute right-0 w-[90%] h-full py-3 px-6 bg-violet-100">
                
            </motion.div>
        </AnimatePresence>
    )
}

export default Manage
