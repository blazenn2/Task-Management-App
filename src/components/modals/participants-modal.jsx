import { AnimatePresence } from 'framer-motion'
import React from 'react'
import Modal from '.'
import UserSmall from '../card/user-small'
import MultiSelectDropdown from '../dropdowns/multi-select-dropdown'
import UsernameTag from '../tags/username-tag'

const ParticipantsModal = (props) => {
    // console.log("Participants Modal rendered!");

    const manuplateParticipants = () => {
        props.reference.current.triggerModal();
        const participants = props.addRemoveParticipants.filter(value => value.checked).map(value => value.name);
        props.setBoardData(props.boardData.map((value, i) => {
            if (i === Number(props.data.current.participant.board)) {
                // value.totalParticipants = participants.length;
                value.cards[props.data.current.participant.card].participants = participants;
            }
            return value;
        }));
    };

    return (
        <Modal ref={props.reference} heading="Assign/Dismiss Participants" buttonText="Save changes" onSave={manuplateParticipants}>
            <div className='flex justify-between grow w-full p-3 space-x-4'>
                <div className='relative w-1/2 space-y-2'>
                    <h2 className='lg:text-lg md:text-base text-sm font-semibold'>Add/Remove Participants</h2>
                    <MultiSelectDropdown buttonText="Select Participants" state={props.addRemoveParticipants} setState={props.setAddRemoveParticipants} />
                    <div className='flex flex-wrap grow max-h-32 overflow-auto'>
                        <AnimatePresence>
                            {props.addRemoveParticipants.map((value, i) => value.checked && <UsernameTag state={props.addRemoveParticipants} setState={props.setAddRemoveParticipants} key={i} name={value.name} />)}
                        </AnimatePresence>
                    </div>
                </div>
                <div className='w-px my-2 bg-slate-400'></div>
                <div className='w-2/4 flex flex-col space-y-2'>
                    <h3 className='lg:text-lg md:text-base text-sm font-semibold'>Participants List</h3>
                    <div className='border border-slate-500 rounded-md flex flex-col items-center justify-start grow max-h-44 w-full overflow-y-auto'>
                        {props.participantsList.map((value, i) => <UserSmall key={i} name={value} />)}
                    </div>
                </div>
            </div>
        </Modal>
    )
}

// const compare = (prevProps, nextProps) => {
//     console.log(prevProps, nextProps);
// };

export default React.memo(ParticipantsModal)
