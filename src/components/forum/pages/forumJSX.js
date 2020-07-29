import React from "react"
import { Link } from "react-router-dom";


const ForumJSX = props => {
const name = props.question

    return (<>
    
    <section className="questionChild">
    <Link to={`/forumQuestion/${props.question.id}`}>
        <div>
          <h3>Question: {props.question.question}</h3>
        </div>
        <div>
        Location: {props.question.location}
        </div>
        </Link>
    </section>
   
    </>)
    
}


export default ForumJSX