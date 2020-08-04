import React from "react"
import { Link } from "react-router-dom";


// this components is the details card 

const FossilCollectionDetailsJSX = (props) => {

    return (
        <>
            <button className="backBtn" onClick={props.backBtn}>Back</button>
            <div className="detailsParent">
                <h1>{props.fossil.genus}</h1>
                <section>
                <div className="fossilImage">
            {props.fossil.image == null || props.fossil.image == "" ? 
            null : <img className="fossil--image" src={props.fossil.image} alt="Fossil Hunt Logo" />}
              
             
            </div>
                </section>
                <section>
                    <p className="fossilDetails">Geological Time Period: {props.fossil.timePeriod}</p>
                </section>
                <section>
                    <p className="fossilDetails">Rock Type: {props.fossil.rockType}</p>
                </section>
                <section>
                    <p className="fossilDetails">Fossil Discovery Location: {props.fossil.location}</p>
                </section>


                <Link to={`/fossilEdit/${props.fossil.id}`}>
                    <button className="detailsEdit">Edit</button>
                </Link>


            </div>
        </>
    )
}

export default FossilCollectionDetailsJSX