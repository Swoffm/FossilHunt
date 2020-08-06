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
            <Link className="nav-link" to="/">
                            <img id="logo" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596054493/The_Hunt_t90gdj.jpg" alt="Fossil Hunt Logo" />

                        </Link>
                <Link className="active" to="/">
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

                {/* <div className="dropdown">
                    <button className="dropbtn">Dropdown
                     <i className="fa fa-caret-down"></i>
                    </button>
                    <div className="dropdown-content">
                        <Link className="active" to="/">
                            Home
                         </Link>

                        <Link className="nav-link" to="/forum">
                            Fossil Forum
                            </Link>

                        {
                            user ? <li><Link className="nav-link" to="/fossilcollection"> Fossil Collection</Link></li> : null
                        }

                        {
                            !user ? <li><Link className="nav-link" to="/login"> Log In </Link></li> : <li><Link classNameName="nav-link" to="/account"> Account Info </Link></li>
                        }



                    </div>
                </div> */}

                <a className="icon" onClick={dropDown}>&#9776;</a>
            </div>



            {/* <header>
                <div className="logoParent">
                    <div className="logo">
                        <Link className="nav-link" to="/">
                            <img id="logo" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596054493/The_Hunt_t90gdj.jpg" alt="Fossil Hunt Logo" />

                        </Link>
                    </div>
                </div>
                <nav className="topnav" id="myTopnav">
                    <ul className="container--wrapper">
                        <li className="firstItem">



                            <ul className="dropDown">


                                <li>
                                    <Link className="nav-link" to="/">
                                        Home
                         </Link>
                                </li>
                                <li>
                                    <Link className="nav-link" to="/forum">
                                        Fossil Forum
                            </Link>
                                </li>
                                {
                                    user ? <li><Link className="nav-link" to="/fossilcollection"> Fossil Collection</Link></li> : null
                                }

                                {
                                    !user ? <li><Link className="nav-link" to="/login"> Log In </Link></li> : <li><Link classNameName="nav-link" to="/account"> Account Info </Link></li>
                                }


                            </ul>
                        </li>
                    </ul>
                </nav>



            </header> */}
        </div>
    );
};

export default FossilNav;