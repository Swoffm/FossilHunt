import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css"



const Nav = (props) => {
    // let haasUser = true;
    let user = sessionStorage.getItem("userInfo")
    return (
        <header>
            <div className="logoParent">
                <div className="logo">
                    <Link className="nav-link" to="/">
                        <img id="logo" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596054493/The_Hunt_t90gdj.jpg" alt="Fossil Hunt Logo" />

                    </Link>
                </div> <nav>
                        <ul className="container">
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
                                !user ? <li><Link className="nav-link" to="/login"> Log In </Link></li> :  <li><Link className="nav-link" to="/account"> Account Info </Link></li>
                            }
                            

                        </ul>
                    </nav>
                

            </div>
        </header>
    );
};

export default Nav;