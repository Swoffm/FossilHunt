import React, {useEffect, useState} from "react"
import FossilCollectionJSX from "./pages/FossilCollectionJSX"
import fossilCollectionManager from "./manager/fossilCollectionManager"
import "./styles/fossilCard.css"
import Helper from "../../HelperFunctions/Helper"
import Filter from "./filter/filter"

const FossilCollection = (props) => {
// ====================change userId Below ============
    const UserId = Helper.getUserId();

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

    // only have fossils that contain a certain species or location 
    // add filter change to props and pass it to filterJSX
    const filterChange = () => {

    }

    


    

    useEffect(() => {
        getFossil()
    }, [])


    return (
        <>
         <h1>Fossil Collection</h1>
         <div className="fossil--buttons">
        <div className="fossil--add">
            <button onClick={() => {props.history.push("/fossilcollection/new")}}>Add</button>
            </div>
            <div className="filter--fossil">
                <Filter UserId={UserId} {...props}/>
            </div>
            </div>
        <section className="fossilParent">
           
        {fossil.map(element => element.userId == UserId ? <FossilCollectionJSX key={element.id} deleteFossil={deleteFossil} fossil={element} {...props}/> : null )}
        </section>
        </>
    )
}

export default FossilCollection
