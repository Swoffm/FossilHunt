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
    function refreshPage() {
        window.location.reload(false);
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

                // the for loop here is meant to find thelocation in the array usercheck that does 
                // no equal false
               for(let element in userCheck){
                 
                   if(userCheck[element].userId) {
                   var user = {username: userCheck[element].username, userId: userCheck[element].userId}
                 

                   }
               }
               
                 sessionStorage.setItem("userInfo", JSON.stringify(user));
                 refreshPage();
              
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