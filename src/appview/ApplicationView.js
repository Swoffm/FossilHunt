import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../components/home/Home"

// importing fossilcollection Components
import FossilCollectionForum from "../components/fossilCollection/FossilCollectionForum"
import FossilCollection from "../components/fossilCollection/FossilCollection"

const ApplicationView = () => {
    let hasUser = true;

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
                
                    if(hasUser) {return <FossilCollection {...props} />
            }
            else { return <Home {...props} />}
            }}
        />

        {/* below is the component for fossil forum */}
        <Route
            exact
            path="/newfossil"
            render={props => {
                    return <FossilCollectionForum {...props} />
            }}
        />

    </React.Fragment>
    )
}

export default ApplicationView