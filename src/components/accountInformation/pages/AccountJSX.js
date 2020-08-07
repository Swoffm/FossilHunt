import React from "react"
import { Link } from "react-router-dom";

//this file is holds the JSX for account information

const AccountJSX = props => {

     
    return(
        <section className="accountChild">
           <div className="acct--Title"><h1>Account Information</h1></div> 
    <div className="userInfo">Email: {props.user.email}</div>
    <div className="userInfo">Username: {props.user.username}</div>
    {props.user.userImage || props.user.userImage != "" ? <div className="profileImage"> <img className="cloud--image" src={props.user.userImage} alt="user's profile image" /> </div> : <div>Select Profile Image </div> }
    
    <div> <button className="acctbtn forumbtn" onClick={() => {props.history.push("account/edit")}}>Edit</button></div>

    <Link to="account/newpassword">
    <div className="linkPassword">Change Password</div>
    </Link>
    <div><button className="acctbtn forumbtn" onClick={props.logout}>Logout</button></div>

        </section>
    )

}

export default AccountJSX
