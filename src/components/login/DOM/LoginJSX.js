import React from 'react';
import "../styles/login.css"

const LoginJSX = (props) => {




    return (
        <>

            <form className="forumQuestion">

                <fieldset>
                    <div className="formgrid">
                        <h1>Log In</h1>

                        <div className="formChild">
                            <label htmlFor="question">Question: </label>
                            <input
                                type="text"
                                required
                                // onChange={props.handleFieldChange}
                                id="question"
                                placeholder="Enter a Question"
                            /></div>

                        <div className="formChild">

                            <label htmlFor="location">Location: </label>
                            <input
                                type="text"
                                required
                                // onChange={props.handleFieldChange}
                                id="location"
                                placeholder="Enter a Location"
                            /></div>

                    </div>
                    <div className="formChild">
                        <button className="submitbtn"
                            type="button"
                            // disabled={props.isLoading}
                            // onClick={props.newQuestion}
                        >Submit</button>
                    </div>
                </fieldset>
            </form >

        </>
    )
}

export default LoginJSX