import React from "react"


const ForumNewJSX = props => {

    return (
    <>
            <button className="backBtn" onClick={props.backBtn}>Back</button>
    <form className="forumQuestion">
        <h1>New Question</h1>
    <fieldset>
        <div className="formgrid">
            <div className="formChild">
            <label htmlFor="question">Question: </label>
            <input 
                type="text"
                required
                onChange={props.handleFieldChange}
                id="question"
                placeholder="Enter a Question"
            /></div>

        <div className="formChild">

            <label htmlFor="location">Location: </label>
            <input
                type="text"
                required
                onChange={props.handleFieldChange}
                id="location"
                placeholder="Enter a Location"
            /></div>

        </div>
    <div className="formChild">
        <button className="submitbtn"
            type="button"
            disabled={props.isLoading}
            onClick={props.newQuestion}
        >Submit</button>
    </div>
    </fieldset>
</form >

</>
)
}

export default ForumNewJSX