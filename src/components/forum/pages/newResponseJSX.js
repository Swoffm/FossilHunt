import React from "react"



const NewResponseJSX = (props) => {




    return (
        <>
        <button className="responseBack forumbtn" onClick={props.backBtn}>Back</button>
<form className="formResponse">
    <h1>New Response</h1>
<fieldset>
    <div className="formgrid">
    <h3 className="question">{props.question.question}</h3>
        <div className="formChild">
        <label htmlFor="response">Response: </label>
        <input 
            type="text"
            required
            onChange={props.handleFieldChange}
            id="response"
            placeholder="Enter a Response"
        /></div>
    </div>
<div className="formChild">
    <button className="submitbtn forumbtn"
        type="button"
        disabled={props.isLoading}
        onClick={props.newResponse}
    >Submit</button>
</div>
</fieldset>
</form >

</>
    )
}

export default NewResponseJSX