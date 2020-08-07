import React, {useEffect, useState} from "react"
import FossilCollectionJSX from "./pages/FossilCollectionJSX"
import fossilCollectionManager from "./manager/fossilCollectionManager"
import "./styles/fossilCard.css"
import Helper from "../../HelperFunctions/Helper"
import Filter from "./filter/filter"

const FossilCollection = (props) => {

    const UserId = Helper.getUserId();

    const [fossil, setFossil] = useState([])
    const [fossilLocation, setFossilLocation] = useState([])
    const [genus, setGenus] = useState([])

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
    const filterLocationChange = (evt) => {
            setFossilLocation(evt.target.value)
    }
    const filterGenusChange = (evt) => {
        setGenus(evt.target.value)
    }

    


    

    useEffect(() => {
        
        getFossil()
    }, [])


    return (
     
        <section className="fossil--grandparent">
            <div className="banner">
                <img src="https://res.cloudinary.com/drcnakesm/image/upload/v1596764889/Fossil_Collection_10_rhzzlc.png" />
            </div>
      
         <div className="fossil--buttons">
        <div className="fossil--add">
            <button className="addButton forumbtn" onClick={() => {props.history.push("/fossilcollection/new")}}>Add</button>
            </div>
            <div className="filter--fossil">
                <Filter filterGenusChange={filterGenusChange} filterLocationChange={filterLocationChange} UserId={UserId} {...props}/>
            </div>
            </div>
        <section className="fossilParent">
           {/* below is the logic for filter data!! */}
        {fossil.map(element => element.userId == UserId  && fossilLocation == "Location" && genus == "" || element.userId == UserId  && fossilLocation == "" && genus == "genus/species" || 
        element.userId == UserId  && fossilLocation == "" && genus == "" || 
        element.userId == UserId && fossilLocation == "Location" && genus == "genus/species"? 
        <FossilCollectionJSX location={fossilLocation} genus={genus} key={element.id} deleteFossil={deleteFossil} fossil={element} {...props}/> : null )}


        {fossil.map(element => element.userId == UserId  && fossilLocation == element.location && genus == "" ||
        element.userId == UserId  && fossilLocation == element.location && genus == "genus/species" || 
        element.userId == UserId  && fossilLocation == "" && genus == element.genus || 
        element.userId == UserId  && fossilLocation == "Location" && genus == element.genus
             ? <FossilCollectionJSX location={fossilLocation} genus={genus} key={element.id} deleteFossil={deleteFossil} fossil={element} {...props}/> : null )}





{fossil.map(element => element.userId == UserId  && fossilLocation == element.location && genus == element.genus
             ? <FossilCollectionJSX location={fossilLocation} genus={genus} key={element.id} deleteFossil={deleteFossil} fossil={element} {...props}/> : null )}
      
      </section>
      </section>
     
    )
}

export default FossilCollection
