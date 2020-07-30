import LoginJSX from "./DOM/LoginJSX"
import React, { useState, useEffect } from "react"
import LoginManager from "./manager/LoginManager"



const Login = (props) => {


    const [userInfo, setUserInfo] = useState({ username: "", password: "" });
    const [users, setUsers] = useState([])

    const handleFieldChange = evt => {
        const stateToChange = { ...userInfo };
        stateToChange[evt.target.id] = evt.target.value;
        setUserInfo(stateToChange);
    }


    //this checks to see if login matches login inofrmation in the database
    const loginCheck = () => {
        let username = users.some(element => element.username === userInfo.username)
        let userPassword = users.some(element => element.password === userInfo.password)
        

        if(!username || !userPassword) {
            window.alert("username or password is incorrect")
        }
        else {
            let userCheck = users.map(element => (element.username === userInfo.username) ? {username: element.username, userId: element.userId}: false )
            if(userCheck) {
                let user = {username: userCheck[0].username, userId: userCheck[0].userId}
                sessionStorage.setItem("userInfo", JSON.stringify(user));
              
                props.history.push("/")
            }
}

        
        
    }

    const getUsers = () => {
        LoginManager.getAll().then((results) => {
            setUsers(results.map(element => ({password: element.password, username: element.username, userId: element.id})))
        })
    }

    useEffect(() => {
        getUsers()
    }, [])






    return (
        <>
            <LoginJSX handleFieldChange={handleFieldChange} loginCheck={loginCheck} {...props} />
        </>
    )
}


export default Login