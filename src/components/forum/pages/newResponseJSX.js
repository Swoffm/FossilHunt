import React from "react"



const NewResponseJSX = (props) => {




    return (
        <>
       
        <button className="responseBack forumbtn" onClick={props.backBtn}>Back</button>
        <div className="title-forum"><h1>New Response</h1></div> 
<form className="forumLogin">
  
<fieldset>
    <div className="formgrid">
    <h3 className="question">{props.question.question}</h3>
        <div className="formChild">
        <label htmlFor="response">Response: </label>
        <textarea id="response" required type="text" onChange={props.handleFieldChange}  placeholder="Enter a Response"></textarea></div>
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