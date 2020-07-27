import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css"



const Nav = () => {
    let hasUser = true;
    return (
        <header >
            <div className="logo">
            {/* <Link className="nav-link" to="/">
            <img id="logo" src="https://res.cloudinary.com/fossilhunt/image/upload/v1595625573/IMG_4891_mofnwm.jpg" alt="Fossil Hunt Logo"/>

                        </Link> */}
             </div>
            <nav>
                <ul className="container">
                <li>
                        <Link className="nav-link" to="/">
                            Home
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
        </header>
    );
};

export default Nav;