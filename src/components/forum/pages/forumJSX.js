import React from "react"


const ForumJSX = props => {
const name = props.question

    return (<>
    <section className="questionChild">
        <div>
          <h3>Question: {props.question.question}</h3>
        </div>
        <div>
        Location: {props.question.location}
        </div>

    </section>
    </>)
}


export default ForumJSX