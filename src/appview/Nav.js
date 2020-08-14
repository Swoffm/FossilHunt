import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css"

const FossilNav = (props) => {

    let user = sessionStorage.getItem("userInfo")

    // below code is used for dropdown menu in mobile
    function dropDown() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        }
        else {
            x.className = "topnav";
        }
    }


    return (
        <div>

            <div className="topnav" id="myTopnav">

                <Link to="/">
                    <img id="logo" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596723869/Untitled_design_cjhxuz.jpg" />
                    <img id="logoDeskTop" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596766511/The_Fossil_Hunt_1_y2ngyz.jpg" />
                </Link>

                <Link to="/">
                    Home
                         </Link>

                <Link className="nav-link" to="/forum">
                    Fossil Forum
                            </Link>

                            <Link className="nav-link" to="/map">
                    Fossil Map
                            </Link>

                {
                    user ? <Link className="nav-link" to="/fossilcollection"> Fossil Collection</Link> : null
                }

                {
                    !user ? <Link className="nav-link" to="/login"> Log In </Link> : <Link className="nav-link" to="/account"> Account Info </Link>
                }


                <a className="icon" onClick={dropDown}>&#9776;</a>
            </div>

        </div>
    );
};

export default FossilNav;