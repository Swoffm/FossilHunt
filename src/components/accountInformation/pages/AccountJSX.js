import React from "react"
import { Link } from "react-router-dom";

//this file is holds the JSX for account information

const AccountJSX = props => {

     
    return(
        <section className="accountChild">
            <h1>Account Information</h1>
    <div>Email: {props.user.email}</div>
    <div>Username: {props.user.username}</div>
    <div>Profile Image: </div>
    <button onClick={() => {props.history.push("account/edit")}}>Edit</button>

    <Link to="account/newpassword">
    <div>Change Password</div>
    </Link>
    <button onClick={props.logout}>Logout</button>

        </section>
    )

}

export default AccountJSX
