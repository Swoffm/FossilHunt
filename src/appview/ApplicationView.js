import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import Home from "../components/home/Home"

// importing fossilcollection Components
import FossilCollectionForum from "../components/fossilCollection/FossilCollectionForum"
import FossilCollection from "../components/fossilCollection/FossilCollection"
import FossilCollectionDetails from "../components/fossilCollection/FossilCollectionDetails"
import FossilEditForum from "../components/fossilCollection/FossilCollectionEditForum"

//import Forum Components
import Forum from "../components/forum/forum"
import ForumNew from "../components/forum/forumNew"
import ForumQuestionDetails from "../components/forum/forumQuestionDetails"
import NewResponse from "../components/forum/newResponse"


// import login components below
import Login from "../components/login/Login"
import Registration from "../components/login/Registration"




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

                    if (hasUser) {
                        return <FossilCollection {...props} />
                    }
                    else { return <Home {...props} /> }
                }}
            />

            {/* below is the component for fossil forum */}
            <Route
                exact
                path="/fossilcollection/new"
                render={props => {
                    return <FossilCollectionForum {...props} />
                }}
            />

            {/* below is the details for fossil collection */}
            <Route
                exact
                exact path="/fossilDetails/:fossilId(\d+)"
                render={props => {
                    return <FossilCollectionDetails {...props} />
                }}
            />

            {/* below is the fossil edit */}

            <Route
                exact path="/fossilEdit/:fossilId(\d+)"
                render={props => {
                    return <FossilEditForum {...props} />
                }}
            />


            {/* below is to display all the questions on the forum */}

            <Route
                exact
                path="/forum"
                render={props => {
                    return <Forum {...props} />
                }}
            />

            {/* below is to display a new question to the forum */}
            <Route
                exact
                path="/forum/new"
                render={props => {
                    return <ForumNew {...props} />
                }}
            />

            <Route
                exact
                exact path="/forumQuestion/:questionId(\d+)"
                render={props => {
                    return <ForumQuestionDetails {...props} />
                }}
            />

            <Route
                exact
                exact path="/forumResponse/:questionId(\d+)/new"
                render={props => {
                    return <NewResponse {...props} />
                }}
            />


            {/* below here are where the login routes go */}

            <Route
                exact
                path="/login"
                render={props => {
                    return (<Login {...props} />
                    )
                }}
            />

            <Route
                exact
                path="/login/registration"
                render={props => {
                    return (<Registration {...props} />
                    )
                }}
            />


        </React.Fragment>

    )
}

export default ApplicationView