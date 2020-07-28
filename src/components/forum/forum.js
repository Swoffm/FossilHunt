import React, {useState, useEffect} from "react"
import ForumJSX from "./pages/forumJSX"
import ForumManager from "./manager/ForumManager"
import "./styles/forumCard.css"

const Forum = (props) => {
    // =========change userId below ========
    const UserId = 1;
    const hasUser = true

    const [question, setQuestion] = useState([])

    const getQuestion = () => {
        ForumManager.getAll().then((results) => {
            setQuestion(results)
           
        })
    }

    useEffect(() => {
getQuestion();
    }, [])

    return (
    <>
    <section className="forumParent">
        {hasUser ? <button className="addbtn">Add</button>:null}
    {question.map(element => <ForumJSX key={element.id} question={element} {...props}/>)}
    </section>
    </>)
    
}

export default Forum
