import React, { useState, useEffect } from "react"
import ForumJSX from "./pages/forumJSX"
import ForumManager from "./manager/ForumManager"
import Helper from "../../HelperFunctions/Helper"
import "./styles/forumCard.css"

const Forum = (props) => {
 
    
    const UserId = Helper.getUserId();
    

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
                    {UserId ? <button className="addbtn" onClick={() => { props.history.push("/forum/new") }}>Add</button> : null}
                </div>
                <div>
                    <h1>Fossil Forum</h1>

                </div>
                {question.map(element => <ForumJSX key={element.id} question={element} {...props} />)}
            </section>
        </>)

}

export default Forum
