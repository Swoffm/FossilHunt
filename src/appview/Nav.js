import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css"



const Nav = () => {
    let hasUser = true;
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
                                hasUser ? <li><Link className="nav-link" to="/fossilcollection"> Fossil Collection</Link></li> : null
                            }
                            <li>
                                <Link className="nav-link" to="/login">
                                    Log In
                        </Link>
                            </li>

                        </ul>
                    </nav>
                

            </div>
        </header>
    );
};

export default Nav;