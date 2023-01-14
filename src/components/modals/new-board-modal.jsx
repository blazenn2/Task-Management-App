import React, { useRef } from 'react'
import Modal from '.'
import Input from '../inputs';

const NewBoardModal = (props) => {
    // console.log("new board modal rendered!");
    const boardInput = useRef();

    const createNewBoard = () => {
        const obj = { id: Math.random().toString(36).slice(2), title: boardInput.current.value, cards: [] };
        props.setBoardData([...props.boardData, obj]);
        props.reference.current.triggerModal();
    };

    return (
        <Modal ref={props.reference} heading="Add a new Board" buttonText="Save Changes" onSave={createNewBoard}>
            <div className='flex justify-start items-center w-full grow px-4'>
                <Input text="Board Name" className="w-[85%]" reference={boardInput} />
            </div>
        </Modal>
    )
}

const compare = (prevProps, nextProps) => {
    return JSON.stringify(prevProps.boardData?.length) === JSON.stringify(nextProps.boardData?.length);
};

export default React.memo(NewBoardModal, compare)
