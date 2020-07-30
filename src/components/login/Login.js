import LoginJSX from "./DOM/LoginJSX"
import React, { useState, useEffect } from "react"



const Login = (props) => {


    const [userInfo, setUserInfo] = useState({ email: "", password: "" });

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






    return (
        <>
            <LoginJSX {...props} />
        </>
    )
}


export default Login