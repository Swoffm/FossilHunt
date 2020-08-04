import React from "react"
import { Link } from "react-router-dom";
import "./styles/home.css"

const Home = (props) => {



    return (
        <>
            <section className="home--parent">
                <section className="home--child">
                    <div className="banner">
                        <img src="https://res.cloudinary.com/drcnakesm/image/upload/v1596567405/Ivory_and_Ash_Grey_Photo_DIY_Influencer_Minimalist_Facebook_Cover_zzshtx.png" alt="picture of a young man holding a fossil" />
                    </div>
                    <section className="home--card-parent">
                        <div className="home--card-img">
                            <img src="https://res.cloudinary.com/drcnakesm/image/upload/v1596207675/Beige_and_Gray_Minimalist_Quote_Instagram_Post_rcmugj.jpg" alt="picture that displays info about Fossil Hunt" /> 
                            
                            <img src="https://res.cloudinary.com/drcnakesm/image/upload/v1596207961/Beige_and_Gray_Minimalist_Quote_Instagram_Post_1_nv2yc8.jpg" alt="picture that displays info about Fossil Hunt" />

                        </div>
                    </section>
                    <h1>Welcome to Fossil Hunt</h1>
                    <p>Fossil Hunt is a website for fossil collectors. Fossil Hunt supplies collectors with the ability to keep track of their fossils and communicate with other fossil hunters.</p>
                </section>
                <section className="home--child">
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
            </section>
        </>
    )
}

export default Home