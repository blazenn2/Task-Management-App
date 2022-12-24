import { useEffect, useState } from 'react'

const useBoardData = (props) => {
    const [boardData, setBoardData] = useState();

    useEffect(() => {
        setBoardData([
            { id: "21jk3j21", title: "Backlog", cards: [{ text: "Company website redesign.", piority: 0, participants: ["Hamza Nawab", "Rahim Nawab"] }, { text: "Mobile app login process prototype.", piority: 1, participants: ["Bruce Wayne"] }, { text: "Onboarding designs.", piority: 2, participants: "Tony Stark" }] },
            { id: "3h5lkhklk", title: "In Process", cards: [{ text: "Research and strategy for upcoming development.", piority: 2, participants: ["Tony Stark"] }, { text: "Account profile flow diagrams.", piority: 1, participants: ["Bruce Wayne", "Tony Stark", "Hamza Nawab"] }, { text: "Slide templates for client pitch project.", piority: 0, participants: ["Hamza Nawab", "Tony Stark"] }, { text: "Review administrator console designs.", piority: 0, participants: "Bruce Wayne" }] },
            { id: "jkl12j4d2", title: "Review", cards: [{ text: "Dashboard layout designs.", piority: 1, participants: ["Rahim Nawab", "Khuzaima Nawab"] }, { text: "Social media posts.", piority: 2, participants: ["Rahim Nawab", "Hamza Nawab", "Khuzaima Nawab", "Bruce Wayne", "Tony Stark"] }, { text: "Shopping cart and product catalog wireframes.", piority: 0, participants: ["Khuzaima Nawab"] }, { text: "End user flow charts.", piority: 1, participants: ["Bruce Wayne", "Rahim Nawab"] }] },
            { id: "h12uhuk12", title: "Complete", cards: [{ text: "Review client spec document and give feedback.", piority: 0, participants: ["Hamza Nawab", "Tony Stark"] }, { text: "Navigation designs.", piority: 1, participants: ["Hamza Nawab"] }, { text: "User profile prototypes.", piority: 2, participants: [] }, { text: "Create style guide based on previous feedback.", piority: 2, participants: ["Rahim Nawab", "Hamza Nawab"] }] },
        ])
    }, []);

    return ([boardData, setBoardData])
}

export default useBoardData
