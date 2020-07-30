import LoginJSX from "./DOM/LoginJSX"
import React, { useState, useEffect } from "react"
import LoginManager from "./manager/LoginManager"



const Login = (props) => {


    const [userInfo, setUserInfo] = useState({ email: "", password: "" });
    const [users, setUsers] = useState([])

    const handleFieldChange = evt => {
        const stateToChange = { ...userInfo };
        stateToChange[evt.target.id] = evt.target.value;
        setUserInfo(stateToChange);
    }

    const handleLogin = (element) => {
        element.preventDefault();


        sessionStorage.setItem(
            "credentials",
            JSON.stringify(userInfo)
        );
        props.history.push("/login");
    }
    const getUsers = () => {
        LoginManager.getAll().then((results) => {
            setUsers(results.map(element => ({email: element.email, username: element.username})))
        })
    }

    useEffect(() => {
        getUsers()
    }, [])






    return (
        <>
            <LoginJSX {...props} />
        </>
    )
}


export default Login