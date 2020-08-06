import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css"
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


const FossilNav = (props) => {
    // let haasUser = true;
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
                            <img id="logo" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596132712/9526933E-5F6A-4576-BEE3-F3E8EF719C42_m68k00.jpg" alt="Fossil Hunt Logo" />

                        </Link>
                     
                <Link to="/">
                            Home
                         </Link>

                        <Link className="nav-link" to="/forum">
                            Fossil Forum
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