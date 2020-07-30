import React from "react"




const RegistrationJSX = props => {




    return (
        <form className="forumLogin">

        <fieldset>
            <div className="formgrid">
                <h1>Register</h1>

                <div className="formChild">
                    <label htmlFor="question">Email </label>
                    <input className="login--input"
                        type="text"
                        required
                        onChange={props.handleFieldChange}
                        id="email"
                        placeholder="Enter Your Email"
                    /></div>

                <div className="formChild">
                    <label htmlFor="question">Username </label>
                    <input className="login--input"
                        type="text"
                        required
                         onChange={props.handleFieldChange}
                        id="username"
                        placeholder="Enter a Username"
                    /></div>


                <div className="formChild">
                    <label htmlFor="question">Password </label>
                    <input className="login--input"
                        type="password"
                        required
                        onChange={props.handleFieldChange}
                        id="password"
                        placeholder="Enter a Password"
                    /></div>

                <div className="formChild">

                    <label htmlFor="location">Confirm Password </label>
                    <input className="login--input"
                        type="password"
                        required
                        onChange={props.handleFieldChange}
                        id="conPassword"
                        placeholder="Confirm Password"
                    /></div>

            </div>
            <div className="formChild">
                <button className="submitbtn"
                    type="button"
                disabled={props.isLoading}
                 onClick={props.handleLogin}
                >Submit</button>
            </div>
            
        </fieldset>
    </form >
    )
}



export default RegistrationJSX