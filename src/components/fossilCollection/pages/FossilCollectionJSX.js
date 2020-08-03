import React from "react"
import { Link } from "react-router-dom";


const FossilCollectionJSX = (props) => {

console.log(props)
    return (
      
        <section className="fossilCard">
            <h3>{props.fossil.genus}</h3>
            <div className="fossilImage">
                {props.fossil.image}
            </div>
    <div>Location: {props.fossil.location}</div>
    <Link to={`/fossilDetails/${props.fossil.id}`}>
  <button className="detailsButton">Details</button>
</Link>
<Link to={`/fossilEdit/${props.fossil.id}`}>
  <button className="detailsEdit">Edit</button>
</Link>
        <button className="deleteButton" onClick={()=> {props.deleteFossil(props.fossil.id)}}>Delete</button>
        </section>
    )
}


export default FossilCollectionJSX