import React from "react"
import { Link } from "react-router-dom";

//this file is holds the JSX for account information

const AccountJSX = props => {

     
    return(
        <section className="accountChild">
           <div><h1>Account Information</h1></div> 
    <div>Email: {props.user.email}</div>
    <div>Username: {props.user.username}</div>
    {props.user.userImage || props.user.userImage != "" ? <div className="profileImage"> <img src={props.user.userImage} alt="user's profile image" /> </div> : <div>Select Profile Image </div> }
    
    <div> <button onClick={() => {props.history.push("account/edit")}}>Edit</button></div>

    <Link to="account/newpassword">
    <div>Change Password</div>
    </Link>
    <div><button onClick={props.logout}>Logout</button></div>

        </section>
    )

}

export default AccountJSX
