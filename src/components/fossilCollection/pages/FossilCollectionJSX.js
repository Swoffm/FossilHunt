import React from "react"
import { Link } from "react-router-dom";


const FossilCollectionJSX = (props) => {


  return (

    <section className="fossilCard">
      <h3>{props.fossil.genus}</h3>
      <div className="fossilImage">
        {props.fossil.image == null || props.fossil.image == "" ?
          null : <img className="fossil--image" src={props.fossil.image} alt="Fossil Hunt Logo" />}


      </div>
      <div className="locationInfo">Location: {props.fossil.location}</div>

      <section className="btn">
        <Link to={`/fossilDetails/${props.fossil.id}`}>
          <button className="detailsButton">Details</button>
        </Link>




        <Link to={`/fossilEdit/${props.fossil.id}`}>
          <button className="detailsEdit">Edit</button>
        </Link>



        <button className="deleteButton" onClick={() => { props.deleteFossil(props.fossil.id) }}>Delete</button>
      </section>
    </section>
  )
}


export default FossilCollectionJSX