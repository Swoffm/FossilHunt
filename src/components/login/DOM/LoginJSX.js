import React from 'react';
import "../styles/login.css"
import { Link } from "react-router-dom";

const LoginJSX = (props) => {




    return (
        <>

            <form className="forumLogin">

                <fieldset>
                    <div className="formgrid">
                        <h1>Log In</h1>

                        

                        <div className="formChild">
                            <label htmlFor="question">Username </label>
                            <input className="login--input"
                                type="text"
                                required
                                // onChange={props.handleFieldChange}
                                id="question"
                                placeholder="Enter a Question"
                            /></div>


                        <div className="formChild">
                            <label htmlFor="question">Password </label>
                            <input className="login--input"
                                type="text"
                                required
                                // onChange={props.handleFieldChange}
                                id="question"
                                placeholder="Enter a Question"
                            /></div>


                    </div>
                    <div className="formChild">
                        <button className="submitbtn"
                            type="button"
                        // disabled={props.isLoading}
                        // onClick={props.newQuestion}
                        >Submit</button>
                    </div>
                    <div className="formChild">
                        <Link to="/login/registration">Sign Up</Link>
                    </div>
                </fieldset>
            </form >

        </>
    )
}

export default LoginJSX