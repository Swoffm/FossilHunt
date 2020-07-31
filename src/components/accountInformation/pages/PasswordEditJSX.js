import React from "react"
import PasswordEdit from "../PasswordEdit"



const PasswordEditJSX = props => {



    return (
        <form className="forumLogin">

        <fieldset>
            <div className="formgrid">
                <h1>Password Change</h1>

               

                <div className="formChild">
                    <label htmlFor="question">Current Password </label>
                    <input className="login--input"
                        type="text"
                        required
                         onChange={props.handleFieldChange}
                        id="curentPasword"
                        placeholder="Enter Current Password"
                    /></div>


                <div className="formChild">
                    <label htmlFor="question">New Password </label>
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
                 onClick={props.newPassword}
                >Submit</button>
            </div>
            
        </fieldset>
    </form >
    )

}

export default PasswordEditJSX