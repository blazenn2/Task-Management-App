import { useEffect, useState } from 'react'
import { board } from '../utils/test-data';

const useBoardData = () => {
    const [boardData, setBoardData] = useState();

    useEffect(() => {
        setBoardData(board)
    }, []);

    const chatLength = boardData?.map(value => {
        const cardChat = value.cards.map(card => card.chats.length);
        return cardChat.reduce((accum, val) => (accum + Number(val)), 0);
    });

    const participantLength = boardData?.map(value => {
        const cardParticipant = value.cards.map(card => card.participants.length);
        return cardParticipant.reduce((accum, val) => (accum + Number(val)), 0);
    });

    return ([boardData, setBoardData, chatLength, participantLength])
}

export default useBoardData
