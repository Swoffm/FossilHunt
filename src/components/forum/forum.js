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
        <div>
        {hasUser ? <button className="addbtn" onClick={() => {props.history.push("/forum/new")}}>Add</button>:null}
        </div>
        <div>
        <h1>Fossil Forum</h1>

        </div>
    {question.map(element => <ForumJSX key={element.id} question={element} {...props}/>)}
    </section>
    </>)
    
}

export default Forum
