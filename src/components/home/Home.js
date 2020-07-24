import React from "react"
import { Link } from "react-router-dom";
import "./styles/home.css"

const Home = (props) => {



    return (
        <>
        <section>
            <h1>Welcome to Fossil Hunt</h1>
            <p>Fossil Hunt is a website for fossil collectors. Fossil Hunt supplies collectors with the ability to keep track of their fossils and communicate with other fossil hunters.</p>
        </section>
        <section>
            <h3>Features</h3>
                <section>
                <Link className="login-link" to="/login">
                    Create A Fossil Collection
                    </Link>
                    <br />
                    <p className="collection_desc">Users can catalog the fossils they have collected by uploading pictures and filling in details, such as location, geological timeperiod ..ect </p>
                </section>
                    
                <section> <Link className="login-link" to="/login">
                Talk To Other Fossil Collectors
                    </Link>
                    </section>
              
        </section>

    </>
    )
}

export default Home