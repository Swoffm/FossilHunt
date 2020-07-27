import React from "react"


const FossilCollectionJSX = (props) => {
console.log(props)

    return (
        <section className="fossilCard">

            <h3>{props.fossil.genus}</h3>
            <div className="fossilImage">
                {props.fossil.image}
            </div>
    <div>Location: {props.fossil.location}</div>
        <button className="deleteButton" onClick={()=> {props.deleteFossil(props.fossil.id)}}>Delete</button>
        </section>
    )
}


export default FossilCollectionJSX