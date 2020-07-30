import React, { useEffect, useState } from "react"
import Helper from "../../HelperFunctions/Helper"
import AccountJSX from "./pages/AccountJSX"
import AccountManager from "./manager/AccountManager"
import "./styles/account.css"

const Account = props => {

let userId = Helper.getUserId()
    const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState([])

    const getUser = id => {
        AccountManager.get(id).then((results) => {
            setUser(results)
        })
    }

    const logout =() => {
        sessionStorage.clear()
        Helper.refreshPage();
    }



    useEffect(() => {
        getUser(userId)
    }, [])


    return(
        <section className="accountParent"> 
        <AccountJSX logout={logout} user={user} {...props}/>
        </section>
   )
}

export default Account