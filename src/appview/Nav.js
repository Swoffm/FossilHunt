import React from "react";
import { Link } from "react-router-dom";
import "./styles/nav.css"



const Nav = () => {
    let hasUser = true;
    return (
        <header >
            <div className="logoParent">
            <div className="logo">
            <Link className="nav-link" to="/">
            <img id="logo" src="https://res.cloudinary.com/drcnakesm/image/upload/v1596046742/The_Hunt_wrgtmv.png" alt="Fossil Hunt Logo"/>
            {/* <img id="logo" src="https://res.cloudinary.com/drcnakesm/image/upload/g_auto,r_max,bo_5px_solid_white,b_rgb:000/v1595953152/logo_o7omlv.jpg" alt="Fossil Hunt Logo"/> */}

                        </Link>
             </div>
             {/* https://res.cloudinary.com/drcnakesm/image/upload/v1595887981/Untitled_design_8_dxrh78.png */}
             <div className="mainlogo">
             {/* <img id="mainlogo" src="https://res.cloudinary.com/drcnakesm/image/upload/v1595954432/Untitled_design_8_dxrh78.png" alt="Fossil Hunt Logo"/> */}
        
             </div>
             </div>
            <nav>
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
        </header>
    );
};

export default Nav;