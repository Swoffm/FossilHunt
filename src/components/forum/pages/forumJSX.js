import React from "react"


const ForumJSX = props => {
const name = props.question
console.log(name)
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