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
                    <p className="fossilDetails">{props.fossil.image}</p>
                </section>
                <section>
                    <p className="fossilDetails">Geological Time Period: {props.fossil.timeperiod}</p>
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