import React, {useEffect, useState} from "react"
import FossilCollectionJSX from "./pages/FossilCollectionJSX"
import fossilCollectionManager from "./manager/fossilCollectionManager"
import "./styles/fossilCard.css"

const FossilCollection = (props) => {

    const UserId = 1;

    const [fossil, setFossil] = useState([])

    //get all the fossils for user
    const getFossil = () => {
    fossilCollectionManager.getAll().then((results) => {
        setFossil(results)
    }) }

    const deleteFossil = (id) => {
        fossilCollectionManager.delete(id).then(() => {
            getFossil()
        })
    }


    

    useEffect(() => {
        getFossil()
    }, [])


    return (
        <>
        <div>
            <button onClick={() => {props.history.push("/fossilcollection/new")}}>Add</button>
            </div>
        <section className="fossilParent">
        {fossil.map(element => element.userId == UserId ? <FossilCollectionJSX key={element.id} deleteFossil={deleteFossil} fossil={element} {...props}/> : null )}
        </section>
        </>
    )
}

export default FossilCollection
