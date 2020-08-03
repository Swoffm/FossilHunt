import React, { useState, useEffect } from "react"
import ForumJSX from "./pages/forumJSX"
import ForumManager from "./manager/ForumManager"
import Helper from "../../HelperFunctions/Helper"
import "./styles/forumCard.css"
import ForumFilter from "./forumFilter"

const Forum = (props) => {
 
    
    const UserId = Helper.getUserId();
    const [fossilLocation, setFossilLocation] = useState([])

    

    const [question, setQuestion] = useState([])

    const getQuestion = () => {
        ForumManager.getAll().then((results) => {
            setQuestion(results)

        })
    }

    const filterLocationChange = (evt) => {
        setFossilLocation(evt.target.value)
}

    useEffect(() => {
        getQuestion();
    }, [])

    return (
        <>
            <section className="forumParent">
            <div>
                    <h1>Fossil Forum</h1>

                </div>
                <div>
                    {UserId ? <button className="addbtn" onClick={() => { props.history.push("/forum/new") }}>Add</button> : null}
                </div>
                <div>
                    {<ForumFilter filterLocationChange={filterLocationChange} {...props}/>}
                     </div>
                {question.map(element =>  fossilLocation == null || fossilLocation == "" ||
                 fossilLocation == "Select State" ? <ForumJSX key={element.id} question={element} {...props} /> : 
                 fossilLocation == element.location ? <ForumJSX key={element.id} question={element} {...props} /> : null)}
            </section>
        </>)

}

export default Forum
