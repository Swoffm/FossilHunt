import React from "react"



const NewResponseJSX = (props) => {




    return (
        <>
        <button className="backBtn" onClick={props.backBtn}>Back</button>
<form className="formResponse">
    <h1>New Response</h1>
<fieldset>
    <div className="formgrid">
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
    <button className="submitbtn"
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