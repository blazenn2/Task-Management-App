export const onDragStart = (position, e, boardIndex, dragItem) => {
    [...document.querySelectorAll(".card-drop")].forEach(value => {
        value.classList.add("opacity-100", "h-10", "px-3", "py-2");
        value.classList.remove("opacity-0", "h-0", "p-0", "!mt-0");
        [...value.children].forEach(val => val.classList.remove("h-0"));
    });
    dragItem.current = { cardIndex: position, boardIndex: boardIndex };
    e.target.classList.add("!opacity-50");
    e.dataTransfer.setData('text/html', `${position}:${boardIndex}`);
};

export const onDragEnter = (position, e, boardIndex, cardTransferFlag, dragOverItem, dragItem) => {
    cardTransferFlag.current = false;
    dragOverItem.current = { cardIndex: position, boardIndex: boardIndex };
    if (boardIndex === dragItem.current?.boardIndex) {
        if (e.target.id) e.target.classList.add("motion-safe:animate-pulse");
        else e.target.closest(`#card-${position}`).classList.add("motion-safe:animate-pulse");
    }
};

export const onDragLeave = (e, position, boardIndex, dragItem) => {
    if (boardIndex === dragItem.current?.boardIndex) {
        if (e.target.id) e.target.classList.remove("motion-safe:animate-pulse");
        else e.target.closest(`#card-${position}`).classList.remove("motion-safe:animate-pulse");
    }
};

export const onDragOver = (e, boardIndex, cardTransferFlag, dragItem, dragOverItem) => {
    cardTransferFlag.current = false;
    e.preventDefault();
    if (boardIndex === dragItem.current?.boardIndex) {
        if (e.target.id) {
            if (![...e.target.classList].includes("motion-safe:animate-pulse")) e.target.classList.add("motion-safe:animate-pulse");
        } else {
            if (![...e.target.closest(`#card-${dragOverItem.current.cardIndex}`)?.classList]?.includes("motion-safe:animate-pulse")) e.target.closest(`#card-${dragOverItem.current.cardIndex}`).classList.add("motion-safe:animate-pulse");
        }
    }
};

export const onDragEnd = (e) => {
    [...document.querySelectorAll(".card-drop")].forEach(value => {
        value.classList.remove("opacity-100", "h-10", "px-3", "py-2");
        value.classList.add("opacity-0", "h-0", "p-0", "!mt-0");
        [...value.children].forEach(val => val.classList.add("h-0"));
    });
    if ([...e.target.classList].includes("!opacity-50")) e.target.classList.remove("!opacity-50");
};

export const onDrop = (e, position, dragItem, dragOverItem, cardTransferFlag, data, index, changeData) => {
    if (e.target.id) {
        e.target.classList.remove("motion-safe:animate-pulse");
    } else {
        e.target.closest(`#card-${position}`).classList.remove("motion-safe:animate-pulse");
    }

    if (dragItem.current?.boardIndex === dragOverItem.current?.boardIndex && dragItem.current?.cardIndex !== dragOverItem.current?.cardIndex && cardTransferFlag.current === false) {
        const tempData = [...data[index].cards];
        const dragContent = tempData[dragItem.current.cardIndex];
        tempData.splice(dragItem.current.cardIndex, 1);
        tempData.splice(dragOverItem.current.cardIndex, 0, dragContent);
        dragItem.current = null;
        dragOverItem.current = null;
        const tempObject = data;
        tempObject[index].cards = tempData;
        changeData([...tempObject]);
    }
};


export const newBoardCardDragOver = (e, cardTransferFlag, dragItem, dragOverItem) => {
    cardTransferFlag.current = true;
    e.target.closest(".card-drop").classList.add("bg-violet-200")
    e.stopPropagation();
    e.preventDefault();
};

export const newBoardCardDragLeave = (e) => {
    e.target.closest(".card-drop").classList.remove("bg-violet-200");
};

export const newBoardCardDrop = (e, index, data, changeData) => {
    e.target.closest(".card-drop").classList.remove("bg-violet-200");
    const [card, board] = e.dataTransfer.getData("text/html").split(":");
    if (Number(board) !== index) {
        const taskData = data;
        const newTaskData = taskData.map((value, i) => i === Number(index) ? { ...value, cards: [data[board].cards[card], ...value.cards] } : Number(board) === i ? { ...value, cards: value.cards.filter((_, ind) => ind !== Number(card)) } : value);
        changeData(newTaskData);
    }
};