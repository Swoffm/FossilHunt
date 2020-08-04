import React, { useEffect, useState } from "react"
import AccountEditJSX from "./pages/accountEditJSX"
import LoginManager from "../login/manager/LoginManager"
import Helper from "../../HelperFunctions/Helper"
import "./styles/account.css"

const AccountEdit = props => {
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({ email: "", username: "", userImage: "" })
    let userId = Helper.getUserId()


    const handleFieldChange = evt => {
        const stateToChange = { ...user };
        stateToChange[evt.target.id] = evt.target.value;
        setUser(stateToChange);
    };

    const getUser = id => {
        LoginManager.get(id).then((results) => {
            setUser(results)
        })
    }

    const updateUser = evt => {
        evt.preventDefault();
        if (user.email === "" || user.username === "") {
            window.alert("Please fill out the form")
        }
        else {
            console.log(user)
            LoginManager.update(user).then((results) => {
                setIsLoading(true);
                setUser(results)
                 props.history.push("/account")
            })
        }
    }


    useEffect(() => {
        getUser(userId)
    }, [])

    return (
        <section className="accountParent"> 
    
    <AccountEditJSX handleFieldChange={handleFieldChange} updateUser={updateUser} user={user} {...props} />
    </section>
    )
}

export default AccountEdit