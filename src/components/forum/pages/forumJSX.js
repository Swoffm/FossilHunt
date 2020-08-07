import React from "react"
import { Link } from "react-router-dom";


const ForumJSX = props => {

    return (<>
    
    <section className="questionChild">
    <Link to={`/forumQuestion/${props.question.id}`}>
        <div className="forumQ">
          <h3>Question: {props.question.question}</h3>
        </div>
        <div className="forumQ">
        Location: {props.question.location}
        </div>
        </Link>
    </section>
   
    </>)
    
}


export default ForumJSX