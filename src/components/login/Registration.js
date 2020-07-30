import React, { useState, useEffect } from "react"
import RegistrationJSX from "./DOM/RegistrationJSX"
import LoginManager from "./manager/LoginManager"


const Registration = (props) => {


    const [userInfo, setUserInfo] = useState({ email: "", password: "", username: "", conPassword: "" });
    const [isLoading, setIsLoading] = useState(false);

    const handleFieldChange = evt => {
        const stateToChange = { ...userInfo };
        stateToChange[evt.target.id] = evt.target.value;
        setUserInfo(stateToChange);
    }

    const handleLogin = (element) => {
        element.preventDefault();
        setIsLoading(true)

        if(userInfo.username === "" || userInfo.password === "" || userInfo.email === "") {
            window.alert("Please fill out form")
        }
        else if(userInfo.password !== userInfo.conPassword) {
            window.alert("Passwords do not match")

        }
        else{
            const user = {
                email: userInfo.email,
                username: userInfo.username,
                password: userInfo.password
            }

            LoginManager.post(user).then(() =>  props.history.push("/login"))

        // sessionStorage.setItem(
        //     "userInfo",
        //     JSON.stringify(userInfo)
        // );
        // props.history.push("/login");
        }
    }


    return(<RegistrationJSX handleLogin={handleLogin} handleFieldChange={handleFieldChange} {...props}/>)
}


export default Registration