import React from "react"
import { Link } from "react-router-dom";

const AccountJSX = props => {

    console.log(props)
    
    return(
        <section className="accountParent">
            <h1>Account Information</h1>
    <div>Email: {props.user.email}</div>
    <div>Username: {props.user.username}</div>
    <div>Profile Image: </div>
    <button>Edit</button>

    <Link to="account/newpassword">
    <div>Change Password</div>
    </Link>
        </section>
    )

}

export default AccountJSX
