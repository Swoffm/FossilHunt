import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../components/home/Home"

const ApplicationView = () => {
    return (
    <React.Fragment>
        <Route
            exact
            path="/"
            render={props => {
                    return <Home {...props} />
            }}
        />
    </React.Fragment>
    )
}

export default ApplicationView