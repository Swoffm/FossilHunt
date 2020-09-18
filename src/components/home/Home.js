import React, { useEffect } from "react"
import { Link } from "react-router-dom";
import "./styles/home.css"
import Helper from "../../HelperFunctions/Helper"

const Home = (props) => {

    let user = sessionStorage.getItem("userInfo")


    return (
        <>
            <section className="home--parent">
                <section className="home--child">
                    <div className="banner">
                        <img src="https://res.cloudinary.com/drcnakesm/image/upload/v1596567405/Ivory_and_Ash_Grey_Photo_DIY_Influencer_Minimalist_Facebook_Cover_zzshtx.png" alt="picture of a young man holding a fossil" />
                    </div>
                    <section className="home--card-parent">

                        <div className="home--card-child">

                            <div id="homeImageTwo">
                                {
                                    !user ? <Link to="/login"> <img className="homeImage" src="https://res.cloudinary.com/drcnakesm/image/upload/v1600117448/CREATE_FOSSIL_HUNT_ACCOUNT_bmfrou.png" /></Link> : <Link to="/account"> <img className="homeImage" src="https://res.cloudinary.com/drcnakesm/image/upload/v1600117448/CREATE_FOSSIL_HUNT_ACCOUNT_bmfrou.png" /></Link>
                                }


                            </div>
                            <div id="homeImageFour">
                                {
                                    !user ? <Link to="/login"><img className="homeImage" src="https://res.cloudinary.com/drcnakesm/image/upload/v1600117453/Connect_with_other_fossil_hunters_using_The_Fossil_Hunt_forum_adwaiz.png" /></Link> : <Link to="/fossilcollection"><img className="homeImage" src="https://res.cloudinary.com/drcnakesm/image/upload/v1600117453/Connect_with_other_fossil_hunters_using_The_Fossil_Hunt_forum_adwaiz.png" /></Link>
                                }


                            </div>
                            <div id="homeImageOne">


                                <Link to="/forum"> <img className="homeImage" src="https://res.cloudinary.com/drcnakesm/image/upload/v1600117457/UPLOAD_FOSSIL_FINS_TO_FOSSIL_COLLECTION_ACCOUNT_1_xqdnmb.png" /></Link>

                            </div>

                        </div>


                    </section>
                </section>

            </section>
        </>
    )
}

export default Home