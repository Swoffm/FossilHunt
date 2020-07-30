import React, { useState, useEffect } from "react"
import RegistrationJSX from "./DOM/RegistrationJSX"
import LoginManager from "./manager/LoginManager"


const Registration = (props) => {

    const [users, setUsers] = useState([])
    const [userInfo, setUserInfo] = useState({ email: "", password: "", username: "", conPassword: "" });
    const [isLoading, setIsLoading] = useState(false);
    

    const handleFieldChange = evt => {
        const stateToChange = { ...userInfo };
        stateToChange[evt.target.id] = evt.target.value;
        setUserInfo(stateToChange);
    }

    const getUsers = () => {
        LoginManager.getAll().then((results) => {
            setUsers(results.map(element => ({email: element.email, username: element.username})))
        })
    }

    const checkUsername = () => {
        // let gunna = users.map(element => (element.email == "gavinswofford@gmail.com"))
       
        let check = users.some((element) => element.username === userInfo.username)
        console.log(check)
      
        return check
    }

    const checkEmail = () => {
        let check = users.some((element) => element.email === userInfo.email)
      console.log(check)
        return check
    }



    const handleLogin = (element) => {
        element.preventDefault();
        setIsLoading(true)

        if (userInfo.username === "" || userInfo.password === "" || userInfo.email === "") {
            console.log(users)

            window.alert("Please fill out form")
        }
        else if (userInfo.password !== userInfo.conPassword) {
            window.alert("Passwords do not match")
            

        }
        else if (users.map(element => (element.email)) === userInfo.email) {
            window.alert("Email is already taken")
           
        }
        else if (checkUsername()) {
            window.alert("Username is already taken")
            
        }
        else if (checkEmail()) {
            window.alert("Email is already taken")
            
        }
        
        else {
            const user = {
                email: userInfo.email,
                username: userInfo.username,
                password: userInfo.password
            }

             
            


            
            LoginManager.post(user).then(() => props.history.push("/login"))

            // sessionStorage.setItem(
            //     "userInfo",
            //     JSON.stringify(userInfo)
            // );
            // props.history.push("/login");
        }
    }



    useEffect(() => {
        getUsers()
  
    }, [])


    return (<RegistrationJSX handleLogin={handleLogin} handleFieldChange={handleFieldChange} {...props} />)
}


export default Registration