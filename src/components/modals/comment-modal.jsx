import React, { useRef } from 'react'
import Modal from '.'
// import useBoardData from '../../custom hooks/useBoardData'
import CommentCard from '../card/comment-card'
import MessageInput from '../inputs/messageinput'
import UserCircle from '../user-picture'

const CommentModal = (props) => {
    // const [boardData, setBoardData] = useBoardData();
    console.log("Comment Modal rendered!");

    const messageInput = useRef();

    const addTextToComments = () => {
        const newBoardData = props.boardData.map((value, i) => {
            if (i === Number(props.commentCard.board)) {
                value.cards[props.commentCard.card].chats.push({
                    name: "Test User",
                    text: messageInput.current.value,
                    dateTime: new Date(new Date().setDate(new Date().getDate()))
                });
                // value.chatCount++;
            };

            return value;
        })
        messageInput.current.value = "";
        props.setBoardData(newBoardData);
    };


    return (
        <Modal ref={props.reference} heading="Comments" buttonText="Close" onSave={props.onSave}>
            <div className='w-full flex flex-col items-center justify-center space-y-2 py-3'>
                <div className='w-11/12 rounded-md space-y-1'>
                    <p className='md:text-base text-xs'><span className='font-bold'>Task:</span> {props.boardData?.length > 0 && props.boardData[props.commentCard.board].cards[props.commentCard.card].title}</p>
                    <p className='md:text-base text-xs'><span className='font-bold'>Details:</span> {props.boardData?.length > 0 && props.boardData[props.commentCard.board].cards[props.commentCard.card].details}</p>
                </div>
                <hr className='bg-gray-300 w-[95%]' />
                <div className='lg:w-8/12 md:w-3/4 w-11/12'>
                    <div className='lg:max-h-80 md:max-h-60 max-h-40 space-y-2 overflow-y-auto mb-4'>
                        {props.boardData && props.boardData[props.commentCard.board]?.cards[props.commentCard.card]?.chats?.map((chat, i) => <CommentCard key={i} name={chat.name} dateTime={chat.dateTime} text={chat.text} />)}
                    </div>
                    <div className='w-full flex items-center justify-between space-x-2'>
                        <UserCircle buttonClassName="cursor-default" />
                        <MessageInput reference={messageInput} onSubmit={addTextToComments} placeholder="Enter your comment ..." type="text" />
                    </div>
                </div>
            </div>
        </Modal>
    )
}

const compare = (prevProps, nextProps) => {
    // console.log(prevProps.editCardData, nextProps.editCardData);
    // if (nextProps.editCardData.name !== null && prevProps.editCardData.name === null) return true;
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
};

export default React.memo(CommentModal, compare);
