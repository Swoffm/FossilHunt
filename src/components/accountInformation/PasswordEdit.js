import React, { useState, useEffect } from "react"
import Helper from "../../HelperFunctions/Helper"
import LoginManager from "../login/manager/LoginManager"
import PasswordEditJSX from "./pages/PasswordEditJSX"

const PasswordEdit = props => {

    let userId = Helper.getUserId()

    const [user, setUser] = useState([])
    const [password, setPassword] = useState({password: ""})
    const [isLoading, setIsLoading] = useState(false);


    const handleFieldChange = evt => {
        const stateToChange = { ...password };
        stateToChange[evt.target.id] = evt.target.value;
        setPassword(stateToChange);
    }


    const getUser = id => {
        LoginManager.get(id).then((results)=> {
            setUser(results)
        })
    }

    const newPassword = (element) => {
        element.preventDefault();
        setIsLoading(true)
        console.log(user)
        console.log(password)

        if(password.curentPasword != user.password) {
            window.alert("Wrong Current Password")
            
        }
        else if(password.password != password.conPassword) {
            window.alert("New Password does not match")
        }
        else {
            let newUserPassword = {
                email: user.email,
                username: user.username,
                password: password.password,
                id: user.id
            }

             LoginManager.update(newUserPassword).then(() => {
                 props.history.push("/account")
             })
        }

    }



    useEffect(()=> {
        getUser(userId)
    }, [])






return (
    <PasswordEditJSX newPassword={newPassword}  handleFieldChange={handleFieldChange} {...props} />
)
}

export default PasswordEdit