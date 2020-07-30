import React from "react"


const AccountEditJSX = props => {
    


    return(
        <section className="accountParent">
            <h1>Account Update</h1>
            <label htmlFor="genus">Email: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="email"

                    value={props.user.email}
                />


<label htmlFor="genus">Username: </label>
                <input
                    type="text"
                    required
                    onChange={props.handleFieldChange}
                    id="username"

                    value={props.user.username}
                />


    <div>Profile Image: </div>
    <button onClick={props.updateUser}>Submit</button>
</section>
        
        )
}

export default AccountEditJSX