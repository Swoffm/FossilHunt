import React from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../components/home/Home"
import FossilCollection from "../components/fossilCollection/FossilCollection"

const ApplicationView = () => {
    return (
    <React.Fragment>

        {/* below is the landing page */}
        <Route
            exact
            path="/"
            render={props => {
                    return <Home {...props} />
            }}
        />

        {/* below is the component for fossil collection */}

        <Route
            exact
            path="/fossilcollection"
            render={props => {
                    return <FossilCollection {...props} />
            }}
        />

    </React.Fragment>
    )
}

export default ApplicationView