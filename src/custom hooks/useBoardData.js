import { useEffect, useState } from 'react'
import { board } from '../utils/test-data';

const useBoardData = (props) => {
    const [boardData, setBoardData] = useState();

    useEffect(() => {
        setBoardData(board)
    }, []);

    return ([boardData, setBoardData])
}

export default useBoardData
